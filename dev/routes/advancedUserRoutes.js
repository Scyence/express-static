var express = require('express');
var advancedUserRouter = express.Router();
var appdata = require('../views/_partials/data/advancedUser.json');

/* GET Internet_Access page. */
advancedUserRouter.get('/', function(req, res) {
    res.render('./Advanced_User/Advanced_User', {
        title: 'Advanced User',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        headline: 'For Developers',
      });
  });

advancedUserRouter.get('/Website_Integration/', function(req, res) {
    res.render('./Advanced_User/Website_Integration', {
        title: 'Website Integration',
        uplink: '/Advanced_User/',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        headline: 'IP Camera Website Integration',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Advanced User</a></li><li><a href="/Advanced_User/Website_Integration/">Website Integration</a></li>',
		pacc: '',
		qiacc: '',
		mdacc: '',
		iaacc: '',
		auacc: 'expanded',
      });
  });

advancedUserRouter.get('/Website_Integration/Cambozola', function(req, res) {
    res.render('./Advanced_User/Cambozola', {
        title: 'Cambozola (JAVA Plugin)',
        uplink: '/Advanced_User/Website_Integration/',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        headline: 'IP Camera Website Integration with Cambozola',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Advanced User</a></li><li><a href="/Advanced_User/Website_Integration/">Website Integration</a></li><li><a href="/Advanced_User/Website_Integration/Cambozola/">Cambozola</a></li>',
		pacc: '',
		qiacc: '',
		mdacc: '',
		iaacc: '',
		auacc: 'expanded',
      });
  });

advancedUserRouter.get('/Website_Integration/Open_IP_Camera_Manager', function(req, res) {
    res.render('./Advanced_User/Open_IP_Camera_Manager', {
        title: 'Open IP Camera Manager (PHP)',
        uplink: '/Advanced_User/Website_Integration/',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        headline: 'IP Camera Website Integration with OICM',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Advanced User</a></li><li><a href="/Advanced_User/Website_Integration/">Website Integration</a></li><li><a href="/Advanced_User/Website_Integration/Open_IP_Camera_Manager/">OIPCM</a></li>',
		pacc: '',
		qiacc: '',
		mdacc: '',
		iaacc: '',
		auacc: 'expanded',
      });
  });

advancedUserRouter.get('/Website_Integration/HD_Camera_Integration', function(req, res) {
    res.render('./Advanced_User/HD_Camera_Integration', {
        title: 'HD Camera Website Integration',
        uplink: '/Advanced_User/Website_Integration/',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        headline: 'H.264 IP Camera Website Integration',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Advanced User</a></li><li><a href="/Advanced_User/Website_Integration/">Website Integration</a></li><li><a href="/Advanced_User/Website_Integration/HD_Camera_Integration/">HD Cameras</a></li>',
		pacc: '',
		qiacc: '',
		mdacc: '',
		iaacc: '',
		auacc: 'expanded',
      });
  });

advancedUserRouter.get('/CGI_Commands/', function(req, res) {
    res.render('./Advanced_User/CGI_Commands', {
        title: 'CGI Commands',
        uplink: '/Advanced_User/',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        headline: 'CGI Commands',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Advanced User</a></li><li><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li>',
		pacc: '',
		qiacc: '',
		mdacc: '',
		iaacc: '',
		auacc: 'expanded',
      });
  });

advancedUserRouter.get('/CGI_Commands/VGA_Series_CGI_List', function(req, res) {
    res.render('./Advanced_User/VGA_Series_CGI_List', {
        title: 'VGA Series CGI List',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/VGA_Series_CGI_List/">VGA Series</a></li>',
		pacc: '',
		qiacc: '',
		mdacc: '',
		iaacc: '',
		auacc: 'expanded',
      });
  });

advancedUserRouter.get('/Restore_WebUI/', function(req, res) {
    res.render('./Advanced_User/Restore_WebUI', {
        title: 'Restore your Camera after a faulty WebUI Upgrade',
        uplink: '/Advanced_User/',
        ampimg: '/images/Search/AU_SearchThumb_ResetAfterWebUIError.jpg',
        headline: 'Restore your Camera after a faulty WebUI Upgrade',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Advanced User</a></li><li><a href="/Advanced_User/Restore_WebUI/">Restore WebUI</a></li>',
		pacc: '',
		qiacc: '',
		mdacc: '',
		iaacc: '',
		auacc: 'expanded',
      });
  });

advancedUserRouter.get('/Restore_Firmware/', function(req, res) {
    res.render('./Advanced_User/Restore_Firmware', {
        title: 'Restore your Camera after a faulty Firmware Upgrade',
        uplink: '/Advanced_User/',
        ampimg: '/images/Search/AU_SearchThumb_ResetAfterFirmwareError.jpg',
        headline: 'Restore your Camera after a faulty Firmware Upgrade',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Advanced User</a></li><li><a href="/Advanced_User/Restore_Firmware/">Restore Firmware</a></li>',
		pacc: '',
		qiacc: '',
		mdacc: '',
		iaacc: '',
		auacc: 'expanded',
      });
  });

advancedUserRouter.get('/CCTV_vs_IP/', function(req, res) {
    res.render('./Advanced_User/CCTV_vs_IP', {
        title: 'Difference Between Analog And IP Cameras',
        uplink: '/Advanced_User/',
        ampimg: '/images/Search/AU_SearchThumb_IPvsCCTV.jpg',
        headline: 'Difference Between Analog And IP Cameras',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Advanced User</a></li><li><a href="/Advanced_User/CCTV_vs_IP/">CCTV vs IP</a></li>',
		pacc: '',
		qiacc: '',
		mdacc: '',
		iaacc: '',
		auacc: 'expanded',
      });
  });

advancedUserRouter.get('/VPN_AVM_Fritzbox/', function(req, res) {
    res.render('./Advanced_User/VPN_AVM_Fritzbox_Windows', {
        title: 'VPN in AVM Fritzbox',
        uplink: '/Advanced_User/',
        ampimg: '/images/Search/AU_SearchThumb_VPN.jpg',
        headline: 'IP Camera Website Integration',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Advanced User</a></li><li><a href="/Advanced_User/VPN_AVM_Fritzbox/">VPN AVM Fritzbox</a></li>',
		pacc: '',
		qiacc: '',
		mdacc: '',
		iaacc: '',
		auacc: 'expanded',
      });
  });

module.exports = advancedUserRouter;
