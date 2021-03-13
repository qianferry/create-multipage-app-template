import React from "react";
import { render } from "react-dom";

export function Test() {
    return <div>
        hello test
    </div>
}
render(<Test />, document.getElementById("root"))