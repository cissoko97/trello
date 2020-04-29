(this["webpackJsonpkola-trello"]=this["webpackJsonpkola-trello"]||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),s=a.n(r),c=(a(62),a(7)),i=a(8),l=a(9),u=a(10),d=(a(63),a(53)),p=a(19),m=a(18),g=(a(64),function(e){return o.a.createElement("div",{className:"divInput"},o.a.createElement("input",{className:"inputField",onChange:function(t){return e.onChange(t)},type:e.type,name:e.name,placeholder:e.placeholder}))}),f=a(11),h=a(12),v=a(2),k=a(3);function b(){var e=Object(f.a)(["\n    color: ",";\n    padding: 5px;\n    min-width: ",";\n    border-radius : ",";\n    font-size: ",";\n    max-height: 40px;\n    background-color: ","; \n    margin: ",";\n    border: 0;\n    cursor: pointer;\n    transition:all 0.4s;\n    ","\n    &:focus{\n        outline:none;\n    }\n"]);return b=function(){return e},e}var E=h.a.button(b(),(function(e){return e.color}),(function(e){return e.w}),(function(e){return e.raduis}),(function(e){return e.font}),(function(e){return e.back}),(function(e){return e.margin}),(function(e){return e.hover?"&:hover {background-color: ".concat(e.hover,"; }"):null})),S=function(e){var t=!!e.disabled&&e.disabled;return o.a.createElement(E,{disabled:t,color:e.color?e.color:"#000",margin:e.margin,hover:e.hover?e.hover:null,back:e.back,w:e.w,raduis:e.raduis,onClick:function(t){return e.onClick(t)},font:e.font?e.font:"18px"},e.disabled?o.a.createElement(v.a,{className:"fa-spin",icon:k.o}):null,e.children?e.children:null,e.title)},x=(a(70),a(6)),w=a(4),O=a.n(w),j=function(e){var t="Bearer ".concat(e.token);localStorage.setItem("FBIdToken",t),localStorage.setItem("uid",e.uid),O.a.defaults.headers.common.Authorization=t},C=function(e){localStorage.clear(),sessionStorage.clear(),delete O.a.defaults.headers.common.Authorization,e.push("/")},I=a(50),N=a.n(I);function D(){var e=Object(f.a)(["\n    background-color: "," ;\n    color:white;\n    text-align:center;\n    max-width: 250px;\n    min-width: 210px;\n    padding:5px;\n    position:fixed;\n    border-radius:3px;\n    top:","px;\n    right: ","px;\n    transition: all 0.5s ease;\n    box-shadow: 3px 3px 5px 0 rgba(9,30,66,.25);\n    z-index:999;\n"]);return D=function(){return e},e}var y=h.a.div(D(),(function(e){return e.back}),(function(e){return e.top}),(function(e){return e.right})),_=new N.a,T=function(e,t){_.emit("notification",e,t)},M=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={top:-200,right:16,msg:null,back:"rgba(0, 0, 0, 0.19)"},n.timeOut=null,n.onShow=function(e,t){n.setState({msg:e,back:t}),n.timeOut?(clearTimeout(n.timeOut),n.setState({top:-200},(function(){n.timeOut=setTimeout((function(){n.showNotification()}),500)}))):n.showNotification()},n.showNotification=function(){n.setState({top:60},(function(){n.timeOut=setTimeout((function(){n.setState({top:-200,msg:"notification"})}),8e3)}))},_.on("notification",(function(e,t){n.onShow(e,t)})),n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(y,{back:this.state.back,top:this.state.top,right:this.state.right},this.state.msg)}}]),a}(o.a.Component),L=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).signUp=function(){n.setState({progressSignUp:!0}),console.log("Bonjour","".concat(x.signup));var e={name:n.state.signupName,email:n.state.signupEmail,phone:n.state.signupPhone,password:n.state.signupPassword,confirmedPassword:n.state.signupConfPassword};O.a.post("".concat(x.signup),e).then((function(e){console.log(e.data),j(e.data),n.props.history.push("/projet")})).catch((function(e){n.setState({progressSignUp:!1}),T(JSON.stringify(e.message),"#c10a33")}))},n.logIn=function(){n.setState({progressLogin:!0});var e={email:n.state.loginEmail,password:n.state.loginPassword};O.a.post("".concat(x.login),e).then((function(e){j(e.data),n.props.history.push("/projet")})).catch((function(e){console.log(e.message),n.setState({progressLogin:!1}),T(JSON.stringify(e.message),"#c10a33")}))},n.onChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value),(function(){}))},n.state={progressLogin:!1,progressSignUp:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"auth__title"},"Trello using ReactJs and FireBase"),o.a.createElement("div",{className:"authenticate"},o.a.createElement(M,null),o.a.createElement("div",{className:"login"},o.a.createElement("h3",{className:"login__title"},"Login"),o.a.createElement("div",{className:"auth__body"},o.a.createElement(g,{onChange:this.onChange,type:"text",name:"loginEmail",placeholder:"Enter Your Email"}),o.a.createElement(g,{onChange:this.onChange,type:"password",name:"loginPassword",placeholder:"Enter Your Password"})),o.a.createElement(S,{disabled:this.state.progressLogin,margin:"auto",w:"50%",raduis:"0",back:"#5aac44",title:"Login",onClick:this.logIn})),o.a.createElement("div",{className:"signup"},o.a.createElement("h3",{className:"login__title"},"Register Or SignUp"),o.a.createElement("div",{className:"auth__body"},o.a.createElement(g,{onChange:this.onChange,type:"text",name:"signupName",placeholder:"Enter Your name"}),o.a.createElement(g,{onChange:this.onChange,type:"text",name:"signupEmail",placeholder:"Enter Your Email"}),o.a.createElement(g,{onChange:this.onChange,type:"password",name:"signupPassword",placeholder:"Enter Your Password"}),o.a.createElement(g,{onChange:this.onChange,type:"password",name:"signupConfPassword",placeholder:"Enter Your Password"}),o.a.createElement(g,{onChange:this.onChange,type:"text",name:"signupPhone",placeholder:"Enter Your Phone number"})),o.a.createElement(S,{disabled:this.state.progressSignUp,margin:"auto",w:"50%",raduis:"0",back:"#5aac44",title:"Sign In",onClick:this.signUp}))))}},{key:"componentDidMount",value:function(){console.log(this.props)}}]),a}(o.a.Component),P=a(55),A=(a(105),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},this.props.children)}},{key:"componentDidMount",value:function(){console.log(this.props)}}]),a}(o.a.Component)),J=a(30),z=a.n(J),B=a(51),F=(a(107),function(e){return o.a.createElement("div",{ref:e.inputRef,className:"ListContentMenu"},o.a.createElement("div",{className:"menu__item"},o.a.createElement("span",{className:"menu__title"},"Listes des actions")),o.a.createElement("div",{className:"menu__separation"},o.a.createElement("hr",null)),o.a.createElement("div",{className:"menu__item"},"Bonsoir Ok je vais reg"),o.a.createElement("div",{className:"menu__item"},"Bonsoir"),o.a.createElement("div",{className:"menu__separation"},o.a.createElement("hr",null)),o.a.createElement("div",{className:"menu__item"},"Bonsoir"),o.a.createElement("div",{className:"menu__item"},"Well done!!"),o.a.createElement("div",{className:"menu__item"},"Well done!!"),o.a.createElement("div",{className:"menu__separation"},o.a.createElement("hr",null)),o.a.createElement("div",{className:"menu__item"},"Well done!!"))});function R(){var e=Object(f.a)(["\n        resize: vertical;\n        min-width: 100%;\n        min-height: 54px;\n        max-height: 162px;\n        overflow: hidden;\n        margin: 3px 0;\n        text-align: start;\n        overflow-wrap: break-word;\n        border:none;\n        &:focus{\n            outline:none;\n        }\n    "]);return R=function(){return e},e}var U=h.a.textarea(R()),q=function(e){return o.a.createElement(U,{autoFocus:!0,value:e.value,name:e.name,placeholder:e.placeholder,onChange:function(t){e.onChange(t)}})},Y=(a(108),a(109),a(31)),W=a.n(Y);W.a.setAppElement("#root");var H=function(e){var t=JSON.parse(localStorage.getItem("project")),a=Object.keys(t.ticket),n=[];return a.forEach((function(e){n.push(t.ticket[e][0])})),o.a.createElement(W.a,{isOpen:e.isOpen,onRequestClose:function(){e.hideModal()},shouldCloseOnOverlayClick:!0,style:{overlay:{backgroundColor:"rgba(0,0,0,.64)"},content:{display:"flex",padding:"15px",margin:"auto",width:"770px",flexDirection:"column",justifyContent:"space-betwen"}}},o.a.createElement("div",{className:"modal__header"},o.a.createElement("div",{className:"modal__title"},e.data.label),o.a.createElement("div",{onClick:function(){return e.hideModal()},className:"modal__close"},o.a.createElement(v.a,{icon:k.q}))),e.children)};a(119);function G(){var e=Object(f.a)(["\n    min-width: 40px;\n    max-width: auto;\n    cursor: pointer;\n    border-radius: 4px;\n    min-height: 8px;\n    max-height: 16px;\n    font-size:12px;\n    padding-left:2px;\n    text-align:left;\n    margin: 0 4px 0 0;\n    background-color: ",";\n"]);return G=function(){return e},e}var V=h.a.span(G(),(function(e){return e.color})),$=function(e){return o.a.createElement(V,{className:"btn",color:e.color,onClick:function(t){e.onClick(t)}},e.status?e.label:null)},K=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).toggleModal=function(){console.log("Open avant",n.state),n.state.showModal?n.setState({showModal:!1},(function(){})):n.setState({showModal:!0}),document.addEventListener("click",n.hideModal)},n.textAreaOnChange=function(e){var t=e.target.value;n.setState({description:t},(function(){console.log("good update",n.state)}))},n.updateTask=function(e,t){var a={description:n.state.description},o=n.props.task;o.description=n.state.description,O.a.put("".concat(x.tasks,"/").concat(n.props.task.id),a).then((function(a){console.log(a),n.props.updateTask(e,t,o),n.toggleModal()})).catch((function(e){console.log(e)}))},n.deleteTask=function(e,t){O.a.delete("".concat(x.tasks,"/").concat(n.props.task.id)).then((function(a){console.log(a),n.props.deleteTask(e,t),n.toggleModal()})).catch((function(e){console.log(e)}))},n.state={showModal:!1,description:n.props.task.description},n.cardRef=o.a.createRef(),n}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this,a=JSON.parse(localStorage.getItem("project")),n=Object.keys(a.ticket),r=[];return n.forEach((function(e){r.push(a.ticket[e])})),e=r.map((function(e,a){return o.a.createElement($,{laebel:""===e[1]?"Bonjour":null,color:e[0],key:a,status:t.props.status,onClick:t.props.onClick})})),r.map((function(e,t){return o.a.createElement(S,{key:t,margin:"auto",w:"100px",raduis:"5px",back:e,title:""})})),o.a.createElement("div",{className:"card"},o.a.createElement("div",{onClick:this.toggleModal,className:"cardItem",draggable:"true",onDragOver:function(e){t.props.onOver(e,t.props.index,t.props.task)},onDragStart:function(e){return t.props.onDragStart(e,t.props.task,t.props.index,t.props.stateId)}},o.a.createElement("div",{className:"cardItem__ticket"},e),o.a.createElement("div",{className:"cardItem__text"},this.props.task.label),o.a.createElement("div",{className:"cardItem__footer"},this.state.description?o.a.createElement(v.a,{icon:k.a}):null)),o.a.createElement(H,{isOpen:this.state.showModal,data:this.props.task,hideModal:this.toggleModal},o.a.createElement("div",{className:"modal__body"},o.a.createElement("div",{className:"information"},o.a.createElement("span",null,"Description"),o.a.createElement(q,{onChange:this.textAreaOnChange,name:"description",placeholder:"description",value:this.state.description})),o.a.createElement("div",{className:"action"},o.a.createElement("h3",null,"AJOUTER A LA CARTE"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.s})," Membres"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.p})," \xe9tiquettes"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.d})," CheckList"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.n})," Date Limite"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.k})," Pi\xe8ce jointe"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.j})," Cover paper"),o.a.createElement("h3",null,"POWER-UPS"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.s})," Membres"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.p})," \xe9tiquettes"),o.a.createElement("h3",null,"ACTIONS"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.c})," Deplacer"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.e})," Copier"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.d})," Cr\xe9er un Modele"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.h})," suivre"),o.a.createElement("hr",null),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.b})," Archiver"),o.a.createElement(S,{font:"14px",w:"100%",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(e){return console.log()}},o.a.createElement(v.a,{icon:k.m})," Partager"))),o.a.createElement("div",{className:"modal__footer"},o.a.createElement(S,{margin:"auto",w:"100px",raduis:"5px",back:"#eb5a46",title:"Delete",onClick:function(){return t.deleteTask(t.props.parentIndex,t.props.index)}}),o.a.createElement(S,{margin:"auto",w:"100px",raduis:"5px",back:"#61bd4f",title:"Valider",onClick:function(){return t.updateTask(t.props.parentIndex,t.props.index)}}))))}},{key:"shouldComponentUpdate",value:function(e,t){return e===this.props}}]),a}(n.Component),Q=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).openListMenu=function(e){e.preventDefault(),n.setState({showMenu:!0},(function(){document.addEventListener("click",n.closeListMenu)}))},n.closeListMenu=function(e){n.contentListMenu.contains(e.target)||n.setState({showMenu:!1},(function(){document.removeEventListener("click",n.closeListMenu)}))},n.onTextAreaChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value),(function(){console.log(n.state)}))},n.addCard=function(e){O.a.defaults.headers.common.Authorization=localStorage.getItem("FBIdToken");var t=n.state.maxIndex,a=e;console.log("title",n.state[n.props.title.replace(" ","")]),console.log("id de la catre est ",a);var o={index:t,label:n.state[n.props.title.replace(" ","")],stateID:e,checklist:{},membres:[],ticket:{}};O.a.post(x.tasks,o).then((function(e){console.log("Success task",e.data),o.id=e.data,n.props.addTaskToState(o),n.setState({addStatus:!1})})).catch((function(e){console.dir(e)}))},n.setTicketState=function(){n.setState({ticketState:!n.state.ticketState})},n.state={maxIndex:0,showMenu:!1,addStatus:!1,ticketState:!1},n.contentListMenu=o.a.createRef(),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data.tasks?this.props.data.tasks.map((function(t,a){return o.a.createElement(K,{status:e.state.ticketState,onOver:e.props.onOver,updateTask:e.props.updateTask,deleteTask:e.props.deleteTask,onClick:e.setTicketState,parentIndex:e.props.index,index:a,stateId:e.props.data.id,task:t,key:t.id,onDragStart:e.props.onDragStart})})):null;return o.a.createElement("div",{className:"listContent"},o.a.createElement("div",{className:"listContent__header"},o.a.createElement("span",{className:"title"},this.props.title),o.a.createElement("div",{className:"icon",onClick:function(t){return e.openListMenu(t)}},o.a.createElement(v.a,{icon:k.g})),this.state.showMenu?o.a.createElement(F,{closeMenu:this.closeListMenu,inputRef:function(t){return e.contentListMenu=t}}):null),o.a.createElement("div",{className:"listContent__body",onDragOver:function(t){return e.props.onDragOver(t)},onDrop:function(t){return e.props.onDrop(t,e.props.data.id)}},t,this.state.addStatus?o.a.createElement("div",{className:"cardItem"},o.a.createElement(q,{placeholder:"Saissisez un titre pour cette carte...",onChange:this.onTextAreaChange,name:this.props.title.replace(" ","")}),o.a.createElement("div",null,o.a.createElement(S,{disabled:this.props.disabled,hover:"#61bd4f",color:"#fff",font:"14px",margin:"auto",w:"50%",raduis:"3px",back:"#5aac44",title:"Ajouter une carte",onClick:function(){e.props.setInProgress(),e.addCard(e.props.data.id)}}),o.a.createElement(S,{font:"14px",margin:"auto",w:"auto",raduis:"0",back:"transparent",onClick:function(){e.setState({addStatus:!1})}},o.a.createElement(v.a,{icon:k.q})))):o.a.createElement("div",{className:"listContent__footer"},o.a.createElement("span",{className:"title",onClick:function(){e.setState({addStatus:!0})}},o.a.createElement(v.a,{icon:k.l})," Ajouter une carte"),o.a.createElement("div",{className:"icon",onClick:function(t){e.props.deleteState(e.props.data.id,e.props.index)}},o.a.createElement(v.a,{icon:k.r})))))}},{key:"componentDidMount",value:function(){var e=Object(B.a)(z.a.mark((function e(){var t,a=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.data.id,e.next=3,O.a.get("".concat(x.tasks,"/").concat(this.props.data.id)).then((function(e){console.log(a.props.index,e.data),a.props.fetchState(t,e.data,a.props.index)})).catch((function(e){console.error("error fetch task",e.message)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"shouldComponentUpdate",value:function(e,t){var a=this.props.data.tasks?this.props.data.tasks.length:0;return t.maxIndex=a,e.data===this.props.data}}]),a}(n.Component);function X(){var e=Object(f.a)(["\n        width:100%;\n        height:30px;\n        padding:3px;\n        border:none;\n        border-radius:3px;\n        margin: 3px 0;\n        overflow-wrap: break-word;\n        //&:focus{\n            // outline:none;\n        //}\n    "]);return X=function(){return e},e}var Z=h.a.input(X()),ee=function(e){return o.a.createElement(Z,{autoFocus:!0,autoComplete:"off",type:"text",placeholder:e.placeholder,name:e.name,onChange:function(t){return e.change(t)}})};function te(){var e=Object(f.a)(["\n        background-color:#ebecf0;\n        width: ",";\n        margin-right: 0px;\n        padding:4px;\n        border-radius:3px;\n    "]);return te=function(){return e},e}var ae=h.a.div(te(),(function(e){return e.width})),ne=function(e){var t="projet"===e.title?"Saisissez le titre du projet...":"Saisissez le titre de la liste...";return o.a.createElement("div",null,e.active?o.a.createElement(ae,{width:e.width?e.width:"272px"},o.a.createElement(ee,{placeholder:t,change:e.onChange,name:"title"}),o.a.createElement(S,{disabled:e.disabled,color:"#FFF",font:"14px",w:"50%",raduis:"3px",back:"#5aac44",onClick:function(t){return e.onClick(t)}},"projet"===e.title?"Ajoutez un projet":"Ajoutez une Liste"),o.a.createElement(S,{font:"14px",w:"auto",raduis:"0",back:"transparent",onClick:function(t){return e.addList(t)}},o.a.createElement(v.a,{icon:k.q}))):o.a.createElement(S,{font:"14px",w:e.width?e.width:"272px",raduis:"3px",back:"rgba(0,0,0,.08)",hover:"rgba(0,0,0,.16)",onClick:function(t){return e.addList(t)}},o.a.createElement(v.a,{icon:k.l})," ","projet"===e.title?"Ajoutez un autre projet":"Ajoutez une autre Liste"))},oe=a(16),re=(a(120),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).projectState=function(){return n.state.states?n.state.states.map((function(e,t){var a=n.state.states.tasks?n.state.states.tasks.length:null;return o.a.createElement(Q,{disabled:n.state.progress,key:e.id,index:t,onDrop:n.onDrop,maxIndex:a,onDragStart:n.onDragStart,onDragEnd:n.onDragEnd,onOver:n.onOver,onDragOver:n.onDragOver,setInProgress:n.setInProgress,title:e.label,data:e,fetchState:n.attachTaskToState,addTaskToState:n.addTaskToState,deleteTask:n.deleteTask,updateTask:n.updateTask,deleteState:n.deleteState})})):null},n.openCardMenu=function(e){e.preventDefault();var t=document.querySelector(".menu");console.log(t),n.setState({showMenu:!0},(function(){document.addEventListener("click",n.closeCardMenu)}))},n.closeCardMenu=function(e){console.log(n.dropdownMenu),console.log(e.target),n.dropdownMenu.contains(e.target)||n.setState({showMenu:!1},(function(){document.removeEventListener("click",n.closeCardMenu)}))},n.onDragStart=function(e,t,a,o){return n.setState({active:!1}),console.log("dragstart on div: ",t),e.dataTransfer.setData("id",JSON.stringify(t)),e.dataTransfer.setData("position",a),e.dataTransfer.setData("startState",o),sessionStorage.setItem("id",JSON.stringify(t)),e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/html",e.target),e.dataTransfer.setDragImage(e.target,40,40),!1},n.onDragOver=function(e){e.preventDefault()},n.onOver=function(e,t,a){e.preventDefault();var n=sessionStorage.getItem("id");console.log("Over Me ".concat(n," Bonjour")),n.id===a.id?sessionStorage.setItem("o",JSON.stringify(a)):(sessionStorage.setItem("o",JSON.stringify(a)),sessionStorage.setItem("index",t))},n.onDrop=function(e,t){e.preventDefault(),console.log("Dans le Drop");var a=n.state.states,o=null,r=null,s=parseInt(sessionStorage.getItem("index")),c=JSON.parse(e.dataTransfer.getData("id")),i=e.dataTransfer.getData("position"),l=e.dataTransfer.getData("startState");if(null===JSON.parse(sessionStorage.getItem("o"))){var u,d;console.log("Over syr rien"),o=a.slice().find((function(e,a){return u=a,e.id===t}));var p=a.slice().find((function(e,t){return d=t,e.id===l}));c.stateID=t,c.index=1,o.tasks.push(c),r=o.tasks.slice(),p.tasks.splice(i,1),a[u]=o,a[d]=p}else if(JSON.parse(sessionStorage.getItem("o")).id===c.id&&t===c.stateID)console.log("pas de changement");else if(JSON.parse(sessionStorage.getItem("o")).id===c.id&&t!==c.stateID){var m,g;console.log("Same over but State"),o=a.slice().find((function(e,a){return m=a,e.id===t}));var f=a.slice().find((function(e,t){return g=t,e.id===l}));c.stateID=t,c.index=1,o.tasks.push(c),r=o.tasks.slice(),f.tasks.splice(i,1),a[m]=o,a[g]=f}else if(JSON.parse(sessionStorage.getItem("o")).id!==c.id&&t===c.stateID){var h;console.log("Dans la meme card");var v=(o=a.slice().find((function(e,a){return h=a,e.id===t}))).tasks.slice();console.table("Dummy avant",v),s<i?(c.index=s+1-.5,v.splice(s,0,c),i++,v.splice(i,1)):(c.index=s+1-.5,v.splice(i,1),v.splice(s-1,0,c)),r=v.slice(),console.log("Dummy apres",v),o.tasks=v,a[h]=o}else if(JSON.parse(sessionStorage.getItem("o")).id!==c.id&&t!==c.stateID){var k,b;console.log("Dans deux card different Mais avec survole"),o=a.slice().find((function(e,a){return k=a,e.id===t}));var E=a.slice().find((function(e,t){return b=t,e.id===l}));c.stateID=t,c.index=.5,o.tasks.splice(s,0,c),r=o.tasks.slice();var S=e.dataTransfer.getData("position");E.tasks.splice(S,1),a[k]=o,a[b]=E}n.setState({states:a}),sessionStorage.removeItem("index"),sessionStorage.removeItem("o"),sessionStorage.removeItem("id");var w={},j=r?r.map((function(e,t){return w={id:e.id,index:t}||w})):null;console.log("Sending data"),console.table(j);var C={id:t,tasks:j};console.log(C),j&&O.a.put(x.tasks,C).then((function(e){console.log(e.status),T("Good",oe.succes)})).catch((function(e){console.log(e.message)}))},n.onDragEnd=function(e){alert("Bonjour le monde")},n.newListInput=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.toggleActive=function(e){e.preventDefault(),n.setState({active:!n.state.active})},n.showLabel=function(e){n.setState({ticketState:!n.state.ticketState})},n.createState=function(){O.a.defaults.headers.common.Authorization=localStorage.getItem("FBIdToken"),n.setState({progress:!0}),console.log(n.state.title);var e=n.props.match.params.id,t={label:n.state.title,index:n.state.maxIndex+1,projectID:e,createdAt:(new Date).toISOString()};O.a.post("".concat(x.state),t).then((function(e){console.log("new state",e.data),t.size=0,t.id=e.data,n.setState({active:!1,progress:!1}),n.setState({states:[].concat(Object(P.a)(n.state.states),[t])},(function(){T("success add state",oe.succes)}))})).catch((function(e){console.dir(e),n.setState({progress:!1}),T("error encouted",oe.error)}))},n.fecthState=function(){var e=JSON.parse(localStorage.getItem("project"));O.a.get("".concat(x.state,"/").concat(n.props.match.params.id)).then((function(t){console.log(t.data),n.setState({states:t.data,maxIndex:t.data.length},(function(){e.states=t.data,localStorage.setItem("project",JSON.stringify(e,null,4)),console.log("fetch state project with success")}))})).catch((function(e){console.error(e),T("Error load Data Project",oe.error)}))},n.attachTaskToState=function(e,t,a){var o=n.state.states,r=n.state.states.find((function(t){return t.id===e}));r.tasks=t,r.size=t.length,o[a]=r,n.setState({states:o})},n.addTaskToState=function(e){n.setState({progress:!1});var t=n.state.states,a=null,o=n.state.states.find((function(t,n){return a=n,t.id===e.stateID}));o.tasks.push(e),t[a]=o,n.setState({states:t}),T("succes add task",oe.succes)},n.logOut=function(){C(n.props.history)},n.backHome=function(){localStorage.removeItem("project"),n.props.history.push("/projet")},n.setInProgress=function(){n.setState({progress:!n.state.progress})},n.deleteTask=function(e,t){var a=n.state.states.slice();console.log(e),console.log(a[e].tasks),a[e].tasks.splice(t,1),n.setState({states:a})},n.updateTask=function(e,t,a){var o=n.state.states.slice();console.log(e),console.log(o[e].tasks),o[e].tasks[t]=a,n.setState({states:o})},n.deleteState=function(e,t){var a=n.state.states.slice();O.a.delete("".concat(x.state,"/").concat(e)).then((function(e){console.log(e),a.splice(t,1),n.setState({states:a})})).catch((function(e){console.log(e)}))},n.state={showStatus:!1,maxIndex:null,active:!1,ticketState:!1,states:null,progress:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(M,null),o.a.createElement(A,null,o.a.createElement(S,{font:"14px",w:"auto",raduis:"2px",back:"transparent",hover:"rgba(0,0,0,.16)",onClick:function(){return e.backHome()}},o.a.createElement(v.a,{icon:k.i})," Home"),o.a.createElement(S,{font:"14px",w:"auto",raduis:"2px",back:"transparent",hover:"rgba(0,0,0,.16)",onClick:function(){return e.logOut()}},o.a.createElement(v.a,{icon:k.f})," Log Out")),o.a.createElement("div",{className:"board"},this.projectState(),o.a.createElement(ne,{disabled:this.state.progress,onClick:this.createState,onChange:this.newListInput,active:this.state.active,addList:this.toggleActive})))}},{key:"componentDidMount",value:function(){console.log("".concat(this.props.match.params.id)),this.fecthState()}}]),a}(o.a.Component));a(121);function se(){var e=Object(f.a)(["\n    // width:25%;\n    background-color:rgba(0,0,0,.08);\n    cursor:pointer;\n    min-height:100px;\n    max-height:100px;\n    display:flex;\n    flex-direction:column;\n    justify-content:space-between;\n    padding: 4px 8px;\n    border-radius:3px;\n"]);return se=function(){return e},e}var ce=h.a.div(se()),ie=function(e){return o.a.createElement(ce,{onClick:function(){return e.onClick(e.data)}},e.children)},le=a(52),ue=a.n(le),de=a(6),pe=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).newListInput=function(e){e.preventDefault(),n.setState(Object(m.a)({},e.target.name,e.target.value))},n.toggleActive=function(e){e.preventDefault(),n.setState({active:!n.state.active})},n.addProjet=function(e){e.preventDefault(),n.setState({progress:!0});O.a.defaults.headers.common.Authorization=localStorage.getItem("FBIdToken");var t={name:n.state.title,ticket:{1:["#61bd4f",""],2:["#f2d600",""],3:["#ff9f1a",""],4:["#eb5a46",""],5:["#c377e0",""],6:["#0079bf",""]},membres:[],createdAt:(new Date).toISOString()};O.a.post("".concat(de.projects),t).then((function(e){console.log(e.data),t.id=e.data,t.chefProjet=localStorage.getItem("uid");var a=JSON.parse(localStorage.getItem("listProject"));localStorage.removeItem("listProject"),a.push(t),localStorage.setItem("listProject",JSON.stringify(a)),n.setState({active:!1,progress:!1,projects:a}),T("Success Add project",oe.succes)})).catch((function(e){console.error(e),n.setState({progress:!1}),T(JSON.stringify(e.response.data),oe.error)}))},n.selectProject=function(e){console.log("Boom",e),localStorage.setItem("project",JSON.stringify(e)),n.props.history.push("/projet/".concat(e.id))},n.fetchData=function(){O.a.defaults.headers.common.Authorization=localStorage.getItem("FBIdToken");var e=JSON.parse(localStorage.getItem("listProject"));console.log("etat initial de la console",e),e?(console.log("Deja initialis\xe9"),console.table(e),n.setState({projects:e})):(console.log("Pas encore initialis\xe9"),O.a.get("".concat(de.projects,"/user")).then((function(e){console.table(e.data),n.setState({projects:e.data}),localStorage.setItem("listProject",JSON.stringify(e.data)),T("Load Project success",oe.succes)})).catch((function(e){console.error(e.response),T(JSON.stringify(e.response),oe.error)})))},n.logOut=function(){C(n.props.history)},n.Onfilter=function(e){var t=e.target.value.toLowerCase(),a=JSON.parse(localStorage.getItem("listProject")).filter((function(e){return e.name.toLowerCase().includes(t)}));n.setState({projects:a})},n.state={projects:null,active:!1,progress:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.projects?this.state.projects.map((function(t){return o.a.createElement(ie,{key:t.id,data:t,onClick:e.selectProject},o.a.createElement("span",null,t.name),o.a.createElement("span",null,"Created At:",ue()(new Date(t.createdAt)).fromNow()))})):null;return o.a.createElement("div",null,o.a.createElement(A,null,o.a.createElement(S,{font:"14px",w:"auto",raduis:"2px",back:"transparent",hover:"rgba(0,0,0,.16)",onClick:function(){console.log("rien")}},o.a.createElement(v.a,{icon:k.i})," Home"),o.a.createElement(S,{font:"14px",w:"auto",raduis:"2px",back:"transparent",hover:"rgba(0,0,0,.16)",onClick:function(){return e.logOut()}},o.a.createElement(v.a,{icon:k.f})," Log Out")),o.a.createElement(M,null),o.a.createElement("div",{className:"search__bar"},o.a.createElement(ee,{placeholder:"Search",change:this.Onfilter,name:"search_title"})),o.a.createElement("div",{className:"projet__grid"},t,o.a.createElement(ne,{disabled:this.state.progress,width:"100%",title:"projet",onClick:this.addProjet,onChange:this.newListInput,active:this.state.active,addList:this.toggleActive})))}},{key:"componentDidMount",value:function(){console.log(this.props),this.fetchData()}}]),a}(o.a.Component),me=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return O.a.defaults.baseURL="https://us-central1-kola-trello.cloudfunctions.net/api",o.a.createElement("div",{className:"App"},o.a.createElement(d.a,{basename:window.location.pathname||""},o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:L}),o.a.createElement(p.a,{exact:!0,path:"/projet",component:pe}),o.a.createElement(p.a,{exact:!0,path:"/projet/:id",component:re}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},16:function(e,t){e.exports={succes:"#0cc16d",error:"#c10a33",info:"blue"}},57:function(e,t,a){e.exports=a(124)},6:function(e,t){e.exports={user:"/users",projects:"/projects",state:"/state",tasks:"/tasks",login:"/login",signup:"/signup"}},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.341e22d3.chunk.js.map