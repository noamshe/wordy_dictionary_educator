echo "*** empty DB ***"
./mysql/mysql.sh rtb_admin< no_data.sql
echo "**** Done ****"
echo ""
echo "*** import DB ***"

./mysql/mysql.sh rtb_admin< ../admin/test/dumps/rtb_full.sql
#./mysql/mysql < 1.sql
echo "**** Done ****"

