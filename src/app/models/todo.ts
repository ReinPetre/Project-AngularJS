export class Todo 
{
    private _id: number;
	private _description: string;
	private _dueDate: Date;
	private _completed: Boolean

    constructor(description: string, dueDate?: Date)
    {
		this._description = description;
		this._completed = false;
		this._dueDate = dueDate || null;
    }

	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}

	get description(): string {
		return this._description;
	}

	set description(value: string) {
		this._description = value;
	}

	get dueDate(): Date {
		return this._dueDate;
	}

	set dueDate(value: Date) {
		this._dueDate = value;
	}

	get completed(): Boolean
	{
		return this._completed;
	}

	set completed(value: Boolean)
	{
		this._completed = value;
	}

	static fromJSON(json): Todo {
        const todo = new Todo(json.description, json.dueDate);
        todo.id = json._id;
        return todo;
	}

	toJSON()
	{
		return {
			_id : this._id,
			description : this._description,
			completed : this._completed,
			dueDate : this._dueDate
		}
	}
	

    
    
}