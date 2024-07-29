// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: Sd_QJ3SDhBGt

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar from "../../Navbar"; // plasmic-import: j_koFSvK1RER/component
import ShowteamNavbar from "../../ShowteamNavbar"; // plasmic-import: xHwS06ZerIoO/component
import UserteamNavbar from "../../UserteamNavbar"; // plasmic-import: yP6GdWiKL8XJ/component
import { TabsContainer } from "@plasmicpkgs/plasmic-tabs";
import { TabButton } from "@plasmicpkgs/plasmic-tabs";
import Button from "../../Button"; // plasmic-import: lBHNzts6tFyj/component
import { TabUnderline } from "@plasmicpkgs/plasmic-tabs";
import { TabContent } from "@plasmicpkgs/plasmic-tabs";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../copy_of_proliga_new_design/plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicShowTeam2.module.css"; // plasmic-import: Sd_QJ3SDhBGt/css

import ChecksvgIcon from "../plasmic_tabs/icons/PlasmicIcon__Checksvg"; // plasmic-import: zq2s7N0xWucT/icon
import IconIcon from "../plasmic_tabs/icons/PlasmicIcon__Icon"; // plasmic-import: 8K40faRNhuCj/icon

createPlasmicElementProxy;

export type PlasmicShowTeam2__VariantMembers = {};
export type PlasmicShowTeam2__VariantsArgs = {};
type VariantPropType = keyof PlasmicShowTeam2__VariantsArgs;
export const PlasmicShowTeam2__VariantProps = new Array<VariantPropType>();

export type PlasmicShowTeam2__ArgsType = {};
type ArgPropType = keyof PlasmicShowTeam2__ArgsType;
export const PlasmicShowTeam2__ArgProps = new Array<ArgPropType>();

export type PlasmicShowTeam2__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  showteamNavbar?: Flex__<typeof ShowteamNavbar>;
  userteamNavbar?: Flex__<typeof UserteamNavbar>;
  tabsContainer?: Flex__<typeof TabsContainer>;
  tabButton?: Flex__<typeof TabButton>;
  button?: Flex__<typeof Button>;
  text?: Flex__<"div">;
  tabUnderline?: Flex__<typeof TabUnderline>;
  tabContent?: Flex__<typeof TabContent>;
  transferVisibility?: Flex__<"div">;
  showScore?: Flex__<"div">;
  transferTourVisibility?: Flex__<"div">;
};

