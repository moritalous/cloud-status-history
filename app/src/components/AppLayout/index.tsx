/** *******************************************************************************************************************
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
  
  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.                                                                              *
 ******************************************************************************************************************** */
import { FunctionComponent, ReactElement, useMemo } from 'react';
import AppLayoutBase from 'aws-northstar/layouts/AppLayout';
import HeaderBase from 'aws-northstar/components/Header';
import SideNavigationBase, { SideNavigationItemType } from 'aws-northstar/components/SideNavigation';
import BreadcrumbGroup from 'aws-northstar/components/BreadcrumbGroup';
import { Box, ButtonDropdown } from 'aws-northstar';
import { ButtonDropdownItem } from 'aws-northstar/components/ButtonDropdown';

const AppLayout: FunctionComponent = ({ children }) => {

    const dropdownitems:ButtonDropdownItem[] = [
        {text:'Good catch! (Blog)', onClick: ()=> open('https://twelve.tk'),},
        {text:'GitHub', onClick: ()=> open('https://github.com/moritalous/cloud-status-history'),},
        {text:'Qiita', onClick: ()=> open('https://qiita.com/moritalous'),},
    ]

    const rightContent = (<Box display={'flex'} alignItems={'center'}>
        <ButtonDropdown content={'Visit My Site'} items={dropdownitems} darkTheme></ButtonDropdown>
    </Box>);

    const Header = useMemo(
        () => <HeaderBase title="Cloud status history" rightContent={rightContent}  />,
        []
    );
    const Breadcrumbs = useMemo(() => <BreadcrumbGroup rootPath="" />, []);

    const bannerUrl = [
        'https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=21&l=ur1&category=gift_certificates&banner=0K2839167Y2W14T3QWG2&f=ifr&linkID=f00844f94bfd8963c844723fa1fbd870&t=twelve02-22&tracking_id=twelve02-22',
        'https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=21&l=ur1&category=echo_buds&banner=0WE84J6E3MFAE7WN3702&f=ifr&linkID=a841f56c2a70e358cd1c5018dfc8e7c4&t=twelve02-22&tracking_id=twelve02-22',
        'https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=21&l=ur1&category=smp&banner=151KNGQ0TT3SC06S1B02&f=ifr&linkID=f478c821759195543be15819e261097f&t=twelve02-22&tracking_id=twelve02-22',
        'https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=21&l=ur1&category=echo_show_15&banner=12PQXX1FQ4DNRETXNRG2&f=ifr&linkID=8f4b80103dc15d0f4484bc479a43c5d6&t=twelve02-22&tracking_id=twelve02-22'
    ]

    const bannerList:Array<ReactElement> = []
    bannerUrl.forEach(url => {
        bannerList.push(<iframe src={url}
        width={125}
        height={125}
        scrolling={'no'}
        frameBorder={'0'}
        marginWidth={0}
        style={{border:'none'}}
        sandbox={'allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation'}
    ></iframe>)
    })

    const SideNavigation = useMemo(() => {
        return (
            <div>
            <SideNavigationBase
                header={{ text: 'Cloud', href: '/' }}
                items={[
                    { text: 'AWS', type: SideNavigationItemType.LINK, href: '/' },
                ]}
            ></SideNavigationBase>

            <div style={{textAlign: 'center', marginTop: '48px'}}>
                {bannerList}
                
            </div>
            </div>
        );
    }, []);

    return (
        <AppLayoutBase header={Header} navigation={SideNavigation} breadcrumbs={Breadcrumbs}>
            {children}
        </AppLayoutBase>
    );
};

export default AppLayout;
