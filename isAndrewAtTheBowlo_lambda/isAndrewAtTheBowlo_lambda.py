import boto3
import json
import datetime

AWS_BUCKET_NAME = 'isandrewatthebowlo.com'
s3 = boto3.resource('s3')
bucket = s3.Bucket(AWS_BUCKET_NAME)
false=False

def test():
    when = datetime.datetime.now().isoformat()
    whatDoesHeSay = "soon"
    jsondata = '{"ishe":"' + whatDoesHeSay + '","when":"' + when + '"}'
    return jsondata

    
def debuggit(event, context):
    path = 'debuggit.json'
    when = datetime.datetime.now().isoformat()
    print("Received event: " + json.dumps(event, indent=2))
    jsondata = str(event['queryStringParameters'])      
    body = putitinthebucket(jsondata,path)
    return response(body)
    
# call this function with a PUT request containing a json object like {"whatDoesHeSay": "no"}
def telltheworld(event, context):
    path = 'ishe.json'
    when = datetime.datetime.now().isoformat()
    whatDoesHeSay = event['queryStringParameters']['whatDoesHeSay']
    jsondata = '{"ishe":"' + whatDoesHeSay + '","when":"' + when + '"}'  
    body = putitinthebucket(jsondata,path)
    # now send an SMS to everybody on the SQS topix list
    
    return response(body)

#{
#"ishe":"no",
#"when":"2019-01-08Z23:00:00"
#}

def putitinthebucket(jsondata,path):
    bucket.put_object(
        ACL='public-read',
        ContentType='application/json',
        Key=path,
        Body=jsondata
    )

    body = {
        "uploaded": "true",
        "bucket": AWS_BUCKET_NAME,
        "path": path
    }
    print ("about to return this body")
    print (body)
    return body

def response(body):
    return {
        "statusCode": 200, \
        "isBase64Encoded": false, \
        "headers": {"content-type" : "application/json","x-andrew-test" : "wedontknow"}, \
        "body": json.dumps(body) \
    }

