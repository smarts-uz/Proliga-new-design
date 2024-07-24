// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: SjHyr0AJYc9o

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

import Navbar from "../../Navbar"; // plasmic-import: j_koFSvK1RER/component
import InjuredClub from "../../InjuredClub"; // plasmic-import: tAs5iSDBu8oK/component
import InjuredTeamMember from "../../InjuredTeamMember"; // plasmic-import: -ZjOM5ux0wjZ/component
import Footer from "../../Footer"; // plasmic-import: sRXlHXHXDYps/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicAbsences.module.css"; // plasmic-import: SjHyr0AJYc9o/css

createPlasmicElementProxy;

export type PlasmicAbsences__VariantMembers = {};
export type PlasmicAbsences__VariantsArgs = {};
type VariantPropType = keyof PlasmicAbsences__VariantsArgs;
export const PlasmicAbsences__VariantProps = new Array<VariantPropType>();

export type PlasmicAbsences__ArgsType = {};
type ArgPropType = keyof PlasmicAbsences__ArgsType;
export const PlasmicAbsences__ArgProps = new Array<ArgPropType>();

export type PlasmicAbsences__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  text?: Flex__<"div">;
  columns?: Flex__<"div">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultAbsencesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAbsences__RenderFunc(props: {
  variants: PlasmicAbsences__VariantsArgs;
  args: PlasmicAbsences__ArgsType;
  overrides: PlasmicAbsences__OverridesType;
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Injuries"}
          </div>
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__mCEpa)}
            >
              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__bnvYr)}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember___1Vtfp
                )}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember___8Yh30
                )}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__mkmRf
                )}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__epXrr
                )}
                variant2={true}
              />

              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__j9Pop)}
                variant2={true}
              />
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__nlEcM)}
            >
              <InjuredClub
                className={classNames(
                  "__wab_instance",
                  sty.injuredClub___0WAgA
                )}
                variant3={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__nk7Vj
                )}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember___7CyIy
                )}
              />

              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__g3Gip)}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember___8Bznj
                )}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__ysMj2
                )}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__zsJdI
                )}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__sKSaF
                )}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__xMgB9
                )}
              />

              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__zPtNd)}
              />
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__tIfDm)}
            >
              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__q2Jbg)}
                variant3={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__fKzPu
                )}
                variant2={true}
              />

              <InjuredClub
                className={classNames(
                  "__wab_instance",
                  sty.injuredClub___9260F
                )}
                variant1={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__rlEEd
                )}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__gFfT
                )}
                variant2={true}
              />
            </Stack__>
          </div>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "text", "columns", "footer"],
  navbar: ["navbar"],
  text: ["text"],
  columns: ["columns"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  text: "div";
  columns: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAbsences__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAbsences__VariantsArgs;
    args?: PlasmicAbsences__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAbsences__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAbsences__ArgsType,
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
          internalArgPropNames: PlasmicAbsences__ArgProps,
          internalVariantPropNames: PlasmicAbsences__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAbsences__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbsences";
  } else {
    func.displayName = `PlasmicAbsences.${nodeName}`;
  }
  return func;
}

export const PlasmicAbsences = Object.assign(
  // Top-level PlasmicAbsences renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    text: makeNodeComponent("text"),
    columns: makeNodeComponent("columns"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAbsences
    internalVariantProps: PlasmicAbsences__VariantProps,
    internalArgProps: PlasmicAbsences__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAbsences;
/* prettier-ignore-end */
