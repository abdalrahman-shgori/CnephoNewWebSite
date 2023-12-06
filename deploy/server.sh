# Pull code
cd /var/www/new-cnepho-website/frontend
export GIT_SSL_NO_VERIFY=1
git checkout master
git pull origin master

# Build and deploy
npm ci
