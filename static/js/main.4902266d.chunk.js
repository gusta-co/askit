(this.webpackJsonpaskit=this.webpackJsonpaskit||[]).push([[0],{106:function(e,t,s){},107:function(e,t,s){},108:function(e,t,s){},109:function(e,t,s){},110:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),n=s(10),r=s.n(n),i=(s(72),s(43)),o=s.n(i),l=s(55),u=s(9),d=s(56),j=s.n(d),b=(s(93),s(94),s(2)),m=function(){return Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsx)("div",{className:"logo-holder",children:Object(b.jsx)("img",{className:"logo",src:"/img/nerd-logo.png",onClick:function(){var e=document.createElement("a");e.target="_blank",e.href="https://github.com/gusta-co/askit",e.click()}})}),Object(b.jsx)("a",{target:"_blank",href:"https://github.com/gusta-co/askit",children:Object(b.jsx)("h1",{className:"title",children:"Askit"})}),Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("h5",{className:"text",onClick:function(){var e=document.createElement("a");e.target="_blank",e.href="https://gustaco.dev",e.click()},children:"Por: Gustavo Correia"})})]})},O=(s(96),s(143)),h=s(144),x=s(142),f=s(7),p=function(){Object(f.f)();var e=Object(c.useState)(""),t=Object(u.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],o=r[1],l=Object(c.useState)(!1),d=Object(u.a)(l,2),j=d[0],m=d[1];return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h2",{className:"title",style:{width:"98%",lineHeight:"40px"},children:["Ol\xe1, \xe9 a sua primeira vez por aqui.",Object(b.jsx)("br",{}),"Insira o seu nome campo abaixo:"]}),Object(b.jsx)(O.a,{id:"",className:"text",label:"nome",variant:"outlined",disabled:j,style:{width:"80%",marginTop:"16px"},onChange:function(e){o(e.target.value)}}),Object(b.jsx)(h.a,{variant:"contained",size:"large",color:"primary",disabled:j,style:{width:"80%",marginTop:"16px"},onClick:function(){i.length>=3?(m(!0),a(!1),localStorage.setItem("userName",i),setTimeout((function(){window.location.reload()}),2500)):a(!0)},children:"CONFIRMAR"}),!0===s&&Object(b.jsxs)("h4",{className:"error-msg text",children:["Por favor, insira um nome v\xe1lido.",Object(b.jsx)("br",{}),"(M\xednimo de 3 caracteres)"]}),!1===s&&Object(b.jsx)(x.a,{style:{marginTop:"16px"}})]})},g=(s(106),function(e){var t=e.dismissQuizModal,s=(e.dismissReportModal,e.numberOfQuestions),a=e.setNumberOfQuestions,n=e.getDataAndStartQuiz,r=Object(f.f)(),i=Object(c.useState)(""),o=Object(u.a)(i,2),l=o[0],d=o[1],j=Object(c.useState)(!1),m=Object(u.a)(j,2),p=m[0],g=m[1];return Object(b.jsx)("div",{className:"modal-container",children:Object(b.jsxs)("div",{className:"modal-container-options",children:[Object(b.jsx)("h3",{className:"title",children:"Selecione o n\xfamero de quest\xf5es que deseja responder:"}),Object(b.jsx)(O.a,{type:"number",label:"N\xba de quest\xf5es",disabled:p,InputProps:{inputProps:{min:1,max:30}},style:{width:"150px",textAlignLast:"center"},onChange:function(e){a(e.target.value)}}),!1===l&&Object(b.jsx)(x.a,{style:{marginTop:"16px"}}),!0===l&&Object(b.jsx)("h5",{className:"text",children:"Por favor, insira um n\xfamero entre 0 e 30."}),Object(b.jsxs)("div",{className:"modal-container-btns-row",children:[Object(b.jsx)(h.a,{variant:"contained",size:"large",color:"secondary",disabled:p,onClick:t,children:"CANCELAR"}),Object(b.jsx)(h.a,{variant:"contained",size:"large",color:"primary",disabled:p,onClick:function(){!s||s<=0||s>30?d(!0):(g(!0),d(!1),n(),setTimeout((function(){r.push("/quiz")}),2500))},children:"INICIAR QUIZ"})]})]})})}),v=(s(107),function(e){var t=e.userName,s=e.numberOfQuestions,a=e.setNumberOfQuestions,n=e.getDataAndStartQuiz,r=Object(f.f)(),i=localStorage.getItem("result0"),o=Object(c.useState)(!1),l=Object(u.a)(o,2),d=l[0],j=l[1],m=Object(c.useState)(!1),O=Object(u.a)(m,2),x=(O[0],O[1]);return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("img",{src:"/img/waving.png"}),Object(b.jsxs)("h1",{className:"title",children:["Ol\xe1 ",t]})]}),Object(b.jsx)(h.a,{size:"large",color:"primary",variant:"contained",style:{width:"90%"},onClick:function(){j(!0)},children:Object(b.jsx)("h3",{className:"text color-white",children:"INICIAR NOVO QUIZ"})}),i&&Object(b.jsx)(h.a,{size:"large",color:"default",variant:"contained",style:{width:"90%",marginTop:"32px"},onClick:function(){r.push("/results")},children:Object(b.jsx)("h3",{className:"text",children:"RELAT\xd3RIO DE RESULTADOS"})}),!0===d&&Object(b.jsx)(g,{dismissQuizModal:function(){j(!1)},dismissReportModal:function(){x(!1)},numberOfQuestions:s,setNumberOfQuestions:a,getDataAndStartQuiz:n})]})}),N=s(62),k=(s(108),function(e){var t=e.questionData,s=e.questionMark,c=e.currentResult,a=t.question.replace("&quot;","''");a=(a=(a=a.replace("&quot;?","''?")).replace("&quot;,","'',")).replace("&#039;","'");var n=[t.correct_answer].concat(Object(N.a)(t.incorrect_answers)),r=n.sort((function(){return Math.random()-.5}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"title",children:a}),Object(b.jsx)("div",{className:"options-container",children:r.map((function(e,i){return Object(b.jsx)(h.a,{id:"option-"+i,variant:"outlined",className:"options-btn",style:{marginTop:"8px"},onClick:function(){!function(e,i){var o;if(e===t.correct_answer){document.getElementById("option-"+i).classList.add("options-btn-right"),o={title:a,checked:"correct",answer:e};for(var l=0;l<n.length;l++)document.getElementById("option-"+l).classList.add("disabled-button");s("right")}else if(e!==t.correct_answer){for(document.getElementById("option-"+i).classList.add("options-btn-wrong"),o={title:a,checked:"incorrect",answer:e,correct_answer:t.correct_answer},l=0;l<n.length;l++)r[l]===t.correct_answer&&document.getElementById("option-"+l).classList.add("options-btn-right"),document.getElementById("option-"+l).classList.add("disabled-button");s("wrong")}var u=JSON.stringify(o),d=localStorage.getItem("result"+c);d?localStorage.setItem("result"+c,d+","+u):localStorage.setItem("result"+c,u);var j=localStorage.getItem("result"+c);console.log(j)}(e,i)},children:e},i)}))})]})}),w=(s(109),s(110),function(e){var t=e.resultPosition,s=e.state,a=(e.resultModal,e.setResultModal),n=Object(c.useState)(),r=Object(u.a)(n,2),i=(r[0],r[1],"["+localStorage.getItem("result"+t)+"]"),o=JSON.parse(i);console.log(o);var l=Object(f.f)();Object(c.useEffect)((function(){}),[]);return Object(b.jsx)("div",{className:"result-modal-container",children:Object(b.jsxs)("div",{className:"result-modal-container-options",children:[Object(b.jsx)(h.a,{variant:"contained",color:"secondary",onClick:function(){"results"===s?a(!1):l.push("/")},children:"FECHAR"}),Object(b.jsxs)("h3",{className:"title",children:["Resultado ",t+1,"\xba quiz:"]}),Object(b.jsx)("div",{className:"results-cards-display-container",children:o&&Object(b.jsx)("div",{children:o.map((function(e,t){return function(e){if(o[e])return"correct"==o[e].checked?Object(b.jsx)("div",{className:"right-card",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h5",{className:"text",children:"Acertou! :)"}),Object(b.jsx)("h4",{className:"title",children:o[e].title}),Object(b.jsx)("div",{className:"card-row",children:Object(b.jsxs)("h5",{className:"right-option",children:["Resposta : ",o[e].answer]})})]})}):Object(b.jsx)("div",{className:"wrong-card",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h5",{className:"text",children:"Errou! :("}),Object(b.jsx)("h4",{className:"title",children:o[e].title}),Object(b.jsxs)("div",{className:"card-row",children:[Object(b.jsxs)("h5",{className:"wrong-option",children:["Resposta marcada: ",o[e].answer]}),Object(b.jsxs)("h5",{className:"right-option",children:["Resposta correta: ",o[e].correct_answer]})]})]})});l.push("/")}(t)}))})})]})})}),y=function(e){var t=e.numberOfQuestions,s=(e.setNumberOfQuestions,e.questionsData),a=Object(f.f)();(t<=0||!s)&&a.push("/");for(var n=[],r=1;r<=t;r++)n.push(r);var i=Object(c.useState)(!1),o=Object(u.a)(i,2),l=o[0],d=o[1],j=Object(c.useState)(),m=Object(u.a)(j,2),O=m[0],p=m[1],g=Object(c.useState)(0),v=Object(u.a)(g,2),N=v[0],y=v[1],I=Object(c.useState)(0),S=Object(u.a)(I,2),q=S[0],C=S[1];Object(c.useEffect)((function(){setTimeout((function(){for(var e=!1,t=0;!1===e;)localStorage.getItem("result"+t)?t++:(p(t),e=!0,console.log(t));y(0),document.getElementById("mark-1").classList.add("question-mark-current"),C(1)}),100)}),[]);var E=function(){N||y(0),d(!0)};return Object(b.jsxs)("div",{className:"quiz-container",children:[!s&&Object(b.jsx)(x.a,{style:{marginTop:"16px"}}),s&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"questions-information",children:[Object(b.jsx)("h5",{className:"text",children:s[N].category.replace("Entertainment: ","")}),Object(b.jsxs)("h5",{className:"text",children:["Dificuldade: ",s[N].difficulty]})]}),Object(b.jsxs)("div",{className:"question-body",children:[!q&&Object(b.jsx)(x.a,{style:{marginTop:"16px",width:"6%",marginLeft:"47%",marginBottom:"32px"}}),1===q&&Object(b.jsx)(k,{questionData:s[N],questionMark:function(e){"right"==e?document.getElementById("mark-"+(N+1)).classList.add("question-mark-right"):document.getElementById("mark-"+(N+1)).classList.add("question-mark-wrong")},currentResult:O})]}),Object(b.jsxs)("div",{className:"buttons-row",children:[Object(b.jsx)(h.a,{id:"finish-btn",variant:"contained",color:"secondary",size:"large",onClick:E,children:"FINALIZAR"}),Object(b.jsx)(h.a,{id:"next-btn",variant:"contained",color:"primary",size:"large",onClick:function(){C(0),N===t-1?E():(y(N+1),document.getElementById("mark-"+(N+1)).classList.remove("question-mark-current"),setTimeout((function(){document.getElementById("mark-"+(N+2)).classList.add("question-mark-current"),C(1)}),1500))},children:"AVAN\xc7AR"})]}),Object(b.jsx)("div",{className:"questions-mark-row",children:n.map((function(e){return Object(b.jsx)("h5",{id:"mark-"+e,className:"question-mark-circle",children:e},e)}))})]}),l&&Object(b.jsx)(w,{resultPosition:O,state:"quiz",resultModal:l,setResultModal:d})]})},I=(s(111),function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(),r=Object(u.a)(n,2),i=r[0],o=r[1],l=Object(c.useState)(),d=Object(u.a)(l,2),j=d[0],m=d[1],O=Object(f.f)(),x=[];Object(c.useEffect)((function(){for(var e=!1,t=0;!1===e;)localStorage.getItem("result"+t)?(x.push(t),t++):(m(t),e=!0,m(x))}),[]);return Object(b.jsxs)("div",{className:"results-container",children:[Object(b.jsx)(h.a,{variant:"contained",size:"small",style:{width:"100%"},onClick:function(){O.push("/")},children:Object(b.jsx)("h3",{className:"title",children:"IN\xcdCIO"})}),Object(b.jsx)("h2",{className:"title",children:"Resultados"}),j&&Object(b.jsx)("div",{className:"results-column",children:j.map((function(e,t){return Object(b.jsx)(h.a,{id:"option-"+t,variant:"contained",size:"large",color:"primary",style:{marginTop:"24px",width:"100%"},onClick:function(){!function(e){o(e),a(!0)}(e)},children:Object(b.jsxs)("h3",{className:"text color-white",children:[e+1,"\xba QUIZ"]})},t)}))}),s&&Object(b.jsx)(w,{resultPosition:i,state:"results",resultModal:s,setResultModal:a})]})}),S=s(33);var q=function(){Object(f.f)();var e=localStorage.getItem("userName"),t=Object(c.useState)(0),s=Object(u.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(),i=Object(u.a)(r,2),d=i[0],O=i[1],h=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://opentdb.com/api.php?amount=".concat(a)).then((function(e){O(e.data.results)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsxs)(S.a,{children:[!e&&Object(b.jsx)(p,{}),e&&Object(b.jsxs)(f.c,{children:[Object(b.jsx)(f.a,{path:"/",exact:!0,children:Object(b.jsx)(v,{userName:e,numberOfQuestions:a,setNumberOfQuestions:n,getDataAndStartQuiz:h})}),Object(b.jsx)(f.a,{path:"/quiz",exact:!0,children:Object(b.jsx)(y,{numberOfQuestions:a,setNumberOfQuestions:n,questionsData:d})}),Object(b.jsx)(f.a,{path:"/results",exact:!0,children:Object(b.jsx)(I,{})})]})]})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))},72:function(e,t,s){},93:function(e,t,s){},94:function(e,t,s){},96:function(e,t,s){}},[[112,1,2]]]);
//# sourceMappingURL=main.4902266d.chunk.js.map