import boto3
import json
import datetime

def test():
    when = datetime.datetime.now().isoformat()
    whatDoesHeSay = "soon"
    jsondata = '{"ishe":"' + whatDoesHeSay + '","when:"' + when + '"}'
    return jsondata


def telltheworld(event, context):
    AWS_BUCKET_NAME = 'isandrewatthebowlo.com'
    s3 = boto3.resource('s3')
    bucket = s3.Bucket(AWS_BUCKET_NAME)
    path = 'ishe.json'
    when = datetime.datetime.now()
    
    ## TypeError: string indices must be integers, not str
	# what is this event?  how is is passed?
    whatDoesHeSay = event['whatDoesHeSay']
    jsondata = '{"ishe":"' + whatDoesHeSay + '","when:"' + when + '"}'
#{
#"ishe":"no",
#"when":"2019-01-08Z23:00:00"
#}

#    bucket.put_object(
#        ACL='public-read',
#        ContentType='application/json',
#        Key=path,
#        Body=data,
#    )

    body = {
        "uploaded": "true",
        "bucket": AWS_BUCKET_NAME,
        "path": path,
    }
    return {
        "statusCode": 200,
        "body": json.dumps(body)
    }
    print (body)
