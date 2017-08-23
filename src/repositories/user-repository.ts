const fakerator = require('fakerator');
const faker = fakerator('de-DE');

export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    email?: string;
}

export class UserRepository {
    private users: IUser[] = [];

    constructor() {
        faker.seed(123123);

        for (let i = 1; i < 100; i++) {
            const firstname = faker.names.firstName();
            const lastname = faker.names.lastName();

            this.users.push({
                id: i,
                firstname,
                lastname,
                email: faker.internet.email(firstname, lastname)
            });
        }
    }

    public getUsers(): Promise<IUser[]> {
        return Promise.resolve(this.users);
    }

    public getUserById(id): Promise<IUser> {
        const user = this.users.find(x => x.id === +id);

        if (user) {
            return Promise.resolve(user);
        }

        return Promise.reject(new Error('User not found!'));
    }

    public deleteUserById(id): Promise<undefined> {
        const index = this.users.findIndex(x => x.id === +id);

        if (! ~index) {
            return Promise.reject(new Error('User not found!'));
        }

        delete this.users[index];

        return Promise.resolve();
    }

    public async updateUser(user): Promise<IUser> {
        if (!user.id) {
            return Promise.reject(new Error('User does not have an ID'));
        }

        let dbUser;
        for (dbUser of this.users) {
            if (dbUser.id === user.id) {
                dbUser = user;
                break;
            }
        }

        if (dbUser.id !== user.id) {
            return Promise.reject(new Error('User not found'));
        }

        return Promise.resolve(dbUser);
    }
}