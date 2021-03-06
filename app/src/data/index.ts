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
export type Status = {
    service_name: string;
    summary: string;
    date: string;
    status: string;
    details: string;
    description: string;
    service: string;
    displayDate: string;
};

export type Data = {
    archive: Status[],
    current: Status[],
}

export type gcpStatus = {
    id: string;
    number: string;
    begin: string;
    created: string;
    end: string;
    modified: string;
    external_desc: string;  
    updates: gcpStatusUpdates[];
    most_recent_update: gcpStatusUpdates;
    status_impact: string;  
    severity: string;  
    service_key: string;  
    service_name: string;  
    affected_products: gcpTitleAndId[];
    uri: string;  
    currently_affected_locations: gcpTitleAndId[];
    previously_affected_locations: gcpTitleAndId[];
}

export type gcpStatusUpdates = {
    created: string;
    modified: string;
    when: string;
    text: string;
    status: string;
    affected_locations: gcpTitleAndId[];
}

export type gcpTitleAndId = {
    title: string;
    id: string;
}