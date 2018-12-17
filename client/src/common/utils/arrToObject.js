export function arrToObject(arr, key = '_id') {
  return arr.reduce(
    (acc, value) => {
      acc[value[key]] = value;
      
      return acc;
    },
    {},
  );
}
