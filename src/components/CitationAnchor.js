import React from "react"
import citation_to_id from "./citation_to_id";

const CitationAnchor = (props) => {
    let text = props.children;
 
  return <span className='citation-anchor' id={citation_to_id(text)}>{text}&nbsp;</span>;
}

export default CitationAnchor;