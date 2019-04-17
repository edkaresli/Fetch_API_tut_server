const Sequelize = require('sequelize');
const UserModel = require('./Model/usermodel');
const dbconfig = require('./dbconfig');

const uri = dbconfig.POSTGRES_HOST_URI;
const port = dbconfig.POSTGRES_HOST_PORT;
const dbuser = dbconfig.POSTGRES_USER;
const password = dbconfig.POSTGRES_PASSWORD;
const dbname = dbconfig.POSTGRES_DB_NAME;

const sequelize = new Sequelize(`postgres://${dbuser}:${password}@${uri}:${port}/${dbname}`);


const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: true })
  .then(() => {
    User.bulkCreate([
      { uname: "DarthBurger", name: "Darth Burger", email: "casual.sith@farfaraway.com", web: "www.farfaraway.com/darthburger" },
      { uname: "Nobody", name: "Noone Known", email: "nobody@noplace.io", web: "www.noplace.io/nobody" },
      { uname: "Neo", name: "Mr. Anderson", email: "theone@thenetwork.com", web: "www.thenetwork.com/neo" },
      { uname: "SammyQ", name: "Sam McQuack", email: "sammyquack@duckland.com", web: "www.ducklandquack.com" },
      { uname: "MrMind", name: "George Smart", email: "mr.mind@georgesmart.edu", web: "www.georgesmart.edu" },
      { uname: "Kugelblitz", name: "Albert Einstein", email: "kugelblitz@theuniverse.heaven", web: "www.kugelblitz.heaven" },
      { uname: "ShroCat", name: "Erwin Shrodinger", email: "shrocat@meow-not-meow.info", web: "www.meow-not-meow.info" }
    ])
    .then(() => {
      return User.findAll();
    }).then( users => {
      console.log(users);
    })
    console.log(`Database & tables created!`);
  });

module.exports = {
  User
}