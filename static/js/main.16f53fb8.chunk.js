(this["webpackJsonpreact-js-app"]=this["webpackJsonpreact-js-app"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),a=n(8),i=n.n(a),o=n(7),u=n(2),h=n(3),l=n(5),p=n(4),j=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{children:Object(r.jsxs)("li",{className:"course",children:[Object(r.jsx)("button",{onClick:function(){return e.props.deleteCourseProps(e.props.course.id)},children:"DELETE"}),this.props.course.title]})})}}]),n}(c.a.Component),d=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[" ",this.props.courses.map((function(t){return Object(r.jsx)(j,{course:t,deleteCourseProps:e.props.deleteCourseProps},t.id)}))]})}}]),n}(c.a.Component),b=function(){return Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:"React App: Adding/Deleting Courses"}),Object(r.jsx)("p",{children:"Add course item(s) using the input box below"})]})},O=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={title:""},e.onChange=function(t){e.setState({title:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addCourseProps(e.state.title),e.setState({title:""})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:"f-container",children:[Object(r.jsx)("input",{type:"text",className:"f-input",placeholder:"Add Course...",value:this.state.title,onChange:this.onChange}),Object(r.jsx)("input",{type:"submit",value:"SUBMIT",className:"f-submit"})]})}}]),n}(c.a.Component),m=(n(15),n(9)),f=n.n(m),x=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{style:{marginTop:30,marginBottom:30},children:[Object(r.jsx)(f.a,{onChange:function(){return e.props.changeThemeProps(e.props.lightTheme)},checked:this.props.lightTheme,onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.2)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48}),Object(r.jsxs)("p",{children:["Color Theme is: ",Object(r.jsx)("b",{children:this.props.lightTheme?"light":"dark"})]})]})}}]),n}(c.a.Component),g=n(19),C=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={courses:[{id:Object(g.a)(),title:"CNIT 103 Hardware - 3 units"},{id:Object(g.a)(),title:"CNIT 131 Internet & Intro to HTML, CSS - 3 units"},{id:Object(g.a)(),title:"CNIT 106 Introduction to Networks - 3 units"},{id:Object(g.a)(),title:"CNIT 120 Network Security 3 units"}],lightTheme:!0},e.changeTheme=function(){e.setState({lightTheme:!e.state.lightTheme})},e.deleteCourse=function(t){e.setState({courses:Object(o.a)(e.state.courses.filter((function(e){return e.id!==t})))})},e.addCourse=function(t){var n={id:Object(g.a)(),title:t,completed:!1};e.setState({courses:[].concat(Object(o.a)(e.state.courses),[n])})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"container ".concat(this.state.lightTheme?"light":"dark"),children:[Object(r.jsx)(b,{}),Object(r.jsx)(x,{changeThemeProps:this.changeTheme,lightTheme:this.state.lightTheme}),Object(r.jsx)(O,{addCourseProps:this.addCourse}),Object(r.jsx)(d,{courses:this.state.courses,deleteCourseProps:this.deleteCourse})]})}}]),n}(c.a.Component);i.a.render(Object(r.jsx)(C,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.16f53fb8.chunk.js.map