export interface DefaultShowTeam2Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicShowTeam2__RenderFunc(props: {
  variants: PlasmicShowTeam2__VariantsArgs;
  args: PlasmicShowTeam2__ArgsType;
  overrides: PlasmicShowTeam2__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "userId",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return currentUser.customProperties.response[0].id;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 1;
              }
              throw e;
            }
          })()
      },
      {
        path: "tourId",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $queries.tour.data.response[0].tour_id;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 0;
              }
              throw e;
            }
          })()
      },
      {
        path: "transfer",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      },
      {
        path: "tourIndex",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "62eba027-2708-488a-b457-f8af85d20205",
        userArgs: {
          params: [$ctx.params.id, $ctx.params.comp_id]
        },
        cacheKey: `plasmic.$.${(() => {
          try {
            return "getOne";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.62eba027-2708-488a-b457-f8af85d20205.$.`,
        invalidatedKeys: null,
        roleId: "ead2b235-73a3-4579-b15a-7fc91fc1a23a"
      };
    }),
    tour: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "027a8537-4c64-4279-a3a4-9438c7a7d7d6",
        userArgs: {
          params: [$ctx.params.comp_id]
        },
        cacheKey: `plasmic.$.027a8537-4c64-4279-a3a4-9438c7a7d7d6.$.`,
        invalidatedKeys: null,
        roleId: "ead2b235-73a3-4579-b15a-7fc91fc1a23a"
      };
    }),
    teamPlayer: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "707a8f8f-2a00-4af5-8462-1217cdbacae9",
        userArgs: {
          params: [$queries.query.data.response[0].id]
        },
        cacheKey: `plasmic.$.707a8f8f-2a00-4af5-8462-1217cdbacae9.$.`,
        invalidatedKeys: null,
        roleId: "ead2b235-73a3-4579-b15a-7fc91fc1a23a"
      };
    }),
    playerList: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "964e5d91-2ac7-4881-8f97-120c019a3f7c",
        userArgs: {
          params: [$queries.query.data.response[0].competition_id]
        },
        cacheKey: `plasmic.$.964e5d91-2ac7-4881-8f97-120c019a3f7c.$.`,
        invalidatedKeys: null,
        roleId: "ead2b235-73a3-4579-b15a-7fc91fc1a23a"
      };
    }),
    playerPoint: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "b2053019-9d88-4660-8813-ce7b57524fc8",
        userArgs: {
          params: [$state.tourId]
        },
        cacheKey: `plasmic.$.b2053019-9d88-4660-8813-ce7b57524fc8.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    teamPoint: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "ac4fdd15-88df-4be2-9bd6-7f21c5c80e73",
        userArgs: {
          params: [$queries.query.data.response, $state.tourId]
        },
        cacheKey: `plasmic.$.ac4fdd15-88df-4be2-9bd6-7f21c5c80e73.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    everyplayerPoint: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "d9cbe18a-dded-4c65-954f-affd7818da36",
        userArgs: {},
        cacheKey: `plasmic.$.d9cbe18a-dded-4c65-954f-affd7818da36.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    playerListTab: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "da05eeef-ea8a-4a5b-90fc-d5abd2340b2e",
        userArgs: {
          params: [$queries.query.data.response[0].competition_id]
        },
        cacheKey: `plasmic.$.da05eeef-ea8a-4a5b-90fc-d5abd2340b2e.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    playerAllCount: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "ee9c91bb-efc0-4837-bf0a-dd14852b5dcc",
        userArgs: {
          params: [$queries.query.data.response[0].competition_id]
        },
        cacheKey: `plasmic.$.ee9c91bb-efc0-4837-bf0a-dd14852b5dcc.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

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

          <ShowteamNavbar
            data-plasmic-name={"showteamNavbar"}
            data-plasmic-override={overrides.showteamNavbar}
            className={classNames("__wab_instance", sty.showteamNavbar)}
          />

          <UserteamNavbar
            data-plasmic-name={"userteamNavbar"}
            data-plasmic-override={overrides.userteamNavbar}
            className={classNames("__wab_instance", sty.userteamNavbar)}
            onlickEditTeam={async event => {
              const $steps = {};

              $steps["goToEditTeam"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/old/${(() => {
                        try {
                          return $queries.query.data.response[0].competition_id;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}/${(() => {
                        try {
                          return $queries.query.data.response[0].id;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}`
                    };
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
                $steps["goToEditTeam"] != null &&
                typeof $steps["goToEditTeam"] === "object" &&
                typeof $steps["goToEditTeam"].then === "function"
              ) {
                $steps["goToEditTeam"] = await $steps["goToEditTeam"];
              }
            }}
            teamBalance={(() => {
              try {
                return $queries.query.data.response[0].balance;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return 0;
                }
                throw e;
              }
            })()}
          />

          <div className={classNames(projectcss.all, sty.freeBox__mWQyC)}>
            <TabsContainer
              data-plasmic-name={"tabsContainer"}
              data-plasmic-override={overrides.tabsContainer}
              className={classNames("__wab_instance", sty.tabsContainer)}
              initialKey={"tab0"}
              mountMode={"mountAllEagerly"}
              previewAll={false}
            >
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox___4TlWt)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ejjXd)}
                    >
                      {(_par =>
                        !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                        (() => {
                          try {
                            return $queries.tour.data.response;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return [];
                            }
                            throw e;
                          }
                        })()
                      ).map((__plasmic_item_0, __plasmic_idx_0) => {
                        const currentItem = __plasmic_item_0;
                        const currentIndex = __plasmic_idx_0;
                        return (
                          <TabButton
                            data-plasmic-name={"tabButton"}
                            data-plasmic-override={overrides.tabButton}
                            className={classNames(
                              "__wab_instance",
                              sty.tabButton
                            )}
                            key={currentIndex}
                            tabKey={(() => {
                              try {
                                return "tab" + currentIndex;
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
                          >
                            <Button
                              data-plasmic-name={"button"}
                              data-plasmic-override={overrides.button}
                            >
                              <div
                                data-plasmic-name={"text"}
                                data-plasmic-override={overrides.text}
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text
                                )}
                              >
                                <React.Fragment>
                                  {(() => {
                                    try {
                                      return currentItem.tour_name;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return "Tab 1";
                                      }
                                      throw e;
                                    }
                                  })()}
                                </React.Fragment>
                              </div>
                            </Button>
                          </TabButton>
                        );
                      })}
                      <TabUnderline
                        data-plasmic-name={"tabUnderline"}
                        data-plasmic-override={overrides.tabUnderline}
                        className={classNames(
                          "__wab_instance",
                          sty.tabUnderline
                        )}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__xbC1X)}
                    >
                      {(_par =>
                        !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                        (() => {
                          try {
                            return $queries.tour.data.response;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return [];
                            }
                            throw e;
                          }
                        })()
                      ).map((__plasmic_item_0, __plasmic_idx_0) => {
                        const currentItem = __plasmic_item_0;
                        const currentIndex = __plasmic_idx_0;
                        return (
                          <TabContent
                            data-plasmic-name={"tabContent"}
                            data-plasmic-override={overrides.tabContent}
                            className={classNames(
                              "__wab_instance",
                              sty.tabContent
                            )}
                            key={currentIndex}
                            tabKey={"tab1"}
                          >
                            <div
                              data-plasmic-name={"transferVisibility"}
                              data-plasmic-override={
                                overrides.transferVisibility
                              }
                              className={classNames(
                                projectcss.all,
                                sty.transferVisibility
                              )}
                            />

                            <div
                              data-plasmic-name={"showScore"}
                              data-plasmic-override={overrides.showScore}
                              className={classNames(
                                projectcss.all,
                                sty.showScore
                              )}
                            />

                            <div
                              data-plasmic-name={"transferTourVisibility"}
                              data-plasmic-override={
                                overrides.transferTourVisibility
                              }
                              className={classNames(
                                projectcss.all,
                                sty.transferTourVisibility
                              )}
                            />
                          </TabContent>
                        );
                      })}
                    </div>
                  </div>
                )}
              </DataCtxReader__>
            </TabsContainer>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "showteamNavbar",
    "userteamNavbar",
    "tabsContainer",
    "tabButton",
    "button",
    "text",
    "tabUnderline",
    "tabContent",
    "transferVisibility",
    "showScore",
    "transferTourVisibility"
  ],
  navbar: ["navbar"],
  showteamNavbar: ["showteamNavbar"],
  userteamNavbar: ["userteamNavbar"],
  tabsContainer: [
    "tabsContainer",
    "tabButton",
    "button",
    "text",
    "tabUnderline",
    "tabContent",
    "transferVisibility",
    "showScore",
    "transferTourVisibility"
  ],
  tabButton: ["tabButton", "button", "text"],
  button: ["button", "text"],
  text: ["text"],
  tabUnderline: ["tabUnderline"],
  tabContent: [
    "tabContent",
    "transferVisibility",
    "showScore",
    "transferTourVisibility"
  ],
  transferVisibility: ["transferVisibility"],
  showScore: ["showScore"],
  transferTourVisibility: ["transferTourVisibility"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  showteamNavbar: typeof ShowteamNavbar;
  userteamNavbar: typeof UserteamNavbar;
  tabsContainer: typeof TabsContainer;
  tabButton: typeof TabButton;
  button: typeof Button;
  text: "div";
  tabUnderline: typeof TabUnderline;
  tabContent: typeof TabContent;
  transferVisibility: "div";
  showScore: "div";
  transferTourVisibility: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicShowTeam2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicShowTeam2__VariantsArgs;
    args?: PlasmicShowTeam2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicShowTeam2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicShowTeam2__ArgsType,
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
          internalArgPropNames: PlasmicShowTeam2__ArgProps,
          internalVariantPropNames: PlasmicShowTeam2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicShowTeam2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicShowTeam2";
  } else {
    func.displayName = `PlasmicShowTeam2.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={"ead2b235-73a3-4579-b15a-7fc91fc1a23a"}
      appId={"qrPZwqtrqWM4S9b4djCj1H"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={false}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

export const PlasmicShowTeam2 = Object.assign(
  // Top-level PlasmicShowTeam2 renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    showteamNavbar: makeNodeComponent("showteamNavbar"),
    userteamNavbar: makeNodeComponent("userteamNavbar"),
    tabsContainer: makeNodeComponent("tabsContainer"),
    tabButton: makeNodeComponent("tabButton"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    tabUnderline: makeNodeComponent("tabUnderline"),
    tabContent: makeNodeComponent("tabContent"),
    transferVisibility: makeNodeComponent("transferVisibility"),
    showScore: makeNodeComponent("showScore"),
    transferTourVisibility: makeNodeComponent("transferTourVisibility"),

    // Metadata about props expected for PlasmicShowTeam2
    internalVariantProps: PlasmicShowTeam2__VariantProps,
    internalArgProps: PlasmicShowTeam2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicShowTeam2;
/* prettier-ignore-end */
