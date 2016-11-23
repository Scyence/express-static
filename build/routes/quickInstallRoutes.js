var express=require("express"),quickInstallRouter=express.Router(),appdata=require("../views/_partials/data/quickInstall.json");quickInstallRouter.get("/",function(e,i){var t=[],n=[],o=[];appdata.articles.forEach(function(e){t=t.concat(e.qiPic),n=n.concat(e.qiPicAlt),o=o.concat(e.qiUrl)}),i.render("./Quick_Installation/Quick_Installation",{title:"Quick Installation",qiPic:t,qiPicAlt:n,qiUrl:o})}),quickInstallRouter.route("/How_Does_An_IP_Camera_Work").get(function(e,i){i.render("./Quick_Installation/How_Does_An_IP_Camera_Work",{title:"How Does An IP Camera Work?",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/First_Steps").get(function(e,i){i.render("./Quick_Installation/First_Steps",{title:"First Steps to get your IP camera working",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/After_Unpacking").get(function(e,i){i.render("./Quick_Installation/After_Unpacking",{title:"After unpacking your INSTAR IP Camera",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/Direct_LAN_Connection").get(function(e,i){i.render("./Quick_Installation/Direct_LAN_Connection",{title:"Direct connection with a PC or Notebook",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/Alternative_IP_Scanner").get(function(e,i){i.render("./Quick_Installation/Alternative_IP_Scanner",{title:"How to find your IP Camera with an alternative IP Scanner",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/Alternative_IP_Scanner/Angry_IP_Scanner").get(function(e,i){i.render("./Quick_Installation/Angry_IP_Scanner",{title:"Angry IP Scanner",uplink:"/Quick_Installation/Alternative_IP_Scanner/"})}),quickInstallRouter.route("/Alternative_IP_Scanner/Fing_CLI").get(function(e,i){i.render("./Quick_Installation/Fing_CLI",{title:"Fing IP Scanner - Command Line Interface",uplink:"/Quick_Installation/Alternative_IP_Scanner/"})}),quickInstallRouter.route("/Alternative_IP_Scanner/Fing_Mobile").get(function(e,i){i.render("./Quick_Installation/Fing_Mobile",{title:"Fing IP Scanner - Mobile App",uplink:"/Quick_Installation/Alternative_IP_Scanner/"})}),quickInstallRouter.route("/Language_Selection").get(function(e,i){i.render("./Quick_Installation/Language_Selection",{title:"Language Selection",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/Live_Video").get(function(e,i){i.render("./Quick_Installation/Live_Video",{title:"Live Video",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/Live_Video/ActiveX").get(function(e,i){i.render("./Quick_Installation/Live_Video_ActiveX",{title:"Live Video ActiveX",uplink:"/Quick_Installation/Live_Video/"})}),quickInstallRouter.route("/Live_Video/QuickTime").get(function(e,i){i.render("./Quick_Installation/Live_Video_QuickTime",{title:"Live Video QuickTime",uplink:"/Quick_Installation/Live_Video/"})}),quickInstallRouter.route("/Live_Video/MJPEG").get(function(e,i){i.render("./Quick_Installation/Live_Video_MJPEG",{title:"Live Video MJPEG",uplink:"/Quick_Installation/Live_Video/"})}),quickInstallRouter.route("/Live_Video/Troubleshooting/Avast").get(function(e,i){i.render("./Quick_Installation/Live_Video_Avast",{title:"Live Video Avast",uplink:"/Quick_Installation/Live_Video/"})}),quickInstallRouter.route("/Live_Video/Troubleshooting/Kaspersky_2013").get(function(e,i){i.render("./Quick_Installation/Live_Video_Kaspersky_2013",{title:"Live Video Kaspersky 2013",uplink:"/Quick_Installation/Live_Video/"})}),quickInstallRouter.route("/Live_Video/Troubleshooting/Kaspersky_2014").get(function(e,i){i.render("./Quick_Installation/Live_Video_Kaspersky_2014",{title:"Live Video Kaspersky 2014",uplink:"/Quick_Installation/Live_Video/"})}),quickInstallRouter.route("/Live_Video/Troubleshooting/Kaspersky_2017").get(function(e,i){i.render("./Quick_Installation/Live_Video_Kaspersky_2017",{title:"Live Video Kaspersky 2017",uplink:"/Quick_Installation/Live_Video/"})}),quickInstallRouter.route("/Live_Video/Troubleshooting/AVG").get(function(e,i){i.render("./Quick_Installation/Live_Video_AVG",{title:"Live Video AVG",uplink:"/Quick_Installation/Live_Video/"})}),quickInstallRouter.route("/Live_Video/Troubleshooting/AVIRA").get(function(e,i){i.render("./Quick_Installation/Live_Video_AVIRA",{title:"Live Video AVIRA",uplink:"/Quick_Installation/Live_Video/"})}),quickInstallRouter.route("/Live_Video/Troubleshooting/F-Secure").get(function(e,i){i.render("./Quick_Installation/Live_Video_F-Secure",{title:"Live Video F-Secure",uplink:"/Quick_Installation/Live_Video/"})}),quickInstallRouter.route("/Creating_User_Accounts").get(function(e,i){i.render("./Quick_Installation/Creating_User_Accounts",{title:"Creating user accounts on your camera",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/WebUI_And_Firmware_Upgrade").get(function(e,i){i.render("./Quick_Installation/WebUI_And_Firmware_Upgrade",{title:"WebUI and Firmware Upgrade",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/WebUI_And_Firmware_Upgrade/HD_Cameras").get(function(e,i){i.render("./Quick_Installation/WebUI_And_Firmware_Upgrade_HD",{title:"WebUI and Firmware Upgrade for HD Cameras",uplink:"/Quick_Installation/WebUI_And_Firmware_Upgrade/"})}),quickInstallRouter.route("/WebUI_And_Firmware_Upgrade/VGA_Cameras").get(function(e,i){i.render("./Quick_Installation/WebUI_And_Firmware_Upgrade_VGA",{title:"WebUI and Firmware Upgrade for VGA Cameras",uplink:"/Quick_Installation/WebUI_And_Firmware_Upgrade/"})}),quickInstallRouter.route("/How_To_Clear_Your_Browsing_History").get(function(e,i){i.render("./Quick_Installation/How_To_Clear_Your_Browsing_History",{title:"How to clear your Browsing History",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/How_To_Clear_Your_Browsing_History/Internet_Explorer").get(function(e,i){i.render("./Quick_Installation/How_To_Clear_Your_Browsing_History_Internet_Explorer",{title:"How to clear your Browsing History Internet Explorer",uplink:"/Quick_Installation/How_To_Clear_Your_Browsing_History/"})}),quickInstallRouter.route("/How_To_Clear_Your_Browsing_History/Mozilla_Firefox").get(function(e,i){i.render("./Quick_Installation/How_To_Clear_Your_Browsing_History_Mozilla_Firefox",{title:"How to clear your Browsing History Mozilla Firefox",uplink:"/Quick_Installation/How_To_Clear_Your_Browsing_History/"})}),quickInstallRouter.route("/How_To_Clear_Your_Browsing_History/Google_Chromium").get(function(e,i){i.render("./Quick_Installation/How_To_Clear_Your_Browsing_History_Google_Chromium",{title:"How to clear your Browsing History Google Chromium",uplink:"/Quick_Installation/How_To_Clear_Your_Browsing_History/"})}),quickInstallRouter.route("/How_To_Clear_Your_Browsing_History/Opera").get(function(e,i){i.render("./Quick_Installation/How_To_Clear_Your_Browsing_History_Opera",{title:"How to clear your Browsing History Opera",uplink:"/Quick_Installation/How_To_Clear_Your_Browsing_History/"})}),quickInstallRouter.route("/How_To_Clear_Your_Browsing_History/Microsoft_Edge").get(function(e,i){i.render("./Quick_Installation/How_To_Clear_Your_Browsing_History_Microsoft_Edge",{title:"How to clear your Browsing History Microsoft Edge",uplink:"/Quick_Installation/How_To_Clear_Your_Browsing_History/"})}),quickInstallRouter.route("/How_To_Clear_Your_Browsing_History/Vivaldi").get(function(e,i){i.render("./Quick_Installation/How_To_Clear_Your_Browsing_History_Vivaldi",{title:"How to clear your Browsing History Vivaldi",uplink:"/Quick_Installation/How_To_Clear_Your_Browsing_History/"})}),quickInstallRouter.route("/ONVIF").get(function(e,i){i.render("./Quick_Installation/ONVIF",{title:"ONVIF",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/Set_Up_A_Wireless_Connection").get(function(e,i){i.render("./Quick_Installation/Set_Up_A_Wireless_Connection",{title:"How to set up a Wireless Connection",uplink:"/Quick_Installation/"})}),quickInstallRouter.route("/DEV").get(function(e,i){i.render("DEV",{title:"DEV Resources"})}),quickInstallRouter.route("/AMP").get(function(e,i){i.render("AMP",{title:"Accelerated Mobile Page"})}),quickInstallRouter.route("/AMP2").get(function(e,i){i.render("AMP2",{title:"Accelerated Mobile Page 2"})}),quickInstallRouter.route("/AMP3").get(function(e,i){i.render("AMP3",{title:"Redirection"})}),quickInstallRouter.route("/AMP_Gallery").get(function(e,i){i.render("AMP_Gallery",{title:"AMP Gallery"})}),module.exports=quickInstallRouter;