import { aws_certificatemanager, aws_cloudfront, aws_s3, aws_s3_deployment, Duration, Stack, StackProps } from 'aws-cdk-lib';
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

    const certificate = aws_certificatemanager.Certificate.fromCertificateArn(this, 'cert', 
      'arn:aws:acm:us-east-1:884169927585:certificate/fdf4bdad-b957-40c6-879e-5ce5a90f28bc')

    const distribution = new aws_cloudfront.CloudFrontWebDistribution(this, 'webdistribution', {
      originConfigs: [
        {
          s3OriginSource: {
          s3BucketSource: bucket,
          originAccessIdentity: new aws_cloudfront.OriginAccessIdentity(this, 'oai',{})
          },
          behaviors : [ {
            isDefaultBehavior: true,
            minTtl: Duration.days(365),
            maxTtl: Duration.days(365),
            defaultTtl: Duration.days(365)
          }],
        },
        {
          customOriginSource: {
            domainName: 'status.aws.amazon.com',
            
          },
          behaviors: [{
            pathPattern: 'data.json', 
            minTtl: Duration.seconds(0),
            maxTtl: Duration.seconds(0),
            defaultTtl: Duration.seconds(0)
          }]
        },
        {
          customOriginSource: {
            domainName: 'status.cloud.google.com',

          },
          behaviors: [{
            pathPattern: 'incidents.json',
            minTtl: Duration.seconds(0),
            maxTtl: Duration.seconds(0),
            defaultTtl: Duration.seconds(0)
          }]
        }
      ],
      defaultRootObject: 'index.html',
      errorConfigurations: [{errorCode: 403, responseCode: 200, responsePagePath: '/'}],
      viewerCertificate: aws_cloudfront.ViewerCertificate.fromAcmCertificate(certificate, {
        aliases: ['cloud-status.twelve.tk'],
        securityPolicy: aws_cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021
      })
    })

    new aws_s3_deployment.BucketDeployment(this, 'deploy', {
      sources: [aws_s3_deployment.Source.asset('../app/build/')],
      destinationBucket: bucket,
      distribution: distribution
    })

  }
}
