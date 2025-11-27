export function isObject(item: unknown): boolean {
  return Boolean(item && typeof item === "object" && !Array.isArray(item));
}

export default function deepMerge(obj1: any, obj2: any) {
  const output = { ...obj1 };

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (
        typeof obj2[key as keyof typeof obj2] === "object" &&
        !Array.isArray(obj2[key as keyof typeof obj2]) &&
        obj1[key]
      ) {
        output[key] = deepMerge(obj1[key], obj2[key as keyof typeof obj2]);
      } else {
        output[key] = obj2[key as keyof typeof obj2];
      }
    }
  }

  return output;
}
