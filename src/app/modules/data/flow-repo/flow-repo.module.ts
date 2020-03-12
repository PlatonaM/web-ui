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

import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule,
    MatDividerModule, MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule, MatInputModule,
    MatListModule, MatSelectModule,
    MatTooltipModule
} from '@angular/material';
import {CoreModule} from '../../../core/core.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {DeployFlowComponent} from './deploy-flow/deploy-flow.component';


const deploy = {path: 'data/flow-repo/deploy/:id', pathMatch: 'full', component: DeployFlowComponent, data: { header: 'Analytics' }};

@NgModule({
    imports: [
        RouterModule.forChild([deploy]),
        CoreModule,
        CommonModule,
        MatGridListModule,
        MatExpansionModule,
        MatIconModule,
        MatTooltipModule,
        MatDividerModule,
        MatListModule,
        FlexLayoutModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        MatCheckboxModule,
        MatSelectModule,
        MatCardModule

    ],
    declarations: [
        DeployFlowComponent
    ],
})
export class FlowRepoModule {
}
