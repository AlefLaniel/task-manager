export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'Pendente' | 'Em andamento' | 'Concluído';
    createdAt: Date;
    updatedAt: Date;
  }
  