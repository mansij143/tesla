import { Routes } from '@angular/router';
import { ModelService } from './model.service';
import { inject } from '@angular/core';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';



export const routes: Routes = [
    {
        path: 'model', component: Step1Component
    },
    {
        path: 'config', component: Step2Component, canActivate: [() => inject(ModelService).canActivateConfig()]
    },
    {
        path: 'summary', component: Step3Component,  canActivate: [() => inject(ModelService).canActivateSummary()]
    },
    {
        path: '', component: Step1Component
    },
    {
        path: '**', component: Step1Component
    },

];
