docker run --rm --link mysql:mysql --link redis:redis --link aerospike:aerospike --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt client
