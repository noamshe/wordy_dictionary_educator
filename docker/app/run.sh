docker run -d --name app -p 3000:80 --link mysql:mysql -v `pwd`/../:/var/www/html/ wordy/app
