type IndexeOf<T extends readonly unknown[], S extends number[] = []> = T["length"] extends S["length"] ? S[number] : IndexeOf<T, [S["length"], ...S]>;

/*
    const a = [1, 2, 3] as const;
    type F = IndexeOf<typeof a>;
*/
