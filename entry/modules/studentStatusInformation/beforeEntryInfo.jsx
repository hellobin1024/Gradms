import React from 'react';
import {render} from 'react-dom';
var ProxyQ=require('../../../components/proxy/ProxyQ.js');
var SyncStore = require('../../../components/flux/stores/SyncStore');
import '../../../css/entry/modules/table.css'
import { Table} from 'react-bootstrap';


var beforeEntryInfo =React.createClass({
    getFormerFullPostgraduateInfo:function () {
        var url = location.search;
        if (url.indexOf("?") != -1) {
            var str = url.substr(7);
        }
        var headers={
            "Authorization":"Bearer "+str,
        }
        var url="/gradms/user"
        var data={
            request:"getFormerFullPostgraduateInfo"
        }
        ProxyQ.querymy(
            url,
            null,
            null,
            data,
            headers,
            function(ob) {
                this.setState({data:ob.data});

            }.bind(this),

        )
    },
    getInitialState:function(){
        this.getFormerFullPostgraduateInfo();

        var data=this.props.data;
        return({
            data:data
        });
    },
    initialData:function(){
        this.getFormerFullPostgraduateInfo();
    },
    render:function () {
        var contains=null;
        if(this.state.data!==null&&this.state.data!==undefined) {
            var data = this.state.data;
            contains =
                <div style={{borderStyle: 'double', borderColor: '#2f8dbc'}}>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th colSpan={4} style={{textAlign: 'center', fontWeight: '600', fontSize: '16px'}}>入学前信息显示
                            </th>
                        </tr>
                        </thead>
                        <thead>
                        <tr>
                            <th colSpan={4} style={{textAlign: 'center', fontWeight: '600', fontSize: '14px'}}>本科阶段</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td >本科毕业类别</td>
                            <td>

                            </td>
                            <td >本科毕业学校</td>
                            <td>
                                {data.formerUnitDuty}
                            </td>
                        </tr>
                        <tr>
                            <td >本科毕业年月</td>
                            <td>
                                {data.universityDate}
                            </td>
                            <td >本科毕业院系</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >学士学位</td>
                            <td>

                            </td>
                            <td >本科毕业专业</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >获取学士学位年月</td>
                            <td>
                                {data.bachelorDegreeDate}
                            </td>
                            <td >本科论文题目</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >学士学科门类</td>
                            <td>

                            </td>
                            <td >学士学位授予单位</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >学士学位专业</td>
                            <td colSpan={3}>

                            </td>


                        </tr>
                        <tr>
                            <td >电话</td>
                            <td>

                            </td>
                            <td >入学前所在单位及职业</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >入学考试科目1</td>
                            <td>

                            </td>
                            <td >成绩1</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >入学考试科目2</td>
                            <td>

                            </td>
                            <td >成绩2</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >入学考试科目3</td>
                            <td>

                            </td>
                            <td >成绩3</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >入学考试科目4</td>
                            <td>

                            </td>
                            <td >成绩4</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >入学考试科目5</td>
                            <td>

                            </td>
                            <td >成绩5</td>
                            <td>

                            </td>
                        </tr>

                        </tbody>
                    </Table>
                </div>
        }else {
            this.initialData();
        }
        return contains;
    }
});
module.exports=beforeEntryInfo;