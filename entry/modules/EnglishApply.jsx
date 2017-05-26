import React from 'react';
import {render} from 'react-dom';

import { Table} from 'react-bootstrap';
var EnglishApply =React.createClass({

    render :function(){
        return(
            <div style={{borderStyle: 'double', borderColor: '#2f8dbc'}}>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th colSpan={4} style={{textAlign:'center'}}>免修英语申请</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} style={{textAlign:'center'}}>
                                <p style={{color:'red'}}>提示:</p>
                                <p>申请时间已过或者审核已经通过，不能再进行申请或信息修改</p>
                            </td>
                        </tr>
                        <tr>
                            <td>状态</td>
                            <td></td>
                            <td>申请条件类型*</td>
                            <td>
                                <select>
                                    <option>111</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>考试类型</td>
                            <td>
                                <select>
                                    <option>111</option>
                                </select>
                            </td>
                            <td>
                                考试时间
                            </td>
                            <td>
                                <input/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                成绩
                            </td>
                            <td colSpan={3}>
                                <input/>
                            </td>
                        </tr>
                        <tr>
                            <td>学历、学位</td>
                            <td></td>
                            <td>
                                毕业院校
                            </td>
                            <td>
                                <input/>
                            </td>
                        </tr>
                    <tr>
                        <td>
                            毕业专业
                        </td>
                        <td colSpan={3}>
                            <input/>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
})
module.exports=EnglishApply;