import { ensurePlasmicAppUser, PlasmicUser } from "@plasmicapp/auth-api";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";

const PLASMIC_AUTH_SECRET = process.env.PLASMIC_AUTH_SECRET;

export async function getPlasmicAuthData(supabaseServerClient: SupabaseClient): Promise<{
  plasmicUser?: PlasmicUser | null;
  plasmicUserToken?: string | null;
}> {
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  if (user?.email && user?.email_confirmed_at) {
    const result = await ensurePlasmicAppUser({
      email: user?.email,
      appSecret: PLASMIC_AUTH_SECRET!,
    });
    console.log(result);
    if (result.error) {
      console.log(result.error);
    }

    const { user: plasmicUser, token: plasmicUserToken } = result;

    return {
      plasmicUser,
      plasmicUserToken,
    };
  }

  return {
    plasmicUser: null,
    plasmicUserToken: null,
  };
}
