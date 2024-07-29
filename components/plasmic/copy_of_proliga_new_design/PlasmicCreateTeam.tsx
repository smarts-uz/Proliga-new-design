// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qrPZwqtrqWM4S9b4djCj1H
// Component: fczUHaSabDbG

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
import TextInput from "../../TextInput"; // plasmic-import: 1UJD2btGUkCV/component
import Button from "../../Button"; // plasmic-import: JtHKLkRqLyx-/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qrPZwqtrqWM4S9b4djCj1H/projectcss
import sty from "./PlasmicCreateTeam.module.css"; // plasmic-import: fczUHaSabDbG/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: DJCZ30FSSW4V/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: wUfM8ozzkHkf/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 3vZ6LsfPOxdi/icon

createPlasmicElementProxy;

export type PlasmicCreateTeam__VariantMembers = {};
export type PlasmicCreateTeam__VariantsArgs = {};
type VariantPropType = keyof PlasmicCreateTeam__VariantsArgs;
export const PlasmicCreateTeam__VariantProps = new Array<VariantPropType>();

export type PlasmicCreateTeam__ArgsType = {};
type ArgPropType = keyof PlasmicCreateTeam__ArgsType;
export const PlasmicCreateTeam__ArgProps = new Array<ArgPropType>();

export type PlasmicCreateTeam__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  img?: Flex__<typeof PlasmicImg__>;
  textInput?: Flex__<typeof TextInput>;
};

