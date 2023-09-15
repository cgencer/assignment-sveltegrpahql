
type ValuesOf<T> = T[keyof T]
	
export declare const Contents_select_column: {
    readonly content: "content";
    readonly content_json: "content_json";
    readonly createdAt: "createdAt";
    readonly extras: "extras";
    readonly id: "id";
    readonly main_category: "main_category";
    readonly owner: "owner";
    readonly parent: "parent";
    readonly parent_type: "parent_type";
    readonly taxonomy: "taxonomy";
    readonly title: "title";
    readonly type: "type";
    readonly updatedAt: "updatedAt";
}

export type Contents_select_column$options = ValuesOf<typeof Contents_select_column>
 
export declare const CrossBindings_select_column: {
    readonly contentID: "contentID";
    readonly createdAt: "createdAt";
    readonly extra: "extra";
    readonly id: "id";
    readonly type: "type";
    readonly userID: "userID";
}

export type CrossBindings_select_column$options = ValuesOf<typeof CrossBindings_select_column>
 
export declare const cursor_ordering: {
    readonly ASC: "ASC";
    readonly DESC: "DESC";
}

export type cursor_ordering$options = ValuesOf<typeof cursor_ordering>
 
export declare const order_by: {
    readonly asc: "asc";
    readonly asc_nulls_first: "asc_nulls_first";
    readonly asc_nulls_last: "asc_nulls_last";
    readonly desc: "desc";
    readonly desc_nulls_first: "desc_nulls_first";
    readonly desc_nulls_last: "desc_nulls_last";
}

export type order_by$options = ValuesOf<typeof order_by>
 
export declare const Users_select_column: {
    readonly avatar: "avatar";
    readonly bga_id: "bga_id";
    readonly bgg_id: "bgg_id";
    readonly birthday: "birthday";
    readonly createdAt: "createdAt";
    readonly email: "email";
    readonly firstName: "firstName";
    readonly id: "id";
    readonly lastName: "lastName";
    readonly password: "password";
    readonly updatedAt: "updatedAt";
    readonly userName: "userName";
    readonly wallet: "wallet";
}

export type Users_select_column$options = ValuesOf<typeof Users_select_column>
 