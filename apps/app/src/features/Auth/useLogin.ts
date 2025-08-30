import { useCallback } from "react";

import { type Address } from "viem";
import { useStateList } from "react-use";
import useAuthLoginOrCreateUser from "@/features/Auth/useLoginOrCreateUser";
import { AbortFn } from "@/hooks/useAbortController";
import { useSignMessage } from "@/features/Wallet/SignProvider";

type State =
  | "Initial"
  | "PromptSignature"
  | "LoginCreate"
  | "Success"
  | "Error";

const states: Record<State, State> = {
  Initial: "Initial",
  PromptSignature: "PromptSignature",
  LoginCreate: "LoginCreate",
  Success: "Success",
  Error: "Error",
};

type States = typeof states;

type AuthLoginState = {
  states: States;
  state: State;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

type LoginFn = (
  address: Address,
  options?: {
    onSuccess?: (state?: Partial<AuthLoginState>) => void;
    onComplete?: (state?: Partial<AuthLoginState>) => void;
    onError?: (state?: Partial<AuthLoginState>) => void;
  },
) => Promise<void>;

type UseAuthLoginResult = [LoginFn, AbortFn, AuthLoginState];

const _stateSet = Object.keys(states) as State[];

export default function useAuthLogin(): UseAuthLoginResult {
  const { signMessage, abort: abortSignMessage } = useSignMessage();
  const [loginOrCreateUser, abortLoginOrCreateUser] =
    useAuthLoginOrCreateUser();

  const { state, currentIndex, setState, next } = useStateList(_stateSet);

  const _state = {
    states,
    state,
    isLoading: currentIndex > 0 && !states.Error && !states.Success,
    isError: state === states.Error,
    isSuccess: state === states.Success,
  };

  const login = useCallback<LoginFn>(
    async (address, options) => {
      // set to initial state
      setState(states.PromptSignature);

      // the app will hang until a signature is provided
      try {
        const { signature, message, nonce } = await signMessage({
          modalProps: {
            prompt: "Please sign the message in your wallet in order to login.",
          },
        });
        next();
        await loginOrCreateUser(address, {
          eoa: {
            chainPubKey: {
              chainId: 1,
              pubKey: address,
            },
            nonce,
            message,
            signature,
          },
        });
        next();
        options?.onSuccess?.(_state);
      } catch (error: any) {
        setState(states.Error);
        options?.onError?.(_state);
      } finally {
        options?.onComplete?.(_state);
      }
    },
    [signMessage, loginOrCreateUser],
  );

  const abort = () => {
    abortSignMessage();
    abortLoginOrCreateUser();
  };

  return [login, abort, _state];
}
