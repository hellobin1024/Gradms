import React from 'react';
import {render} from 'react-dom';
var ProxyQ=require('../../components/proxy/ProxyQ.js');
var SyncStore = require('../../components/flux/stores/SyncStore');
import '../../css/entry/modules/table.css'
import { Table} from 'react-bootstrap';
var TripPlan =React.createClass({

    render:function () {

        return(
            <div style={{borderStyle: 'double', borderColor: '#2f8dbc'}}>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th colSpan={4} style={{textAlign:'center'}}>出行计划信息</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={4}>
                            <p>提示：</p>
                            <p>学校安排24小时接站，接站地点：火车站济南站东侧,火车西客站出站口西出口,长途汽车站马路对面。具体时间待定，另行通知。</p>
                        </td>
                    </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={4} style={{textAlign:'center'}}>完善出行信息</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>出行方式</td>
                        <td></td>
                        <td>出行班次</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>到达日期</td>
                        <td></td>
                        <td>到达地点</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>随行人数</td>
                        <td colSpan={3}>
                            <input/><span> 说明：随行人数为一人则填写“1”，以此类推。</span>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>

        )



    }



})
module.exports=TripPlan;