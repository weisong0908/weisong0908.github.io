(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{466:function(t,e,n){"use strict";n.r(e);var r=n(10),l=(n(49),n(41),{head:function(){return{title:"Teng Wei Song | Notes"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("/notes").where({draft:!1}).sortBy("publishDate","desc").fetch();case 3:return r=e.sent.map((function(p){return{slug:p.slug,ep:p.ep,title:p.title,publishDate:p.publishDate,summary:p.summary,tags:p.tags}})),e.abrupt("return",{notes:r});case 5:case"end":return e.stop()}}),e)})))()}}),o=l,c=n(27),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-8"},[e("h1",{staticClass:"text-3xl"},[t._v("Notes")]),t._v(" "),e("br"),t._v(" "),e("div",[e("ul",{staticClass:"flex flex-row space-x-8"},t._l(t.notes,(function(n){return e("li",{key:n.slug,staticClass:"note-item w-max-72"},[e("p",{staticClass:"text-gray-400 text-sm"},[t._v("Episode "+t._s(n.ep))]),t._v(" "),e("h2",{staticClass:"text-lg"},[e("NuxtLink",{attrs:{to:"/notes/".concat(n.slug)}},[t._v(t._s(n.title))])],1),t._v(" "),e("br"),t._v(" "),n.summary?e("p",{staticClass:"text-gray-500 text-sm"},[t._v("\n            "+t._s(n.summary)+"\n          ")]):t._e(),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"text-xs font-sans my-1 flex flex-row space-x-1 flex-wrap"},t._l(n.tags,(function(r){return n.tags?e("span",{key:r,staticClass:"border border-gray-400 px-1 text-gray-400"},[t._v(t._s(r))]):t._e()})),0)])})),0)]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"text-sm text-gray-400"},[t._v(t._s(t.notes.length)+" note(s) found.")])])}),[],!1,null,null,null);e.default=component.exports}}]);