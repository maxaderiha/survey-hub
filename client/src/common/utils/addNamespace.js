export function addNamespace(object, namespace) {
  return Object.keys(object).reduce(
    (acc, key) => {
      acc[key] = namespace ? `${namespace}@${key}` : key;

      return acc;
    },
    {}
  );
}
