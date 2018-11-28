'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI = function () {
    function UI() {
        _classCallCheck(this, UI);

        this.profile = document.getElementById('profile');
        this.search_container = document.querySelector('.searchContainer');
    }

    // Display profile


    _createClass(UI, [{
        key: 'showProfile',
        value: function showProfile(user) {
            this.profile.innerHTML = '\n                <div class="card card-body mb-3">\n                    <div class="row">\n                        <div class="col-md-3">\n                            <img src="' + user.avatar_url + '" alt="avatar" class="img-fluid mb-2">\n                            <a href="' + user.html_url + '" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a> \n                        </div>\n                        <div class="col-md-9">\n                            <div class="user-info-header mb-3">\n                                <span class="badge badge-primary p-2 mr-2">Pablic Repos: ' + user.pablic_repos + '</span>\n                                <span class="badge badge-secondary p-2 mr-2">Pablic Gists: ' + user.pablic_gists + '</span>\n                                <span class="badge badge-sucsses p-2 mr-2">Followers: ' + user.followers + '</span>\n                                <span class="badge badge-info p-2">Following: ' + user.following + '</span>\n                            </div>\n                            <ul class="list-group">\n                                <li class="list-group-item">Company: ' + (user.company ? user.company : 'N/A') + '</li>\n                                <li class="list-group-item">Website/blog: ' + (user.blog ? user.blog : 'N/A') + '</li>\n                                <li class="list-group-item">Location: ' + (user.location ? user.location : 'N/A') + '</li>\n                                <li class="list-group-item">Member Since: ' + user.created_at + '</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <h3 class="page-heading mb-3">Latest Repos</h3>\n                <div id="repos"></div>\n            ';
        }

        // Display repos

    }, {
        key: 'showRepos',
        value: function showRepos(repos) {}

        // Display alert message

    }, {
        key: 'showAlert',
        value: function showAlert() {
            var _this = this;

            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'alert alert-info';

            // Clear any alert
            this.clearAlert();

            // Creat template
            var alert = '<div class="' + className + '">' + message + '</div>';
            this.search_container.insertAdjacentHTML('afterbegin', alert);

            // Hide alert after 2s
            setTimeout(function () {
                return _this.clearAlert();
            }, 2000);
        }

        // Clear alert

    }, {
        key: 'clearAlert',
        value: function clearAlert() {
            var currentAlert = document.querySelector('.alert');
            if (currentAlert) {
                currentAlert.remove();
            }
        }

        // Clear profile

    }, {
        key: 'clearProfile',
        value: function clearProfile() {
            this.profile.innerHTML = '';
        }
    }]);

    return UI;
}();