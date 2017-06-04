"use strict";

import React, {Component} from 'react';
import { branch} from "baobab-react/higher-order";
import classNames from "classnames";
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import styles from "../index.less";

import _ from "lodash";
import actions from "../utils/actions";
import commons from "../utils/commons";
import locale from "../utils/locale";
import ajax from "../utils/ajax";

class Page extends Component {
    constructor(props) {
        super(props);
        _.bindAll(this, "handleClickPress");
        commons.initComponent(this, {
            actions: actions
        });

    }

    handleClickPress() {
        this.dispatch("showPress", !this.props.data.btnPress)
    }

    render() {
        let {data} = this.props;
        let div1Class = classNames({
            'div1': true,
            'btn-pressed': this.props.data.btnPress,
            'btn-over': !this.props.data.btnPress
        })
        if(data.loading){
           return <span>Loading</span>; 
        }
        return (
            <div>
                <div className={div1Class} onClick={this.handleClickPress} style={style}>
                    plase Click
                    <pre>
                        classNames("format")
                    </pre>
                </div>

            </div>
        )
    }
}

export default branch({
    data: ['pages']
}, Page);