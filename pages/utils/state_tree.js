"use strict";

import Baobab from "baobab";

const rootState = {
    pages: {
        btnPress: false,
    },     
}

const tree = new Baobab(rootState, {
    immutable: true
});

window._tree = tree;

export default tree;