#A Node/Express App with Static Content (Training)


 This code is part of a training in web development with **Node.js** and **Express /Generator**. Goal of this course is to quickly set up a node/express environment to serve static HTML/CSS/JS content.

This App was created in several steps:

1. [Install Node.js and Express.js to develop our Web Application](#1-install-nodejs-and-expressjs-to-serve-our-web-application)
2. [Preparing the Site Structure](#2-preparing-the-site-structure)
3. [Import JSON Elements]()
  * []()
4. [Install NGINX on CentOS]()
5. [Install Node.js on CentOS]()
6. [Clone Repo from Git]()
7. [Run the app as a service (PM2)]()
8. [Install Java]()
9. [Install Elasticsearch]()
10. [Install Kibana]()


### 1 Install Node.js and Express.js to develop our Web Application
___

* Install [Node.js](https://nodejs.org/en/download/).
* Install express-generator globally to set up our node/express scaffolding: *npm install -g express-generator*
* Apply the generator with the EJS templating engine (*-e*) and give your app an name (*e.g. express-static*): *express -e express-static*
* Switch to the created express-static folder and install dependencies: *cd express-static && npm install*
* Start the app with: DBEUG=my-application ./bin/www


### 2 Preparing the Site Structure
___

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


### 4 Install NGINX on a CentOS 7 web server
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


### 5 Install Node.js on a CentOS 7 web server
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


### 6 Clone Repo from Git
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


### 7 Run the app as a service (PM2)
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


### 8 Install Java
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




### 9 Install Elasticsearch
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




### 10 Install Kibana
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
