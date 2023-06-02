import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EquipoService } from 'src/app/services/equipo.service';
import { AuthService } from 'src/app/services/auth.service';
import { Equipo } from 'src/app/shared/model/equipo';
@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent {
  constructor(
    public dialogRef: MatDialogRef<NewTeamComponent>,private equipoService: EquipoService, private authService: AuthService) { }
  crearEquipo() {
    const nombreEquipo = (document.getElementById('nombreEquipo') as HTMLInputElement).value;
    const siglas = (document.getElementById('siglas') as HTMLInputElement).value;

    const nuevoEquipo: Equipo = {
      id: 0, // El ID se asignará en el backend, por lo que puedes dejarlo como 0 aquí
      nombreEquipo: nombreEquipo,
      siglas: siglas,
    };

    const idUsuario = this.authService.currentUserValue.id; // Obtener el ID del usuario autenticado

    this.equipoService.createEquipo(nuevoEquipo, idUsuario).subscribe(
      (equipoCreado) => {
        console.log('Equipo creado:', equipoCreado);
        location.reload();
        // Aquí puedes realizar las acciones necesarias después de crear el equipo
      },
      (error) => {
        console.error('Error al crear el equipo:', error);
        location.reload();
        // Aquí puedes manejar el error de acuerdo a tus necesidades
      }
    );
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
