export class Collection<T> {
  map: Record<string, T>;
  list: T[];

  constructor(
    data: T[] | Record<string, T>,
    idFn: (item: T) => string = (item: any) => item.id,
  ) {
    if (Array.isArray(data)) {
      this.map = Object.fromEntries(data.map((item) => [idFn(item), item]));
      this.list = data;
    } else {
      this.map = data;
      this.list = Object.values(data);
    }
  }

  static fromList<T>(
    list: T[],
    idFn: (item: T) => string = (item: any) => item.id,
  ): Collection<T> {
    return new Collection(list, idFn);
  }

  static fromMap<T>(map: Record<string, T>): Collection<T> {
    return new Collection(map);
  }
}
