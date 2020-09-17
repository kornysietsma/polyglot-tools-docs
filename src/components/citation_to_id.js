export default function citation_to_id(citation) {
  const body = citation.replace(/\((.*)\)/, '$1');
  return body.split(/[^A-Za-z0-9]+/).join('_');
}