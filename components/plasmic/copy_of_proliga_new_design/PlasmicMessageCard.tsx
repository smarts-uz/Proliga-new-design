// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: bj3CfNb3_uqC

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicMessageCard.module.css"; // plasmic-import: bj3CfNb3_uqC/css

createPlasmicElementProxy;

export type PlasmicMessageCard__VariantMembers = {};
export type PlasmicMessageCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicMessageCard__VariantsArgs;
export const PlasmicMessageCard__VariantProps = new Array<VariantPropType>();

export type PlasmicMessageCard__ArgsType = {
  heading?: string;
  textInfo?: string;
};
type ArgPropType = keyof PlasmicMessageCard__ArgsType;
export const PlasmicMessageCard__ArgProps = new Array<ArgPropType>(
  "heading",
  "textInfo"
);

export type PlasmicMessageCard__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultMessageCardProps {
  heading?: string;
  textInfo?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMessageCard__RenderFunc(props: {
  variants: PlasmicMessageCard__VariantsArgs;
  args: PlasmicMessageCard__ArgsType;
  overrides: PlasmicMessageCard__OverridesType;
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
        sty.root,
        "glass-effect"
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__g58U2)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__zlbFq
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.heading;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "RULES";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__gNl9H)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__qfkOd
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.textInfo;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Bir o'yinda bitta komandadan faqat 2 ta o'yinchi olsak bo'ladi. Qolgan o'yinchilar uchun to'lov qilinadi.";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMessageCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMessageCard__VariantsArgs;
    args?: PlasmicMessageCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMessageCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMessageCard__ArgsType,
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
          internalArgPropNames: PlasmicMessageCard__ArgProps,
          internalVariantPropNames: PlasmicMessageCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMessageCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMessageCard";
  } else {
    func.displayName = `PlasmicMessageCard.${nodeName}`;
  }
  return func;
}

export const PlasmicMessageCard = Object.assign(
  // Top-level PlasmicMessageCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMessageCard
    internalVariantProps: PlasmicMessageCard__VariantProps,
    internalArgProps: PlasmicMessageCard__ArgProps
  }
);

export default PlasmicMessageCard;
/* prettier-ignore-end */
