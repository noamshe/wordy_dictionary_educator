./mysql/mysql_exec.sh "create database rtb_admin"
./mysql/mysql_exec.sh "create database rtb_reports"
./mysql/mysql_exec.sh "create database rtb_admin_test"
docker run --rm --link mysql:mysql -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/db-migrate up
docker run --rm --link mysql:mysql --link aerospike:aerospike -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt report-migration
./mysql/mysql.sh rtb_reports < ../admin/migrations/seed/report_data.sql

./aerospike/aql_exec.sh "INSERT INTO RTB.global_budgets (PK, overall, active) VALUES ('conf', 1000000000000, 1)"
./aerospike/aql_exec.sh "INSERT INTO RTB.global_budgets (PK, overall) VALUES ('cost', 0)"
