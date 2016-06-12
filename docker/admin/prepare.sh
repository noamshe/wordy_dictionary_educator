echo "running mysql"
./mysql/run.sh
echo "running aerospike"
./aerospike/run.sh
echo "compiling admin"
./admin/compile.sh
./mysql/wait.sh
echo "seeding data in admin DB"
./admin/seed.sh
./mysql/mysqldump.sh rtb_admin > ../admin/migrations/seed/admin_data.sql
echo "running infinidb"
./infinidb/run.sh
./infinidb/seed1.sh
