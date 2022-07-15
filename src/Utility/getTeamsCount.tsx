export const getTeamsCount = (size: number) => {
  return 2 ** Math.ceil(Math.log(size) / Math.log(2));
};
