
export interface TodoFormProps {
    todo: string;
    style?: React.CSSProperties;
    addTodo: () => void;
    handleTodoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface TodoListProps  {
    todoList: Array<Todo>;
    deleteTodo: (id?: string) => void;
}

export interface Todo{
    id?: string;
    task: string;
};