export const queryBuilder = (filters) => {
  if (!filters || filters.length === 0) return "";
  return `&${filters.reduce(
    (p, c, i) => (p += `${i > 0 ? "&" : ""}${c.query}`),
    ""
  )}`;
};
