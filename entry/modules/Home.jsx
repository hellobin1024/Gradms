import React from 'react';

import '../../css/entry/modules/home.css';
var Home =React.createClass({

    render:function(){

     return (
         <div className="total" style={{minHeight:"650px",marginTop:"0px",paddingBottom:"30px"}}>
             {this.props.children}
         </div>
     )
    }
});

export default Home;