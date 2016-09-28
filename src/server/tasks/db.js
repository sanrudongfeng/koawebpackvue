import mongoose from 'mongoose';
//分页插件
mongoose.plugin(require('./pageQueryPlugin'));
var fs = require('fs-extra');
var session = require('koa-generic-session');
var MongooseStore = require('koa-session-mongoose');

var modelPath = __dirname + '/../model';

var walk = function (path) {
    fs.readdirSync(path).forEach(function (file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
module.exports = function (app) {
    mongoose.Promise = Promise;
    //112.74.42.174:27017/guigool
    mongoose.connect('mongodb://112.74.42.174:27017/guigool');
    mongoose.connection.on('connected', ()=>
        console.log('mongo connection open')
    );
    mongoose.connection.on('error', err => {
        throw `MongoDB connection error: ${err}`
    });
    mongoose.connection.on('disconnected', () =>
        console.error('mongo connection disconnected')
    );

    walk(modelPath);

    app.use(session({
        key: 'sid',
        store: new MongooseStore({
            expires: 60 * 60 * 24 * 14  // 2 weeks
        }),
        //collection: 'koaSessions',
        //model: 'KoaSession'
    }));

    process.on('SIGINT', () => mongoose.connection.close(process.exit));
    process.on('uncaught', ()=> {console.log('uncaught')});
};