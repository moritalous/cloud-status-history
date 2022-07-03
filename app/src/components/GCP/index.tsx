 import { FunctionComponent } from 'react';
  import Stack from 'aws-northstar/layouts/Stack';
  import StatusTable from './components/StatusTable';
  
  const GCP: FunctionComponent = () => {
      return (
          <Stack>
              <StatusTable />
          </Stack>
      );
  };
  
  export default GCP;
  