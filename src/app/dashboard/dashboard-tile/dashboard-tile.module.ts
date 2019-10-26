import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardTileComponent } from './dashboard-tile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardTileComponent
  ],
  exports: [
    DashboardTileComponent
  ],
  entryComponents: [
    DashboardTileComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardTileModule {

  constructor(private injector: Injector) {
    
    const Elm = createCustomElement(DashboardTileComponent, { injector });
    customElements.define('dashboard-tile', Elm);

  }

}
