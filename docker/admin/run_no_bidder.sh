./admin/seed.sh
docker run -d --name admin -p 4000:4000 -e NODE_ENV=development --link mysql:mysql --link aerospike:aerospike --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin node server
