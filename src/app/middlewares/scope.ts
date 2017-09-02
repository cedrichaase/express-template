import { asValue, AwilixContainer } from "awilix";

module.exports = (app, container: AwilixContainer) => {
    app.use((req, res, next) => {
        // create a scoped container
        req.scope = container.createScope();

        // register some request-specific data..
        req.scope.register({
            currentUser: asValue(req.scope.resolve("userRepository").getUserById(1))
        });

        next();
    });
};
