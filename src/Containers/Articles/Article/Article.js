// Libraries
import React from "react";

function Article(props) {
    return <h1>Un article ({props.match.params.id})</h1>
}

export default Article;