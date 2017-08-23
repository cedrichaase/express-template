import { UserRepository } from '../../repositories/user-repository';
import { UserAction } from '../../actions/user-action';

const awilix = require('awilix');
const { createContainer, asClass, asValue } = awilix;

const container = createContainer();

container.register({
    userRepository: asClass(UserRepository).scoped()
});
container.register({
    userAction: asClass(UserAction).scoped()
});

export default container;
