import React from 'react';
import {render} from 'react-dom';
import '../../css/entry/modules/mainSection.css';
import EnglishApply from '../modules/EnglishApply.jsx';
import GreenChannelApply from '../modules/GreenChannelApply.jsx';
import Brief from './Brief.jsx';
import Footer from './Footer.jsx';
import Nav from '../../components/basic/Nav.jsx';
import ScaleBar from '../../components/basic/ScaleBar.jsx';
import CommonFunction from './CommonFunction.jsx';
import MENU from '../../data/menus.json';
import Scales from '../../data/scaleBar.json';
import Scrolls from '../../data/scrolls.json';
import StudentStatusInfo from '../../entry/modules/test'
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var WorkSpace =React.createClass({

    remote(remoteObj) {
        // Only cell editing, insert and delete row will be handled by remote store
        remoteObj.cellEdit = true;
        remoteObj.insertRow = true;
        remoteObj.dropRow = true;
        return remoteObj;
    },
    iframeLoad:function(evt)
        {
            var target=evt.target;
            //$("#mainFrame").context.documentElement.scrollHeight
            var height=null;
            height=target.contentDocument.body.scrollHeight;
            target.height=height;
            //height=document.body.scrollHeight;

        },
    test:function () {
        ProxyQ.query({
            headers:{
                "Authorization":"Bearer "+SyncStore.getToken(),
            },
            url:"/node/test",
            data:{
                request:"test"
            },

        }).then(function(json){

            var a=json;
            alert(a);
        }).catch(function(e){
            alert(e);
        })
    },
    render :function(){
        var path=this.props.path==undefined?this.props.route.path:this.props.path;

        var ctrl;

        const cellEditProp = {
            mode: 'click'
        };
        const selectRow = {
            mode: 'checkbox',
            cliclToSelct: true
        };
        var products = [{
            id: 1,
            name: 1,
            price: 120
        }, {
            id: 2,
            name: 1,
            price: 80
        },{
            id: 3,
            name: 1,
            price: 80
        }];

        switch (path) {
            case App.getAppRoute() + "/app":
                ctrl =
                    <div>
                       2
                    </div>
                break;
            case App.getAppRoute() + "/workspaceEnglishApply":
                ctrl =
                    <iframe style={{width:"100%",position:"relative"}} id="mainFrame"
                            frameBorder="0" scrolling="no" src={"/englishApply"} onLoad={this.iframeLoad}
                                     />
                break;
            case App.getAppRoute() + "/greenChannelApply":
                ctrl =
                    <GreenChannelApply/>
                break;
            case App.getAppRoute() + "/workspaceStudentStatusInfo":
                ctrl =
                    <StudentStatusInfo/>
                break;
            default:
                break;
        }

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
            <div style={{margin: "0px auto 0 auto",paddingBottom:"200px",width:"100%"}} className="baba">
                <div ref="mainSection" className="mainSection"
                     style={{width:"1024px",marginLeft:"auto",marginRight:"auto"}}>

                    {ctrl}
                </div>
            </div>
            <ScaleBar data={Scales}/>
            <Footer/>
        </div>

        );
    },

});
module.exports=WorkSpace;