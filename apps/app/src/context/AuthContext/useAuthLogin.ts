import { useCallback } from "react";

import { Chain } from "@splitfi/sdk";
import { type Address } from "viem";
import { useStateList } from "react-use";
import useSignRemoteMessage from "@/hooks/auth/useSignRemoteMessage";
import useLoginOrCreateUser from "@/hooks/auth/useLoginOrCreateUser";
import { AbortFn } from "@/hooks/useAbortController";

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
  const [signRemoteMessage, abortSignRemoteMessage] = useSignRemoteMessage();
  const [loginOrCreateUser, abortLoginOrCreateUser] = useLoginOrCreateUser();

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
        const { signature, message, nonce } = await signRemoteMessage();
        next();
        await loginOrCreateUser(address, {
          eoa: {
            chainPubKey: {
              chain: Chain.Ethereum,
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
    [signRemoteMessage, loginOrCreateUser],
  );

  const abort = () => {
    abortSignRemoteMessage();
    abortLoginOrCreateUser();
  };

  return [login, abort, _state];
}
