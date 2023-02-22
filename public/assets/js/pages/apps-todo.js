window.addEventListener("app:mounted",(function(){new Popper("#sidebar-label-menu",".popper-ref",".popper-root",{placement:"bottom-end",modifiers:[{name:"offset",options:{offset:[0,4]}}]}),new Popper("#top-header-menu",".popper-ref",".popper-root",{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}}]});var e=document.querySelector("#todo-list");e._sortable=Sortable.create(e,{animation:200,easing:"cubic-bezier(0, 0, 0.2, 1)",direction:"vertical",delay:150,delayOnTouchOnly:!0}),document.querySelectorAll(".todo-checkbox").forEach((function(e){return e.addEventListener("click",(function(e){return e.stopPropagation()}))})),new Drawer("#edit-todo-drawer");var a=document.querySelector("#edit-todo-tags");a._tom=new Tom(a);var t=document.querySelector("#edit-todo-due-date");t._datepicker=flatpickr(t,{defaultDate:"2020-01-05"});var o=document.querySelector("#edit-todo-assigned");o._tom=new Tom(o,{valueField:"id",searchField:"title",options:[{id:1,name:"John Doe",job:"Web designer",src:"images/avatar/avatar-20.jpg"},{id:2,name:"Emilie Watson",job:"Developer",src:"images/avatar/avatar-11.jpg"},{id:3,name:"Nancy Clarke",job:"Software Engineer",src:"images/avatar/avatar-7.jpg"}],placeholder:"Select the user",render:{option:function(e,a){return'<div className="flex space-x-3">\n                      <div className="avatar w-8 h-8">\n                        <img className="rounded-full" src="'.concat(a(e.src),'" alt="avatar"/>\n                      </div>\n                      <div className="flex flex-col">\n                        <span> ').concat(a(e.name),'</span>\n                        <span className="text-xs opacity-80"> ').concat(a(e.job),"</span>\n                      </div>\n                    </div>")},item:function(e,a){return'<span className="inline-flex items-center">\n        <span className="avatar w-6 h-6">\n            <img className="rounded-full" src="'.concat(a(e.src),'" alt="avatar">\n        </span>\n        <span className="mx-2">').concat(a(e.name),"</span>\n      </span>")}}});var n=document.querySelector("#edit-todo-description");n._quill=new Quill(n,{modules:{toolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"},{header:1},{background:[]}]]},placeholder:"Enter your content...",theme:"snow"})}),{once:!0});