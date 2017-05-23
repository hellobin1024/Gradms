import React from 'react';

import {render} from 'react-dom';
import { Link } from 'react-router'

import Brief from './Brief.jsx';
import Footer from './Footer.jsx';
import Nav from '../../components/basic/Nav.jsx';
import ScaleBar from '../../components/basic/ScaleBar.jsx';
import CommonFunction from './CommonFunction.jsx';
import News from './News.jsx';

import '../../css/entry/modules/home.css';

import MENU from '../../data/menus.json';
import Scales from '../../data/scaleBar.json';
import Scrolls from '../../data/scrolls.json';

var ProxyQ=require('../../components/proxy/ProxyQ.js');
var SyncStore = require('../../components/flux/stores/SyncStore');

var Home =React.createClass({

    fetch:function(){
        ProxyQ.query({
            headers:{
                "Authorization":"Bearer "+SyncStore.getToken(),
            },
            url:"/node/menue",
            data:{
                request:"getTopMenue"
            },

        }).then(function(json){

            var a=json;
            alert(a);
        }).catch(function(e){
            alert(e);
        })
    },

    getInitialState:function(){
      return({topMenue:null})
    },

    render:function(){
        var mainContent=null;

        //if(this.state.topMenue!==undefined && this.state.topMenue!==null){
            mainContent=
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

                    <iframe style={{width:"100%",position:"relative"}} id="mainFrame" frameBorder="0" scrolling="no">
                        <News query={{
                        url:"/node/news",
                        data:{
                            request:"getNewsTypeList"
                        }
                    }}
                              auto={true}/>;
                    </iframe>

                    <Footer/>
                </div>
        //} else{
        //    this.fetch();
        //}

        return(
            <div>
                {mainContent}
            </div>
        )
    },
});

export default Home;