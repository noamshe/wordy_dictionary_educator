echo runnning
docker run -d -p 3306:3306 --name mysql -v `pwd`/mysql/conf.d:/etc/mysql/conf.d -v `pwd`/temp:/data/temp matomy/mysql
echo waiting
./mysql/wait.sh
