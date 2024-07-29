import useSWR from "swr";
import { PLASMIC_AUTH_DATA_KEY } from "./cache-keys";

export function usePlasmicAuthData() {
  const { isLoading, data } = useSWR(PLASMIC_AUTH_DATA_KEY, async () => {
    const data = await fetch("/api/plasmic-auth").then((r) => r.json());
    return data;
  });
  return {
    isUserLoading: isLoading,
    plasmicUser: data?.plasmicUser,
    plasmicUserToken: data?.plasmicUserToken,
  };
}
