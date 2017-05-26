import React from 'react';
import {render} from 'react-dom';

import { Table} from 'react-bootstrap';
var GreenChannelApply =React.createClass({

    render :function(){
        return(
            <div style={{borderStyle: 'double', borderColor: '#2f8dbc'}}>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th colSpan={4} style={{textAlign:'center'}}>绿色通道入学简介</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{lineHeight: 'inherit'}}>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“绿色通道”是指让经济困难、无法交足学费的新生在未足额缴费的情况下顺利办理全部入学手续。2003年7月，国家教育部关于切实做好资助高校经济困难学生工作的紧急通知（教电[2003]298号）指出：“各高等学校都要一律设立“绿色通道”制度，确保新录取的家庭经济困难学生顺利入学。不允许任何高校以任何理由拒绝家庭经济困难学生入学。如发生这类情况，要追究有关高校主要领导责任。对于没有按时报到的新生，学校要查明原因。对由于经济特殊困难原因而不能入学的新生，学校要采取相应措施，让他们顺利入学。”这是国家为了实现“保证高校每一个学生不因经济困难而辍学的工作目标”的重要举措。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“绿色通道”是确保普通高校家庭困难新生顺利入学的最直接最有效地措施。针对家庭经济困难的新生，将开辟绿色通道，在新生报到入学时，经审核对因家庭经济困难无法缴纳学杂费用的，批准暂缓缴纳学杂费，先入校学习，然后学校帮助这部分学生通过申请国家助学贷款、勤工助学等方式来解决经济困难。</p>

                    </td>
                    </tr>
                    </tbody>
                </Table>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th colSpan={4} style={{textAlign:'center'}}>绿色通道申请</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            姓名
                        </td>
                        <td>

                        </td>
                        <td>
                            学号
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            性别
                        </td>
                        <td>

                        </td>
                        <td>
                            身份证号
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            学院
                        </td>
                        <td>

                        </td>
                        <td>
                            专业
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            班级
                        </td>
                        <td>

                        </td>
                        <td>
                            申请类型
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            学院审核状态
                        </td>
                        <td>

                        </td>
                        <td>
                            学校审核状态
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td >
                            申请原因
                        </td>
                        <td colSpan={3} >
                            <textarea style={{resize:'none',width:'90%',height:'140px',marginLeft:'50px'}}/>
                        </td>

                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }

})
module.exports=GreenChannelApply;