import React from "react";
import { render } from "react-dom";

export function Index() {
    return <div>
        hello
    </div>
}
render(<Index />, document.getElementById("root"))