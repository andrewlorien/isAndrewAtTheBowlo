
import boto3
import json
import datetime
import os

AWS_BUCKET_NAME = 'isandrewatthebowlo.com'
sns = boto3.client('sns')
s3 = boto3.resource('s3')
bucket = s3.Bucket(AWS_BUCKET_NAME)
    
# call this function with a PUT request containing a json object like {"whatDoesHeSay": "no"}
def telltheworld(event, context):
    path = 'ishe.json'
    when = datetime.datetime.now().isoformat()
    querystring = event['queryStringParameters']
    whatDoesHeSay = querystring['whatDoesHeSay']
    jsondata = '{"ishe":"' + whatDoesHeSay + '","when":"' + when + 'Z"}'
    body = putitinthebucket(jsondata,path)
    if whatDoesHeSay == "yes"
        tellDylan()

    print (body) 
    return {
    "isBase64Encoded": False,
    "headers": { "Content-Type": "application/json" },
    "statusCode": 200,
    "body": json.dumps(body)
    }

def putitinthebucket(jsondata,path):
    bucket.put_object(
        ACL='public-read',
        ContentType='application/json',
        Key=path,
        Body=jsondata,
    )

    body = {
        "uploaded": "true",
        "bucket": AWS_BUCKET_NAME,
        "path": path,
    }
    return body

def tellDylan():
response = sns.publish(
    TopicArn=os.environ['NotificationTopicARN'],    
    Message='Andrew is at the bowlo.  Brought to you by http://IsAndrewAtTheBowlo.com'
)    

#{
#"ishe":"no",
#"when":"2019-01-08Z23:00:00Z"
#}
    
def debuggit(event, context):
    path = 'debuggit.json'
    when = datetime.datetime.now().isoformat()
    jsondata = str(event)      
    putitinthebucket(jsondata,path)
