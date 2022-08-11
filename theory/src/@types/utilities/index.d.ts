type IndexeOf<T extends readonly unknown[], S extends number[] = []> = T["length"] extends S["length"] ? S[number] : IndexeOf<T, [S["length"], ...S]>;

type TEmpty = undefined | null;

/*
    const a = [1, 2, 3] as const;
    type F = IndexeOf<typeof a>;
*/
