echo `pwd`
./mysql/mysql_exec.sh "create database wordydb"
./mysql/mysql_exec.sh "use wordydb"
./mysql/mysql.sh wordydb < ../migrate.txt
./mysql/mysql.sh wordydb < ../data.sql
