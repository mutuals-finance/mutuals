export function partition<T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => boolean,
) {
  return array.reduce(
    function (result: T[][], element, i) {
      callback(element, i, array)
        ? result[0]?.push(element)
        : result[1]?.push(element);

      return result;
    },
    [[], []],
  );
}
