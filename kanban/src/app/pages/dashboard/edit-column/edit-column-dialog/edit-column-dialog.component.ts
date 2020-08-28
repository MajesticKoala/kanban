import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-column-dialog',
  templateUrl: './edit-column-dialog.component.html',
  styleUrls: ['./edit-column-dialog.component.scss']
})
export class EditColumnDialogComponent implements OnInit {


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

}
