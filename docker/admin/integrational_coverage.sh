docker run --rm --net host -e "SELENIUM=true" -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin /bin/bash ./integrational_coverage.sh
