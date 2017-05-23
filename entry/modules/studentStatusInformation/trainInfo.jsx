import React from 'react';
import {render} from 'react-dom';
var ProxyQ=require('../../../components/proxy/ProxyQ.js');
var SyncStore = require('../../../components/flux/stores/SyncStore');
import '../../../css/entry/modules/table.css'
import { Table} from 'react-bootstrap';


var trainInfo =React.createClass({

    stuTrainInfo:function () {
        var url = location.search;
        if (url.indexOf("?") != -1) {
            var str = url.substr(7);
        }
        var headers={
            "Authorization":"Bearer "+str,
        }
        var url="/gradms/user"
        var data={
            request:"getInfoStuTrainInfo"
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
        this.stuTrainInfo();

        var data=this.props.data;
        return({
            data:data
        });
    },
    initialData:function(){
        this.stuTrainInfo();
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
                            <th colSpan={4} style={{textAlign: 'center', fontWeight: '600', fontSize: '16px'}}>学生培养信息
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td >学生类型</td>
                            <td>

                            </td>
                            <td >所属院系</td>
                            <td>
                                {data.collegeName}
                            </td>
                        </tr>
                        <tr>
                            <td >培养方式</td>
                            <td>

                            </td>
                            <td >所属专业</td>
                            <td>
                                {data.majorId+"-"+data.majorName}
                            </td>
                        </tr>
                        <tr>
                            <td >学习方式</td>
                            <td>

                            </td>
                            <td >委托培养或定向单位</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >入学年月</td>
                            <td>
                                {data.entrYearMon}
                            </td>
                            <td >预计离校时间</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >外语水平</td>
                            <td>
                                {data.foreignLanLevel}
                            </td>
                            <td >准考证号</td>
                            <td>
                                {data.examNo}
                            </td>
                        </tr>
                        <tr>
                            <td >健康状况</td>
                            <td>

                            </td>
                            <td >有何特长</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >经济状况</td>
                            <td>

                            </td>
                            <td >本人经济来源</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >年级</td>
                            <td>
                                {data.grade}
                            </td>
                            <td >导师</td>
                            <td>
                                {data.tutorName}
                            </td>
                        </tr>
                        <tr>
                            <td >学习地点</td>
                            <td>

                            </td>
                            <td >在学状态</td>
                            <td>
                                {data.studyState}
                            </td>
                        </tr>
                        <tr>
                            <td >所在班级</td>
                            <td>

                            </td>
                            <td >所属校区</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >学制</td>
                            <td>
                                {data.classYear}
                            </td>
                            <td >研究方向</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >二级培养单位</td>
                            <td>

                            </td>
                            <td >三级培养单位</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >是否华侨</td>
                            <td>

                            </td>
                            <td >是否英烈子女</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td >是否有学籍</td>
                            <td colSpan={3}>

                            </td>

                        </tr>
                        </tbody>
                    </Table>

                </div>
        }else{
            this.initialData()
        }
        return contains
    }
});
module.exports=trainInfo;