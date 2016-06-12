./admin/seed.sh
docker run -d --name admin -p 4000:3000  -e NODE_ENV=development --link mysql:mysql --link aerospike:aerospike --link bidder:bidder --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin node server
#docker run -d --name admin -p 4000:3000 -e NODE_ENV=development --link mysql:mysql --link redis:redis --link bidder:bidder --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin node server -w /data/admin matomy/admin node allot_tracker

docker run -d --name admin1 -p 4001:3000 -e NODE_ENV=development --link mysql:mysql --link aerospike:aerospike --link bidder:bidder --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin node server

docker run -d --name admin2 -p 4002:3000 -e NODE_ENV=development --link mysql:mysql --link aerospike:aerospike --link bidder:bidder --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin node server