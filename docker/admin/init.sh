docker run -P --link mysql:mysql --link redis:redis -v `pwd`/../../admin/:/data/admin/ -w /data/admin matomy/admin npm install
docker run -P --link mysql:mysql --link redis:redis -v `pwd`/../../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt init
docker run -P --link mysql:mysql --link redis:redis -v `pwd`/../../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt
