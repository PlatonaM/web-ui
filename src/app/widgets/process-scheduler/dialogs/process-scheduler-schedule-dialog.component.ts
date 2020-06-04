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

import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {WidgetModel} from '../../../modules/dashboard/shared/dashboard-widget.model';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ProcessSchedulerModel} from '../shared/process-scheduler.model';
import {DeploymentsModel} from '../../../modules/processes/deployments/shared/deployments.model';
import {DeploymentsService} from '../../../modules/processes/deployments/shared/deployments.service';
import {ProcessModel} from '../../../modules/processes/process-repo/shared/process.model';


@Component({
    templateUrl: './process-scheduler-schedule-dialog.component.html',
    styleUrls: ['./process-scheduler-schedule-dialog.component.css'],
})
export class ProcessSchedulerScheduleDialogComponent implements OnInit {

    form = new FormGroup({
        days: new FormArray([
            new FormControl(false),
            new FormControl(false),
            new FormControl(false),
            new FormControl(false),
            new FormControl(false),
            new FormControl(false),
            new FormControl(false),
        ]),
        process: new FormControl(''),
        time: new FormControl('')
    });

    widget: WidgetModel = {} as WidgetModel;
    deployments: DeploymentsModel[] = [];

    constructor(private dialogRef: MatDialogRef<ProcessSchedulerScheduleDialogComponent>,
                private deploymentsService: DeploymentsService) {
    }

    ngOnInit() {
        this.deploymentsService.getAll('', 99999, 0, 'deploymentTime', 'desc').subscribe((deployments: DeploymentsModel[]) => {
            this.deployments = deployments;
        });
    }

    close(): void {
        this.dialogRef.close();
    }

    save(): void {
        const cronDays: number[] = [];
        const days = <boolean[]>(this.form.get('days') as FormArray).value;
        days.forEach((day: boolean, index: number) => {
            if (day === true) {
                cronDays.push(index);
            }
        });
        const process = <ProcessModel>(this.form.get('process') as FormControl).value;
        const time = (this.form.get('time') as FormControl).value;
        const date = new Date();
        date.setHours(time.split(':')[0]);
        date.setMinutes(time.split(':')[1]);
        this.dialogRef.close({id: '', cron: date.getUTCMinutes() + ' ' + date.getUTCHours() + ' * * ' + cronDays.join(), process_deployment_id: process.id} as ProcessSchedulerModel);
    }

}
