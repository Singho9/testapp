import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PhysicianComponent } from './physician/physician.component';
import { AiChatWindowComponent } from './ai-chat-window/ai-chat-window.component';
import { HealthSummaryComponent } from './health-summary/health-summary.component';
// import { RequestConfirmModelComponent } from './request-confirm-model/request-confirm-model.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PhysicianComponent,
    AiChatWindowComponent,
    HealthSummaryComponent,
    // RequestConfirmModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule, MatInputModule, MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [RequestConfirmModelComponent]
})
export class AppModule { }
