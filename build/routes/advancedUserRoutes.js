var express=require("express"),advancedUserRouter=express.Router(),appdata=require("../views/_partials/data/advancedUser.json");advancedUserRouter.get("/",function(e,r){var a=[],n=[],t=[];appdata.articles.forEach(function(e){a=a.concat(e.mdPic),n=n.concat(e.mdPicAlt),t=t.concat(e.mdUrl)}),r.render("./Advanced_User/Advanced_User",{title:"Advanced User",mdPic:a,mdPicAlt:n,mdUrl:t})}),advancedUserRouter.get("/Website_Integration/",function(e,r){r.render("./Advanced_User/Website_Integration",{title:"Website Integration",uplink:"/Advanced_User/"})}),advancedUserRouter.get("/Website_Integration/Cambozola",function(e,r){r.render("./Advanced_User/Cambozola",{title:"Cambozola (JAVA Plugin)",uplink:"/Advanced_User/Website_Integration/"})}),advancedUserRouter.get("/Website_Integration/Open_IP_Camera_Manager",function(e,r){r.render("./Advanced_User/Open_IP_Camera_Manager",{title:"Open IP Camera Manager (PHP)",uplink:"/Advanced_User/Website_Integration/"})}),advancedUserRouter.get("/Website_Integration/HD_Camera_Integration",function(e,r){r.render("./Advanced_User/HD_Camera_Integration",{title:"HD Camera Website Integration",uplink:"/Advanced_User/Website_Integration/"})}),advancedUserRouter.get("/CGI_Commands/",function(e,r){r.render("./Advanced_User/CGI_Commands",{title:"CGI Commands"})}),advancedUserRouter.get("/CGI_Commands/VGA_Series_CGI_List",function(e,r){r.render("./Advanced_User/VGA_Series_CGI_List",{title:"VGA Series CGI List"})}),advancedUserRouter.get("/Restore_WebUI/",function(e,r){r.render("./Advanced_User/Restore_WebUI",{title:"Restore your Camera after a faulty WebUI Upgrade",uplink:"/Advanced_User/"})}),advancedUserRouter.get("/Restore_Firmware/",function(e,r){r.render("./Advanced_User/Restore_Firmware",{title:"Restore your Camera after a faulty Firmware Upgrade",uplink:"/Advanced_User/"})}),advancedUserRouter.get("/CCTV_vs_IP/",function(e,r){r.render("./Advanced_User/CCTV_vs_IP",{title:"Difference Between Analog And IP Cameras",uplink:"/Advanced_User/"})}),module.exports=advancedUserRouter;