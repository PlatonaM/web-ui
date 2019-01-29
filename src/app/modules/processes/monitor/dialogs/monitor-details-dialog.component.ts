/*
 *
 *  Copyright 2019 InfAI (CC SES)
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MonitorProcessVariableInstancesModel} from '../shared/monitor-process-variable-instances.model';
import {MonitorProcessIncidentModel} from '../shared/monitor-process-incident.model';

@Component({
    templateUrl: './monitor-details-dialog.component.html',
    styleUrls: ['./monitor-details-dialog.component.css'],
})
export class MonitorDetailsDialogComponent implements OnInit {

    private variables: {name: string, value: string}[] = [];
    private incidents: MonitorProcessIncidentModel[] = []

    constructor(private dialogRef: MatDialogRef<MonitorDetailsDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data: { variables: MonitorProcessVariableInstancesModel[], incident: MonitorProcessIncidentModel[]}
    ) {
        data.variables.forEach((variable: MonitorProcessVariableInstancesModel) => {
            this.variables.push({name: variable.name, value: variable.value});
        });
        this.incidents = data.incident;
    }

    ngOnInit() {
    }

    ok(): void {
        this.dialogRef.close();
    }
}