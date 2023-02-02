import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NodeService } from './nodeservice';

import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    AccordionModule,
    HttpClientModule,
    FormsModule,
    TabViewModule,
    PanelModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [NodeService],
})
export class AppModule {}
