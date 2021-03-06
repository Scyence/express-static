var express = require('express');
var outdoorCamsRouter = express.Router();

/* ****************************************** GET /Outdoor_Cameras ****************************************** */

outdoorCamsRouter.route('/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/Outdoor_Cameras', {
          title: 'INSTAR Outdoor IP Cameras',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          model: '9008',
          series: '1080p',
		      type: 'Outdoor',
          breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Products</a></li><li><a href="/Outdoor_Cameras">Outdoor Cams</a></li>',
          canonical: '/Outdoor_Cameras/',
      		pacc: 'expanded',
      		ptab: '',
      		qiacc: '',
      		qitab: 'hidden',
      		mdacc: '',
      		mdtab: 'hidden',
      		iaacc: '',
      		iatab: 'hidden',
      		auacc: '',
      		autab: 'hidden',
      		hdacc: 'hidden',
      		hdtab: 'hidden',
      		fhdacc: 'hidden',
      		fhdtab: 'hidden',
      		sacc: 'hidden',
      		dlacc: 'hidden',
      		dltab: 'hidden',
        });
    });


/* ###################################################### IN-9008 HD ###################################################### */

outdoorCamsRouter.route('/IN-9008_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-9008 HD Safety Warnings',
          model: '9008',
          series: '1080p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Safety.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Safety_Warnings/">Safety Warnings</a></li>',
          canonical: '/Outdoor_Cameras/IN-9008_HD/Safety_Warnings/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-9008 HD Warranty & Disposal',
          model: '9008',
          series: '1080p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Warranty.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Warranty/">Warranty</a></li>',
          canonical: '/Outdoor_Cameras/IN-9008_HD/Warranty/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-9008 HD Video Streaming',
          model: '9008',
          series: '1080p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Video_Streaming.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Outdoor_Cameras/IN-9008_HD/Video_Streaming/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-9008 HD Hardware Reset',
          model: '9008',
          series: '1080p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Reset.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Camera_Reset/">Camera Reset</a></li>',
          canonical: '/Outdoor_Cameras/IN-9008_HD/Camera_Reset/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Overview', {
      title: 'IN-9008 HD Overview',
      model: '9008',
      series: '1080p',
      type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li>',
    canonical: '/Outdoor_Cameras/IN-9008_HD/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Overview_Nightvision_Graph', {
          title: 'IN-9008 HD Nightvision Comparison',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Overview_Angle_Graph', {
          title: 'IN-9008 HD Angle of View Comparison',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/9008v5907/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Overview_9008v5907_Graph', {
          title: 'IN-9008 HD vs IN-5907 HD',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/9008v2905/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Overview_9008v2905_Graph', {
          title: 'IN-9008 HD vs IN-2905',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Usermanual')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Usermanual', {
      title: 'IN-9008 HD Usermanual',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Outdoor_Cameras/">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li>',
    canonical: '/Outdoor_Cameras/IN-9008_HD/Usermanual/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Product_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Product_Features', {
      title: 'IN-9008 HD Product Features',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Features.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Product_Features/">Product Features</a></li>',
    canonical: '/Outdoor_Cameras/IN-9008_HD/Product_Features/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation', {
      title: 'IN-9008 HD Quick Installation',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li>',
    canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/PoE_or_WiFi')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_1hole', {
      title: 'IN-9008 HD Quick Installation - PoE or WiFi',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/">WiFi or PoE</a></li>',
    canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/PoE_or_WiFi/Ethernet')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_1hole_lan', {
      title: 'IN-9008 HD Quick Installation - PoE or WiFi',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/">WiFi or PoE</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/Ethernet/">Ethernet</a></li>',
    canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/Ethernet/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/PoE_or_WiFi/WPS')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_1hole_wps', {
      title: 'IN-9008 HD Quick Installation - PoE or WiFi',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/">WiFi or PoE</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/WPS/">WPS</a></li>',
    canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/WPS/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/Ethernet')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_2hole', {
      title: 'IN-9008 HD Quick Installation - Ethernet',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet/">Ethernet</a></li>',
    canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/Ethernet_and_Audio-Out')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_3hole', {
      title: 'IN-9008 HD Quick Installation - Ethernet & Audio-Out',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet_and_Audio-Out/">Ethernet & Audio</a></li>',
    canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet_and_Audio-Out/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Lense_Adjustment', {
      title: 'IN-9008 HD Lense Adjustment',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Lense_Adjust.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Lense_Adjustment/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Tech_Specs', {
      title: 'IN-9008 HD Technical Specifications',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Technical_Specifications.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-9008_HD/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Technical_Specifications/Power_Graph')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Tech_Specs_Power_Graph', {
          title: 'IN-9008 HD Power Consumption',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Technical_Specifications/4-2mm_Lense_Graph')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Tech_Specs_4-2mm_Lense_Graph', {
          title: 'IN-9008 HD 4.2mm Wideangle Lense',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Technical_Specifications/Image_Width_Graph')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Tech_Specs_Image_Width_Graph', {
          title: 'IN-9008 HD Image Width Comparison',
        });
    });


/* ###################################################### IN-7011 HD ###################################################### */


outdoorCamsRouter.route('/IN-7011_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-7011 HD Safety Warnings',
          model: '7011',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Safety_Warnings.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Safety_Warnings/">Safety Warnings</a></li>',
          canonical: '/Outdoor_Cameras/IN-7011_HD/Safety_Warnings/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-7011 HD Warranty & Disposal',
          model: '7011',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Warranty.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Warranty/">Warranty</a></li>',
          canonical: '/Outdoor_Cameras/IN-7011_HD/Warranty/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-7011 HD Video Streaming',
          model: '7011',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Video_Streaming.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Outdoor_Cameras/IN-7011_HD/Video_Streaming/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-7011 HD Hardware Reset',
          model: '7011',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Reset.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Camera_Reset/">Camera Reset</a></li>',
          canonical: '/Outdoor_Cameras/IN-7011_HD/Camera_Reset/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Overview', {
      title: 'IN-7011 HD Overview',
      model: '7011',
      series: '720p',
      type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li>',
    canonical: '/Outdoor_Cameras/IN-7011_HD/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-7011_Overview_Nightvision_Graph', {
          title: 'IN-7011 HD Nightvision Comparison',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-7011_Overview_Angle_Graph', {
          title: 'IN-7011 HD Angle of View Comparison',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/7011v9008/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-7011_Overview_7011v9008_Graph', {
          title: 'IN-7011 HD vs IN-9008 HD',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/7011v2905/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-7011_Overview_7011v2905_Graph', {
          title: 'IN-7011 HD vs IN-2905',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Usermanual')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Usermanual', {
      title: 'IN-7011 HD Usermanual',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Outdoor_Cameras/">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li>',
    canonical: '/Outdoor_Cameras/IN-7011_HD/Usermanual/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Product_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Product_Features', {
      title: 'IN-7011 HD Product Features',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Features.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Product_Features/">Product Features</a></li>',
    canonical: '/Outdoor_Cameras/IN-7011_HD/Product_Features/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Point2Point')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Point2Point', {
      title: 'IN-7011 HD Point 2 Point',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Point2Point/">Point2Point</a></li>',
    canonical: '/Outdoor_Cameras/IN-7011_HD/Point2Point/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Quick_Installation', {
      title: 'IN-7011 HD Quick Installation',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Quick_Installation/">Quick Installation</a></li>',
    canonical: '/Outdoor_Cameras/IN-7011_HD/Quick_Installation/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Lense_Adjustment', {
      title: 'IN-7011 HD Lense Adjustment',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Lense_Adjust.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
      canonical: '/Outdoor_Cameras/IN-7011_HD/Lense_Adjustment/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Tech_Specs', {
      title: 'IN-7011 HD Technical Specifications',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Technical_Specification.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-7011_HD/Technical Specifications/">Technical Specifications</a></li>',
      canonical: '/Outdoor_Cameras/IN-7011_HD/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### IN-5907 HD ###################################################### */


outdoorCamsRouter.route('/IN-5907_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-5907 HD Safety Warnings',
          model: '5907',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Safety_Warnings.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Safety_Warnings/">Safety Warnings</a></li>',
          canonical: '/Outdoor_Cameras/IN-5907_HD/Safety_Warnings/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-5907 HD Warranty & Disposal',
          model: '5907',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Warranty.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Warranty/">Warranty</a></li>',
          canonical: '/Outdoor_Cameras/IN-5907_HD/Warranty/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-5907 HD Video Streaming',
          model: '5907',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Video_Streaming.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Outdoor_Cameras/IN-5907_HD/Video_Streaming/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-5907 HD Hardware Reset',
          model: '5907',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Reset.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Camera_Reset/">Camera Reset</a></li>',
          canonical: '/Outdoor_Cameras/IN-5907_HD/Camera_Reset/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Overview', {
      title: 'IN-5907 HD Overview',
      model: '5907',
      series: '720p',
      type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5907_Overview_Nightvision_Graph', {
          title: 'IN-5907 HD Nightvision Comparison',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5907_Overview_Angle_Graph', {
          title: 'IN-5907 HD Angle of View Comparison',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/5907v9008/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5907_Overview_5907v9008_Graph', {
          title: 'IN-5907 HD vs IN-9008 HD',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/5907v2905/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5907_Overview_5907v2905_Graph', {
          title: 'IN-5907 HD vs IN-2905',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Usermanual')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Usermanual', {
      title: 'IN-5907 HD Usermanual',
      model: '5907',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Usermanual/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Product_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Product_Features', {
      title: 'IN-5907 HD Product Features',
      model: '5907',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Features.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Product_Features/">Product Features</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Product_Features/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Point2Point')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Point2Point', {
      title: 'IN-5907 HD Point 2 Point',
      model: '5907',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Point2Point/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Quick_Installation', {
      title: 'IN-5907 HD Quick Installation',
      model: '5907',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Quick_Installation/">Quick Installation</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Quick_Installation/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Lense_Adjustment', {
      title: 'IN-5907 HD Lense Adjustment',
      model: '5907',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Lense_Adjust.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Lense_Adjustment/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Tech_Specs', {
      title: 'IN-5907 HD Technical Specifications',
      model: '5907',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Technical_Specifications.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### IN-5905 HD ###################################################### */


outdoorCamsRouter.route('/IN-5905_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-5905 HD Safety Warnings',
          model: '5905',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Safety_Warnings.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/ProductsOutdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Safety_Warnings/">Safety Warnings</a></li>',
          canonical: '/Outdoor_Cameras/IN-5905_HD/Safety_Warnings/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-5905 HD Warranty & Disposal',
          model: '5905',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Warranty.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Warranty/">Warranty</a></li>',
          canonical: '/Outdoor_Cameras/IN-5905_HD/Warranty/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-5905 HD Video Streaming',
          model: '5905',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Video_Streaming.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Outdoor_Cameras/IN-5905_HD/Video_Streaming/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-5905 HD Hardware Reset',
          model: '5905',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Reset.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Camera_Reset/">Camera Reset</a></li>',
          canonical: '/Outdoor_Cameras/IN-5905_HD/Camera_Reset/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Overview', {
      title: 'IN-5905 HD Overview',
      model: '5905',
      series: '720p',
      type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5905_Overview_Nightvision_Graph', {
          title: 'IN-5905 HD Nightvision Comparison',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5905_Overview_Angle_Graph', {
          title: 'IN-5905 HD Angle of View Comparison',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/5905v9008/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5905_Overview_5905v9008_Graph', {
          title: 'IN-5905 HD vs IN-9008 HD',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/5905v2905/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5905_Overview_5905v2905_Graph', {
          title: 'IN-5905 HD vs IN-2905',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Usermanual')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Usermanual', {
      title: 'IN-5905 HD Usermanual',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Usermanual/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Product_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Product_Features', {
      title: 'IN-5905 HD Product Features',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Features.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Product_Features/">Product Features</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Product_Features/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Point2Point')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Point2Point', {
      title: 'IN-5905 HD Point 2 Point',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Point2Point/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Quick_Installation', {
      title: 'IN-5905 HD Quick Installation',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Quick_Installation/">Quick Installation</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Quick_Installation/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Lense_Adjustment', {
      title: 'IN-5905 HD Lense Adjustment',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Lense_adjust.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Lense_Adjustment/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Tech_Specs', {
      title: 'IN-5905 HD Technical Specifications',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Technical_Specifications.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### VGA ###################################################### */


outdoorCamsRouter.route('/IN-4011')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4011_Overview', {
      title: 'IN-4011 Overview',
      model: '4011',
      series: 'VGA',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-4011.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item active"><a href="/Outdoor_Cameras/IN-4011/">IN-4011</a></li>',
      canonical: '/Outdoor_Cameras/IN-4011/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-4011/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4011_Tech_Specs', {
      title: 'IN-4011 Technical Specifications',
      model: '4011',
      series: 'VGA',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-4011_Technical_Specifications.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-4011/">IN-4011</a></li><li class="breadcrumb-item active"><a href="/Outdoor_Cameras/IN-4011/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Outdoor_Cameras/IN-4011/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-4010_V2')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4010_V2_Overview', {
      title: 'IN-4010 V2 Overview',
      model: '4010',
      series: 'VGA',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-4010.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item active"><a href="/Outdoor_Cameras/IN-4010_V2/">IN-4010 V2</a></li>',
      canonical: '/Outdoor_Cameras/IN-4010_V2/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-4010_V2/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4010_V2_Tech_Specs', {
      title: 'IN-4010 V2 Technical Specifications',
      model: '4010',
      series: 'VGA',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-4010_Technical_Specifications.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-4010_V2/">IN-4010 V2</a></li><li class="breadcrumb-item active"><a href="/Outdoor_Cameras/IN-4010_V2/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Outdoor_Cameras/IN-4010_V2/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-2908')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2908_Overview', {
      title: 'IN-2908 Overview',
      model: '2908',
      series: 'VGA',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-2908.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item active"><a href="/Outdoor_Cameras/IN-2908/">IN-2908</a></li>',
      canonical: '/Outdoor_Cameras/IN-2908/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-2908/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2908_Tech_Specs', {
      title: 'IN-2908 Technical Specifications',
      model: '2908',
      series: 'VGA',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-2908_Technical_Specifications.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-2908/">IN-2908</a></li><li class="breadcrumb-item active"><a href="/Outdoor_Cameras/IN-2908/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Outdoor_Cameras/IN-2908/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-2905_V2')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2905_V2_Overview', {
      title: 'IN-2905 V2 Overview',
      model: '2905',
      series: 'VGA',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-2905.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item active"><a href="/Outdoor_Cameras/IN-2905_V2/">IN-2905 V2</a></li>',
      canonical: '/Outdoor_Cameras/IN-2905_V2/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-2905_V2/Technical_Specifications')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2905_V2_Tech_Specs', {
      title: 'IN-2905 V2 Technical Specifications',
      model: '2905',
      series: 'VGA',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-2905_Technical_Specifications.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/">Outdoor Cameras</a></li><li class="breadcrumb-item"><a href="/Outdoor_Cameras/IN-2905_V2/">IN-2905 V2</a></li><li class="breadcrumb-item active"><a href="/Outdoor_Cameras/IN-2905_V2/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Outdoor_Cameras/IN-2905_V2/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});



module.exports = outdoorCamsRouter;
