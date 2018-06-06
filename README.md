# hdsrc

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd hdsrc`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


### 环境
django 1.11
nginx
uwsgi
ember 




### uwsgi
[uwsgi]
#项目目录
###引起错误的点
chdir=/home/hdrest
# 指定项目的application
module=tutorial.wsgi


#启动主进程
master=true

# 进程个数
workers=5
pidfile=/home/hdrest/uwsgi.pid


#启动uwsgi的用户名和用户组
#uid=nobody
#gid=nobody

#自动移除unix Socket 和　pid 文件当服务停止的时候
vacuum=true

#序列化接受的内容　如果可能的话
thunder-lock=true

#启动线程
enable-threads=true

#设置中断时间
harakiri=30

#设置缓存
post-buffering=4096
#设置日志目录
daemonize=/home/hdrest/uwsgi.log
#指定静态文件
static-map=/static/=/home/hdrest/static/

#指定sock文件路径
socket=/home/hdrest/uwsgi.sock
#socket=127.0.0.1:8001
chmod-socket=666
#pythonpath=/home/cui/www/pythonenv/env/lib/python2.7/site-packages

~                                                                                                                                                                                                           
~                                                                         



nginx 

server {
        listen 8080;
        server_name  10.28.0.200;
        access_log /var/log/nginx/access.log;
        charset  utf-8;
        gzip on;
        gzip_types text/plain application/x-javascript text/css text/javascript application/x-httpd-php application/json text/json image/jpeg image/gif image/png application/octet-stream;

        error_page  404           /404.html;
        error_page   500 502 503 504  /50x.html;

        location / {
                include uwsgi_params;
                uwsgi_connect_timeout 30;
                uwsgi_param UWSGI_SCRIPT /home/hdrest/tutorial.wsgi;
                uwsgi_param UWSGI_CHDIR /home/hdrest;
                index  index.html index.htm;

                client_max_body_size 35m;
                uwsgi_pass unix:/home/hdrest/uwsgi.sock;
        }

        location /static/ {
                alias /home/hdrest/static;
        }

}

## 浏览器兼容性
> 系统支持IE9以上版本 IE更低版本未尝试
> 可以修改config/targets.js文件内容来支持更多浏览器 
