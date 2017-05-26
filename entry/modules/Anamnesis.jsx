import React from 'react';
import {render} from 'react-dom';

import { Table} from 'react-bootstrap';
var Anamnesis =React.createClass({

    render:function(){
        return (
            <div style={{borderStyle: 'double', borderColor: '#2f8dbc'}}>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th colSpan={4} style={{textAlign:'center'}}>既往病史</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{lineHeight: 'inherit'}}>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意：为更好地了解你的身体状况，请如实填写既往病史，包括疾病、手术、外伤、输血及家族史等，如患重大急慢性疾病或做手术者请提交相关资料（包括门诊病历、检查单和诊断证明、住院病历复印件等），以供参考。若没有请填“无”。</p>
                        </td>
                    </tr>
                    </tbody>
                    <thead>
                    <tr>
                        <th colSpan={4} style={{textAlign:'center'}}>填写既往病史</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <textarea style={{resize:'none',width:'90%',height:'140px',marginLeft:'50px'}}/>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>

        )
    }
});

module.exports=Anamnesis;