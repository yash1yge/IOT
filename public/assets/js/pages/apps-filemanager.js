window.addEventListener("app:mounted",(function(){new Accordion("#my-files",{duration:200,openOnInit:[0]}),new Accordion("#tree1",{duration:200,showMultiple:!0}),new Accordion("#tree1-1",{duration:200,showMultiple:!0}),new Accordion("#tree1-2",{duration:200,showMultiple:!0}),new Accordion("#tree1-3",{duration:200,showMultiple:!0}),new Popper("#top-header-menu",".popper-ref",".popper-root",{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}}]}),new Tab("#tab-folders"),new Swiper("#tab-folder-recent",{slidesPerView:"auto",spaceBetween:20}),new Swiper("#tab-folder-pinned",{slidesPerView:"auto",spaceBetween:20}),new Popper("#dropdown-folders-table",".popper-ref",".popper-root",{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}}]}),new Popper("#dropdown-tags",".popper-ref",".popper-root",{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}}]}),new Drawer("#filemanager-activity-drawer"),new Tab("#drawer-tab")}),{once:!0});