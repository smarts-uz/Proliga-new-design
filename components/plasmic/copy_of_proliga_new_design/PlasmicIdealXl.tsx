// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: s53iPI1wh3wh

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
import { AntdDropdown } from "@plasmicpkgs/antd5/skinny/registerDropdown";
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import SoccerPlaceMens from "../../SoccerPlaceMens"; // plasmic-import: AD9rteI8dV2J/component
import Select from "../../Select"; // plasmic-import: WDDaSJMd5buE/component
import Footer from "../../Footer"; // plasmic-import: sRXlHXHXDYps/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantskuWqqBs0ERIp } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KuWQQBs0eRIp/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicIdealXl.module.css"; // plasmic-import: s53iPI1wh3wh/css

createPlasmicElementProxy;

export type PlasmicIdealXl__VariantMembers = {};
export type PlasmicIdealXl__VariantsArgs = {};
type VariantPropType = keyof PlasmicIdealXl__VariantsArgs;
export const PlasmicIdealXl__VariantProps = new Array<VariantPropType>();

export type PlasmicIdealXl__ArgsType = {};
type ArgPropType = keyof PlasmicIdealXl__ArgsType;
export const PlasmicIdealXl__ArgProps = new Array<ArgPropType>();

export type PlasmicIdealXl__OverridesType = {
  idealXl?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  h4?: Flex__<"h4">;
  dropdown?: Flex__<typeof AntdDropdown>;
  button?: Flex__<typeof AntdButton>;
  h5?: Flex__<"h5">;
  soccerPlaceMens?: Flex__<typeof SoccerPlaceMens>;
  select?: Flex__<typeof Select>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultIdealXlProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicIdealXl__RenderFunc(props: {
  variants: PlasmicIdealXl__VariantsArgs;
  args: PlasmicIdealXl__ArgsType;
  overrides: PlasmicIdealXl__OverridesType;
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
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskuWqqBs0ERIp()
  });

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
          data-plasmic-name={"idealXl"}
          data-plasmic-override={overrides.idealXl}
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
            sty.idealXl
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__uHUu)}>
            <div className={classNames(projectcss.all, sty.freeBox__j1Oe2)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tdAUg
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h4
                      data-plasmic-name={"h4"}
                      data-plasmic-override={overrides.h4}
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        projectcss.__wab_text,
                        sty.h4
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "var(--token-jgohepLVeKvh)" }}
                        >
                          {"Ideal XI"}
                        </span>
                      </React.Fragment>
                    </h4>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__f0P5I)}>
            <div className={classNames(projectcss.all, sty.freeBox__uEzog)}>
              <div className={classNames(projectcss.all, sty.freeBox__p1Dn7)}>
                <AntdDropdown
                  data-plasmic-name={"dropdown"}
                  data-plasmic-override={overrides.dropdown}
                  className={classNames("__wab_instance", sty.dropdown)}
                  dropdownMenuScopeClassName={sty["dropdown__dropdownMenu"]}
                  menuItems={() => (
                    <React.Fragment>
                      <AntdMenuItem
                        className={classNames(
                          "__wab_instance",
                          sty.menuItem__n2B8K
                        )}
                        key={"menu-item-1"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__p2Cbi
                          )}
                        >
                          {"Menu item"}
                        </div>
                      </AntdMenuItem>
                      <AntdMenuItem
                        className={classNames(
                          "__wab_instance",
                          sty.menuItem___9ROc9
                        )}
                        key={"menu-item-2"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___2Ius4
                          )}
                        >
                          {"Menu item"}
                        </div>
                      </AntdMenuItem>
                    </React.Fragment>
                  )}
                  menuItemsJson={[
                    { type: "item", value: "action1", label: "Action 1" },
                    { type: "item", value: "action2", label: "Action 2" }
                  ]}
                >
                  <AntdButton
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__odM05
                      )}
                    >
                      {"Dropdown"}
                    </div>
                  </AntdButton>
                </AntdDropdown>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__etY5F)}>
              <div className={classNames(projectcss.all, sty.freeBox__aO9Bh)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__riwfn
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h5
                        data-plasmic-name={"h5"}
                        data-plasmic-override={overrides.h5}
                        className={classNames(
                          projectcss.all,
                          projectcss.h5,
                          projectcss.__wab_text,
                          sty.h5
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "var(--token-jgohepLVeKvh)" }}
                          >
                            {"Ideal XI of the fixture Fixture 1"}
                          </span>
                        </React.Fragment>
                      </h5>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__aeVqq)}>
              <div className={classNames(projectcss.all, sty.freeBox___3MUby)}>
                <SoccerPlaceMens
                  data-plasmic-name={"soccerPlaceMens"}
                  data-plasmic-override={overrides.soccerPlaceMens}
                  className={classNames("__wab_instance", sty.soccerPlaceMens)}
                />
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pEwH)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__qeVd)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__n1Qb5)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rnC2G
                      )}
                    >
                      {"Players"}
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__aiMw7)}
                  >
                    <Select
                      data-plasmic-name={"select"}
                      data-plasmic-override={overrides.select}
                      className={classNames("__wab_instance", sty.select)}
                      onChange={(...eventArgs) => {
                        generateStateOnChangeProp($state, ["select", "value"])(
                          eventArgs[0]
                        );
                      }}
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" }
                      ]}
                      placeholder={"Players"}
                      value={generateStateValueProp($state, [
                        "select",
                        "value"
                      ])}
                    />
                  </div>
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox__qnZMo)}
                />
              </Stack__>
            </div>
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
  idealXl: [
    "idealXl",
    "navbar",
    "h4",
    "dropdown",
    "button",
    "h5",
    "soccerPlaceMens",
    "select",
    "footer"
  ],
  navbar: ["navbar"],
  h4: ["h4"],
  dropdown: ["dropdown", "button"],
  button: ["button"],
  h5: ["h5"],
  soccerPlaceMens: ["soccerPlaceMens"],
  select: ["select"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  idealXl: "div";
  navbar: typeof Navbar;
  h4: "h4";
  dropdown: typeof AntdDropdown;
  button: typeof AntdButton;
  h5: "h5";
  soccerPlaceMens: typeof SoccerPlaceMens;
  select: typeof Select;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIdealXl__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIdealXl__VariantsArgs;
    args?: PlasmicIdealXl__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIdealXl__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIdealXl__ArgsType,
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
          internalArgPropNames: PlasmicIdealXl__ArgProps,
          internalVariantPropNames: PlasmicIdealXl__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicIdealXl__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "idealXl") {
    func.displayName = "PlasmicIdealXl";
  } else {
    func.displayName = `PlasmicIdealXl.${nodeName}`;
  }
  return func;
}

export const PlasmicIdealXl = Object.assign(
  // Top-level PlasmicIdealXl renders the root element
  makeNodeComponent("idealXl"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    h4: makeNodeComponent("h4"),
    dropdown: makeNodeComponent("dropdown"),
    button: makeNodeComponent("button"),
    h5: makeNodeComponent("h5"),
    soccerPlaceMens: makeNodeComponent("soccerPlaceMens"),
    select: makeNodeComponent("select"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicIdealXl
    internalVariantProps: PlasmicIdealXl__VariantProps,
    internalArgProps: PlasmicIdealXl__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicIdealXl;
/* prettier-ignore-end */
