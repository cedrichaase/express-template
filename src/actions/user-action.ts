import { IUser, UserRepository } from "../repositories/user-repository";

export class UserAction {
    private currentUser: IUser;
    private repo: UserRepository;

    constructor({ userRepository, currentUser }) {
        this.repo = userRepository;
        this.currentUser = currentUser;
    }

    public async getUser(req, res) {
        try {
            const user = await this.repo.getUserById(req.params.id);
            // const user = this.currentUser;
            res.status(200).send(user);
        } catch (e) {
            res.status(404).send(e);
        }
    }

    public async getUsers(req, res) {
        try {
            const users = await this.repo.getUsers();
            return res.status(200).send({data: users});
        } catch (e) {
            res.status(404).send(e);
        }
    }

    public async deleteUser(req, res) {
        try {
            this.repo.deleteUserById(req.params.id);
        } catch (e) {
            res.status(404).send(e);
        }
    }
}