import { Todo } from "./todo";
import { User } from "./user";

export class Project 
{
    private _id: number;
    private _projectName: string;
    private _todos: Array<Todo>;

    constructor(id: number, projectName: string)
    {
        this._id = id;
        this._projectName = projectName;
        this._todos = new Array<Todo>();
    }

	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}

	get name(): string {
		return this._projectName;
	}

	set name(value: string) {
		this._projectName = value;
	}
    
}