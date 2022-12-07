import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { sharedComponents as SharedComponents } from './components';
import { ChartAxisSummaryComponent } from './components/chart-axis-summary/chart-axis-summary.component';
import { ConfirmationBoxComponent } from './components/confirmation-box/confirmation-box.component';
import { ToastNotifierComponent } from './components/toast-notifier/toast-notifier.component';
import { sharedModules as SharedModules } from './modules';
import { sharedPipes as SharedPipes } from './pipes';

@NgModule({
  imports: [
    SharedModules,
  ],
  declarations: [
    SharedComponents,
    SharedPipes,
    ChartAxisSummaryComponent
  ],
  exports: [SharedModules, SharedComponents, SharedPipes],
  providers: [ToastNotifierComponent, ConfirmationBoxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
