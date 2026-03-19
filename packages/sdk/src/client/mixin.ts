// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const applyMixins = (
  derivedCtor: { prototype: object },
  constructors: { prototype: object }[]
) => {
  for (const baseCtor of constructors) {
    for (const name of Object.getOwnPropertyNames(baseCtor.prototype)) {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    }
  }
};
