!function(e){var t={};function n(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(l,i,function(t){return e[t]}.bind(null,i));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class l{constructor(e,t){this.activity=e,this.date=t}createTaskDisplay(){let e=document.createElement("div");e.className="listDiv",e.id=this.activity;let t=document.createElement("p");t.innerText=this.date,t.className="taskItem";let n=document.createElement("p");n.innerText=this.activity,n.className="taskItem",document.createElement("i").className="glyphicon glyphicon-";let l=document.createElement("i");l.className="glyphicon glyphicon-trash",l.onclick=()=>{document.getElementById(this.activity).remove()};let i=document.createElement("i");return i.className="glyphicon glyphicon-ok",i.onclick=()=>{document.getElementById(this.activity).remove()},e.appendChild(t),e.appendChild(n),e.appendChild(l),e.appendChild(i),e}}class i{constructor(e){this.projectName=e}displayProject(){let e=document.getElementById("content");e.innerHTML="";let t=document.createElement("div");t.id="projectContainer";let n=document.createElement("h1");n.innerHTML=this.projectName;let i=document.createElement("button");i.id="taskButton",i.innerHTML="Create a New Task",i.onclick=()=>{!function(){let e=document.createElement("div");e.id="inputContainer",document.getElementById("taskButton").style="visibility: hidden;";let t=document.createElement("label");t.setAttribute("for","taskInput"),t.innerText="Goal: ";let n=document.createElement("input");n.setAttribute("type","text"),n.value="",n.id="taskInput";let i=document.createElement("label");i.setAttribute("for","taskInput"),i.innerText="Date Deadline: ";let c=document.createElement("input");c.setAttribute("type","date"),c.value="",c.id="dateInput";let a=document.createElement("button");a.id="submitButton",a.innerText="Add Task",a.onclick=()=>{!function(){let e=document.getElementById("projectContainer"),t=document.createElement("div");t.className="listContainer";let n=new l(document.getElementById("taskInput").value,document.getElementById("dateInput").value);e.appendChild(t.appendChild(n.createTaskDisplay()));let i=document.createElement("button");i.innerText="Done",i.onclick=()=>{document.getElementById("inputContainer").style="visibility: hidden";let t=document.createElement("p");t.id="tasksCompleted",t.innerHTML="Tasks Completed : ",e.appendChild(t)},e.appendChild(i)}()};let o=document.getElementById("projectContainer");e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(c),e.appendChild(a),o.append(e)}()},t.appendChild(n),t.appendChild(i),e.appendChild(t)}}let c=document.getElementById("content");const a=()=>{c.innerHTML="";let e=document.createElement("label");e.setAttribute("for","projectName"),e.innerHTML="Project Name: ";let t=document.createElement("input");t.setAttribute("type","text"),t.id="projectName",t.value="";let n=document.createElement("button");n.innerHTML="Create Project",n.onclick=function(){o(document.getElementById("projectName").value)},c.appendChild(e),c.appendChild(t),c.appendChild(n)},o=e=>{new i(e).displayProject()};(()=>{let e=document.createElement("h1");e.innerHTML="To Do List";let t=document.createElement("button");t.innerHTML="Create A New Project",t.onclick=function(){a()},c.appendChild(e),c.appendChild(t)})()}]);