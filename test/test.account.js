var should = require("should");
var mongoose = require('mongoose');
var Account = require("../models/account.js");
var db;

describe('Account', () => {

    before((done) => {
        mongoose.Promise = global.Promise;
        db = mongoose.connect('mongodb://localhost/test');
        done();
    });

    after((done) => {
        mongoose.connection.close();
        done();
    });

    beforeEach((done) => {
        var account = new Account({
            username: 'test_user',
            password: 'test_pwd'
        });

        account.save((error) => {
            if (error) console.log('Error:' + error.message);
            else console.log('User saved succesfuly');
            done();
        });

    });

    it('find a user by username', (done) => {
        Account.findOne({ username: 'test_user' }, (err, account) => {
            account.username.should.eql('test_user');
            console.log('  username: ', account.username);
            done();
        });
    });

    afterEach((done) => {
        Account.remove({}, () => {
            done();
        });
     });

});
