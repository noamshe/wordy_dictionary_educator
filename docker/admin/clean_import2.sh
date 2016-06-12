echo "*** empty DB ***"
./mysql/mysql.sh rtb_admin< no_data.sql
echo "**** Done ****"
echo ""
echo "*** import DB ***"
./infinidb/mysql.sh < rtb_full_reports.sql
echo "**** Done ****"

