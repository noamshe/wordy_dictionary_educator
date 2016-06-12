#!/bin/sh

#docker network create testNet
#docker pull elgalu/selenium:2.53.0h
#docker run --rm -ti --name=grid -p 4444:24444 -p 5920:25900 -e SSHD=true -e SSHD_X11FORWARDING=yes -e SSH_AUTH_KEYS="$(cat ~/.ssh/id_rsa.pub)"  -v /dev/shm:/dev/shm -e VNC_PASSWORD=hola elgalu/selenium:2.53.0h
#docker exec grid wait_all_done 30s
#docker run --rm -it --net=testNet  --link mysql:mysql --link aerospike:aerospike --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt interactive
#docker run --rm -it --link mysql:mysql --link aerospike:aerospike --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt interactive
#docker run  -it --link grid:grid --link mysql:mysql --link aerospike:aerospike --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt interactive


if [ -n "$1" ]; then 
	if [ -n "$2" ]; then
		if [ "$2" = "all" ]; then
			options=" --run_all=y "
		else
			options=" --run_all=n "
		fi
	else
		options=" --run_all=n "
	fi

	if [ "$1" = "functional" ]; then
		docker run  -it --link mysql:mysql --link aerospike:aerospike --link infinidb:infinidb -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt interactive --mode=$1 $options
	elif [ "$1" = "integrational" ]; then
		docker run  -it --net host -v `pwd`/../admin/:/data/admin/ -w /data/admin matomy/admin ./node_modules/.bin/grunt interactive --mode=$1 $options
	else
		echo "wrong mode $1 passed, please chose between 'functional' or 'integrational' modes";	
	fi
else
	echo "no mode was passed, please chose between 'functional' or 'integrational' modes";	
fi;

