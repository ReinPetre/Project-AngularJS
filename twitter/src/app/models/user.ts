export class User 
{
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _username: string;
    private _email: string;
    private _password: string;

    constructor(id: number, firstname: string, lastname: string, email: string, password: string)
    {
        this._id = id;
        this._firstName = firstname; 
        this._lastName = lastname;
        this._email = email;
        this._password = password;
    }

	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}

	get firstName(): string {
		return this._firstName;
	}

	set firstName(value: string) {
		this._firstName = value;
	}

	get lastName(): string {
		return this._lastName;
	}

	set lastName(value: string) {
		this._lastName = value;
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
    
    
}

