// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import { IERC1155 } from "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

import { CustomRevert } from "../libraries/CustomRevert.sol";
import { Claim } from "./Claim.sol";

enum TokenType { NONE, NATIVE, ERC20, ERC721, ERC1155 }

type Token is address;

using TokenLibrary for Token global;

struct TransferInstruction {
  TokenType tokenType;
  Token token;
  address recipient;
  uint256 tokenId;
  uint256 amount;
  bytes data;
}

library TokenLibrary {
  error Token_InvalidTokenType();
  error Token_NativeTransferFailed();
  error Token_ERC20TransferFailed();

  Token public constant ADDRESS_ZERO = Token.wrap(address(0));

  function executeTransfer(
    Token token,
    TokenType tokenType,
    address to,
    uint256 id,
    uint256 amount,
    bytes memory data
  ) internal {
    if (tokenType == TokenType.ERC20 || tokenType == TokenType.NATIVE || token.isAddressZero()) {
      _transferERC20OrNative(token, to, amount);
    } else if (tokenType == TokenType.ERC721) {
      IERC721(Token.unwrap(token)).safeTransferFrom(address(this), to, id, data);
    } else if (tokenType == TokenType.ERC1155) {
      IERC1155(Token.unwrap(token)).safeTransferFrom(address(this), to, id, amount, data);
    } else if (tokenType != TokenType.NONE) {
      revert Token_InvalidTokenType();
    }
  }

  function _transferERC20OrNative(Token token, address to, uint256 amount) private {
    bool success;
    if (token.isAddressZero()) {
      assembly ("memory-safe") {
        success := call(gas(), to, amount, 0, 0, 0, 0)
      }
      if (!success) {
        CustomRevert.bubbleUpAndRevertWith(to, bytes4(0), Token_NativeTransferFailed.selector);
      }
    } else {
      assembly ("memory-safe") {
        let fmp := mload(0x40)
        mstore(fmp, 0xa9059cbb00000000000000000000000000000000000000000000000000000000)
        mstore(add(fmp, 4), and(to, 0xffffffffffffffffffffffffffffffffffffffff))
        mstore(add(fmp, 36), amount)

        success := and(
          or(and(eq(mload(0), 1), gt(returndatasize(), 31)), iszero(returndatasize())),
          call(gas(), token, 0, fmp, 68, 0, 32)
        )

        mstore(fmp, 0)
        mstore(add(fmp, 0x20), 0)
        mstore(add(fmp, 0x40), 0)
      }
      if (!success) {
        CustomRevert.bubbleUpAndRevertWith(
          Token.unwrap(token),
          IERC20.transfer.selector,
          Token_ERC20TransferFailed.selector
        );
      }
    }
  }

  function balanceOf(
    Token self,
    TokenType tokenType,
    address account
  ) internal view returns (uint256) {
    return balanceOf(self, tokenType, account, 0);
  }

  function balanceOf(
    Token self,
    TokenType tokenType,
    address account,
    uint256 id
  ) internal view returns (uint256) {
    if (tokenType == TokenType.NATIVE || self.isAddressZero()) {
      return account.balance;
    } else if (tokenType == TokenType.ERC20) {
      return IERC20(Token.unwrap(self)).balanceOf(account);
    } else if (tokenType == TokenType.ERC721) {
      return IERC721(Token.unwrap(self)).balanceOf(account);
    } else if (tokenType == TokenType.ERC1155) {
      return IERC1155(Token.unwrap(self)).balanceOf(account, id);
    }
    revert Token_InvalidTokenType();
  }

  function isAddressZero(Token self) internal pure returns (bool) {
    return Token.unwrap(self) == Token.unwrap(ADDRESS_ZERO);
  }

  function equals(Token self, Token token) internal pure returns (bool) {
    return Token.unwrap(self) == Token.unwrap(token);
  }
}
