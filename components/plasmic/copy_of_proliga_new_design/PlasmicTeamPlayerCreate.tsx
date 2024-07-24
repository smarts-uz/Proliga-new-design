// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: oUEeU2TYbEhh

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

import AvatarPlayer from "../../AvatarPlayer"; // plasmic-import: nLFZBWuqWsMB/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicTeamPlayerCreate.module.css"; // plasmic-import: oUEeU2TYbEhh/css

createPlasmicElementProxy;

export type PlasmicTeamPlayerCreate__VariantMembers = {};
export type PlasmicTeamPlayerCreate__VariantsArgs = {};
type VariantPropType = keyof PlasmicTeamPlayerCreate__VariantsArgs;
export const PlasmicTeamPlayerCreate__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTeamPlayerCreate__ArgsType = {};
type ArgPropType = keyof PlasmicTeamPlayerCreate__ArgsType;
export const PlasmicTeamPlayerCreate__ArgProps = new Array<ArgPropType>();

export type PlasmicTeamPlayerCreate__OverridesType = {
  playersTable?: Flex__<"div">;
  goa?: Flex__<"div">;
  avatarPlayer?: Flex__<typeof AvatarPlayer>;
  def?: Flex__<"div">;
  avatarPlayer2?: Flex__<typeof AvatarPlayer>;
  avatarPlayer3?: Flex__<typeof AvatarPlayer>;
  avatarPlayer4?: Flex__<typeof AvatarPlayer>;
  avatarPlayer5?: Flex__<typeof AvatarPlayer>;
  mid?: Flex__<"div">;
  avatarPlayer6?: Flex__<typeof AvatarPlayer>;
  avatarPlayer7?: Flex__<typeof AvatarPlayer>;
  avatarPlayer8?: Flex__<typeof AvatarPlayer>;
  avatarPlayer9?: Flex__<typeof AvatarPlayer>;
  str?: Flex__<"div">;
  avatarPlayer10?: Flex__<typeof AvatarPlayer>;
  avatarPlayer11?: Flex__<typeof AvatarPlayer>;
  avatarPlayer12?: Flex__<typeof AvatarPlayer>;
};

export interface DefaultTeamPlayerCreateProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTeamPlayerCreate__RenderFunc(props: {
  variants: PlasmicTeamPlayerCreate__VariantsArgs;
  args: PlasmicTeamPlayerCreate__ArgsType;
  overrides: PlasmicTeamPlayerCreate__OverridesType;
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

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"playersTable"}
      data-plasmic-override={overrides.playersTable}
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
        sty.playersTable
      )}
    >
      <div
        data-plasmic-name={"goa"}
        data-plasmic-override={overrides.goa}
        className={classNames(projectcss.all, sty.goa)}
      >
        <AvatarPlayer
          data-plasmic-name={"avatarPlayer"}
          data-plasmic-override={overrides.avatarPlayer}
          className={classNames("__wab_instance", sty.avatarPlayer)}
        />
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"def"}
        data-plasmic-override={overrides.def}
        hasGap={true}
        className={classNames(projectcss.all, sty.def)}
      >
        <AvatarPlayer
          data-plasmic-name={"avatarPlayer2"}
          data-plasmic-override={overrides.avatarPlayer2}
          className={classNames("__wab_instance", sty.avatarPlayer2)}
        />

        <AvatarPlayer
          data-plasmic-name={"avatarPlayer3"}
          data-plasmic-override={overrides.avatarPlayer3}
          className={classNames("__wab_instance", sty.avatarPlayer3)}
        />

        <AvatarPlayer
          data-plasmic-name={"avatarPlayer4"}
          data-plasmic-override={overrides.avatarPlayer4}
          className={classNames("__wab_instance", sty.avatarPlayer4)}
        />

        <AvatarPlayer
          data-plasmic-name={"avatarPlayer5"}
          data-plasmic-override={overrides.avatarPlayer5}
          className={classNames("__wab_instance", sty.avatarPlayer5)}
        />
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"mid"}
        data-plasmic-override={overrides.mid}
        hasGap={true}
        className={classNames(projectcss.all, sty.mid)}
      >
        <AvatarPlayer
          data-plasmic-name={"avatarPlayer6"}
          data-plasmic-override={overrides.avatarPlayer6}
          className={classNames("__wab_instance", sty.avatarPlayer6)}
        />

        <AvatarPlayer
          data-plasmic-name={"avatarPlayer7"}
          data-plasmic-override={overrides.avatarPlayer7}
          className={classNames("__wab_instance", sty.avatarPlayer7)}
        />

        <AvatarPlayer
          data-plasmic-name={"avatarPlayer8"}
          data-plasmic-override={overrides.avatarPlayer8}
          className={classNames("__wab_instance", sty.avatarPlayer8)}
        />

        <AvatarPlayer
          data-plasmic-name={"avatarPlayer9"}
          data-plasmic-override={overrides.avatarPlayer9}
          className={classNames("__wab_instance", sty.avatarPlayer9)}
        />
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"str"}
        data-plasmic-override={overrides.str}
        hasGap={true}
        className={classNames(projectcss.all, sty.str)}
      >
        <AvatarPlayer
          data-plasmic-name={"avatarPlayer10"}
          data-plasmic-override={overrides.avatarPlayer10}
          className={classNames("__wab_instance", sty.avatarPlayer10)}
        />

        <AvatarPlayer
          data-plasmic-name={"avatarPlayer11"}
          data-plasmic-override={overrides.avatarPlayer11}
          className={classNames("__wab_instance", sty.avatarPlayer11)}
        />

        <AvatarPlayer
          data-plasmic-name={"avatarPlayer12"}
          data-plasmic-override={overrides.avatarPlayer12}
          className={classNames("__wab_instance", sty.avatarPlayer12)}
        />
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  playersTable: [
    "playersTable",
    "goa",
    "avatarPlayer",
    "def",
    "avatarPlayer2",
    "avatarPlayer3",
    "avatarPlayer4",
    "avatarPlayer5",
    "mid",
    "avatarPlayer6",
    "avatarPlayer7",
    "avatarPlayer8",
    "avatarPlayer9",
    "str",
    "avatarPlayer10",
    "avatarPlayer11",
    "avatarPlayer12"
  ],
  goa: ["goa", "avatarPlayer"],
  avatarPlayer: ["avatarPlayer"],
  def: [
    "def",
    "avatarPlayer2",
    "avatarPlayer3",
    "avatarPlayer4",
    "avatarPlayer5"
  ],
  avatarPlayer2: ["avatarPlayer2"],
  avatarPlayer3: ["avatarPlayer3"],
  avatarPlayer4: ["avatarPlayer4"],
  avatarPlayer5: ["avatarPlayer5"],
  mid: [
    "mid",
    "avatarPlayer6",
    "avatarPlayer7",
    "avatarPlayer8",
    "avatarPlayer9"
  ],
  avatarPlayer6: ["avatarPlayer6"],
  avatarPlayer7: ["avatarPlayer7"],
  avatarPlayer8: ["avatarPlayer8"],
  avatarPlayer9: ["avatarPlayer9"],
  str: ["str", "avatarPlayer10", "avatarPlayer11", "avatarPlayer12"],
  avatarPlayer10: ["avatarPlayer10"],
  avatarPlayer11: ["avatarPlayer11"],
  avatarPlayer12: ["avatarPlayer12"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  playersTable: "div";
  goa: "div";
  avatarPlayer: typeof AvatarPlayer;
  def: "div";
  avatarPlayer2: typeof AvatarPlayer;
  avatarPlayer3: typeof AvatarPlayer;
  avatarPlayer4: typeof AvatarPlayer;
  avatarPlayer5: typeof AvatarPlayer;
  mid: "div";
  avatarPlayer6: typeof AvatarPlayer;
  avatarPlayer7: typeof AvatarPlayer;
  avatarPlayer8: typeof AvatarPlayer;
  avatarPlayer9: typeof AvatarPlayer;
  str: "div";
  avatarPlayer10: typeof AvatarPlayer;
  avatarPlayer11: typeof AvatarPlayer;
  avatarPlayer12: typeof AvatarPlayer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeamPlayerCreate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeamPlayerCreate__VariantsArgs;
    args?: PlasmicTeamPlayerCreate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeamPlayerCreate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTeamPlayerCreate__ArgsType,
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
          internalArgPropNames: PlasmicTeamPlayerCreate__ArgProps,
          internalVariantPropNames: PlasmicTeamPlayerCreate__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeamPlayerCreate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "playersTable") {
    func.displayName = "PlasmicTeamPlayerCreate";
  } else {
    func.displayName = `PlasmicTeamPlayerCreate.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamPlayerCreate = Object.assign(
  // Top-level PlasmicTeamPlayerCreate renders the root element
  makeNodeComponent("playersTable"),
  {
    // Helper components rendering sub-elements
    goa: makeNodeComponent("goa"),
    avatarPlayer: makeNodeComponent("avatarPlayer"),
    def: makeNodeComponent("def"),
    avatarPlayer2: makeNodeComponent("avatarPlayer2"),
    avatarPlayer3: makeNodeComponent("avatarPlayer3"),
    avatarPlayer4: makeNodeComponent("avatarPlayer4"),
    avatarPlayer5: makeNodeComponent("avatarPlayer5"),
    mid: makeNodeComponent("mid"),
    avatarPlayer6: makeNodeComponent("avatarPlayer6"),
    avatarPlayer7: makeNodeComponent("avatarPlayer7"),
    avatarPlayer8: makeNodeComponent("avatarPlayer8"),
    avatarPlayer9: makeNodeComponent("avatarPlayer9"),
    str: makeNodeComponent("str"),
    avatarPlayer10: makeNodeComponent("avatarPlayer10"),
    avatarPlayer11: makeNodeComponent("avatarPlayer11"),
    avatarPlayer12: makeNodeComponent("avatarPlayer12"),

    // Metadata about props expected for PlasmicTeamPlayerCreate
    internalVariantProps: PlasmicTeamPlayerCreate__VariantProps,
    internalArgProps: PlasmicTeamPlayerCreate__ArgProps
  }
);

export default PlasmicTeamPlayerCreate;
/* prettier-ignore-end */
