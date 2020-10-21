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

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {
    WidgetModel, WidgetPropertiesModels
} from '../../modules/dashboard/shared/dashboard-widget.model';
import {RangeSliderService} from './shared/range-slider.service';
import {DashboardService} from '../../modules/dashboard/shared/dashboard.service';
import {Subscription} from 'rxjs';
import {MatSliderChange} from '@angular/material/slider';

@Component({
    selector: 'senergy-range-slider',
    templateUrl: './range-slider.component.html',
    styleUrls: ['./range-slider.component.css'],
})
export class RangeSliderComponent implements OnInit, OnDestroy {

    ready = false;

    private destroy = new Subscription();

    @Input() dashboardId = '';
    @Input() widget: WidgetModel = {properties: {} as WidgetPropertiesModels} as WidgetModel;
    @Input() zoom = false;

    constructor(private rangeSliderService: RangeSliderService,
                private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.destroy = this.dashboardService.initWidgetObservable.subscribe((event: string) => {
            if (event === 'reloadAll' || event === this.widget.id) {
                this.ready = false;
                this.ready = true;
            }
        });
        console.log(this.widget);
    }

    ngOnDestroy() {
        this.destroy.unsubscribe();
    }

    edit() {
        this.rangeSliderService.openEditDialog(this.dashboardId, this.widget.id);
    }

    sliderRange(event: MatSliderChange) {
        if (event.value !== null) {
            if (this.widget.properties.rangeSliderValue !== null) {
                this.widget.properties.rangeSliderValue = event.value;
                this.dashboardService.updateWidget(this.dashboardId, this.widget).subscribe();
            }
        }
        console.log(event.value);
    }


}
