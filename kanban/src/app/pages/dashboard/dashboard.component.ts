import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { MatDialog } from '@angular/material';
import { EditColumnDialogComponent } from './edit-column/edit-column-dialog/edit-column-dialog.component';
import { Task } from 'src/app/models/task.model';
import { EditTaskDialogComponent } from './edit-task/edit-task-dialog/edit-task-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public dialog: MatDialog) { }


  board: Board = new Board('Board1', [
    new Column('To do', [
      new Task('Get to work'),
      new Task('Pick up groceries')
    ])
  ]);

  createTask(column: Column){
    const dialogRef = this.dialog.open(EditColumnDialogComponent);
    const sub = dialogRef.componentInstance.onAdd.subscribe(result => {
      if (result.event == 'save') {
        column.tasks.push(new Task(result.data));
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.onAdd.unsubscribe();
    });
  }

  seeTask(column: Column, task: Task) {
    const dialogRef = this.dialog.open(EditTaskDialogComponent);
    const sub = dialogRef.componentInstance.onAdd.subscribe(result => {
      if (result.event == 'save') {
        task.name = result.data;
      } else if (result.event == 'delete') {
        const index: number = column.tasks.indexOf(task);
        if (index !== -1) {
            column.tasks.splice(index, 1);
        } 
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.onAdd.unsubscribe();
    });
  }

  createColumn(){
    const dialogRef = this.dialog.open(EditColumnDialogComponent);
    const sub = dialogRef.componentInstance.onAdd.subscribe(result => {
      if (result.event == 'save') {
        this.board.columns.push(new Column(result.data, []))
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.onAdd.unsubscribe();
    });
  }

  editColumn(column: Column){
    const dialogRef = this.dialog.open(EditColumnDialogComponent);
    const sub = dialogRef.componentInstance.onAdd.subscribe(result => {
      if (result.event == 'save') {
        column.name = result.data;
      } else if (result.event == 'delete') {
        const index: number = this.board.columns.indexOf(column)
        if (index !== -1) {
            this.board.columns.splice(index, 1);
        } 
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.onAdd.unsubscribe();
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
