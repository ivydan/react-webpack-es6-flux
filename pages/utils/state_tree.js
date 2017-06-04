"use strict";

import Baobab from "baobab";

const rootState = {
    pages: {
        btnPress: false,
        loading: true
    },     
}

const tree = new Baobab(rootState, {
    immutable: true
});

window._tree = tree;

export default tree;