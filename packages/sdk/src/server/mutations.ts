"use server";

import { getClient } from "./client";
import {
  AddWalletMutation,
  AddWalletMutationVariables,
} from "../graphql/data/__generated__/graphql";
import { ADD_WALLET } from "../graphql/data/mutations/AddWallet";
import { TMutationOptions } from "../types";

export async function addWallet(
  options?: TMutationOptions<AddWalletMutation, AddWalletMutationVariables>,
) {
  return getClient().mutate({
    mutation: ADD_WALLET,
    ...options,
  });
}
