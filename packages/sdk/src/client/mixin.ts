// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const applyMixins = (derivedCtor: any, constructors: any[]) => {
  constructors.forEach((baseCtor) => {
    console.log(baseCtor);
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null),
      );
    });
  });
};
