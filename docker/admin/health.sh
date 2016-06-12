set -e
ps aux | grep "node server" | grep -v grep &> /dev/null
