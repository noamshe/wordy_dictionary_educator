./mysql_exec.sh "create database wordydb"
./mysql_exec.sh "use wordydb"
./mysql.sh wordydb < ../../migrate.txt
