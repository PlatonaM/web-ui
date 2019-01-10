/*
 * Copyright 2019 InfAI (CC SES)
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

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatChipInputEvent, MatDialogRef} from '@angular/material';
import {DeviceInstancesModel} from '../shared/device-instances.model';
import {COMMA, ENTER, SEMICOLON} from '@angular/cdk/keycodes';

@Component({
    templateUrl: './device-instances-edit-dialog.component.html',
    styleUrls: ['./device-instances-edit-dialog.component.css'],
})
export class DeviceInstancesEditDialogComponent implements OnInit {

    readonly separatorKeysCodes: number[] = [ENTER, COMMA, SEMICOLON];
    device: DeviceInstancesModel;

    constructor(private dialogRef: MatDialogRef<DeviceInstancesEditDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private data: { device: DeviceInstancesModel }) {
        this.device = data.device;
    }

    ngOnInit() {
    }

    close(): void {
        this.dialogRef.close();
    }

    save(): void {
        this.dialogRef.close(this.device);
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            if (this.device.usertag) {
                this.device.usertag.push(value.trim());
            } else {
                this.device.usertag = [value.trim()];
            }
        }

        if (input) {
            input.value = '';
        }
    }

    remove(i: number): void {
        if (this.device.usertag) {
            this.device.usertag.splice(i, 1);
        }
    }
}