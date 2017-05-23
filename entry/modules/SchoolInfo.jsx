import React from 'react';
import {render} from 'react-dom';
var ProxyQ=require('../../components/proxy/ProxyQ.js');
var SyncStore = require('../../components/flux/stores/SyncStore');
import '../../css/entry/modules/table.css'
import { ButtonToolbar,DropdownButton ,MenuItem,Table,ButtonGroup,Tabs,Tab,Image,Row,Col,Nav,NavItem,NavDropdown} from 'react-bootstrap';
var EnglishApply =React.createClass({

    personInfo:function () {
        var ref=this;
        ProxyQ.query({
            headers:{
                "Authorization":"Bearer "+SyncStore.getToken(),
            },
            url:"/gradms/user",
            data:{
                request:"getPersonInfo"
            },

        }).then(function(json){

            ref.setState({data:json});

        }).catch(function(e){
            alert(e);
        })
    },
    getInitialState:function(){
         this.personInfo();
          return({
              data:null
          });
    },
    initialData:function(){
        this.personInfo();
    },

    render:function () {
    if(this.state.data!==null&&this.state.data!==undefined){
        var data=this.state.data.data;
        return(
            <div >
                <Tabs id="controlled-tab-example">
                    <Tab eventKey={1} title="Tab 1" >
                        <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th colSpan={5} style={{textAlign:'center',fontWeight: '600', fontSize: '16px'}}>个人基本信息</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td >姓名</td>
                                <td>
                                    {data.perName}
                                </td>
                                <td >英文姓名</td>
                                <td>
                                    {data.perEnglishName}
                                </td>
                                <td rowSpan={4} style={{textAlign:'center',width:'135px'}}>
                                    <Image style={{width: '125px', height: '145px'}} src="/images/yicu.jpeg"  />
                                </td>
                            </tr>
                            <tr>
                                <td >学号</td>
                                <td>
                                    {data.perNum}
                                </td>
                                <td >性别
                                </td>
                                <td>
                                    {data.genderCode}
                                    <ButtonToolbar>
                                        <DropdownButton bsSize="xsmall" title="Extra small button" id="dropdown-size-extra-small">
                                            <MenuItem eventKey="1">Action</MenuItem>
                                            <MenuItem eventKey="2">Another action</MenuItem>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                </td>

                            </tr>
                            <tr>
                                <td >籍贯</td>
                                <td>
                                    {data.perNativePlace}
                                    <ButtonGroup bsSize="xsmall">
                                        <DropdownButton bsSize="xsmall" title="Dropdown" id="bg-justified-dropdown">
                                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                                        </DropdownButton>
                                        <DropdownButton bsSize="xsmall" title="Dropdown" id="bg-justified-dropdown">
                                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                                        </DropdownButton>
                                        <DropdownButton bsSize="xsmall" title="Dropdown" id="bg-justified-dropdown">
                                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </td>
                                <td >
                                    国别
                                </td>
                                <td>

                                </td>

                            </tr>
                            <tr>
                                <td >民族</td>
                                <td>
                                    {data.nationId}
                                </td>
                                <td >
                                    婚否
                                </td>
                                <td>
                                    {data.isMarried}
                                </td>

                            </tr>
                            </tbody>

                            <thead>
                            <tr>
                                <th colSpan={5}> <p> </p></th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td >政治面貌</td>
                                <td>
                                    {data.politicsCode}
                                </td>
                                <td >出生日期</td>
                                <td colSpan={2}>
                                    {data.perBirthday}
                                </td>
                            </tr>
                            <tr>
                                <td >证件类型</td>
                                <td>

                                </td>
                                <td >证件号码
                                </td>
                                <td colSpan={2}>
                                    {data.perIdCard}
                                </td>
                            </tr>
                            <tr>
                                <td >通讯地址</td>
                                <td>
                                    {data.perAddress}
                                </td>
                                <td >
                                    邮编
                                </td>
                                <td colSpan={2}>
                                    {data.perPostalCode}
                                </td>
                            </tr>
                            <tr>
                                <td >家庭住址所在地</td>
                                <td>
                                    {data.familyProvince+data.familyCity+data.familyTown}
                                </td>
                                <td >
                                    家庭地址
                                </td>
                                <td colSpan={2}>
                                </td>
                            </tr>
                            <tr>
                                <td>所在单位所在地</td>
                                <td>
                                    {data.hujiProvince+data.hujiCity+data.hujiTown}
                                </td>
                                <td >
                                    所在单位
                                </td>
                                <td colSpan={2}>
                                    {data.personUnit}
                                </td>
                            </tr>
                            <tr>
                                <td >家庭邮编</td>
                                <td>
                                    {data.famPostcalCode}
                                </td>
                                <td >
                                    家庭电话
                                </td>
                                <td colSpan={2}>

                                </td>
                            </tr>
                            <tr>
                                <td >户籍地址</td>
                                <td>
                                    {data.unitProvince+data.unitCity+data.unitTown}
                                </td>
                                <td >
                                    所在校区
                                </td>
                                <td colSpan={2}>
                                    {data.campusNum}
                                </td>
                            </tr>
                            </tbody>
                            <thead>
                            <tr>
                                <th colSpan={5} style={{textAlign:'center',fontWeight: '600', fontSize: '14px'}}>个人联系方式</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td >固定电话</td>
                                <td>
                                    {data.perTelePhone}
                                </td>
                                <td >
                                    移动电话
                                </td>
                                <td colSpan={2}>
                                    {data.mobilePhone}
                                </td>
                            </tr>
                            <tr>
                                <td >QQ号码</td>
                                <td>
                                    {data.QQ}
                                </td>
                                <td >
                                    微信号
                                </td>
                                <td colSpan={2}>
                                </td>
                            </tr>
                            <tr>
                                <td >电子邮件</td>
                                <td colSpan={4}>
                                    {data.EMAIL}
                                </td>

                            </tr>
                            <tr>
                                <td >备注</td>
                                <td colSpan={4}>

                                </td>

                            </tr>
                            </tbody>
                            <thead>
                            <tr>
                                <th colSpan={5} style={{textAlign:'center',fontWeight: '600', fontSize: '14px'}}>配偶情况</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td >配偶姓名</td>
                                <td>

                                </td>
                                <td >
                                    出生日期
                                </td>
                                <td colSpan={2}>
                                </td>
                            </tr>
                            <tr>
                                <td >政治面貌</td>
                                <td>

                                </td>
                                <td >
                                    学历
                                </td>
                                <td colSpan={2}>
                                </td>
                            </tr>
                            <tr>
                                <td >联系电话</td>
                                <td>

                                </td>
                                <td >
                                    工作单位及职务
                                </td>
                                <td colSpan={2}>
                                </td>
                            </tr>

                            </tbody>
                            <thead>
                            <tr>
                                <th colSpan={5} style={{textAlign:'center',fontWeight: '600', fontSize: '14px'}}>参加党团组织情况</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td >组织名称</td>
                                <td colSpan={4}>

                                </td>

                            </tr>
                            <tr>
                                <td >参加时间</td>
                                <td>

                                </td>
                                <td >
                                    参加地点
                                </td>
                                <td colSpan={2}>
                                </td>
                            </tr>
                            <tr>
                                <td >曾任职务</td>
                                <td>

                                </td>
                                <td >
                                    介绍人姓名
                                </td>
                                <td colSpan={2}>
                                </td>
                            </tr>
                            <tr>
                                <td>介绍人单位职务</td>
                                <td>

                                </td>
                                <td >
                                    现在关系
                                </td>
                                <td colSpan={2}>
                                </td>
                            </tr>

                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey={2} title="Tab 2">
                        <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey={3} title="Tab 3">
                        <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>


                <button onClick={this.personInfo}>查询</button>
            </div>

        )
    }else{
        // this.initialData();
        return(
          <div>No res
              <button onClick={this.personInfo}>查询</button>
              <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                  <Row className="clearfix">
                      <Col sm={12}>
                          <Nav bsStyle="tabs">
                              <NavItem eventKey="first">
                                  Tab 1
                              </NavItem>
                              <NavItem eventKey="second">
                                  Tab 2
                              </NavItem>
                              <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-within-tab">
                                  <MenuItem eventKey="3.1">Action</MenuItem>
                                  <MenuItem eventKey="3.2">Another action</MenuItem>
                                  <MenuItem eventKey="3.3">Something else here</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem eventKey="3.4">Separated link</MenuItem>
                              </NavDropdown>
                          </Nav>
                      </Col>
                      <Col sm={12}>
                          <Tab.Content animation>
                              <Tab.Pane eventKey="first">
                                  Tab 1 content
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                                  Tab 2 content
                              </Tab.Pane>
                              <Tab.Pane eventKey="3.1">
                                  Tab 3.1 content
                              </Tab.Pane>
                              <Tab.Pane eventKey="3.2">
                                  Tab 3.2 content
                              </Tab.Pane>
                              <Tab.Pane eventKey="3.3">
                                  Tab 3.3 content
                              </Tab.Pane>
                              <Tab.Pane eventKey="3.4">
                                  Tab 3.4 content
                              </Tab.Pane>
                          </Tab.Content>
                      </Col>
                  </Row>
              </Tab.Container>
          </div>

        )
    }


    }
})
module.exports=EnglishApply;