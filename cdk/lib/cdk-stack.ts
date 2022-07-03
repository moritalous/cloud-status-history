import { aws_cloudfront, aws_s3, aws_s3_deployment, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });


    const bucket = new aws_s3.Bucket(this, 'website', {
    })

    new aws_cloudfront.CloudFrontWebDistribution(this, 'webdistribution', {
      originConfigs: [
        {
          s3OriginSource: {
          s3BucketSource: bucket,
          originAccessIdentity: new aws_cloudfront.OriginAccessIdentity(this, 'oai',{})
          },
          behaviors : [ {isDefaultBehavior: true}],
        },
        {
          customOriginSource: {
            domainName: 'status.aws.amazon.com',

          },
          behaviors: [{pathPattern: 'data.json'}]
        }
      ],
      defaultRootObject: 'index.html'
    })

    new aws_s3_deployment.BucketDeployment(this, 'deploy', {
      sources: [aws_s3_deployment.Source.asset('../app/build/')],
      destinationBucket: bucket
    })

  }
}
