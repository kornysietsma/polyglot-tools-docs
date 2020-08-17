import React from "react"

const CitationAnchor = (props) => {
    let text = props.children;
 
  return <span className='citation-anchor' id={text}>[{text}]&nbsp;</span>;
}

export default CitationAnchor;