import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProviderContent";

export function useAuth() {
  return useContext(AuthContext);
}
