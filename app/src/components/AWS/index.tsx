import { FunctionComponent, ReactElement } from 'react';
import Stack from 'aws-northstar/layouts/Stack';
import StatusTable from './components/StatusTable';

const bannerList: Array<ReactElement> = []
bannerList.push(
    <span style={{marginRight: '16px'}}>
        <a 
            href="//af.moshimo.com/af/c/click?a_id=3567573&p_id=170&pc_id=185&pl_id=4150&guid=ON"
            rel="nofollow"
            referrerPolicy="no-referrer-when-downgrade">
            <img 
                src="//image.moshimo.com/af-img/0068/000000004150.gif"
                width="234"
                height="60"
                style={{border:'none'}} />
        </a>
        <img src="//i.moshimo.com/af/i/impression?a_id=3567573&amp;p_id=170&amp;pc_id=185&amp;pl_id=4150" 
            width="1"
            height="1"
            style={{border:'none'}} />
    </span>
)
bannerList.push(
    <span style={{marginRight: '16px'}}>
        <a 
            href="//af.moshimo.com/af/c/click?a_id=3567572&p_id=54&pc_id=54&pl_id=619&guid=ON"
            rel="nofollow"
            referrerPolicy="no-referrer-when-downgrade">
            <img 
                src="//image.moshimo.com/af-img/0032/000000000619.gif"
                width="234"
                height="60"
                style={{border:'none'}} />
        </a>
        <img src="//i.moshimo.com/af/i/impression?a_id=3567572&amp;p_id=54&amp;pc_id=54&amp;pl_id=619" 
            width="1"
            height="1"
            style={{border:'none'}} />
    </span>
)
bannerList.push(
    <span style={{marginRight: '16px'}}>
        <a 
            href="//af.moshimo.com/af/c/click?a_id=3615672&p_id=1225&pc_id=1925&pl_id=18528&guid=ON"
            rel="nofollow"
            referrerPolicy="no-referrer-when-downgrade">
            <img 
                src="//image.moshimo.com/af-img/0349/000000018528.jpg"
                width="234"
                height="60"
                style={{border:'none'}} />
        </a>
        <img src="//i.moshimo.com/af/i/impression?a_id=3615672&amp;p_id=1225&amp;pc_id=1925&amp;pl_id=18528" 
            width="1"
            height="1"
            style={{border:'none'}} />
    </span>
)


const AWS: FunctionComponent = () => {
    return (
        <Stack>
            <StatusTable />
            <div style={{ textAlign: 'center' }}>
                {bannerList}
            </div>
        </Stack>
    );
};

export default AWS;
