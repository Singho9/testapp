import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request-confirm-model',
  templateUrl: './request-confirm-model.component.html',
  standalone: true,
  styleUrls: ['./request-confirm-model.component.css'],
  imports: [MatDialogModule, MatButtonModule],
})
export class RequestConfirmModelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RequestConfirmModelComponent>){
    
  }

  ngOnInit(): void {
  }

}
