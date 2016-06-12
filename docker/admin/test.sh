docker run --rm --net host -e "SELENIUM=true" -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt test $@
