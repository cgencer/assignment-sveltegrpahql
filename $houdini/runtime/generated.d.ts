import type { Record } from "./public/record";
import type { Users_select_column } from "$houdini/graphql/enums";
import type { CrossBindings_select_column } from "$houdini/graphql/enums";
import type { order_by } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { Contents_select_column } from "$houdini/graphql/enums";

type Contents_order_by = {
    content?: ValueOf<typeof order_by> | null | undefined;
    content_json?: ValueOf<typeof order_by> | null | undefined;
    createdAt?: ValueOf<typeof order_by> | null | undefined;
    extras?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    main_category?: ValueOf<typeof order_by> | null | undefined;
    owner?: ValueOf<typeof order_by> | null | undefined;
    parent?: ValueOf<typeof order_by> | null | undefined;
    parent_type?: ValueOf<typeof order_by> | null | undefined;
    taxonomy?: ValueOf<typeof order_by> | null | undefined;
    title?: ValueOf<typeof order_by> | null | undefined;
    type?: ValueOf<typeof order_by> | null | undefined;
    updatedAt?: ValueOf<typeof order_by> | null | undefined;
};

type String_comparison_exp = {
    _eq?: string | null | undefined;
    _gt?: string | null | undefined;
    _gte?: string | null | undefined;
    _ilike?: string | null | undefined;
    _in?: (string)[] | null | undefined;
    _iregex?: string | null | undefined;
    _is_null?: boolean | null | undefined;
    _like?: string | null | undefined;
    _lt?: string | null | undefined;
    _lte?: string | null | undefined;
    _neq?: string | null | undefined;
    _nilike?: string | null | undefined;
    _nin?: (string)[] | null | undefined;
    _niregex?: string | null | undefined;
    _nlike?: string | null | undefined;
    _nregex?: string | null | undefined;
    _nsimilar?: string | null | undefined;
    _regex?: string | null | undefined;
    _similar?: string | null | undefined;
};

type json_comparison_exp = {
    _eq?: any | null | undefined;
    _gt?: any | null | undefined;
    _gte?: any | null | undefined;
    _in?: (any)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: any | null | undefined;
    _lte?: any | null | undefined;
    _neq?: any | null | undefined;
    _nin?: (any)[] | null | undefined;
};

type timestamptz_comparison_exp = {
    _eq?: any | null | undefined;
    _gt?: any | null | undefined;
    _gte?: any | null | undefined;
    _in?: (any)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: any | null | undefined;
    _lte?: any | null | undefined;
    _neq?: any | null | undefined;
    _nin?: (any)[] | null | undefined;
};

type Int_comparison_exp = {
    _eq?: number | null | undefined;
    _gt?: number | null | undefined;
    _gte?: number | null | undefined;
    _in?: (number)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: number | null | undefined;
    _lte?: number | null | undefined;
    _neq?: number | null | undefined;
    _nin?: (number)[] | null | undefined;
};

type Contents_bool_exp = {
    _and?: (Contents_bool_exp)[] | null | undefined;
    _not?: Contents_bool_exp | null | undefined;
    _or?: (Contents_bool_exp)[] | null | undefined;
    content?: String_comparison_exp | null | undefined;
    content_json?: json_comparison_exp | null | undefined;
    createdAt?: timestamptz_comparison_exp | null | undefined;
    extras?: json_comparison_exp | null | undefined;
    id?: Int_comparison_exp | null | undefined;
    main_category?: String_comparison_exp | null | undefined;
    owner?: Int_comparison_exp | null | undefined;
    parent?: String_comparison_exp | null | undefined;
    parent_type?: String_comparison_exp | null | undefined;
    taxonomy?: json_comparison_exp | null | undefined;
    title?: String_comparison_exp | null | undefined;
    type?: String_comparison_exp | null | undefined;
    updatedAt?: timestamptz_comparison_exp | null | undefined;
};

type CrossBindings_order_by = {
    bindB?: Contents_order_by | null | undefined;
    contentID?: ValueOf<typeof order_by> | null | undefined;
    createdAt?: ValueOf<typeof order_by> | null | undefined;
    extra?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    type?: ValueOf<typeof order_by> | null | undefined;
    userID?: ValueOf<typeof order_by> | null | undefined;
};

type timestamp_comparison_exp = {
    _eq?: any | null | undefined;
    _gt?: any | null | undefined;
    _gte?: any | null | undefined;
    _in?: (any)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: any | null | undefined;
    _lte?: any | null | undefined;
    _neq?: any | null | undefined;
    _nin?: (any)[] | null | undefined;
};

