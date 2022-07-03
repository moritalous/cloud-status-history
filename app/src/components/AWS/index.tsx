 import { FunctionComponent } from 'react';
 import Stack from 'aws-northstar/layouts/Stack';
 import StatusTable from './components/StatusTable';

  const AWS: FunctionComponent = () => {
      return (
          <Stack>
              <StatusTable />
              <div style={{textAlign: 'center'}}>
              <iframe src={'https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=jpprimeday&banner=0Y03CNA07BKTRXKWCNG2&f=ifr&linkID=b1d06824092a17cf6a6da8d9b24aa562&t=twelve02-22&tracking_id=twelve02-22'}
                    width={728}
                    height={90}
                    scrolling={'no'}
                    frameBorder={'0'}
                    marginWidth={0}
                    style={{border:'none'}}
                    sandbox={'allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation'}
            ></iframe>
              </div>
          </Stack>
      );
  };
  
  export default AWS;
  