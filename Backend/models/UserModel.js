class UserModel {
    constructor(id, username, name, jwt){
        this.id = id;
        this.username = username;
        this.name = name;
        this.jwt = jwt;
    }
}

module.exports = UserModel;