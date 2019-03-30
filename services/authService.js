exports.login = (useranme, password) => {
    if (useranme === "admin" && password === "admin@123") {
        return
    }
    else {
        throw "Invalid Credentials";
    }
}