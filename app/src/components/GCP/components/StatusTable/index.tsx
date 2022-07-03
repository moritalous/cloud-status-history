  import { FunctionComponent, useEffect, useState } from 'react';
  import Button from 'aws-northstar/components/Button';
  import Inline from 'aws-northstar/layouts/Inline';
  import Table, { Column, } from 'aws-northstar/components/Table';
  import { Modal } from 'aws-northstar';
  
  import { gcpStatus } from '../../../../data';
  
  const columnDefinitions: Column<gcpStatus>[] = [
      {
          id: 'date',
          width: 200,
          Header: 'date',
          accessor: 'created',
      },
      {
          id: 'service_name',
          width: 200,
          Header: 'Service Name',
          accessor: 'service_name',
      },
      {
          id: 'summary',
          width: 500,
          Header: 'Summary',
          accessor: 'external_desc',
      },
  ];
  
  const StatusTable: FunctionComponent = () => {
      const [selectedItems, setSelectedItems] = useState<object[]>([]);  
      const [visible, setVisible] = useState(false);
      const [detail, setDetail] = useState('123');
      const [archive, setItems] = useState<gcpStatus[]>([]);
  
      const onDetailClick = () => {
          setVisible(true)
      };
  
      const handleSelectionChange = (items: any[]) => {
          if (!(selectedItems.length === 0 && items.length === 0)) {
              setSelectedItems(items);
              const tmp:gcpStatus = items[0] 
              setDetail(() => tmp.most_recent_update.text)
          }
      };
  
      useEffect(() => {
          getItems();
      }, [])
  
      const tableActions = (
          <Inline>
              <Button disabled={selectedItems.length !== 1} onClick={onDetailClick} variant="normal">
                  Detail
              </Button>
          </Inline>
      );
  
      const getItems = async () => {
          fetch('incidents.json')
          .then(response => response.json())
          .then(json => {  
              let d : gcpStatus[] = json
              setItems((item) => {
                  return [...item, ... d];
              })
          })
      }
  
      return (
        <div>
            <Table
              onSelectionChange={handleSelectionChange}
              tableTitle="GCP Status History"
              columnDefinitions={columnDefinitions}
              items={archive}
              actionGroup={tableActions}
              multiSelect={false}
              sortBy={[{ id: 'date', desc: true }]}
            />
            <Modal title="Detail" visible={visible} onClose={() => setVisible(false)}>
                <div dangerouslySetInnerHTML={{__html: detail}}></div>
            </Modal>
        </div>
          
      );
  };
  
  export default StatusTable;
  