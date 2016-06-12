until echo show databases | ./mysql/mysql.sh &> /dev/null
do
  sleep 0.2
done
