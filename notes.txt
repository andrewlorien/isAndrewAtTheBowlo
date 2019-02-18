We don't want to cache index.html or ishe.json

aws s3 cp ./ishe.json s3://isandrewatthebowlo.com/index.html --metadata-directive REPLACE --cache-control max-age=0 


aws s3 cp --recursive isandrewatthebowlo_site/dist/ s3://isandrewatthebowlo.com/ --metadata-directive REPLACE --cache-control max-age=0 
