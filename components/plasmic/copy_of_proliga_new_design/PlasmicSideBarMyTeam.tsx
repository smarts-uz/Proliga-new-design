// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: kCfKs1vqA6_E

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantskuWqqBs0ERIp } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KuWQQBs0eRIp/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicSideBarMyTeam.module.css"; // plasmic-import: kCfKs1vqA6_E/css

createPlasmicElementProxy;

export type PlasmicSideBarMyTeam__VariantMembers = {};
export type PlasmicSideBarMyTeam__VariantsArgs = {};
type VariantPropType = keyof PlasmicSideBarMyTeam__VariantsArgs;
export const PlasmicSideBarMyTeam__VariantProps = new Array<VariantPropType>();

export type PlasmicSideBarMyTeam__ArgsType = {};
type ArgPropType = keyof PlasmicSideBarMyTeam__ArgsType;
export const PlasmicSideBarMyTeam__ArgProps = new Array<ArgPropType>();

export type PlasmicSideBarMyTeam__OverridesType = {
  root?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultSideBarMyTeamProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSideBarMyTeam__RenderFunc(props: {
  variants: PlasmicSideBarMyTeam__VariantsArgs;
  args: PlasmicSideBarMyTeam__ArgsType;
  overrides: PlasmicSideBarMyTeam__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskuWqqBs0ERIp()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__zto0D)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__v3LCe
          )}
        >
          {"PROLIGA Fantasy"}
        </div>
      </Stack__>
      <div
        className={classNames(projectcss.all, sty.freeBox__ss3YL)}
        onClick={async event => {
          const $steps = {};

          $steps["goToRankings"] = true
            ? (() => {
                const actionArgs = { destination: `/rankings` };
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    __nextRouter?.push(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToRankings"] != null &&
            typeof $steps["goToRankings"] === "object" &&
            typeof $steps["goToRankings"].then === "function"
          ) {
            $steps["goToRankings"] = await $steps["goToRankings"];
          }
        }}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__kFlKd)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          height={"18.13"}
          loading={"lazy"}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcmZaJM1ZSe3jyr9tyEt3PfZ-_qh2LbCkdl9st3lV-16vIQwtrysBVlDaMisw62c_4Bk&usqp=CAU"
          }
          width={"23.13"}
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__qDwk)}>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__sH7JM)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          height={"18.13"}
          loading={"lazy"}
          src={"https://cdn-icons-png.flaticon.com/256/10167/10167851.png"}
          width={"23.13"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gpHx4
          )}
          onClick={async event => {
            const $steps = {};

            $steps["goToTeams"] = true
              ? (() => {
                  const actionArgs = { destination: `/user/team/[id]` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToTeams"] != null &&
              typeof $steps["goToTeams"] === "object" &&
              typeof $steps["goToTeams"].then === "function"
            ) {
              $steps["goToTeams"] = await $steps["goToTeams"];
            }
          }}
        >
          {"My Team"}
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__ra4Wj)}>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__gZ0Kh)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          height={"18.13"}
          loading={"lazy"}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcmZaJM1ZSe3jyr9tyEt3PfZ-_qh2LbCkdl9st3lV-16vIQwtrysBVlDaMisw62c_4Bk&usqp=CAU"
          }
          width={"23.13"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__vLBpz
          )}
          onClick={async event => {
            const $steps = {};

            $steps["goToTeams2Market"] = true
              ? (() => {
                  const actionArgs = { destination: `/new-page` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToTeams2Market"] != null &&
              typeof $steps["goToTeams2Market"] === "object" &&
              typeof $steps["goToTeams2Market"].then === "function"
            ) {
              $steps["goToTeams2Market"] = await $steps["goToTeams2Market"];
            }
          }}
        >
          {"Market"}
        </div>
      </div>
      <PlasmicLink__
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={`/activity`}
        platform={"nextjs"}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__vcGov)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          height={"18.13"}
          loading={"lazy"}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcmZaJM1ZSe3jyr9tyEt3PfZ-_qh2LbCkdl9st3lV-16vIQwtrysBVlDaMisw62c_4Bk&usqp=CAU"
          }
          width={"23.13"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___8IJsT
          )}
        >
          {"Activity"}
        </div>
      </PlasmicLink__>
      <div className={classNames(projectcss.all, sty.freeBox__k5Qk)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__b3Nt4
          )}
        >
          {"END OF THE FIXTURE (36)"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wwasR
          )}
        >
          {"Friyday 16:00 Goo"}
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSideBarMyTeam__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSideBarMyTeam__VariantsArgs;
    args?: PlasmicSideBarMyTeam__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSideBarMyTeam__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSideBarMyTeam__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSideBarMyTeam__ArgProps,
          internalVariantPropNames: PlasmicSideBarMyTeam__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSideBarMyTeam__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideBarMyTeam";
  } else {
    func.displayName = `PlasmicSideBarMyTeam.${nodeName}`;
  }
  return func;
}

export const PlasmicSideBarMyTeam = Object.assign(
  // Top-level PlasmicSideBarMyTeam renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSideBarMyTeam
    internalVariantProps: PlasmicSideBarMyTeam__VariantProps,
    internalArgProps: PlasmicSideBarMyTeam__ArgProps
  }
);

export default PlasmicSideBarMyTeam;
/* prettier-ignore-end */
