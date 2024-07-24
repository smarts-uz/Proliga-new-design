// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: j_koFSvK1RER

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

import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import { AntdPopover } from "@plasmicpkgs/antd5/skinny/registerPopover";
import Logout from "../../Logout"; // plasmic-import: sncfOMCbdWMu/component

import { useScreenVariants as useScreenVariantskuWqqBs0ERIp } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KuWQQBs0eRIp/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: j_koFSvK1RER/css

createPlasmicElementProxy;

export type PlasmicNavbar__VariantMembers = {};
export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: Flex__<"div">;
  mainStack?: Flex__<"div">;
  logo?: Flex__<"div">;
  items?: Flex__<"div">;
  competition?: Flex__<"div">;
  login?: Flex__<"div">;
  popover?: Flex__<typeof AntdPopover>;
  logout?: Flex__<typeof Logout>;
};

export interface DefaultNavbarProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;
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
        path: "popover.open",
        type: "private",
        variableType: "boolean",
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
        data-plasmic-name={"mainStack"}
        data-plasmic-override={overrides.mainStack}
        className={classNames(projectcss.all, sty.mainStack)}
      >
        <div
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames(projectcss.all, sty.logo)}
        >
          <Reveal
            className={classNames("__wab_instance", sty.reveal__hkhGf)}
            triggerOnce={true}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__dnAo7)}
              displayHeight={"49px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"230px"}
              loading={"lazy"}
              onClick={async event => {
                const $steps = {};

                $steps["goToHomepage"] = true
                  ? (() => {
                      const actionArgs = { destination: `/` };
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
                  $steps["goToHomepage"] != null &&
                  typeof $steps["goToHomepage"] === "object" &&
                  typeof $steps["goToHomepage"].then === "function"
                ) {
                  $steps["goToHomepage"] = await $steps["goToHomepage"];
                }
              }}
              src={{
                src: "/plasmic/copy_of_proliga_new_design/images/photo20240724145023RemovebgPreviewjpg.jpg",
                fullWidth: 1148,
                fullHeight: 217,
                aspectRatio: undefined
              }}
            />
          </Reveal>
        </div>
        <Stack__
          as={"div"}
          data-plasmic-name={"items"}
          data-plasmic-override={overrides.items}
          hasGap={true}
          className={classNames(projectcss.all, sty.items)}
        >
          <Reveal
            cascade={false}
            className={classNames("__wab_instance", sty.reveal__r92BL)}
            effect={"fade"}
            reverse={false}
            triggerOnce={false}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4DInn
              )}
              onClick={async event => {
                const $steps = {};

                $steps["goToMatches"] = true
                  ? (() => {
                      const actionArgs = { destination: `/matches` };
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
                  $steps["goToMatches"] != null &&
                  typeof $steps["goToMatches"] === "object" &&
                  typeof $steps["goToMatches"].then === "function"
                ) {
                  $steps["goToMatches"] = await $steps["goToMatches"];
                }
              }}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#FFFFFF" }}
                >
                  {"O'yinlar"}
                </span>
              </React.Fragment>
            </div>
          </Reveal>
          <Reveal
            className={classNames("__wab_instance", sty.reveal__jar5)}
            triggerOnce={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1TxI5
              )}
              onClick={async event => {
                const $steps = {};

                $steps["goToMarkets"] = true
                  ? (() => {
                      const actionArgs = { destination: `/markets` };
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
                  $steps["goToMarkets"] != null &&
                  typeof $steps["goToMarkets"] === "object" &&
                  typeof $steps["goToMarkets"].then === "function"
                ) {
                  $steps["goToMarkets"] = await $steps["goToMarkets"];
                }
              }}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#FFFFFF" }}
                >
                  {"Yutuqlar"}
                </span>
              </React.Fragment>
            </div>
          </Reveal>
          <Reveal
            className={classNames("__wab_instance", sty.reveal__dZw4)}
            triggerOnce={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mh979
              )}
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
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#FFFFFF" }}
                >
                  {"Qoidalar"}
                </span>
              </React.Fragment>
            </div>
          </Reveal>
          <Reveal
            className={classNames("__wab_instance", sty.reveal__zHeFt)}
            triggerOnce={true}
          >
            {(() => {
              try {
                return currentUser.isLoggedIn;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div
                data-plasmic-name={"competition"}
                data-plasmic-override={overrides.competition}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.competition
                )}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToChampionships"] = true
                    ? (() => {
                        const actionArgs = { destination: `/competition` };
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
                    $steps["goToChampionships"] != null &&
                    typeof $steps["goToChampionships"] === "object" &&
                    typeof $steps["goToChampionships"].then === "function"
                  ) {
                    $steps["goToChampionships"] = await $steps[
                      "goToChampionships"
                    ];
                  }
                }}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {"Chempionatlar"}
                  </span>
                </React.Fragment>
              </div>
            ) : null}
          </Reveal>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"login"}
          data-plasmic-override={overrides.login}
          hasGap={true}
          className={classNames(projectcss.all, sty.login)}
        >
          {(() => {
            try {
              return true;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <AntdPopover
              data-plasmic-name={"popover"}
              data-plasmic-override={overrides.popover}
              arrow={true}
              className={classNames("__wab_instance", sty.popover)}
              content={null}
              contentText={"Popover contents"}
              defaultStylesClassName={classNames(
                projectcss.root_reset,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                projectcss.plasmic_tokens,
                plasmic_antd_5_hostless_css.plasmic_tokens,
                plasmic_plasmic_rich_components_css.plasmic_tokens
              )}
              mouseEnterDelay={0}
              mouseLeaveDelay={0}
              onOpenChange={generateStateOnChangeProp($state, [
                "popover",
                "open"
              ])}
              open={generateStateValueProp($state, ["popover", "open"])}
              popoverScopeClassName={sty["popover__popover"]}
              title={null}
            >
              {(() => {
                try {
                  return currentUser.isLoggedIn === false;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2It2U
                  )}
                  onClick={async event => {
                    const $steps = {};

                    $steps["goToSignup"] = true
                      ? (() => {
                          const actionArgs = { destination: `/signup` };
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
                      $steps["goToSignup"] != null &&
                      typeof $steps["goToSignup"] === "object" &&
                      typeof $steps["goToSignup"].then === "function"
                    ) {
                      $steps["goToSignup"] = await $steps["goToSignup"];
                    }
                  }}
                >
                  {"Register"}
                </div>
              ) : null}
            </AntdPopover>
          ) : null}
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__zojM)}
            displayHeight={"27px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            onClick={async event => {
              const $steps = {};

              $steps["runElementAction"] = true
                ? (() => {
                    const actionArgs = {};
                    return (({ tplRef, action, args }) => {
                      return $refs?.[tplRef]?.[action]?.(...(args ?? []));
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runElementAction"] != null &&
                typeof $steps["runElementAction"] === "object" &&
                typeof $steps["runElementAction"].then === "function"
              ) {
                $steps["runElementAction"] = await $steps["runElementAction"];
              }
            }}
            src={
              "https://cdn2.iconfinder.com/data/icons/basic-ui-color/35/Menu-512.png"
            }
          />

          {(
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? true
              : (() => {
                  try {
                    return currentUser.isLoggedIn;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })()
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___50Jks
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return currentUser.email;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          ) : null}
          <Logout
            data-plasmic-name={"logout"}
            data-plasmic-override={overrides.logout}
            className={classNames("__wab_instance", sty.logout)}
          />
        </Stack__>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "mainStack",
    "logo",
    "items",
    "competition",
    "login",
    "popover",
    "logout"
  ],
  mainStack: [
    "mainStack",
    "logo",
    "items",
    "competition",
    "login",
    "popover",
    "logout"
  ],
  logo: ["logo"],
  items: ["items", "competition"],
  competition: ["competition"],
  login: ["login", "popover", "logout"],
  popover: ["popover"],
  logout: ["logout"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  mainStack: "div";
  logo: "div";
  items: "div";
  competition: "div";
  login: "div";
  popover: typeof AntdPopover;
  logout: typeof Logout;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbar__ArgsType,
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
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    mainStack: makeNodeComponent("mainStack"),
    logo: makeNodeComponent("logo"),
    items: makeNodeComponent("items"),
    competition: makeNodeComponent("competition"),
    login: makeNodeComponent("login"),
    popover: makeNodeComponent("popover"),
    logout: makeNodeComponent("logout"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
