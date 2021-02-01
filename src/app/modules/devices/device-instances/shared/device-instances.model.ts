/*
 * Copyright 2020 InfAI (CC SES)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
    DeviceTypePermSearchModel,
    PermissionsModel
} from '../../../metadata/device-types-overview/shared/device-type-perm-search.model';
import {DeviceTypeServiceModel} from '../../../metadata/device-types-overview/shared/device-type.model';

export interface DeviceInstancesBaseModel {
    id: string;
    local_id: string;
    name: string;
}

export interface DeviceInstancesIntermediateModel extends DeviceInstancesBaseModel {
    creator: string;
    permissions: PermissionsModel;
    shared: boolean;
}

export interface DeviceInstancesPermSearchModel extends DeviceInstancesIntermediateModel {
    device_type_id: string;
}

export interface DeviceInstancesModel extends DeviceInstancesIntermediateModel {
    device_type: DeviceTypePermSearchModel;
    log_state: boolean;
}

export interface DeviceFilterCriteriaModel {
    function_id ?: string;
    device_class_id ?: string;
    aspect_id ?: string;
}

export interface DeviceSelectablesModel {
    device: DeviceInstancesPermSearchModel;
    services: DeviceTypeServiceModel[];
}

export interface DeviceSelectablesWithGroupsModel {
    device?: DeviceInstancesPermSearchModel;
    services?: DeviceTypeServiceModel[];
    device_group?: {
        id: string;
        name: string;
    };
}
