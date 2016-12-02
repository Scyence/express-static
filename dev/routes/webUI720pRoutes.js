var express = require('express');
var webUI720pRouter = express.Router();

/* ###################################### HD Series ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface HD Series',
            uplink: '/Web_User_Interface/1080p_Series/Overview/',
          });
      });

/* ###################################### HD Series Software ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Software/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software', {
            title: 'Software Menu',
            uplink: '/Web_User_Interface/720p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Software/Language/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Language', {
            title: 'Software Menu :: Language',
            uplink: '/Web_User_Interface/720p_Series/Software/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Software/Backup/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Backup', {
            title: 'Software Menu :: Backup',
            uplink: '/Web_User_Interface/720p_Series/Software/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Software/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Update', {
            title: 'Software Menu :: Update',
            uplink: '/Web_User_Interface/720p_Series/Software/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Software/Reboot_Reset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Reboot_Reset', {
            title: 'Software Menu :: Reboot & Reset',
            uplink: '/Web_User_Interface/720p_Series/Software/',
          });
      });

/* ###################################### HD Series Network ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network', {
            title: 'Network Menu',
            uplink: '/Web_User_Interface/720p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/IP_Configuration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Network Menu :: IP Configuration',
            uplink: '/Web_User_Interface/720p_Series/Network/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/WiFi/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Network Menu :: WiFi',
            uplink: '/Web_User_Interface/720p_Series/Network/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/DDNS/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_DDNS', {
            title: 'Network Menu :: DDNS',
            uplink: '/Web_User_Interface/720p_Series/Network/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/P2P/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_P2P', {
            title: 'Network Menu :: P2P',
            uplink: '/Web_User_Interface/720p_Series/Network/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Network Menu :: UPnP',
            uplink: '/Web_User_Interface/720p_Series/Network/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/Push_Service/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_Push_Service', {
            title: 'Network Menu :: Push Service',
            uplink: '/Web_User_Interface/720p_Series/Network/',
          });
      });

/* ###################################### HD Series System ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System', {
            title: 'System Menu',
            uplink: '/Web_User_Interface/720p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menu :: Info',
            uplink: '/Web_User_Interface/720p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/Date_Time/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menu :: Date & Time',
            uplink: '/Web_User_Interface/720p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/User/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_User', {
            title: 'System Menu :: User',
            uplink: '/Web_User_Interface/720p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Status_LED', {
            title: 'System Menu :: Status LED',
            uplink: '/Web_User_Interface/720p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/IR_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_IR_LED', {
            title: 'System Menu :: IR LED',
            uplink: '/Web_User_Interface/720p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_ONVIF', {
            title: 'System Menu :: ONVIF',
            uplink: '/Web_User_Interface/720p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_PTZ', {
            title: 'System Menu :: PTZ',
            uplink: '/Web_User_Interface/720p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_PTZ_Tour', {
            title: 'System Menu :: PTZ Tour',
            uplink: '/Web_User_Interface/720p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/System_Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_System_Log', {
            title: 'System Menu :: System Log',
            uplink: '/Web_User_Interface/720p_Series/System/',
          });
      });

/* ###################################### HD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menu',
            uplink: '/Web_User_Interface/720p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menu :: Audio',
            uplink: '/Web_User_Interface/720p_Series/Multimedia/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menu :: Video',
			uplink: '/Web_User_Interface/720p_Series/Multimedia/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Multimedia/Image/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menu :: Image',
			uplink: '/Web_User_Interface/720p_Series/Multimedia/',
          });
      });

/* ###################################### HD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menu',
			uplink: '/Web_User_Interface/720p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Areas/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menu :: Areas',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Privacy_Mask/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Privacy_Mask', {
            title: 'Alarm Menu :: Privacy Mask',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Actions/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menu :: Actions',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menu :: Schedule',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/SMTP_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_SMTP_Server', {
            title: 'Alarm Menu :: SMTP Server',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Email', {
            title: 'Alarm Menu :: Email',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_FTP', {
            title: 'Alarm Menu :: FTP',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Audio_Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Audio_Alarm', {
            title: 'Alarm Menu :: Audio Alarm',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Alarmserver/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Alarmserver', {
            title: 'Alarm Menu :: Alarmserver',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/SD_Card/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_SD_Card', {
            title: 'Alarm Menu :: SD Card',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
          });
      });

/* ###################################### HD Series Recording ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording', {
            title: 'Recording Menu',
			uplink: '/Web_User_Interface/720p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Recording/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Schedule', {
            title: 'Recording Menu :: Schedule',
			uplink: '/Web_User_Interface/720p_Series/Recording/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Recording/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Recording Menu :: Video',
			uplink: '/Web_User_Interface/720p_Series/Recording/',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Recording/Photoseries/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Recording Menu :: Photoseries',
			uplink: '/Web_User_Interface/720p_Series/Recording/',
          });
      });

/* ###################################### HD Series Menu Bar ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Menu_Bar', {
            title: 'Menu Bar',
			uplink: '/Web_User_Interface/720p_Series/',
          });
      });

/* ###################################### HD Series Video Menu Bar ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Video_Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Video_Menu_Bar', {
            title: 'Video Menu Bar',
			uplink: '/Web_User_Interface/720p_Series/',
          });
      });

/* ###################################### HD Series PTZ ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/PTZ_Control/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_PTZ_Control', {
            title: 'PTZ Control',
			uplink: '/Web_User_Interface/720p_Series/',
          });
      });

module.exports = webUI720pRouter;
