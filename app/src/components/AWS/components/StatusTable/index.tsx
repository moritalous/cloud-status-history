  import { FunctionComponent, useEffect, useState } from 'react';
  import Button from 'aws-northstar/components/Button';
  import Inline from 'aws-northstar/layouts/Inline';
  import Table, { Column, } from 'aws-northstar/components/Table';
  import { Modal } from 'aws-northstar';
  
  import { Status, Data } from '../../../../data';
  
  const columnDefinitions: Column<Status>[] = [
      {
          id: 'date',
          width: 100,
          Header: 'date',
          accessor: 'displayDate',
      },
      {
          id: 'service_name',
          width: 300,
          Header: 'Service Name',
          accessor: 'service_name',
      },
      {
          id: 'summary',
          width: 500,
          Header: 'Summary',
          accessor: 'summary',
      },
  ];
  
  const StatusTable: FunctionComponent = () => {
      const [selectedItems, setSelectedItems] = useState<object[]>([]);  
      const [visible, setVisible] = useState(false);
      const [detail, setDetail] = useState('123');
      const [archive, setItems] = useState<Status[]>([]);
  
      const onDetailClick = () => {
          setVisible(true)
      };
  
      const handleSelectionChange = (items: any[]) => {
          if (!(selectedItems.length === 0 && items.length === 0)) {
              setSelectedItems(items);
              const tmp:Status = items[0] 
              setDetail(() => tmp.description)
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
          fetch('data.json')
          .then(response => response.json())
          .then(json => {
  
              let d : Data = json
  
              d.archive.forEach(function(status){
                  status.displayDate = (new Date(parseInt(status.date)*1000)).toLocaleDateString()
              })
  
              setItems((item) => {
                  return [...item, ...json.archive];
              })
          })
      }
  
      return (
        <div>
            <Table
              onSelectionChange={handleSelectionChange}
              tableTitle="AWS Status History"
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
  