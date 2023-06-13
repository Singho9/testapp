import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PhysicianComponent } from './physician/physician.component';
import { AiChatWindowComponent } from './ai-chat-window/ai-chat-window.component';
import { HealthSummaryComponent } from './health-summary/health-summary.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'physician',
    component: PhysicianComponent,
  },
  {
    path: 'ai-chat-assistant',
    component: AiChatWindowComponent,
  },
  {
    path: 'summary',
    component: HealthSummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
