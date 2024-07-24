// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: QACqVA5nfjte

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
import sty from "./PlasmicUpDownOrder.module.css"; // plasmic-import: QACqVA5nfjte/css

import ThinArrowTopIconsvgIcon from "./icons/PlasmicIcon__ThinArrowTopIconsvg"; // plasmic-import: -7NYYr2J81o2/icon
import IconmonstrArrowDownThinsvgIcon from "./icons/PlasmicIcon__IconmonstrArrowDownThinsvg"; // plasmic-import: gvbI6nHpb9NB/icon

createPlasmicElementProxy;

export type PlasmicUpDownOrder__VariantMembers = {
  down: "down";
};
export type PlasmicUpDownOrder__VariantsArgs = {
  down?: SingleBooleanChoiceArg<"down">;
};
type VariantPropType = keyof PlasmicUpDownOrder__VariantsArgs;
export const PlasmicUpDownOrder__VariantProps = new Array<VariantPropType>(
  "down"
);

export type PlasmicUpDownOrder__ArgsType = {
  onDownChange?: (val: any) => void;
};
type ArgPropType = keyof PlasmicUpDownOrder__ArgsType;
export const PlasmicUpDownOrder__ArgProps = new Array<ArgPropType>(
  "onDownChange"
);

export type PlasmicUpDownOrder__OverridesType = {
  upDown?: Flex__<"div">;
};

export interface DefaultUpDownOrderProps {
  onDownChange?: (val: any) => void;
  down?: SingleBooleanChoiceArg<"down">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUpDownOrder__RenderFunc(props: {
  variants: PlasmicUpDownOrder__VariantsArgs;
  args: PlasmicUpDownOrder__ArgsType;
  overrides: PlasmicUpDownOrder__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "down",
        type: "writable",
        variableType: "variant",

        valueProp: "down",
        onChangeProp: "onDownChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"upDown"}
      data-plasmic-override={overrides.upDown}
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
        sty.upDown,
        { [sty.upDowndown]: hasVariant($state, "down", "down") }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["updateDown"] = true
          ? (() => {
              const actionArgs = {
                vgroup: "down",
                operation: 2,
                value: "down"
              };
              return (({ vgroup, value }) => {
                if (typeof value === "string") {
                  value = [value];
                }

                const oldValue = $stateGet($state, vgroup);
                $stateSet($state, vgroup, !oldValue);
                return !oldValue;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["updateDown"] != null &&
          typeof $steps["updateDown"] === "object" &&
          typeof $steps["updateDown"].then === "function"
        ) {
          $steps["updateDown"] = await $steps["updateDown"];
        }
      }}
    >
      <ThinArrowTopIconsvgIcon
        className={classNames(projectcss.all, sty.svg___4B94R, {
          [sty.svgdown___4B94RJwQhY]: hasVariant($state, "down", "down")
        })}
        role={"img"}
      />

      <IconmonstrArrowDownThinsvgIcon
        className={classNames(projectcss.all, sty.svg__brEXr, {
          [sty.svgdown__brEXrJwQhY]: hasVariant($state, "down", "down")
        })}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  upDown: ["upDown"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  upDown: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUpDownOrder__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpDownOrder__VariantsArgs;
    args?: PlasmicUpDownOrder__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUpDownOrder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicUpDownOrder__ArgsType,
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
          internalArgPropNames: PlasmicUpDownOrder__ArgProps,
          internalVariantPropNames: PlasmicUpDownOrder__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUpDownOrder__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "upDown") {
    func.displayName = "PlasmicUpDownOrder";
  } else {
    func.displayName = `PlasmicUpDownOrder.${nodeName}`;
  }
  return func;
}

export const PlasmicUpDownOrder = Object.assign(
  // Top-level PlasmicUpDownOrder renders the root element
  makeNodeComponent("upDown"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicUpDownOrder
    internalVariantProps: PlasmicUpDownOrder__VariantProps,
    internalArgProps: PlasmicUpDownOrder__ArgProps
  }
);

export default PlasmicUpDownOrder;
/* prettier-ignore-end */
