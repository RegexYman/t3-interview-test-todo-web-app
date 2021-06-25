(this["webpackJsonpto-do-frontend"]=this["webpackJsonpto-do-frontend"]||[]).push([[0],{55:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(25),s=n.n(c),o=n(6),u=n.n(o),i=n(7),d=n(9),p=n(57),l=n(58),j=n(26),b=n.n(j).a.create({baseURL:"http://localhost:3001/"}),f={getTodos:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/getTodos");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getTodoList:function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/getTodoList/".concat(t),{params:{password:n}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),updateItemDone:function(){var e=Object(i.a)(u.a.mark((function e(t,n,r){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/done/".concat(t),{id:n,password:r});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),addTodo:function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/addTodos",{title:t,password:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),addTodoListItem:function(){var e=Object(i.a)(u.a.mark((function e(t,n,r,a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/addListItem/".concat(t),{description:n,due_date:r,password:a});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),deleteItem:function(){var e=Object(i.a)(u.a.mark((function e(t,n,r){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/removeListItem/".concat(t),{id:n,password:r});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},x=n(60),h=n(59),O=n(61),v=n(1),m=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(d.a)(s,2),p=o[0],l=o[1],j=function(){var t=Object(i.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=null,""!=p&&(n=p),t.next=5,f.addTodo(a,n);case 5:return t.next=7,e.reloadTodo();case 7:c(""),l(""),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),"undefined"!==typeof t.t0.response.data&&alert(t.t0.response.data.msg);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return Object(v.jsxs)(x.a,{body:!0,children:[Object(v.jsx)("h5",{children:"New Todo"}),Object(v.jsxs)(h.a,{children:[Object(v.jsxs)(h.a.Group,{children:[Object(v.jsx)(h.a.Label,{children:"Todo Title"}),Object(v.jsx)(h.a.Control,{type:"text",value:a,onChange:function(e){c(e.target.value)},placeholder:"Enter todo title"})]}),Object(v.jsxs)(h.a.Group,{children:[Object(v.jsx)(h.a.Label,{children:"Password"}),Object(v.jsx)(h.a.Control,{type:"password",value:p,onChange:function(e){l(e.target.value)},placeholder:"Password"})]})]}),Object(v.jsx)("br",{}),Object(v.jsx)(O.a,{variant:"primary",onClick:j,children:"+ Add"})]})},w=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),a=n[0],c=n[1];Object(r.useEffect)(Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getTodos();case 2:(t=e.sent).success&&c(t.todo_lists);case 4:case"end":return e.stop()}}),e)}))),[]);var s=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getTodos();case 2:(t=e.sent).success&&c(t.todo_lists);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Todo"}),Object(v.jsx)(l.a,{children:a.length>0?a.map((function(t){return Object(v.jsx)(l.a.Item,{action:!0,onClick:function(){return e.onTodoClicked(t.id,t.is_protected)},children:t.title},t.id)})):Object(v.jsx)("h5",{children:Object(v.jsx)("center",{children:"Empty"})})}),Object(v.jsx)("br",{}),Object(v.jsx)(m,{reloadTodo:s}),Object(v.jsx)("br",{})]})},k=n(56),g=function(e){var t=e.item,n=t.id,r=t.description,a=t.due_date,c=t.done;return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)(h.a.Check,{type:"checkbox",checked:c,onClick:function(){return e.onDoneClicked(n)}})}),Object(v.jsx)("td",{children:c?Object(v.jsx)("s",{children:r}):r}),Object(v.jsxs)("td",{children:["Due date: ",c?Object(v.jsx)("s",{children:a}):a]}),Object(v.jsx)("td",{children:Object(v.jsx)(O.a,{variant:"danger",onClick:function(){return e.onDeleteClicked(n)},children:"Delete"})})]})},T=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(d.a)(s,2),p=o[0],l=o[1],j=function(){var t=Object(i.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,e.protected&&(n=prompt("Please enter todo password.")),t.next=4,e.onNewItemAdd(a,p,n);case 4:c(""),l("");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(v.jsxs)(x.a,{body:!0,children:[Object(v.jsx)("h5",{children:"New Todo Item"}),Object(v.jsxs)(h.a,{children:[Object(v.jsxs)(h.a.Group,{children:[Object(v.jsx)(h.a.Label,{children:"Item name"}),Object(v.jsx)(h.a.Control,{type:"text",value:a,onChange:function(e){c(e.target.value)},placeholder:"Enter item name"})]}),Object(v.jsxs)(h.a.Group,{children:[Object(v.jsx)(h.a.Label,{children:"Due date"}),Object(v.jsx)(h.a.Control,{type:"date",value:p,onChange:function(e){l(e.target.value)},min:"2019-01-01",max:"2049-12-31"})]})]}),Object(v.jsx)("br",{}),Object(v.jsx)(O.a,{variant:"success",onClick:j,children:"+ Add"})]})},y=function(e){var t=e.list,n=t.id,r=t.title,a=t.items.sort((function(e,t){return new Date(e.due_date)-new Date(t.due_date)})),c=function(){var t=Object(i.a)(u.a.mark((function t(r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.protected){t.next=9;break}return a=prompt("Todo is protected. Please enter password."),t.next=5,f.updateItemDone(n,r,a);case 5:return t.next=7,e.reloadTodoList(n,a);case 7:t.next=13;break;case 9:return t.next=11,f.updateItemDone(n,r,null);case 11:return t.next=13,e.reloadTodoList(n,null);case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),"undefined"!==typeof t.t0.response.data&&alert(t.t0.response.data.msg);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(i.a)(u.a.mark((function t(r,a,c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.addTodoListItem(n,r,a,c);case 3:return t.next=5,e.reloadTodoList(n,c);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),"undefined"!==typeof t.t0.response.data&&alert(t.t0.response.data.msg);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n,r){return t.apply(this,arguments)}}(),o=function(){var t=Object(i.a)(u.a.mark((function t(r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.protected){t.next=9;break}return a=prompt("Todo is protected. Please enter password."),t.next=5,f.deleteItem(n,r,a);case 5:return t.next=7,e.reloadTodoList(n,a);case 7:t.next=13;break;case 9:return t.next=11,f.deleteItem(n,r,null);case 11:return t.next=13,e.reloadTodoList(n,null);case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),"undefined"!==typeof t.t0.response.data&&alert(t.t0.response.data.msg);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsxs)("h2",{children:[Object(v.jsx)(O.a,{variant:"primary",onClick:e.onBackClicked,children:"Back"}),"\xa0",r]}),Object(v.jsx)("br",{}),a.length>0?Object(v.jsx)(k.a,{hover:!0,size:"md",children:Object(v.jsx)("tbody",{children:a.map((function(e){return Object(v.jsx)(g,{item:e,onDoneClicked:c,onDeleteClicked:o},e.id)}))})}):Object(v.jsx)("h5",{children:Object(v.jsx)("center",{children:"Todo list is empty"})}),Object(v.jsx)("br",{}),Object(v.jsx)(T,{protected:e.protected,onNewItemAdd:s})]})};var C=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),s=Object(d.a)(c,2),o=s[0],l=s[1],j=function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(t,n),!n){e.next=10;break}return c=prompt("Todo is protected. Please enter password."),e.next=6,f.getTodoList(t,c);case 6:(r=e.sent).success?(l({todo_list:r.todo_list,is_protected:n}),a(!0)):alert(r.msg),e.next=14;break;case 10:return e.next=12,f.getTodoList(t,null);case 12:(r=e.sent).success?(l({todo_list:r.todo_list,is_protected:n}),a(!0)):alert(r.msg);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),"undefined"!==typeof e.t0.response.data&&alert(e.t0.response.data.msg);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getTodoList(t,n);case 2:r=e.sent,l((function(e){return{todo_list:r.todo_list,is_protected:e.is_protected}}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(v.jsx)(p.a,{children:n?Object(v.jsx)(y,{list:o.todo_list,protected:o.is_protected,onBackClicked:function(){a((function(e){return!e}))},reloadTodoList:b}):Object(v.jsx)(w,{onTodoClicked:j})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),L()}},[[55,1,2]]]);
//# sourceMappingURL=main.39b9228e.chunk.js.map