import React from 'react';
import {render} from 'react-dom';
var ProxyQ=require('../../../components/proxy/ProxyQ.js');
var SyncStore = require('../../../components/flux/stores/SyncStore');
import '../../../css/entry/modules/table.css'
var MyTables = require('../../../components/basic/Tables');
var title=[
    {
        label:'成员名',
        id:'societyName'
    },
    {
        label:'称谓',
        id:'societyRelation'
    },
    {
        label:'年龄',
        id:'societyAge'
    },
    {
        label:'政治面貌',
        id:'societyPoliticsCode'
    },
    {
        label:'工作单位及职务',
        id:'societyUnitDuty'
    },
    {
        label:'电话号码',
        id:'societyPhone'
    },
    {
        label:'月收入',
        id:'monIncome'
    },];
var Families =React.createClass({
    changeDataType:function (data) {

        var change=[];
        data.map(function (item,i) {
            var tableData = {
                societyName: null,
                societyRelation: null,
                societyAge: null,
                societyPoliticsCode:null,
                societyUnitDuty:null,
                societyPhone:null,
                monIncome:null
            }
            tableData.societyName=item.societyName;
            tableData.societyRelation=item.societyRelation;
            tableData.societyAge=item.societyAge;
            tableData.societyPoliticsCode=item.societyPoliticsCode;
            tableData.societyUnitDuty=item.societyUnitDuty;
            tableData.societyPhone=item.societyPhone;
            tableData.monIncome=item.monIncome;
            change.push(tableData);
        })
        return change;
    },
    getSocietyInfo:function () {
        var url = location.search;
        if (url.indexOf("?") != -1) {
            var str = url.substr(7);
        }
        var headers={
            "Authorization":"Bearer "+str,
        }
        var url="/gradms/user"
        var data={
            request:"getSocietyInfo"
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
            return product.memberName !== row[0];
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
        this.getSocietyInfo();
        return({
            data:null
        })
    },
    initialData:function(){
        this.getSocietyInfo();
    },
    render:function () {
      var contains=null;
        if(this.state.data!==null&&this.state.data!==undefined) {
            var data = this.state.data;
            contains =
                <div style={{borderStyle: 'double', borderColor: '#2f8dbc'}}>
                    <div style={{
                        borderBottomStyle: 'solid',
                        borderColor: '#2f8dbc',
                        borderWidth: '1px',
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: 'larger'
                    }}>
                        学生家庭成员与社会关系
                        <span style={{color: 'red'}}>( 必填  最多5个 )</span>
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
module.exports=Families;