/**
 * Created by outstudio on 16/5/6.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './modules/App.jsx';
import personInfo from './modules/studentStatusInformation/personInfo'
import trainInfo from './modules/studentStatusInformation/trainInfo'
import beforeEntryInfo from './modules/studentStatusInformation/beforeEntryInfo'
import families from './modules/studentStatusInformation/Families'
import resume from './modules/studentStatusInformation/workAndLearnResume'
import WorkSpace from './modules/WorkSpace.jsx'
import Login from './modules/Login';
import MainSection from './modules/MainSection.jsx';


render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path={window.App.getAppRoute()+"/app"} component={WorkSpace}/>
            <Route path={window.App.getAppRoute()+"/workspaceEnglishApply"} component={WorkSpace}/>
            <Route path={window.App.getAppRoute()+"/englishApply"} component={WorkSpace}/>
            <Route path={window.App.getAppRoute()+"/workspaceStudentStatusInfo"} component={WorkSpace}/>
            <Route path={window.App.getAppRoute()+"/tripPlan"} component={WorkSpace}/>
            <Route path={window.App.getAppRoute()+"/greenChannelApply"} component={WorkSpace}/>
            <Route path={window.App.getAppRoute()+"/anamnesis"} component={WorkSpace}/>
            <Route path={window.App.getAppRoute()+"/personInfo"} component={personInfo}/>
            <Route path={window.App.getAppRoute()+"/trainInfo"} component={trainInfo}/>
            <Route path={window.App.getAppRoute()+"/beforeEntryInfo"} component={beforeEntryInfo}/>
            <Route path={window.App.getAppRoute()+"/families"} component={families}/>
            <Route path={window.App.getAppRoute()+"/resume"} component={resume}/>
            <Route path={window.App.getAppRoute()+"/changePassword.jsp"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/allCourseQuery"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/news"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/groupnews/grouptypenews_list.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/person/stuinfo_personBasicInfoUpdateInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/person/stuinfo_studentAllInfo.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/person/stuinfo_allRewPunInfo.do"} data={"?userType=TS"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/photomanage/showAllPhotoesForStu.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/register/register_information.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/healthyInfo/healthyInfo_medical_history_add_init.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/greenway/grad/student_grad_greenway_add_applyinfoInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/exemption/exemptionEnglishApplyInit.do"}data={"?inputType=1"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/healthyInfo/healthyInfo_examine_form_download.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/tutor/tutor_stu_apply_tutor_init.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/cultivatenew/newCultivate_SchemeShow.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/newCultivateAllCourseQueryPage"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/comminfoservice/link/systemGuideLinkInfoViewInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/cultivatenew/newCultivate_selectCourseShow.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/questionnaire/student_questionnaire_init.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/diminishMain"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/trafficplan/trafficPlanInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/register/dormitory_apply.do"} component={MainSection}/>

        </Route>
    </Router>
), document.getElementById('root'))

