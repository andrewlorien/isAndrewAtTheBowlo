# Is Andrew at the Bowlo : The Website
A static node/js wesite, using React and build with Webpack, deployed to S3

## Design
- static nodejs/webpack site hosted in S3
- reads ishe.json and writes YES or NO to the screen
- updates every 5 minutes

## Build
- merge dependabot things like this:
- git checkout -b 'dependabot/npm_and_yarn/isandrewatthebowlo_site/DEPENDABOT_VERSION' 'origin/dependabot/npm_and_yarn/isandrewatthebowlo_site/DEPENDABOT_VERSION'
- git pull && git merge master -X theirs --no-edit && npm install && git add yarn.lock && git commit -m "yarn install" && git push- merge the PR
- git checkout master && git pull
- npm install
- npm run build
- npm run start



This project was created with [Create New App](https://github.com/qodesmith/create-new-app).
Andrew experimented with GitLab in 2024, it created some files...
