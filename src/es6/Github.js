'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Github = function () {
    function Github() {
        _classCallCheck(this, Github);

        this.client_id = 'Iv1.0f065558fc754553';
        this.client_secret = 'ebea76b2cbb6c1c21c8bd3b40ea87870312afd98';
    }

    // Get user by name


    _createClass(Github, [{
        key: 'getUser',
        value: function getUser(name) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                fetch('https://api.github.com/users/' + name + '?client_id=' + _this.client_id + '&client_secret=' + _this.client_secret).then(function (res) {
                    return res.json();
                }).then(function (user) {
                    return resolve(user);
                }).catch(function (err) {
                    return reject(err);
                });
            });
        }

        // Get repos by name

    }, {
        key: 'getRepos',
        value: function getRepos(user) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                // if (!user.login) reject('user not found');
                fetch('https://api.github.com/users/' + user + '/repos?per_page=' + 5 + '&sort=' + 'created: asc' + '&client_id=' + _this2.client_id + '&client_secret=' + _this2.client_secret).then(function (res) {
                    return res.json();
                }).then(function (user) {
                    return resolve(user);
                }).catch(function (err) {
                    return reject(err);
                });
            });
        }
    }]);

    return Github;
}();