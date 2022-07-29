export class User {
    name: string
    age: number

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age != null ? age : 0;
    }

    getName(): string {
        return `Mr ${this.name}`;
    }

    static getType(): string {
        return "Human";
    }
}

export const getModuleName = (): string => {
    return 'User';
}
