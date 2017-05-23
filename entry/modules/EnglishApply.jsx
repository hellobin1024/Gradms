import React from 'react';
import {render} from 'react-dom';


var EnglishApply =React.createClass({

    render :function(){
        return(
            <div>
                <table data-toggle="table">
                    <thead>
                        <tr>
                            <th colSpan={4} style={{textAlign:'center'}}>免修英语申请</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} style={{textAlign:'center'}}>
                                <p style={{color:'red'}}>提示:</p>
                                <p>注意我基金第四季覅就是滴附件四大家覅使劲地</p>
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
                            <td>成绩
                                <input/>
                            </td>
                            <td>考试时间
                                <input/>
                            </td>
                        </tr>
                        <tr>
                            <td>学历、学位</td>
                            <td>
                                毕业院校
                            </td>
                            <td>
                                <input/>
                            </td>
                            <td>毕业专业
                                <input/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
})
module.exports=EnglishApply;