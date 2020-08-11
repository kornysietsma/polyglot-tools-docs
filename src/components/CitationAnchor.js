import React from "react"

const CitationAnchor = (props) => {
    let text = props.children;
 
  return <h3 className='citation-anchor' id={text}>[{text}]&nbsp;</h3>;
}

export default CitationAnchor;