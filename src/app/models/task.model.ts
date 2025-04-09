//Este arquivo contém a definição do modelo de dados para as tarefas no aplicativo. 
export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'Pendente' | 'Em andamento' | 'Concluído';
    createdAt: Date;
    updatedAt: Date;
  }
  