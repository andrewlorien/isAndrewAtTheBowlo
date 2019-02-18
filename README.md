# Is Andrew At The Bowlo?
Tell the world know whether Andrew Lorien is at the Petersham Bowling Club, or not.

A many-layered app by Andrew Lorien, from an idea by Dylan Bevis with help and humorous suggestions from my friends at CompliSpace and, of course, the bowlo.


## The Simple Solution
The easiest way to do this would have been a 10-line index.html with 10 lines of CSS.  I update the html from my phone or laptop or whatever when I enter or leave the club.  Simple.

## The Crazy Solution I Have Designed
- An app on my phone checks my GPS coordinate every few minutes : because GPS is the obvious solution and I don't have to update it manually.  As Cathy says "I don't trust this thing unless I know your phone is doing it automatically"
- If I'm close to the club it makes an HTTP request to an AWS API Gateway with a yes/no parameter : because if you want to trigger a Lambda function from a custom URL you need a gateway
- The Lambda function gets a yes or no parameter : because integrating the app directly to S3 looked difficult, and I might want to transform the data a little bit (like no="he was there a few minutes ago but now he's not"). Also I like Lambda
- The Lambda function writes a little json file to an S3 bucket : this is the application state.  At the moment it just has a state (intended to just be "yes" or "no" but it could be anything) and a timestamp
- A static nodejs app checks that file every few minutes and updates the website : because 
- Cloudfront delivers that website to the world : because you can't have SSL on an S3 website, you need a proxy and CloudFront is a good one

## The future
One day, when the CloudFormation is perfect (and deals with all the wait conditions and SSL type stuff), I'll be able to turn this into the general form : *Is <PERSON> At The <PLACE>*.  
You would need an Android phone, and the ability to load an app not from the store.  You would need an AWS account.  I would need to add a few parameters (should one of them be a gender pronoun? should i change "ishe" to "isshe"?).  You would need to add the GPS coordinates of the place you go.  But everything else should work for anybody, anywhere.

