import { moduleMetadata, addDecorator } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../src/app/app-routing.module';
import { AppComponent } from '../src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import { constants } from 'buffer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { StepperComponent } from '../src/app/stepper/stepper.component';
import { TabComponent } from '../src/app/tab/tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AdditionalCoversComponent } from '../src/app/components/additional-covers/additional-covers.component';

import { LoginComponent } from '../src/app/components/login/login.component';
import { VInfoComponent } from '../src/app/components/v-info/v-info.component';



import {MatDividerModule} from '@angular/material/divider';
import { PolicyDetailsComponent } from '../src/app/components/policy-details/policy-details.component';
import { Tab2Component } from '../src/app/components/tab2/tab2.component';
import { TabsComponent } from '../src/app/components/tabs/tabs.component';
import { CdkStepper } from '@angular/cdk/stepper';
import { InsuringPartyComponent } from '../src/app/components/insuring-party/insuring-party.component';
import { DeliveryComponent } from '../src/app/components/delivery/delivery.component';
import { MTPLCalculatorComponent } from '../src/app/components/mtpl-calculator/mtpl-calculator.component';
import { MTPLPolicyComponent } from '../src/app/components/mtpl-policy/mtpl-policy.component';
import { PersonalComponent } from '../src/app/components/personal/personal.component';
import { PaymentComponent } from '../src/app/components/payment/payment.component';
import { APP_BASE_HREF } from "@angular/common";
setCompodocJson(docJson);

addDecorator(
    moduleMetadata({
        declarations: [
            AppComponent,
            StepperComponent,
            TabComponent,
            AdditionalCoversComponent,
            PolicyDetailsComponent,
            LoginComponent,
            VInfoComponent,
            Tab2Component,
            TabsComponent,
            InsuringPartyComponent,
            DeliveryComponent,
            MTPLCalculatorComponent,
            MTPLPolicyComponent,
            PersonalComponent,
            PaymentComponent
          ],
          imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MatStepperModule,
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatCardModule,
            MatSelectModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatGridListModule,
            MatTabsModule,
            MatCheckboxModule,
            MatDividerModule
        
          ],
          providers: [CdkStepper,{ provide: APP_BASE_HREF, useValue: "/" }],
    })
)