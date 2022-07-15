export function getSelectOptionProp<Type, Key extends keyof Type>(
  options: Array<Type>,
  propName: Key,
  value: Type[Key]
): Type | undefined {
  return options.find((i) => i[propName] === value);
}
