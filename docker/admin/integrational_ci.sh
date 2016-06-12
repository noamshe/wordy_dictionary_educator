Xvfb :1 -screen 5 1024x768x8 &
export DISPLAY=:1.5
docker run --name admin_automation --rm --net host -e EXTERNAL_PATH=`pwd`/../ -e "SELENIUM=true" -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt integrational_ci "$@"
