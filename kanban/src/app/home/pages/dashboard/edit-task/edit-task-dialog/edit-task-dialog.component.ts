import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EditColumnDialogComponent } from '../../edit-column/edit-column-dialog/edit-column-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditColumnDialogComponent>) { }

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  onAdd = new EventEmitter();

  ngOnInit() {
  }

  saveChanges(){
    this.onAdd.emit({event:'save',data:this.formGroup.get('name').value});
    this.dialogRef.close();
  }

  delete() {
    this.onAdd.emit({event:'delete'});
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

}
