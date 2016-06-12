echo runnning
docker run -d -p 3306:3306 --name mysql wordy/mysql
echo waiting
./wait.sh
./seed.sh
