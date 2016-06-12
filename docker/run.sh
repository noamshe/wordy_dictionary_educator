docker run -d --name bla1 -p 80:80 --link mysql:mysql -v `pwd`/../:/var/www/html/ bla
