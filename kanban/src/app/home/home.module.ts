import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditColumnDialogComponent } from './pages/dashboard/edit-column/edit-column-dialog/edit-column-dialog.component';
import { EditTaskDialogComponent } from './pages/dashboard/edit-task/edit-task-dialog/edit-task-dialog.component';
import { AppComponent } from '../app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule, MatFormFieldModule } from '@angular/material';
import { MaterialModule } from 'src/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../core/header/header.component';

@NgModule({
  entryComponents: [
    EditColumnDialogComponent,
    EditTaskDialogComponent
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EditColumnDialogComponent,
    EditTaskDialogComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatExpansionModule,
    MatFormFieldModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
