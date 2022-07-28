export const Operators = [
  { name: "Igual a ", operator: "=", query: "", type: "number" },
  { name: "Maior que ", operator: ">", query: "_gt", type: "number" },
  { name: "Menor que ", operator: "<", query: "_lt", type: "number" },
  { name: "Maior ou igual a ", operator: ">=", query: "_gte", type: "number" },
  { name: "Menor ou igual a ", operator: "<=", query: "_lte", type: "number" },
  { name: "Diferente de ", operator: "!==", query: "_ne", type: "number" },
  {
    name: "Começa em ",
    operator: "startsWith",
    query: "_startsWith",
    type: "string",
  },
  {
    name: "Acaba em ",
    operator: "endsWith",
    query: "_endsWith",
    type: "string",
  },
  {
    name: "Igual a ",
    operator: "equalTo",
    query: "_like",
    type: "string",
  },
  {
    name: "Diferente de ",
    operator: "notEqualTo",
    query: "_notLike",
    type: "string",
  },
  {
    name: "Contém ",
    operator: "contains",
    query: "_substring",
    type: "string",
  },
];
