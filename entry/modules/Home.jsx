import React from 'react';

import {render} from 'react-dom';
import { Link } from 'react-router'

import Brief from './Brief.jsx';
import Footer from './Footer.jsx';
import Nav from '../../components/basic/Nav.jsx';
import ScaleBar from '../../components/basic/ScaleBar.jsx';
import CommonFunction from './CommonFunction.jsx';

import '../../css/entry/modules/home.css';

import MENU from '../../data/menus.json';
import Scales from '../../data/scaleBar.json';
import Scrolls from '../../data/scrolls.json';


var Home =React.createClass({
    app$init:function(){
    },
    render:function(){
        return (
            <div>
                <Nav logo={Deploy.getResourceDeployPrefix()+"/"+"images/school_logo.png"} data={MENU}/>

                <div className="topbg"></div>

                <div className="keyNavigation">
                    <div className="top">
                        <div className="block">
                            <Brief data={['欢迎登陆山东大学数字迎新系统，请仔细阅读报道须知和各类通知,','并尽快选择下面的功能按要求完善相关信息和业务申请.']}/>
                        </div>
                    </div>
                    <div className="bottom">
                        <CommonFunction auto={true} />
                    </div>
                </div>
                {this.props.children}
                <ScaleBar data={Scales}/>
                <Footer/>
            </div>
        )
    },
    componentDidMount:function(){
        this.app$init();
    }
});

export default Home;