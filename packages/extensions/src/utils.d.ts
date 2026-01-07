export declare class Collection<T> {
    map: Record<string, T>;
    list: T[];
    constructor(data: T[] | Record<string, T>, idFn?: (item: T) => string);
    static fromList<T>(list: T[], idFn?: (item: T) => string): Collection<T>;
    static fromMap<T>(map: Record<string, T>): Collection<T>;
}
//# sourceMappingURL=utils.d.ts.map