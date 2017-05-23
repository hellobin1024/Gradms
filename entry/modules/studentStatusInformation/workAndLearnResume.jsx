import React from 'react';
import {render} from 'react-dom';
var ProxyQ=require('../../../components/proxy/ProxyQ.js');
var SyncStore = require('../../../components/flux/stores/SyncStore');
import '../../../css/entry/modules/table.css'
var  MyTables = require('../../../components/basic/Tables');

var title=[
    {
    label:'学校（单位）名称',
    id:'schoolUnitName'
    },
    {
        label:'起止年月',
        id:'startEndDate'
    },

    {
        label:'修业年限',
        id:'experienceYear'
    },
    {
        label:'职务',
        id:'experienceDuty'
    },
    {
        label:'证明人',
        id:'experienceProver'
    },
    {
        label:'现处何处工作',
        id:'proverPlace'
    },
 ];
var Resume =React.createClass({

    changeDataType:function (data) {

        var change=[];
        data.map(function (item,i) {
            var tableData = {
                startEndDate: null,
                schoolUnitName: null,
                experienceYear: null,
                experienceDuty:null,
                experienceProver:null,
                proverPlace:null

            }
            tableData.startEndDate=item.startEndDate;
            tableData.schoolUnitName=item.schoolUnitName;
            tableData.experienceYear=item.experienceYear;
            tableData.experienceDuty=item.experienceDuty;
            tableData.experienceProver=item.experienceProver;
            tableData.proverPlace=item.proverPlace;
            change.push(tableData);
        })
        return change;
    },
    getExperienceInfo:function () {
        var url = location.search;
        if (url.indexOf("?") != -1) {
            var str = url.substr(7);
        }
        var headers={
            "Authorization":"Bearer "+str,
        }
        var url="/gradms/user"
        var data={
            request:"getExperienceInfo"
        }
        ProxyQ.querymy(
            url,
            null,
            null,
            data,
            headers,
            function(ob) {
                // this.setState({data:ob.data});
                var data=this.changeDataType(ob.data);
                this.setState({data:data});
            }.bind(this),

        )
    },
    onDeleteRow:function(row) {
        var products =[];
        products= this.state.data;
        products = products.filter((product) => {
            return product.workUnitName !== row[0];
        });

        this.setState({
            data: products
        });

    },

    onAddRow:function(row) {
        var products =[];
        products= this.state.data;
        products.push(row);
        this.setState({
            data: products
        });

    },

    getInitialState:function(){
        this.getExperienceInfo();
        return({
            data:null
        })
    },
    initialData:function(){
        this.getExperienceInfo();
    },
    render:function () {
        var contains=null;
        if(this.state.data!==null&&this.state.data!==undefined) {
            var data = this.state.data;
            contains = <div style={{borderStyle: 'double', borderColor: '#2f8dbc'}}>
                <div style={{
                    borderBottomStyle: 'solid',
                    borderColor: '#2f8dbc',
                    borderWidth: '1px',
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 'larger'
                }}>
                    学习和工作简历
                    <span style={{color: 'red'}}>( 必填  从高中起，最多五条 )</span>
                </div>
                <MyTables ref="mytables" title={title} onDeleteRow={ this.onDeleteRow.bind(null) }
                          onAddRow={ this.onAddRow.bind(null) } data={data}/>
            </div>
        }else {
            this.initialData();
        }
        return contains;
    }
});
module.exports=Resume;