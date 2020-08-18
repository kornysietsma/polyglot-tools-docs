import React from "react"
import { Link } from "gatsby";
import citation_to_id from "./citation_to_id";

const Citation = (props) => {
    const dest = props.to || props.children;
    const destId = citation_to_id(dest);
    let text = props.children;
    if (!text || text.trim() === "") {
        text = dest;
    }

  return <Link to={`/bibliography#${destId}`} title={dest}>{text}</Link>;
}

export default Citation;