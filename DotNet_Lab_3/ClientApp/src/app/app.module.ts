import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FirstTaskService } from './services/first-task.service';
import { SecondTaskService } from './services/second-task.service';
import { ThirdTaskService } from './services/third-task.service';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    Task2Component,
    Task3Component,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'task2', component: Task2Component },
      { path: 'task3', component: Task3Component },
    ])
  ],
  providers: [
    FirstTaskService,
    SecondTaskService,
    ThirdTaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