type CrossBindings_bool_exp = {
    _and?: (CrossBindings_bool_exp)[] | null | undefined;
    _not?: CrossBindings_bool_exp | null | undefined;
    _or?: (CrossBindings_bool_exp)[] | null | undefined;
    bindB?: Contents_bool_exp | null | undefined;
    contentID?: Int_comparison_exp | null | undefined;
    createdAt?: timestamp_comparison_exp | null | undefined;
    extra?: String_comparison_exp | null | undefined;
    id?: Int_comparison_exp | null | undefined;
    type?: String_comparison_exp | null | undefined;
    userID?: Int_comparison_exp | null | undefined;
};

type Users_order_by = {
    avatar?: ValueOf<typeof order_by> | null | undefined;
    bga_id?: ValueOf<typeof order_by> | null | undefined;
    bgg_id?: ValueOf<typeof order_by> | null | undefined;
    binderA?: CrossBindings_order_by | null | undefined;
    birthday?: ValueOf<typeof order_by> | null | undefined;
    createdAt?: ValueOf<typeof order_by> | null | undefined;
    email?: ValueOf<typeof order_by> | null | undefined;
    firstName?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    lastName?: ValueOf<typeof order_by> | null | undefined;
    password?: ValueOf<typeof order_by> | null | undefined;
    updatedAt?: ValueOf<typeof order_by> | null | undefined;
    userName?: ValueOf<typeof order_by> | null | undefined;
    wallet?: ValueOf<typeof order_by> | null | undefined;
};

type Users_bool_exp = {
    _and?: (Users_bool_exp)[] | null | undefined;
    _not?: Users_bool_exp | null | undefined;
    _or?: (Users_bool_exp)[] | null | undefined;
    avatar?: String_comparison_exp | null | undefined;
    bga_id?: String_comparison_exp | null | undefined;
    bgg_id?: String_comparison_exp | null | undefined;
    binderA?: CrossBindings_bool_exp | null | undefined;
    birthday?: timestamptz_comparison_exp | null | undefined;
    createdAt?: timestamptz_comparison_exp | null | undefined;
    email?: String_comparison_exp | null | undefined;
    firstName?: String_comparison_exp | null | undefined;
    id?: Int_comparison_exp | null | undefined;
    lastName?: String_comparison_exp | null | undefined;
    password?: String_comparison_exp | null | undefined;
    updatedAt?: timestamptz_comparison_exp | null | undefined;
    userName?: String_comparison_exp | null | undefined;
    wallet?: String_comparison_exp | null | undefined;
};

export declare type CacheTypeDef = {
    types: {
        Contents: {
            idFields: {
                id: number;
            };
            fields: {
                content: {
                    type: string | null;
                    args: never;
                };
                content_json: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                extras: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                id: {
                    type: number;
                    args: never;
                };
                main_category: {
                    type: string | null;
                    args: never;
                };
                owner: {
                    type: number | null;
                    args: never;
                };
                parent: {
                    type: string | null;
                    args: never;
                };
                parent_type: {
                    type: string | null;
                    args: never;
                };
                taxonomy: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                title: {
                    type: string | null;
                    args: never;
                };
                type: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Contents_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "Contents">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        CrossBindings: {
            idFields: {
                id: number;
            };
            fields: {
                bindB: {
                    type: Record<CacheTypeDef, "Contents"> | null;
                    args: never;
                };
                contentID: {
                    type: number;
                    args: never;
                };
                createdAt: {
                    type: any;
                    args: never;
                };
                extra: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                userID: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        CrossBindings_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "CrossBindings">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        Users: {
            idFields: {
                id: number;
            };
            fields: {
                avatar: {
                    type: string | null;
                    args: never;
                };
                bga_id: {
                    type: string | null;
                    args: never;
                };
                bgg_id: {
                    type: string | null;
                    args: never;
                };
                binderA: {
                    type: Record<CacheTypeDef, "CrossBindings"> | null;
                    args: never;
                };
                birthday: {
                    type: any | null;
                    args: never;
                };
                createdAt: {
                    type: any;
                    args: never;
                };
                email: {
                    type: string;
                    args: never;
                };
                firstName: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
                lastName: {
                    type: string | null;
                    args: never;
                };
                password: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any;
                    args: never;
                };
                userName: {
                    type: string;
                    args: never;
                };
                wallet: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Users_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "Users">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                Contents: {
                    type: (Record<CacheTypeDef, "Contents">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof Contents_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (Contents_order_by)[] | null | undefined;
                        where?: Contents_bool_exp | null | undefined;
                    };
                };
                CrossBindings: {
                    type: (Record<CacheTypeDef, "CrossBindings">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof CrossBindings_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (CrossBindings_order_by)[] | null | undefined;
                        where?: CrossBindings_bool_exp | null | undefined;
                    };
                };
                Users: {
                    type: (Record<CacheTypeDef, "Users">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof Users_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (Users_order_by)[] | null | undefined;
                        where?: Users_bool_exp | null | undefined;
                    };
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [];
};