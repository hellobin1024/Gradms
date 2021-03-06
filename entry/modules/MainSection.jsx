import React from 'react';
import {render} from 'react-dom';

var config=require('../../config.json');
import '../../css/entry/modules/mainSection.css';
var SyncActions = require('../../components/flux/actions/SyncActions');


var MainSection = React.createClass({
    iframeLoad:function(evt)
    {
        var target=evt.target;
        //$("#mainFrame").context.documentElement.scrollHeight
        var height=null;
        height=target.contentDocument.body.scrollHeight;
        target.height=height;
        //height=document.body.scrollHeight;
    },
    // syncHandle     : function (ob) {
    //     //TODO:create new ob or update...
    //     var route = this.state.route[0];
    //     var label;
    //     switch (route)
    //     {
    //         case "/password/modify":
    //             label = "密码修改";
    //             break;
    //         case "/allCourseQuery":
    //             label = "成绩查询";
    //             break;
    //         case "/news":
    //             label = "查看新闻";
    //             break;
    //         default:
    //             label = "";
    //             break;
    //     }
    //     if (ob.completed) {
    //         SyncActions.cleanRoute(route);
    //     }
    //     else
    //         SyncActions.updateData(route, ob.required, label);
    // },
    getInitialState: function () {
        var route = new Array();
        route.push(undefined);
        return ({route: route});
    },
    // testTab:function (e) {
    //
    //
    //             // Get the name of active tab
    //             var activeTab = $(e.target).text();
    //             // Get the name of previous tab
    //             var previousTab = $(e.relatedTarget).text();
    //             $(".active-tab span").html(activeTab);
    //             $(".previous-tab span").html(previousTab);
    //
    //
    // },
    render:function(){
        var path=this.props.route.path;
        var ctrl;
        var breadcrumb;
        var label;
        var data=this.props.route.data;
        if(path!==undefined&&path!==null)
        {
            var route = this.state.route;
            if (route.length != 1)
                route.splice(0, 1);
            route.push(path);
            switch(path)
            {
                case App.getAppRoute() + "/app":
                    ctrl =
                        <div>qqq</div>
                    break;
                case App.getAppRoute() + "/englishApply":
                    ctrl = <iframe style={{width:"100%",position:"relative"}} id="mainFrame"
                            frameBorder="0" scrolling="no" src={"/englishApply"} onLoad={this.iframeLoad}
                    />
                    break;
                case App.getAppRoute() + "/news":
                    //ctrl = <News query={{
                    //                         url:"/bsuims/reactPageDataRequest.do",
                    //                        params:{
                    //                            reactPageName:"groupNewsReactPage",
                    //                            reactActionName:"listTypeNewsUseReact"
                    //                        }
                    //                     }}
                    //             auto={true}/>;
                    label = "新闻查询业务";
                    break;
                case App.getAppRoute() + "/newCultivateAllCourseQueryPage":
                    //ctrl = <AllCourseQuery/>;
                    label = "课程查询业务";
                    break;
                case App.getAppRoute() + "/diminishMain":
                    //ctrl = <DiminishMain/>;
                    label = "制定培养计划";
                    break;
                default:
                    // var reg=/.*\.do.*[\.do|\.jsp]?.*/;
                    //
                    // var re=reg.exec(path);
                    // console.log('data===' + data);
                    // console.log('origin path==='+path);
                    // var proxyServer="";
                    // if(window.App.getModel()=="debug")
                    // {
                    //     if(window.App.getAppRoute()=="")
                    //     {
                    //         console.log('......');
                    //         var proxy=config.devServer.proxy;
                    //         for (var field in proxy)
                    //         {
                    //             var re = /\/(.*?)\//;
                    //             proxyServer= re.exec(field)[1];
                    //             break;
                    //         }
                    //     }
                    //     else if(window.App.getAppRoute().indexOf("/")!=-1)
                    //     {
                    //         var re = /^(\/.*?)\//;
                    //         proxyServer= re.exec(window.App.getAppRoute())[1];
                    //     }
                    // }else{
                    //     proxyServer='';
                    // }
                    //
                    //
                    // if(re!==undefined&&re!==null)
                    // {
                    //     //TODO:iframe component render
                    //     path=path.replace(App.getAppRoute(),"");
                    //     console.log('iframe in mainsection,path=' + path);
                    //     ctrl=
                    //         <iframe style={{width:"100%",position:"relative"}} id="mainFrame"
                    //                  frameBorder="0" scrolling="no" src={"/"+proxyServer+path+(data!=null&&data!==undefined?data:"")} onLoad={this.iframeLoad}
                    //             />

                    // }else{
                    //
                    // }
                    break;
            }
            // ctrl=
            //     <iframe style={{width:"100%",position:"relative"}} id="mainFrame"
            //             frameBorder="0" scrolling="no" src={"../../entry/modules/test.jsx"} onLoad={this.iframeLoad}
            //     />

            // var paths=path.split("/");
            // var spans=new Array();
            // if(paths[0]==""&&paths[1]=="")
            // {
            //     spans.push(<span className="separator" key={0}>/</span>);
            // }else{
            //     var k=0;
            //     paths.map(function(item,i) {
            //         if(i==0)
            //             spans.push(<span className="separator" key={k++}></span>);
            //         else
            //         {
            //             spans.push(<span className="path-segment" key={k++}>{item}</span>);
            //             if(i!==paths.length-1)
            //                 spans.push(<span className="separator" key={k++}>/</span>);
            //         }
            //
            //     });
            // }
            // breadcrumb =
            //     <div className="crumb_box">
            //         <div className="crumb_title">
            //             <span className="crumb_title_content">{spans}</span>
            //
            //             <div className="crumb_detail">{label}</div>
            //         </div>
            //     </div>
        }

        //remove breadcrumb by zyy,yeah i am so native



        return (
            <div style={{margin: "0px auto 0 auto",paddingBottom:"200px",width:"100%"}} className="baba">
                <div ref="mainSection" className="mainSection"
                     style={{display:"none",width:"1024px",marginLeft:"auto",marginRight:"auto"}}>

                    {ctrl}
                </div>
            </div>
        );


    },
    componentDidMount: function() {
        //TodoStore.addChangeListener(this._onChange);
        $(this.refs["mainSection"]).slideDown(300);
    },
    componentWillUnmount: function() {
        //TODO:emit change
        $(this.refs["mainSection"]).slideUp(300);
        //TodoStore.removeChangeListener(this._onChange);
    }
});
module.exports = MainSection;