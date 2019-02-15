Is Andrew at the Bowlo?
a many-layered app by Andrew Lorien, from an idea by Dylan Bevis with help and humorous suggestions from my friends at CompliSpace

* Mobile app
- mvp : two buttons, "yes" and "no", which send a simple http request to an AWS API endpoint
- final : geo-location which checks every 15 minutes whether i'm within a hundred metres of the front door 
-- if so, and send the "yes" http request same as before
-- if not, and i was there during the last check, send the "no" request

* AWS API/Lambda endpoint
- API endpoint with a secret key which i'll have to add as a parameter to the app
- Lambda function which writes a name+time json request to ishe.json

* Website
- static nodejs/webpack site hosted in S3
- reads ishe.json and writes YES or NO to the screen
- updates every 15 minutes

* notification
- if state change, send email to dylan

This project was created with [Create New App](https://github.com/qodesmith/create-new-app).
