window.addEventListener("app:mounted",(function(){var a={placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}}]};new Popper("#dropdown-wrapper1",".popper-ref",".popper-root",a),new Popper("#dropdown-wrapper2",".popper-ref",".popper-root",a),new Popper("#dropdown-wrapper3",".popper-ref",".popper-root",a),new Popper("#dropdown-wrapper4",".popper-ref",".popper-root",a);var e=document.querySelector("#grid-table-1"),t=e.querySelector("[data-grid-ref]"),r=e.querySelector("[data-grid-wrapper]");e._table=new Gridjs.Grid({from:t,sort:!0,search:!0}).render(r);var i=document.querySelector("#grid-table-2");i._table=new Gridjs.Grid({data:[{id:59,title:"Spring and summershoes",price:20,quantity:3,total:60,discountPercentage:8.71,discountedPrice:55},{id:88,title:"TC Reusable Silicone Magic",price:29,quantity:2,total:58,discountPercentage:3.19,discountedPrice:56},{id:18,title:"Oil Free Moisturizer 100ml",price:40,quantity:2,total:80,discountPercentage:13.1,discountedPrice:70},{id:95,title:"Wholesale cargo lashing Belt",price:930,quantity:1,total:930,discountPercentage:17.67,discountedPrice:766},{id:39,title:"Women Sweaters Wool",price:600,quantity:2,total:1200,discountPercentage:17.2,discountedPrice:994},{id:96,title:"lighting ceiling kitchen",price:30,quantity:2,total:60,discountPercentage:14.89,discountedPrice:51},{id:91,title:"Black Motorbike",price:569,quantity:3,total:1707,discountPercentage:13.63,discountedPrice:1474},{id:9,title:"Infinix INBOOK",price:1099,quantity:1,total:1099,discountPercentage:11.83,discountedPrice:969},{id:16,title:"Hyaluronic Acid Serum",price:19,quantity:1,total:19,discountPercentage:13.31,discountedPrice:16},{id:54,title:"Pubg Printed Graphic T-Shirt",price:46,quantity:3,total:138,discountPercentage:16.44,discountedPrice:115}],sort:!0,search:!0}).render(i);var n=document.querySelector("#grid-table-3");n._table=new Gridjs.Grid({pagination:!0,search:{server:{url:function(a,e){return"".concat(a,"?search=").concat(e)}}},sort:!0,columns:["Title","Director","Producer"],server:{url:"https://swapi.py4e.com/api/films/",then:function(a){return a.results.map((function(a){return[a.title,a.director,a.producer]}))}}}).render(n);var o=document.querySelector("#grid-table-4"),c={columns:[{id:"id",name:"ID",formatter:function(a){return Gridjs.html('<span className="mx-2">'.concat(a,"</span>"))}},{id:"name",name:"Name",formatter:function(a){return Gridjs.html('<span className="text-slate-700 dark:text-navy-100 font-medium">'.concat(a,"</span>"))}},{id:"avatar_url",name:"Avatar",sort:!1,formatter:function(a){return Gridjs.html('<div className="avatar flex">\n                                  <img className="rounded-full" src="'.concat(a,'" alt="avatar">\n                              </div>'))}},{id:"email",name:"Email"},{id:"phone",name:"Phone Number"},{name:"Actions",sort:!1,formatter:function(){return Gridjs.html('<div className="flex justify-center space-x-2">\n                          <button onclick="$notification({ text: \'Item remove action\', variant: \'warning\' })" className="btn h-8 w-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">\n                              <i className="fa fa-edit"></i>\n                          </button>\n                          <button onclick="$notification({ text: \'Item edit action\', variant: \'info\' })" className="btn h-8 w-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">\n                              <i className="fa fa-trash-alt"></i>\n                          </button>\n                      </div>')}}],data:[{id:"1",name:"John",email:"john@example.com",phone:"(01) 22 888 4444",avatar_url:"images/avatar/avatar-2.jpg"},{id:"2",name:"Doe",email:"thedoe@example.com",phone:"(33) 22 888 4444",avatar_url:"images/avatar/avatar-19.jpg"},{id:"3",name:"Nancy",email:"nancy@example.com",phone:"(21) 33 888 4444",avatar_url:"images/avatar/avatar-14.jpg"},{id:"4",name:"Clarke",email:"clarke@example.com",phone:"(44) 33 888 4444",avatar_url:"images/avatar/avatar-20.jpg"},{id:"5",name:"Robert",email:"robert@example.com",phone:"(27) 63 688 6444",avatar_url:"images/avatar/avatar-14.jpg"},{id:"6",name:"Tom",email:"thetom@example.com",phone:"(57) 63 688 6444",avatar_url:"images/avatar/avatar-4.jpg"},{id:"7",name:"Nolan",email:"Nolan@example.com",phone:"(27) 63 688 6444",avatar_url:"images/avatar/avatar-3.jpg"},{id:"8",name:"Adam",email:"Adam@example.com",phone:"(12) 22 888 4444",avatar_url:"images/avatar/avatar-2.jpg"},{id:"9",name:"Glen",email:"Glen@example.com",phone:"(74) 22 888 4444",avatar_url:"images/avatar/avatar-18.jpg"},{id:"10",name:"Edna",email:"Edna@example.com",phone:"(52) 33 888 4444",avatar_url:"images/avatar/avatar-13.jpg"},{id:"11",name:"Dianne",email:"dianne@example.com",phone:"(78) 33 888 4444",avatar_url:"images/avatar/avatar-2.jpg"},{id:"12",name:"Wilson",email:"wilson@example.com",phone:"(54) 63 688 6444",avatar_url:"images/avatar/avatar-1.jpg"},{id:"13",name:"Ross",email:"rose@example.com",phone:"(98) 63 688 6444",avatar_url:"images/avatar/avatar-4.jpg"},{id:"14",name:"Henry",email:"henry@example.com",phone:"(87) 63 688 6444",avatar_url:"images/avatar/avatar-3.jpg"},{id:"15",name:"Kerry",email:"kerry@example.com",phone:"(55) 63 688 6444",avatar_url:"images/avatar/avatar-3.jpg"}],sort:!0,search:!0,pagination:{enabled:!0,limit:10}};o._table=new Gridjs.Grid(c).render(o)}),{once:!0});