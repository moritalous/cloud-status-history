 import { FunctionComponent, ReactElement } from 'react';
 import Stack from 'aws-northstar/layouts/Stack';
 import StatusTable from './components/StatusTable';

 const bannerUrl = [
    'https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=42&l=ur1&category=echo_show_15&banner=0XH7MYVZZ3ASGXAQYJG2&f=ifr&linkID=d8c96a6976f4b73d15b4ccaa0fcf5a67&t=twelve02-22&tracking_id=twelve02-22',
    'https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=42&l=ur1&category=smp&banner=1KWNB2B5BZKA90YG4RG2&f=ifr&linkID=8a635c66071275cfcd0b5f9224afbd7b&t=twelve02-22&tracking_id=twelve02-22',
    'https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=42&l=ur1&category=echo_buds&banner=1T7F36BJ0887G8797M82&f=ifr&linkID=37a993e3fc5b9dc7f730e1f1d74f4916&t=twelve02-22&tracking_id=twelve02-22',
    // 'https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=42&l=ur1&category=amazon_ring&banner=1G0EDMAKEN6X9TXGEW82&f=ifr&linkID=8d0f182da97f644d6393faab7fdd3556&t=twelve02-22&tracking_id=twelve02-22'
    ]

    const bannerList:Array<ReactElement> = []
    bannerUrl.forEach(url => {
        bannerList.push(<iframe src={url}
        width={234}
        height={60}
        scrolling={'no'}
        frameBorder={'0'}
        marginWidth={0}
        style={{border:'none', marginRight: '16px'}}
        sandbox={'allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation'}
    ></iframe>)
    })


  const AWS: FunctionComponent = () => {
      return (
          <Stack>
              <StatusTable />
              <div style={{textAlign: 'center'}}>
                {bannerList}
              </div>
          </Stack>
      );
  };
  
  export default AWS;
  