export interface DefaultCreateTeamProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCreateTeam__RenderFunc(props: {
  variants: PlasmicCreateTeam__VariantsArgs;
  args: PlasmicCreateTeam__ArgsType;
  overrides: PlasmicCreateTeam__OverridesType;
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
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
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
                return 0;
              }
              throw e;
            }
          })()
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
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "6cdb8688-4549-4b3d-8e39-2992ba364043",
        userArgs: {
          params: [$ctx.params.id]
        },
        cacheKey: `plasmic.$.${(() => {
          try {
            return undefined;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.6cdb8688-4549-4b3d-8e39-2992ba364043.$.`,
        invalidatedKeys: null,
        roleId: "ead2b235-73a3-4579-b15a-7fc91fc1a23a"
      };
    }),
    userTeam: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "14a0b3c3-f5a9-40d2-845f-772396135c14",
        userArgs: {
          params: [$state.userId, $queries.query.data.response[0].id]
        },
        cacheKey: `plasmic.$.14a0b3c3-f5a9-40d2-845f-772396135c14.$.`,
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

          <div className={classNames(projectcss.all, sty.columns__nZrtp)}>
            <div className={classNames(projectcss.all, sty.column__jZk2P)}>
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                loading={"lazy"}
                src={(() => {
                  try {
                    return $queries.query.data.response[0].flag;
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
                width={``}
              />
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__oxoxI)}
            >
              <div className={classNames(projectcss.all, sty.columns__g4VHp)}>
                {(() => {
                  try {
                    return $queries.userTeam.data.response[0].name === null;
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
                    className={classNames(projectcss.all, sty.column__seAtc)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1___5PkXj
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return (
                              "Fantasy " + $queries.query.data.response[0].title
                            );
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
                    </h1>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___6CdrU
                      )}
                    >
                      <TextInput
                        data-plasmic-name={"textInput"}
                        data-plasmic-override={overrides.textInput}
                        autoFocus={false}
                        className={classNames("__wab_instance", sty.textInput)}
                        name={``}
                        onChange={(...eventArgs) => {
                          generateStateOnChangeProp($state, [
                            "textInput",
                            "value"
                          ])((e => e.target?.value).apply(null, eventArgs));
                        }}
                        placeholder={"Komandangizni nomi"}
                        required={true}
                        type={"text"}
                        value={
                          generateStateValueProp($state, [
                            "textInput",
                            "value"
                          ]) ?? ""
                        }
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__l6VQ9
                        )}
                        color={"green"}
                        onClick={async event => {
                          const $steps = {};

                          $steps["updateName"] = true
                            ? (() => {
                                const actionArgs = {
                                  dataOp: {
                                    sourceId: "vQtRPuFArSfh43vUmgx2PS",
                                    opId: "5a02af5c-a3d5-4c02-b63b-60a37a55d539",
                                    userArgs: {
                                      params: [
                                        $state.userId,
                                        $queries.query.data.response[0].id
                                      ],
                                      body: [$state.textInput.value]
                                    },
                                    cacheKey: null,
                                    invalidatedKeys: ["plasmic_refresh_all"],
                                    roleId: null
                                  }
                                };
                                return (async ({ dataOp, continueOnError }) => {
                                  try {
                                    const response = await executePlasmicDataOp(
                                      dataOp,
                                      {
                                        userAuthToken:
                                          dataSourcesCtx?.userAuthToken,
                                        user: dataSourcesCtx?.user
                                      }
                                    );
                                    await plasmicInvalidate(
                                      dataOp.invalidatedKeys
                                    );
                                    return response;
                                  } catch (e) {
                                    if (!continueOnError) {
                                      throw e;
                                    }
                                    return e;
                                  }
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateName"] != null &&
                            typeof $steps["updateName"] === "object" &&
                            typeof $steps["updateName"].then === "function"
                          ) {
                            $steps["updateName"] = await $steps["updateName"];
                          }

                          $steps["goToEditTeam2"] =
                            $state.textInput.value.length !== 0
                              ? (() => {
                                  const actionArgs = {
                                    destination: `/${(() => {
                                      try {
                                        return $queries.query.data.response[0]
                                          .id;
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return undefined;
                                        }
                                        throw e;
                                      }
                                    })()}/${(() => {
                                      try {
                                        return $queries.userTeam.data
                                          .response[0].id;
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
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
                            $steps["goToEditTeam2"] != null &&
                            typeof $steps["goToEditTeam2"] === "object" &&
                            typeof $steps["goToEditTeam2"].then === "function"
                          ) {
                            $steps["goToEditTeam2"] = await $steps[
                              "goToEditTeam2"
                            ];
                          }
                        }}
                      >
                        {"O'ynash"}
                      </Button>
                    </Stack__>
                  </div>
                ) : null}
                {(() => {
                  try {
                    return $queries.userTeam.data.response[0].name !== null;
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
                  <div className={classNames(projectcss.all, sty.column__rVqS)}>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__lzNrg)}
                    >
                      <h1
                        className={classNames(
                          projectcss.all,
                          projectcss.h1,
                          projectcss.__wab_text,
                          sty.h1___4Isrz
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return "Komandani nomi: ";
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Team name";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </h1>
                      <h1
                        className={classNames(
                          projectcss.all,
                          projectcss.h1,
                          projectcss.__wab_text,
                          sty.h1__iMrW6
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $queries.userTeam.data.response[0].name;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Team name";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </h1>
                    </div>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__xtbYw
                      )}
                      color={"green"}
                      onClick={async event => {
                        const $steps = {};

                        $steps["goToEditTeam2"] = true
                          ? (() => {
                              const actionArgs = {
                                destination: `/${(() => {
                                  try {
                                    return $queries.query.data.response[0].id;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}/${(() => {
                                  try {
                                    return $queries.userTeam.data.response[0]
                                      .id;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
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
                          $steps["goToEditTeam2"] != null &&
                          typeof $steps["goToEditTeam2"] === "object" &&
                          typeof $steps["goToEditTeam2"].then === "function"
                        ) {
                          $steps["goToEditTeam2"] = await $steps[
                            "goToEditTeam2"
                          ];
                        }
                      }}
                    >
                      {"Komandaga o'tish"}
                    </Button>
                  </div>
                ) : null}
              </div>
            </Stack__>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "img", "textInput"],
  navbar: ["navbar"],
  img: ["img"],
  textInput: ["textInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  img: typeof PlasmicImg__;
  textInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCreateTeam__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCreateTeam__VariantsArgs;
    args?: PlasmicCreateTeam__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCreateTeam__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCreateTeam__ArgsType,
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
          internalArgPropNames: PlasmicCreateTeam__ArgProps,
          internalVariantPropNames: PlasmicCreateTeam__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCreateTeam__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCreateTeam";
  } else {
    func.displayName = `PlasmicCreateTeam.${nodeName}`;
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

export const PlasmicCreateTeam = Object.assign(
  // Top-level PlasmicCreateTeam renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    img: makeNodeComponent("img"),
    textInput: makeNodeComponent("textInput"),

    // Metadata about props expected for PlasmicCreateTeam
    internalVariantProps: PlasmicCreateTeam__VariantProps,
    internalArgProps: PlasmicCreateTeam__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCreateTeam;
/* prettier-ignore-end */
