$ sudo apt-get install nginx
$ sudo apt-get install mysql-server root/RogueWave@1234
$ sudo mysql_secure_installation
$ sudo apt-get install php-fpm php-mysql
$ sudo nano /etc/php/7.0/fpm/php.ini
  Make cgi.fix_pathinfo=0
$ sudo systemctl restart php7.0-fpm
$ sudo apt-get install curl php7.0-cli git
$ curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
$ sudo apt-get install php7.0-mbstring
$ sudo apt-get install php7.0-mcrypt
$ sudo apt-get install php-xml
$ sudo apt-get install php-curl
$ composer install
