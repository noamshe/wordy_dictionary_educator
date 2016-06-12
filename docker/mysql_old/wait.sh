until echo show databases | ./mysql.sh &> /dev/null
do
  sleep 0.2
done
