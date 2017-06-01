"use strict";

import _ from "lodash";
import commons from "./commons.js";

const actions = {
    showPress(tree, show){
        console.log(tree.select("pages").get())
        tree.select("pages","btnPress").set(show)
    }
}

export default commons.promisifyActions(actions);