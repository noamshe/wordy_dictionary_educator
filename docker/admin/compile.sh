docker run --rm -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin npm install
docker run --rm -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/bower --allow-root install
cd ..
tar zcf admin.tar.gz admin
cd docker
