const DB = require('../db');

class User extends Model { };

User.init({
  id: { type: DB.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  uname: { type: DB.Sequelize.STRING, allowNull: false }, 
  name: { type: DB.Sequelize.STRING, allowNull: false },
  email: { type: DB.Sequelize.STRING, allowNull: false },
  web: { type: DB.Sequelize.STRING, allowNull: false }
}, { sequelize, timestamps: false });

module.exports = User;
/*
{
    constructor(uname, realname, email, web) {
        this.uname = uname;
        this.name  = realname;
        this.email = email;
        this.web   = web;
    }

    get uname() {
        return this.uname;
    }

    get name() {
        return this.name;
    }

    get email() {
        return email;
    }

    get web() {
        return this.web;
    }

    setUname(uname) {
        this.uname = uname;
    }

    setName(realname) {
        this.name = realname;
    }

    setEmail(em) {
        this.email = em;
    }

    setWeb(web) {
        this.web = web;
    }

    setUser(un, rn, em, www) {
        this.setUname(un);
        this.setName(rn);
        this.setEmail(em);
        this.setWeb(www);
    }
}
*/

module.exports = User;