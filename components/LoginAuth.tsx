import * as React from "react";
import { PlasmicLoginAuth, DefaultLoginAuthProps } from "./plasmic/copy_of_proliga_new_design/PlasmicLoginAuth";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

import { mutate } from "swr";
import { PLASMIC_AUTH_DATA_KEY } from "@/utils/cache-keys";
import { useState } from "react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";

export interface LoginAuthProps extends DefaultLoginAuthProps {}

function LoginAuth_(props: LoginAuthProps, ref: HTMLElementRefOf<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [supabaseClient] = React.useState(() => createPagesBrowserClient());
  const router = useRouter();

  return (
    <PlasmicLoginAuth
      root={{ ref }}
      {...props}
      emailInput={{
        value: email,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        },
      }}
      passwordInput={{
        value: password,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value);
        },
      }}
      submitButton={{
        onClick: async () => {
          const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password,
          });

          if (error) {
            console.error(error);
            alert(error);
          } else {
            // alert(password)
            router.push("/");
            await mutate(PLASMIC_AUTH_DATA_KEY);
          }
        },
      }}
    />
  );
}

const LoginAuth = React.forwardRef(LoginAuth_);
export default LoginAuth;
