import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Array de tarefas que será armazenado no localStorage
  // e um BehaviorSubject para emitir atualizações
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  // Construtor que carrega as tarefas do localStorage ao inicializar o serviço
  constructor() {
    this.loadTasksFromLocalStorage();
  }

  // Método privado para salvar as tarefas no localStorage
  private saveTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  
  // Método privado para carregar as tarefas do localStorage
  private loadTasksFromLocalStorage(): void {
    const tasksFromStorage = localStorage.getItem('tasks');
    if (tasksFromStorage) {
      this.tasks = JSON.parse(tasksFromStorage);
      this.tasksSubject.next(this.tasks);
    }
  }

  // Métodos públicos para manipular as tarefas
  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  // Método para adicionar uma nova tarefa
  addTask(task: Task): void {
    task.id = new Date().getTime();
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
    this.saveTasksToLocalStorage();
  }

  // Método para atualizar uma tarefa existente
  updateTask(updatedTask: Task): void {
    this.tasks = this.tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasksSubject.next(this.tasks);
    this.saveTasksToLocalStorage();
  }

  // Método para remover uma tarefa
  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
    this.saveTasksToLocalStorage();
  }
  
}
