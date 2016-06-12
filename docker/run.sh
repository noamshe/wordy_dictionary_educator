./mysql/run.sh
docker run -d --name app -p 80:80 --link mysql:mysql -v `pwd`/../:/var/www/html/ bla

