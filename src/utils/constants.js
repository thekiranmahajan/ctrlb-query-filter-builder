const attributes = [
  "conatiner_id",
  "container_name",
  "severity_number",
  "body",
  "trace_id",
  "span_id",
  "trace_flags",
  "severity_text",
];

const operations = ["=", "!=", "IN", "NOT_IN", "LIKE", "NOT_LIKE", "CONTAINS"];

export const getDropdownOptions = (step) => {
  if (step === "attribute") return attributes;
  if (step === "operation") return operations;
  return [];
};
