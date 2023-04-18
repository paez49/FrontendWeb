import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent {
  constructor(
    public dialogRef: MatDialogRef<NewTeamComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
