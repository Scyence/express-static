# Node/Express Wiki/Knowledgebase
**Bootstrap/Accelerated Mobile Pages**


 This code is part of a training in web development with **Node.js** and **Express /Generator**. Goal of this course is to quickly set up a node/express environment to serve static HTML/CSS/JS content.

This App was created in several steps:

1. [Install Node.js and Express.js to develop our Web Application](#1-install-nodejs-and-expressjs-to-serve-our-web-application)
2. [Preparing the Site Structure](#2-preparing-the-site-structure)
3. [Import JSON Elements](#3-import-json-elements)
4. [Install and Configure Gulp.js](#4-install-and-configure-gulpjs)
5. [Install NGINX on CentOS](#5-install-nginx-on-a-centos-7-web-server)
6. [Install Node.js on CentOS](#6-install-nodejs-on-a-centos-7-web-server)
7. [Clone Repo from Git](#7-clone-repo-from-git)
8. [Run the app as a service (PM2)](#8-run-the-app-as-a-service-pm2)
9. [Install Java](#9-install-java)
10. [Install Elasticsearch](#10-install-elasticsearch)
11. [Install Kibana](#11-install-kibana)


### 1 Install Node.js and Express.js to develop our Web Application
___

* Install [Node.js](https://nodejs.org/en/download/).
* Install express-generator globally to set up our node/express scaffolding: *npm install -g express-generator*
* Apply the generator with the EJS templating engine (*-e*) and give your app an name (*e.g. express-static*): *express -e express-static*
* Switch to the created express-static folder and install dependencies: *cd express-static && npm install*
* Start the app with: DEBUG=my-application ./bin/www


### 2 Preparing the Site Structure
___

The following folders and files will be created in the **dev** folder. Later [Gulp.js](#4-install-and-configure-gulpjs) will be used to create a distilled version ready for deployment in the **build** folder.

* Add *partials/content* to the *views* folder
* Add *partials/template* to views and add *head.ejs*, *header.ejs*, *footer.ejs* and *jsdefaults.ejs*
* Copy content from the *head* section of your web site (*index.ejs*) to *head.ejs*
* Reference the *head.ejs* file inside the *head* section of index.ejs: *<% include partials/template/head.ejs %>*
* Add *<script src="/javascrip/scrip.js"></script>* to *jsdefaults.ejs* and reference it in *index.ejs* at the end of body: *<% include partials/template/jsdefaults.ejs %>*
* Copy all JS script tags to *jsdefaults.ejs*
* Copy content from the *footer* section of your web site (*index.ejs*) to *footer.ejs*
* Reference the *footer.ejs* file inside the *footer* section of index.ejs: *<% include partials/template/footer.ejs %>*
* Repeat with other partials that you might want to reuse on other pages!
* Copy all your websites (EJS files) pages into the content folder


### 3 Import JSON Elements
___

**index.js**

Let´s add data from the *gallery.json* file to our index.ejs page. First we have to reference the JSON document in the *index.js* route. We also specify which elemts we want to extract from the file, so we can later create a for-loop over it inside the gallery-xxx.ejs partials.

```javascript
var express = require('express');
var router = express.Router();
var appdata = require('../views/partials/data/gallery.json'); /* Reference the JSON file (can later be subtitued by a database) */

/* GET home page. */
router.get('/', function(req, res, next) {

    var qiPicture = []; /* Create arrays  */
    var qiPictureAlt = [];
    var qiHref = [];
    var iaPicture = [];
    var iaPictureAlt = [];
    var iaHref = [];
    var mdPicture = [];
    var mdPictureAlt = [];
    var mdHref = [];
    appdata.articles.forEach(function(item) { /* Add all elements from gallery.json for the gallery */
        qiPicture = qiPicture.concat(item.qiPic);
        qiPictureAlt = qiPictureAlt.concat(item.qiPicAlt);
        qiHref = qiHref.concat(item.qiUrl);
        iaPicture = iaPicture.concat(item.iaPic);
        iaPictureAlt = iaPictureAlt.concat(item.iaPicAlt);
        iaHref = iaHref.concat(item.iaUrl);
        mdPicture = mdPicture.concat(item.mdPic);
        mdPictureAlt = mdPictureAlt.concat(item.mdPicAlt);
        mdHref = mdHref.concat(item.mdUrl);
      });

    res.render('index', {  /* Make arrays available in index.ejs */
        title: 'INSTAR Wiki',
        qiPic: qiPicture,
        qiPicAlt: qiPictureAlt,
        qiUrl: qiHref,
        iaPic: iaPicture,
        iaPicAlt: iaPictureAlt,
        iaUrl: iaHref,
        mdPic: mdPicture,
        mdPicAlt: mdPictureAlt,
        mdUrl: mdHref,
      });
  });

module.exports = router;
```

**gallery-xxx.ejs**

Now we can for-loop over all required elements in our gallery partials:

```javascript
<% if (mdPic.length > 0) { %>
    <% for (i=1; i<mdPic.length; i++) { %>
        <div class="col-xs-6 col-lg-4 mb">
            <a href="http://loxalhost:3000/<%= mdUrl[i] %>"><img src="<%= mdPic[i] %>" alt="<%= mdPicAlt[i] %>" class="img-fluid"></a>
        </div>
    <% } %>
<% } %>
```

### 4 Install and Configure Gulp.js
___

* **Step One** — Install [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) globally:

```
npm install --global gulp-cli
```

* **Step Two** — Install Gulp into your Project - cd to project directory and:

```
npm install --save-dev gulp
```

* **Step Three** — Create a gulpfile.js at the root of your project:

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```

* **Step Four** — Run the Gulp default task:

```
gulp
```

The default task will run and do nothing.

* **Step Five** — Add a Gulp Task to compress your images:

install the gulp-imagemin plugin to compress your images:

```
npm install --save-dev gulp-imagemin
```

and install gulp-newer to allow you to ignore images that have already been processed:

```
npm install --save-dev gulp-newer
```

Create a gulpfile.js in your apps root directory and add the following code:

```javascript
var
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin');

// File locations
var
  source = './dev/',
  dest = './build/',
  images = {
    in: source + 'public/images/**/*',
    out: dest + 'public/images/',
  };

// Manage images
gulp.task('images', function() {
  return gulp.src(images.in)
    .pipe(imagemin())
    .pipe(newer(images.out))
    .pipe(gulp.dest(images.out));
});

gulp.task('default', function() {
  // Place code for your default task here
});
```

Run the task with:

```
gulp images
```

to compress all images in ./dev/public/images and save them in ./build/public/images.

* **Step Six** — Add a Gulp Task to minify CSS, EJS/HTML and JS:

install the gulp-htmlclean (minify EJS), gulp-clean-css (minify CSS) and gulp-uglify (minify JS) plugin:

```
npm install --save-dev gulp-htmlclean gulp-clean-css gulp-uglify
```

Add those plugins to top of your gulpfile:

```
htmlclean = require('gulp-htmlclean'),
cleancss = require('gulp-clean-css'),
uglify = require('gulp-uglify'),
```

Now we need to point to all directories that contain EJS, CSS and JS files - add the following lines to the File Location section of your gulpfile.js:

```javascript
ejs = {
  in: source + 'views/**/*' + '*.ejs',
  watch: source + 'views/**/*' + '*.ejs',
  out: dest + 'views/',
},

css = {
  in: source + 'public/stylesheets/*' + '*.css',
  out: dest + 'public/stylesheets/',
},

js = {
  in: source + 'public/javascripts/**/*' + '*.js',
  out: dest + 'public/javascripts/',
},

routes = {
  in: source + 'routes/**/*' + '*.js',
  out: dest + 'routes/',
},
```

Now we have to create minify jobs for each file type - (add more tasks if needed):

```javascript
// Minify EJS files
gulp.task('ejs', function() {
  return gulp.src(ejs.in) //Point to the source directory
    .pipe(newer(ejs.out)) //Compare with source - only run for new files
    .pipe(htmlclean()) //Pipe all files through the minify plugin
    .pipe(gulp.dest(ejs.out)); //and save them to the build directory
});

// Minify CSS files
gulp.task('css', function() {
  return gulp.src(css.in)
    .pipe(newer(css.out))
    .pipe(cleancss())
    .pipe(gulp.dest(css.out));
});

// Minify JS files
gulp.task('js', function() {
  return gulp.src(js.in)
    .pipe(newer(js.out))
    .pipe(uglify())
    .pipe(gulp.dest(js.out));
});

// Minify routes
gulp.task('routes', function() {
  return gulp.src(routes.in)
    .pipe(newer(routes.out))
    .pipe(uglify())
    .pipe(gulp.dest(routes.out))
});
```

All those tasks can be triggered individually - e.g.:

```
gulp ejs
```

But to make it more convenient, we will create a combined task:

```javascript
// Build task
gulp.task('build', ['ejs', 'css', 'js', 'routes', 'images'], function() {

});
```

You can build the with the following command:

```
gulp build
```

This task will grab all files from the dev folder, minify/compress them and save them in the build folder.



### 5 Install NGINX on a CentOS 7 web server
___

* **Step One** — Add Nginx Repository

Step One—Add Nginx Repository
To add the CentOS 7 EPEL repository, open terminal and use the following command:
```
 sudo yum install epel-release
```

* **Step Two** — Install Nginx

Now that the Nginx repository is installed on your server, install Nginx using the following yum command:
```
 sudo yum install nginx
```

* **Step Three** — Start Nginx

Nginx does not start on its own. To get Nginx running, type:
```
 sudo systemctl start nginx
```
Test:
```
http://server_domain_name_or_IP/
```

* **Step Four** — Nginx as a Service

To enable Nginx to start when your system boots, enter the following command:
```
 sudo systemctl enable nginx
```

To restart the Nginx service, enter the following command:
```
 service nginx restart
```


### 6 Install Node.js on a CentOS 7 web server
___

* **Step One** — Download the Node.js Source

Choose your version and download the source:
```
 curl --silent --location https://rpm.nodesource.com/setup_7.x | bash -
```

* **Step Two** — Install Node.js

Then install, as root:
```
 sudo yum -y install nodejs
```
```
 sudo yum install -y gcc-c++ make
```


### 7 Clone Repo from Git
___

* **Step One** — Install Git

After this line you will have Git installed on your CentOS server:
```
 sudo yum install -y git
```

Putting your Git code on your server:
```
 cd /opt/
 sudo mkdir apps
 sudo chown your_app_user_name app
 git clone https://github.com/INSTAR-Deutschland/express-static.git apps
 cd apps
 npm install
```

Update an existing repo by cd into directory and:
```
 git pull origin master
```


### 8 Run the app as a service (PM2)
___

* **Step One** — Demonization

Now we will install PM2, which is a process manager for Node.js applications. PM2 provides an easy way to manage and daemonize applications (run them as a service).

We will use Node Packaged Modules (NPM), which is basically a package manager for Node modules that installs with Node.js, to install PM2 on our app server. Use this command to install PM2:
```
 sudo npm install pm2@latest -g
```

* **Step Two** — Manage Application with PM2

The first thing you will want to do is use the pm2 start command to run your application, app.js, in the background. With node Node apps the entry point is the app.js (or index.js). In case you used Express-Generator to do your app scaffolding, use the www file in the /bin directory instead :

```
 pm2 start app.js
```

This also adds your application to PM2's process list, which is outputted every time you start an application:

| App name        | id           | mode  | pid  | status  | restart  | uptime  | mem  | watching  |
| ------------- |:-------------:| :-----:| :-----:| :-----:| :-----:| :-----:| :-----:| -----:|
| app      | 0 | fork | 9495 | online | 0 | 0s | 36.4 MB | disabled |

Applications that are running under PM2 will be restarted automatically if the application crashes or is killed, but an additional step needs to be taken to get the application to launch on system startup (boot or reboot). Luckily, PM2 provides an easy way to do this, the startup subcommand.

The startup subcommand generates and configures a startup script to launch PM2 and its managed processes on server boots. You must also specify the init system you are running on, which is systemd, in our case:

```
 sudo pm2 startup systemd
```


* **Step Three** — Other PM2 Commands (Optional)

Stop an application with this command (specify the PM2 App name or id):
```
 sudo pm2 stop app
```

Restart an application with this command (specify the PM2 App name or id):
```
 sudo pm2 restart app
```

The list of applications currently managed by PM2 can also be looked up with the list subcommand:
```
 pm2 list
```

More information about a specific application can be found by using the info subcommand (specify the PM2 App name or id):
```
 pm2 info app
```

The PM2 process monitor can be pulled up with the monit subcommand. This displays the application status, CPU, and memory usage:
```
 pm2 monit
```


### 9 Install Java
___

* **Step One** — Public Signing Key

Download the Oracle Java 8:
```
 cd ~
 wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u73-b02/jdk-8u73-linux-x64.rpm"
```
* **Step Two** - Install Java 8:
```
sudo yum -y localinstall jdk-8u73-linux-x64.rpm
```

Now Java should be installed at /usr/java/jdk1.8.0_73/jre/bin/java, and linked from /usr/bin/java. u may delete the archive file that you downloaded earlier:
```
rm ~/jdk-8u*-linux-x64.rpm
```




### 10 Install Elasticsearch
___

* **Step One** — Public Signing Key

Download and install the public signing key:
```
 rpm --import https://packages.elastic.co/GPG-KEY-elasticsearch
```

Add the following in your /etc/yum.repos.d/ directory in a file with a .repo suffix, for example elasticsearch.repo
```
[elasticsearch-2.x]
name=Elasticsearch repository for 2.x packages
baseurl=https://packages.elastic.co/elasticsearch/2.x/centos
gpgcheck=1
gpgkey=https://packages.elastic.co/GPG-KEY-elasticsearch
enabled=1
```

* **Step Two**  - Install Elasticsearch with this command:
```
sudo yum install elasticsearch
```

* **Step Three** - restrict outside access to your Elasticsearch instance (port 9200)
```
sudo vi /etc/elasticsearch/elasticsearch.yml

-> network.host: localhost
```

* **Step Four** - Now start Elasticsearch:
```
sudo systemctl start elasticsearch
```

Run the following command to start Elasticsearch automatically on boot up:
```
sudo systemctl enable elasticsearch
```


| Type | Description | Location RHEL/CentOS |
| ------------- |:-------------:| -----:|
| home | Home of elasticsearch installation. | /usr/share/elasticsearch |
| bin | Binary scripts including elasticsearch to start a node. | /usr/share/elasticsearch/bin |
| conf | Configuration files elasticsearch.yml and logging.yml. | /etc/elasticsearch |
| conf | Environment variables including heap size, file descriptors. | /etc/sysconfig/elasticsearch |
| data | The location of the data files of each index / shard allocated on the node. | /var/lib/elasticsearch |
| logs | Log files location | /var/log/elasticsearch |
| plugins | Plugin files location. Each plugin will be contained in a subdirectory. | /usr/share/elasticsearch/plugins |
| repo | Shared file system repository locations. | Not configured |
| script | Location of script files. | /etc/elasticsearch/scripts |




### 11 Install Kibana
___

* **Step One** — Create and edit a new yum repository file for Kibana:
```
 sudo vi /etc/yum.repos.d/kibana.repo
```

Add the following repository configuration:
```
[kibana-4.5]
name=Kibana repository for 4.5.x packages
baseurl=http://packages.elastic.co/kibana/4.5/centos
gpgcheck=1
gpgkey=http://packages.elastic.co/GPG-KEY-elasticsearch
enabled=1
```

* **Step Two** - Restrict outside access to Kibana:
```
sudo vi /opt/kibana/config/kibana.yml

-> server.host: "localhost"
```

* **Step Three** - Now start the Kibana service, and enable it:
```
sudo systemctl start kibana
sudo chkconfig kibana on
```
Type sudo systemctl stop kibana to stop the service.

* **Step Four** - Use NGINX to securely access Kibana and use htpasswd to create an admin user:
```
sudo yum -y install httpd-tools
sudo htpasswd -c /etc/nginx/htpasswd.users admin
```
Add your password.

* **Step Five** - Securing Kibana in a Nginx server block:
```
sudo vi /etc/nginx/nginx.conf
```

Find the default server block (starts with server {), the last configuration block in the file, and delete it. When you are done, the last two lines in the file should look like this:
```
include /etc/nginx/conf.d/*.conf;
}
```

Now we will create an Nginx server block in a new file:
```
sudo vi /etc/nginx/conf.d/kibana.conf
```

Paste the following code block into the file. Be sure to update the server_name to match your server's name:
```
server {
    listen 80;

    server_name example.com;

    auth_basic "Restricted Access";
    auth_basic_user_file /etc/nginx/htpasswd.users;

    location / {
        proxy_pass http://localhost:5601;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;        
    }
}
```

Now start and enable Nginx to put our changes into effect:
```
sudo systemctl start nginx
sudo systemctl enable nginx
```

* **Step Six** - Once Kibana is installed, you can install Sense running the following command from your /opt/kibana folder:
```
./bin/kibana plugin --install elastic/sense
```
You will now need to start Kibana:
```
./bin/kibana
```

The apps are now available via:
```
http://localhost:5601/app/kibana
http://localhost:5601/app/sense
```

Use Sense to feed Elasticsearch with mappings/postings (see wiki-data.json)
