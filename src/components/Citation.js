import React from "react"
import { Link } from "gatsby";

const Citation = (props) => {
    const dest = props.to;
    let text = props.children;
    if (!text || text.trim() === "") {
        text = `[${dest}]`
    }

  return <Link to={`/bibliography#${dest}`}>{text}</Link>;
}

export default Citation;