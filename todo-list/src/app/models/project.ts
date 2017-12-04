import { Todo } from "./todo";
import { User } from "./user";

export class Project 
{
    private _id: number;
    private _projectName: string;
    private _todos: Array<Todo>;

    constructor(projectName: string, todos?: Todo[])
    {
        this._projectName = projectName;
        this._todos = todos || new Array<Todo>();
    }

	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}

	get projectName(): string {
		return this._projectName;
	}

	set projectName(value: string) {
		this._projectName = value;
	}


	get todos(): Array<Todo> {
		return this._todos;
	}

	set todos(value: Array<Todo>) {
		this._todos = value;
	}

	addTodo(todo: Todo)
	{
		this._todos.push(todo);
	}

	static fromJSON(json): Project {
        const project = new Project(json.projectName, json.todos);
        project.id = json._id;
        return project;
	}

	toJSON()
	{
		return {
			_id : this._id,
			projectName : this._projectName,
			todos : this._todos
		}
	}
    
}