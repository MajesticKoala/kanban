import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-column-dialog',
  templateUrl: './edit-column-dialog.component.html',
  styleUrls: ['./edit-column-dialog.component.scss']
})
export class EditColumnDialogComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<EditColumnDialogComponent>) { }

  formGroup = new FormGroup({
    name: new FormControl('')
  })


  ngOnInit() {
  }

  saveChanges(formGroup: FormGroup){
    console.log(formGroup)
    this.dialogRef.close({data:formGroup.get('name').value});
  }

}
