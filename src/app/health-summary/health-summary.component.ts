import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RequestConfirmModelComponent } from '../request-confirm-model/request-confirm-model.component';

@Component({
  selector: 'app-health-summary',
  templateUrl: './health-summary.component.html',
  styleUrls: ['./health-summary.component.css']
})
export class HealthSummaryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  submitConsult(): void {
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(RequestConfirmModelComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => { 
      console.log('The dialog was closed', result);
    });
  }

}
