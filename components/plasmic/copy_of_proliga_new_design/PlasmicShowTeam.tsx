// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: yGPG6cDZoz2b

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
import projectcss from "./plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicShowTeam.module.css"; // plasmic-import: yGPG6cDZoz2b/css

import ChecksvgIcon from "../plasmic_tabs/icons/PlasmicIcon__Checksvg"; // plasmic-import: zq2s7N0xWucT/icon
import IconIcon from "../plasmic_tabs/icons/PlasmicIcon__Icon"; // plasmic-import: 8K40faRNhuCj/icon

createPlasmicElementProxy;

export type PlasmicShowTeam__VariantMembers = {};
export type PlasmicShowTeam__VariantsArgs = {};
type VariantPropType = keyof PlasmicShowTeam__VariantsArgs;
export const PlasmicShowTeam__VariantProps = new Array<VariantPropType>();

export type PlasmicShowTeam__ArgsType = {};
type ArgPropType = keyof PlasmicShowTeam__ArgsType;
export const PlasmicShowTeam__ArgProps = new Array<ArgPropType>();

export type PlasmicShowTeam__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  showteamNavbar?: Flex__<typeof ShowteamNavbar>;
  userteamNavbar?: Flex__<typeof UserteamNavbar>;
  tabsContainer?: Flex__<typeof TabsContainer>;
  tabUnderline?: Flex__<typeof TabUnderline>;
};

export interface DefaultShowTeamProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicShowTeam__RenderFunc(props: {
  variants: PlasmicShowTeam__VariantsArgs;
  args: PlasmicShowTeam__ArgsType;
  overrides: PlasmicShowTeam__OverridesType;
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
        opId: "f9c1c893-9e7c-48a2-96e6-2feb36629fa2",
        userArgs: {
          params: [$ctx.params.id]
        },
        cacheKey: `plasmic.$.f9c1c893-9e7c-48a2-96e6-2feb36629fa2.$.`,
        invalidatedKeys: null,
        roleId: "ead2b235-73a3-4579-b15a-7fc91fc1a23a"
      };
    }),
    teamPlayer: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "7392be50-c0a7-46e1-b397-ad6b5b9bb368",
        userArgs: {
          path: [undefined],
          params: [$state.transfer]
        },
        cacheKey: `plasmic.$.7392be50-c0a7-46e1-b397-ad6b5b9bb368.$.`,
        invalidatedKeys: null,
        roleId: "ead2b235-73a3-4579-b15a-7fc91fc1a23a"
      };
    }),
    playerList: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "964e5d91-2ac7-4881-8f97-120c019a3f7c",
        userArgs: {
          params: [$queries.query.data.response]
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
        opId: "51b9cc1c-abdd-4a05-a00b-ec079a5bafa7",
        userArgs: {
          path: [
            $state.paginationAll[$state.tourIndex].pageSize,
            $state.paginationAll[$state.tourIndex].startIndex
          ],
          params: [$queries.query.data.response[0].competition_id]
        },
        cacheKey: `plasmic.$.51b9cc1c-abdd-4a05-a00b-ec079a5bafa7.$.`,
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

          <div className={classNames(projectcss.all, sty.freeBox__rjU8R)}>
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
                    className={classNames(projectcss.all, sty.freeBox__mz4Dw)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__qQqAr)}
                    >
                      <TabButton
                        className={classNames(
                          "__wab_instance",
                          sty.tabButton__l0Ig
                        )}
                        tabKey={"tab1"}
                      >
                        <Button>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__jUnFe
                            )}
                          >
                            {"Tab 1"}
                          </div>
                        </Button>
                      </TabButton>
                      <TabButton
                        className={classNames(
                          "__wab_instance",
                          sty.tabButton__uuDW
                        )}
                        tabKey={"tab2"}
                      >
                        <Button>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__frRv9
                            )}
                          >
                            {"Tab 2"}
                          </div>
                        </Button>
                      </TabButton>
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
                      className={classNames(projectcss.all, sty.freeBox__g0Bk)}
                    >
                      <TabContent
                        className={classNames(
                          "__wab_instance",
                          sty.tabContent__rfLEm
                        )}
                        tabKey={"tab1"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__uoJq0
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__kw2VX
                            )}
                          >
                            {"This is some tab content"}
                          </div>
                        </div>
                      </TabContent>
                      <TabContent
                        className={classNames(
                          "__wab_instance",
                          sty.tabContent__hwLEe
                        )}
                        tabKey={"tab2"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ob5J
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__zSo4O
                            )}
                          >
                            {"This is some tab content"}
                          </div>
                        </div>
                      </TabContent>
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
    "tabUnderline"
  ],
  navbar: ["navbar"],
  showteamNavbar: ["showteamNavbar"],
  userteamNavbar: ["userteamNavbar"],
  tabsContainer: ["tabsContainer", "tabUnderline"],
  tabUnderline: ["tabUnderline"]
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
  tabUnderline: typeof TabUnderline;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicShowTeam__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicShowTeam__VariantsArgs;
    args?: PlasmicShowTeam__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicShowTeam__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicShowTeam__ArgsType,
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
          internalArgPropNames: PlasmicShowTeam__ArgProps,
          internalVariantPropNames: PlasmicShowTeam__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicShowTeam__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicShowTeam";
  } else {
    func.displayName = `PlasmicShowTeam.${nodeName}`;
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

export const PlasmicShowTeam = Object.assign(
  // Top-level PlasmicShowTeam renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    showteamNavbar: makeNodeComponent("showteamNavbar"),
    userteamNavbar: makeNodeComponent("userteamNavbar"),
    tabsContainer: makeNodeComponent("tabsContainer"),
    tabUnderline: makeNodeComponent("tabUnderline"),

    // Metadata about props expected for PlasmicShowTeam
    internalVariantProps: PlasmicShowTeam__VariantProps,
    internalArgProps: PlasmicShowTeam__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicShowTeam;
/* prettier-ignore-end */
