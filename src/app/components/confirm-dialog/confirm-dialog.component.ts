import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  imports: [CommonModule, MatButtonModule, MatDialogContent, MatDialogActions],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  // Variável para armazenar a mensagem do diálogo
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  // Método para fechar o diálogo com confirmação
  onConfirm(): void {
    this.dialogRef.close(true);
  }

  // Método para fechar o diálogo sem confirmação
  onCancel(): void {
    this.dialogRef.close(false);
  }
}
