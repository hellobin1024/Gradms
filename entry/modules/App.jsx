import React from 'react';
import {render} from 'react-dom';

import '../../css/entry/modules/app.css';

var App =React.createClass({

    render:function(){

     return (
         <div className="total" style={{minHeight:"650px",marginTop:"0px",paddingBottom:"30px"}}>
             {this.props.children}
         </div>
     )}
});
export default App;