import { Project } from "./project";

export class User 
{
    private _id: number;
    private _firstname: string;
    private _lastname: string;
    private _username: string;
    private _email: string;
	private _password: string;
	private _projects: Array<Project>

    constructor(id: number, firstname: string, lastname: string, email: string, username: string, password: string)
    {
        this._id = id;
        this._firstname = firstname; 
        this._lastname = lastname;
		this._email = email;
		this._username = username;
		this._password = password;
		this._projects = new Array<Project>();
    }

	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}

	get firstname(): string {
		return this._firstname;
	}

	set firstname(value: string) {
		this._firstname = value;
	}

	get lastname(): string {
		return this._lastname;
	}

	set lastname(value: string) {
		this._lastname = value;
	}

	get username(): string {
		return this._username;
	}

	set username(value: string) {
		this._username = value;
	}

	get email(): string {
		return this._email;
	}

	set email(value: string) {
		this._email = value;
    }
    
    get password(): string {
		return this._password;
	}

	set password(value: string) {
		this._password = value;
	}
	
	get projects(): Array<Project>
	{
		return this._projects;
	}

	set projects(value: Array<Project>)
	{
		this._projects = value;
	}
    
    
}

