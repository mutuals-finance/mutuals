export function isObject(item: unknown): boolean {
  return Boolean(item && typeof item === "object" && !Array.isArray(item));
}

export function deepMerge<T>(obj1: T, obj2: Partial<T>): T {
  const output = { ...obj1 } as Record<string, unknown>;
  const source1 = obj1 as Record<string, unknown>;
  const source2 = obj2 as Record<string, unknown>;

  for (const key in source2) {
    if (Object.hasOwn(source2, key)) {
      if (
        typeof source2[key] === "object" &&
        !Array.isArray(source2[key]) &&
        source1[key]
      ) {
        output[key] = deepMerge(
          source1[key] as Record<string, unknown>,
          source2[key] as Record<string, unknown>
        );
      } else {
        output[key] = source2[key];
      }
    }
  }

  return output as T;
}
