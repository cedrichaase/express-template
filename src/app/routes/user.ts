module.exports = app => {
    app.get("/users", (req, res) => {
        // for each request we get a new message service!
        const userController = req.scope.resolve("userAction");
        return userController.getUsers(req, res);
    });

    app.get("/users/:id", (req, res) => {
        // for each request we get a new message service!
        const userController = req.scope.resolve("userAction");
        return userController.getUser(req, res);
    });
};

