(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{"5hNX":function(e,a,t){"use strict";t.r(a);t("+L6B");var l=t("2/Rp"),r=(t("5NDa"),t("5rEg")),n=(t("jCWc"),t("kPKH")),s=(t("14J3"),t("BMrR")),c=(t("miYZ"),t("tsqr")),m=t("d6i3"),i=t.n(m),u=t("1l/V"),p=t.n(u),o=(t("y8nQ"),t("Vl3Y")),E=(t("OaEy"),t("2fM7")),d=t("q1tI"),h=t.n(d),b=t("/MKj"),f=t("LvDl"),v=t("3a4m"),y=t.n(v),g=t("+mDs"),w=t("9/Jl"),x=t("Rho/"),D=t("4OCk"),S=t.n(D),j=E["a"].Option;class N extends h.a.Component{constructor(e){super(e),this.setupDuties=(()=>{var e=this.props.allDuties,a=this.props.form.getFieldDecorator;return h.a.createElement(o["a"].Item,{label:"\u804c\u52a1"},a("positionName",{rules:[{message:"\u8bf7\u9009\u62e9\u804c\u52a1"}],initialValue:e[0].name})(h.a.createElement(E["a"],{placeholder:"\u8bf7\u9009\u62e9\u804c\u52a1"},e.map((e,a)=>h.a.createElement(j,{value:e.name,key:a},e.name)))))}),this.setupAllSecretLevel=(()=>{var e=this.props.allSecretLevel,a=this.props.form.getFieldDecorator;return h.a.createElement(o["a"].Item,{label:"\u4fdd\u5bc6\u7b49\u7ea7"},a("securityLevelName",{rules:[{message:"\u8bf7\u9009\u62e9\u4fdd\u5bc6\u7b49\u7ea7"}],initialValue:e[0].name})(h.a.createElement(E["a"],{placeholder:"\u8bf7\u9009\u62e9\u4fdd\u5bc6\u7b49\u7ea7"},e.map((e,a)=>h.a.createElement(j,{value:e.name,key:a},e.name)))))}),this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){var e=this;return p()(i.a.mark(function a(){var t,l;return i.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(w["b"])();case 2:return t=a.sent,a.next=5,Object(w["g"])();case 5:l=a.sent,e.props.dispatch({type:"commonState/update",payload:{allDuties:t.result.records,allSecretLevel:l.result.records}});case 7:case"end":return a.stop()}},a)}))()}handleSubmit(e){e.preventDefault(),this.props.form.validateFields(function(){var e=p()(i.a.mark(function e(a,t){var l;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=3;break}return c["a"].error("\u586b\u5199\u4fe1\u606f\u6709\u8bef ",t),e.abrupt("return");case 3:return e.next=5,Object(x["b"])(t);case 5:l=e.sent,l&&setTimeout(()=>y.a.push("/user-manager/user-inside"),1e3);case 7:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}())}render(){var e=this.props,a=e.form.getFieldDecorator;return f["isEmpty"](e.allDuties)||f["isEmpty"](e.allSecretLevel)?null:h.a.createElement(g["a"],{className:S.a.auth_root},h.a.createElement(o["a"],{layout:"inline",labelAlign:"right",style:{marginTop:"0.57rem"},onSubmit:this.handleSubmit},h.a.createElement(s["a"],{type:"flex",justify:"center",align:"middle",className:S.a.add},h.a.createElement(n["a"],{span:12},h.a.createElement("div",{className:"auth__inner--container"},h.a.createElement(s["a"],{type:"flex",justify:"space-between"},h.a.createElement(n["a"],{span:12},h.a.createElement(o["a"].Item,{label:"\u59d3\u540d"},a("name",{rules:[{message:"\u8bf7\u8f93\u5165\u59d3\u540d"}]})(h.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d"})))),h.a.createElement(n["a"],{span:12},h.a.createElement(o["a"].Item,{label:"\u8eab\u4efd\u8bc1\u53f7"},a("cardNo",{rules:[{message:"\u8bf7\u8f93\u5165\u8eab\u4efd\u8bc1\u53f7"}]})(h.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165\u8eab\u4efd\u8bc1\u53f7"}))))),h.a.createElement(s["a"],{type:"flex",justify:"space-between"},h.a.createElement(n["a"],{span:12},h.a.createElement(o["a"].Item,{label:"\u6027\u522b"},a("sex",{rules:[{message:"\u8bf7\u9009\u62e9\u6027\u522b"}],initialValue:"\u7537"})(h.a.createElement(E["a"],{placeholder:"\u8bf7\u9009\u62e9\u6027\u522b"},h.a.createElement(j,{value:"0"},"\u7537"),h.a.createElement(j,{value:"1"},"\u5973"))))),h.a.createElement(n["a"],{span:12},h.a.createElement(o["a"].Item,{label:"\u5bb6\u5ead\u4f4f\u5740"},a("address",{rules:[{message:"\u8bf7\u8f93\u5165\u5bb6\u5ead\u4f4f\u5740"}]})(h.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165\u5bb6\u5ead\u4f4f\u5740"}))))),h.a.createElement(s["a"],{type:"flex",justify:"space-between"},h.a.createElement(n["a"],{span:12},h.a.createElement(o["a"].Item,{label:"\u8054\u7cfb\u65b9\u5f0f"},a("phone",{rules:[{message:"\u8bf7\u9009\u8f93\u5165\u8054\u7cfb\u65b9\u5f0f"}]})(h.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165\u8054\u7cfb\u65b9\u5f0f"})))),h.a.createElement(n["a"],{span:12},h.a.createElement(o["a"].Item,{label:"\u90e8\u95e8"},a("departmentName",{rules:[{message:"\u8bf7\u9009\u8f93\u5165\u90e8\u95e8"}]})(h.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165\u90e8\u95e8"}))))),h.a.createElement(s["a"],{type:"flex",justify:"space-between"},h.a.createElement(n["a"],{span:12},this.setupDuties()),h.a.createElement(n["a"],{span:12},h.a.createElement(o["a"].Item,{label:"\u5728\u804c\u72b6\u6001"},a("\u5728\u804c\u72b6\u6001",{rules:[{message:"\u8bf7\u9009\u62e9\u5728\u804c\u72b6\u6001"}],initialValue:"\u5728\u804c"})(h.a.createElement(E["a"],{placeholder:"\u8bf7\u9009\u62e9\u5728\u804c\u72b6\u6001"},h.a.createElement(j,{value:"0"},"\u5728\u804c"),h.a.createElement(j,{value:"1"},"\u79bb\u804c")))))),h.a.createElement(s["a"],{type:"flex",justify:"space-between"},h.a.createElement(n["a"],{span:12},this.setupAllSecretLevel())),h.a.createElement(s["a"],{type:"flex",justify:"center",style:{marginTop:"0.35rem"}},h.a.createElement(n["a"],{span:6},h.a.createElement(o["a"].Item,{className:S.a.button_type},h.a.createElement(l["a"],{className:S.a.form_btn,htmlType:"submit"},"\u786e\u8ba4"))),h.a.createElement(n["a"],{span:6,className:S.a.select_padding_left},h.a.createElement(o["a"].Item,null,h.a.createElement(l["a"],{className:S.a.form_btn},"\u8fd4\u56de")))))))))}}var I=o["a"].create({name:"auth_user"})(N),L=e=>{var a=e.userManager,t=e.commonState,l=a.innerUserList,r=t.allDuties,n=t.allSecretLevel;return{innerUserList:l,allDuties:r,allSecretLevel:n}};a["default"]=Object(b["c"])(L)(I)}}]);