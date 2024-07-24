// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: AD9rteI8dV2J

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

import IdealTeamMember from "../../IdealTeamMember"; // plasmic-import: lQi1dW4jp46h/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicSoccerPlaceMens.module.css"; // plasmic-import: AD9rteI8dV2J/css

createPlasmicElementProxy;

export type PlasmicSoccerPlaceMens__VariantMembers = {};
export type PlasmicSoccerPlaceMens__VariantsArgs = {};
type VariantPropType = keyof PlasmicSoccerPlaceMens__VariantsArgs;
export const PlasmicSoccerPlaceMens__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSoccerPlaceMens__ArgsType = {
  goaName?: string;
  goaImage?: string;
};
type ArgPropType = keyof PlasmicSoccerPlaceMens__ArgsType;
export const PlasmicSoccerPlaceMens__ArgProps = new Array<ArgPropType>(
  "goaName",
  "goaImage"
);

export type PlasmicSoccerPlaceMens__OverridesType = {
  root?: Flex__<"div">;
  def?: Flex__<"div">;
  str?: Flex__<"div">;
  mid?: Flex__<"div">;
  goa?: Flex__<"div">;
};

export interface DefaultSoccerPlaceMensProps {
  goaName?: string;
  goaImage?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSoccerPlaceMens__RenderFunc(props: {
  variants: PlasmicSoccerPlaceMens__VariantsArgs;
  args: PlasmicSoccerPlaceMens__ArgsType;
  overrides: PlasmicSoccerPlaceMens__OverridesType;
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
      <div
        data-plasmic-name={"def"}
        data-plasmic-override={overrides.def}
        className={classNames(projectcss.all, sty.def)}
      >
        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember__cb6GQ)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"str"}
        data-plasmic-override={overrides.str}
        hasGap={true}
        className={classNames(projectcss.all, sty.str)}
      >
        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember__ptc4S)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />

        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember__hu5Kk)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />

        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember__rzF4H)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </Stack__>
      <div
        data-plasmic-name={"mid"}
        data-plasmic-override={overrides.mid}
        className={classNames(projectcss.all, sty.mid)}
      >
        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember__jxBNp)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />

        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember__hb0R)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />

        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember__mDkvY)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />

        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember__w9B0S)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </div>
      <div
        data-plasmic-name={"goa"}
        data-plasmic-override={overrides.goa}
        className={classNames(projectcss.all, sty.goa)}
      >
        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember___831)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />

        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember__dZt2M)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />

        <IdealTeamMember
          className={classNames("__wab_instance", sty.idealTeamMember__eEcZn)}
          playerImage={(() => {
            try {
              return $props.goaImage;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          playerName={(() => {
            try {
              return $props.goaName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "def", "str", "mid", "goa"],
  def: ["def"],
  str: ["str"],
  mid: ["mid"],
  goa: ["goa"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  def: "div";
  str: "div";
  mid: "div";
  goa: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSoccerPlaceMens__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSoccerPlaceMens__VariantsArgs;
    args?: PlasmicSoccerPlaceMens__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSoccerPlaceMens__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSoccerPlaceMens__ArgsType,
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
          internalArgPropNames: PlasmicSoccerPlaceMens__ArgProps,
          internalVariantPropNames: PlasmicSoccerPlaceMens__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSoccerPlaceMens__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSoccerPlaceMens";
  } else {
    func.displayName = `PlasmicSoccerPlaceMens.${nodeName}`;
  }
  return func;
}

export const PlasmicSoccerPlaceMens = Object.assign(
  // Top-level PlasmicSoccerPlaceMens renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    def: makeNodeComponent("def"),
    str: makeNodeComponent("str"),
    mid: makeNodeComponent("mid"),
    goa: makeNodeComponent("goa"),

    // Metadata about props expected for PlasmicSoccerPlaceMens
    internalVariantProps: PlasmicSoccerPlaceMens__VariantProps,
    internalArgProps: PlasmicSoccerPlaceMens__ArgProps
  }
);

export default PlasmicSoccerPlaceMens;
/* prettier-ignore-end */
