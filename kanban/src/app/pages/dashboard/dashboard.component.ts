import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor() { }


  board: Board = new Board('Board1', [
    new Column('To do', [
      'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
    ]),
    new Column('Doing', [
      'Get coffee',
    'Look at open houses',
    'Go to the beach',
    'Make dinner'
    ]),
    new Column('Done', [
      'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
    ])
  ]);

  createTask(column: Column){
    column.tasks.push('Added New Task');
  }

  createColumn(){
    this.board.columns.push(new Column('Added Column', []))
  }

  editColumnName(){
    
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
