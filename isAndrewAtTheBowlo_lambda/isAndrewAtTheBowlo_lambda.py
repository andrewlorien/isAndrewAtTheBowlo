import boto3
import json
import datetime
import os


AWS_BUCKET_NAME = 'isandrewatthebowlo.com'
s3 = boto3.resource('s3')
bucket = s3.Bucket(AWS_BUCKET_NAME)

def test():
    when = datetime.datetime.now().isoformat()
    whatDoesHeSay = "soon"
    jsondata = '{"ishe":"' + whatDoesHeSay + '","when":"' + when + 'Z"}'
    return jsondata

    
def debuggit(event, context):
    path = 'debuggit.json'
    when = datetime.datetime.now().isoformat()
    jsondata = str(event)      
    putitinthebucket(jsondata,path)
    
# call this function with a PUT request containing a json object like {"whatDoesHeSay": "no"}
def telltheworld(event, context):
    path = 'ishe.json'
    when = datetime.datetime.now().isoformat()
    querystring = event['queryStringParameters']
    whatDoesHeSay = querystring['whatDoesHeSay']
    jsondata = '{"ishe":"' + whatDoesHeSay + '","when":"' + when + 'Z"}'
    body = putitinthebucket(jsondata,path)
    
    print (body) 
    return {
        "isBase64Encoded": False,
        "headers": { "Content-Type": "application/json" },
        "statusCode": 200,
        "body": json.dumps(body)
    }
#{
#"ishe":"no",
#"when":"2019-01-08Z23:00:00"
#}

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
        "path": path
    }
    return body
