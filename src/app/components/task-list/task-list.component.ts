import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-task-list',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatTooltipModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filterStatus: string = '';
  searchTerm: string = '';

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '400px',
      data: { task: null },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.addTask(result);
      }
    });
  }

  // Métodos para editar, remover, pesquisar e filtrar tarefas
  filterTasks(): Task[] {
    return this.tasks
      .filter((task) => {
        const matchesSearchTerm = this.searchTerm
          ? task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
          : true;

        const matchesFilterStatus = this.filterStatus
          ? task.status === this.filterStatus
          : true;

        return matchesSearchTerm && matchesFilterStatus;
      })
      .sort(
        (a, b) => this.getStatusOrder(a.status) - this.getStatusOrder(b.status)
      );
  }

  // Define a ordem dos status
  private getStatusOrder(status: string): number {
    switch (status) {
      case 'Pendente':
        return 1;
      case 'Em andamento':
        return 2;
      case 'Concluído':
        return 3;
      default:
        return 4; // Caso algum status inesperado apareça
    }
  }

  removeTask(id: number): void {
    if (confirm('Tem certeza que deseja remover esta tarefa?')) {
      this.taskService.removeTask(id);
    }
  }

  openEditTaskDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '400px',
      data: { task },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.updatedAt = new Date();
        this.taskService.updateTask(result);
      }
    });
  }

  get filteredTasks(): Task[] {
    if (!this.searchTerm) {
      return this.tasks;
    }
    return this.tasks.filter((task) =>
      task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openTaskDetails(task: Task): void {
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      width: '400px',
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.updateTask(result);
      }
    });
  }
}
