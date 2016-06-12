echo runnning
docker run -d -p 3306:3306 --name mysql wordy/mysql
echo waiting
./mysql/wait.sh
./mysql/seed.sh
echo `pwd`
