docker run --rm --link mysql:mysql --link aerospike:aerospike --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt functional_ci $@
