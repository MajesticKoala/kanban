import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditColumnDialogComponent } from './pages/dashboard/edit-column/edit-column-dialog/edit-column-dialog.component';
import { EditTaskDialogComponent } from './pages/dashboard/edit-task/edit-task-dialog/edit-task-dialog.component';

@NgModule({
  entryComponents: [
    EditColumnDialogComponent
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EditColumnDialogComponent,
    EditTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatExpansionModule,
    MatFormFieldModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
