./mysqldump.sh --default-character-set=utf8 wordydb > backup/wordydbutf8_$(date +%H_%M).sql
cp -R backup /home/ec2-user/
