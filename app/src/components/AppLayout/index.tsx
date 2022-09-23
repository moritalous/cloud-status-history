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
  import { Box, ButtonDropdown } from 'aws-northstar';
  import { ButtonDropdownItem } from 'aws-northstar/components/ButtonDropdown';
  
  const AppLayout: FunctionComponent = ({ children }) => {
  
      const dropdownitems:ButtonDropdownItem[] = [
          {text:'staticvoid(my blog)', onClick: ()=> open('https://www.staticvoid.tk/'),},
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
  
      const SideNavigation = useMemo(() => {
          return (
              <div>
              <SideNavigationBase
                  header={{ text: 'Cloud', href: '/' }}
                  items={[
                      { text: 'AWS', type: SideNavigationItemType.LINK, href: '/aws' },
                      { text: 'GCP', type: SideNavigationItemType.LINK, href: '/gcp' },
                  ]}
              ></SideNavigationBase>
              </div>
          );
      }, []);
  
      return (
          <AppLayoutBase header={Header} navigation={SideNavigation} >
              {children}
          </AppLayoutBase>
      );
  };
  
  export default AppLayout;
  