export default function citation_to_id(citation) {
    console.warn("citation_to_id", citation)
  const body = citation.replace(/\((.*)\)/, '$1');
  const result = body.split(/[^A-Za-z0-9]+/).join('_');
  console.warn("->", result);
  return result;
}