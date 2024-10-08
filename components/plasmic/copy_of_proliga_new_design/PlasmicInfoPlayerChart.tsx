// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: EQShKtt0DfSk

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

import { SimpleChart } from "@plasmicpkgs/react-chartjs-2";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicInfoPlayerChart.module.css"; // plasmic-import: EQShKtt0DfSk/css

createPlasmicElementProxy;

export type PlasmicInfoPlayerChart__VariantMembers = {};
export type PlasmicInfoPlayerChart__VariantsArgs = {};
type VariantPropType = keyof PlasmicInfoPlayerChart__VariantsArgs;
export const PlasmicInfoPlayerChart__VariantProps =
  new Array<VariantPropType>();

export type PlasmicInfoPlayerChart__ArgsType = {};
type ArgPropType = keyof PlasmicInfoPlayerChart__ArgsType;
export const PlasmicInfoPlayerChart__ArgProps = new Array<ArgPropType>();

export type PlasmicInfoPlayerChart__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  chart?: Flex__<typeof SimpleChart>;
};

export interface DefaultInfoPlayerChartProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInfoPlayerChart__RenderFunc(props: {
  variants: PlasmicInfoPlayerChart__VariantsArgs;
  args: PlasmicInfoPlayerChart__ArgsType;
  overrides: PlasmicInfoPlayerChart__OverridesType;
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
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___6EqWn
        )}
      >
        {"Value record"}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__lQkN3)}>
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"14px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"14px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/copy_of_proliga_new_design/images/pngtreeEuroSymbolCurrencyPngImage3974231Png2.png",
            fullWidth: 512,
            fullHeight: 512,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__hEmPh
          )}
        >
          {"Market value"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ttuk7
          )}
        >
          {"32,15,236"}
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ch5HJ)}
      >
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__jAyvb
          )}
          component={Link}
          href={"https://www.plasmic.app/"}
          onClick={async event => {
            const $steps = {};

            $steps["updateStateVariable"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    undefined;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateStateVariable"] != null &&
              typeof $steps["updateStateVariable"] === "object" &&
              typeof $steps["updateStateVariable"].then === "function"
            ) {
              $steps["updateStateVariable"] = await $steps[
                "updateStateVariable"
              ];
            }
          }}
          platform={"nextjs"}
          target={"_blank"}
          title={undefined}
        >
          {"Season"}
        </PlasmicLink__>
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__tUiqf
          )}
          component={Link}
          href={"https://www.plasmic.app/"}
          platform={"nextjs"}
        >
          {"10 Days"}
        </PlasmicLink__>
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__uGtAb
          )}
          component={Link}
          href={"https://www.plasmic.app/"}
          platform={"nextjs"}
        >
          {"5 Days"}
        </PlasmicLink__>
      </Stack__>
      <SimpleChart
        data-plasmic-name={"chart"}
        data-plasmic-override={overrides.chart}
        className={classNames("__wab_instance", sty.chart)}
        data={[
          { region: "Season", Player: 3294, Money: 2675 },
          { region: "5 Days", revenue: 3245, spend: 3895 },
          { region: "10 Days", revenue: 2165, spend: 3498 },
          { region: "1 Month", revenue: 3215, spend: 1656 }
        ]}
        direction={"horizontal"}
        labelField={"region"}
        type={"line"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "chart"],
  img: ["img"],
  chart: ["chart"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  chart: typeof SimpleChart;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInfoPlayerChart__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInfoPlayerChart__VariantsArgs;
    args?: PlasmicInfoPlayerChart__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInfoPlayerChart__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInfoPlayerChart__ArgsType,
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
          internalArgPropNames: PlasmicInfoPlayerChart__ArgProps,
          internalVariantPropNames: PlasmicInfoPlayerChart__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInfoPlayerChart__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInfoPlayerChart";
  } else {
    func.displayName = `PlasmicInfoPlayerChart.${nodeName}`;
  }
  return func;
}

export const PlasmicInfoPlayerChart = Object.assign(
  // Top-level PlasmicInfoPlayerChart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    chart: makeNodeComponent("chart"),

    // Metadata about props expected for PlasmicInfoPlayerChart
    internalVariantProps: PlasmicInfoPlayerChart__VariantProps,
    internalArgProps: PlasmicInfoPlayerChart__ArgProps
  }
);

export default PlasmicInfoPlayerChart;
/* prettier-ignore-end */
