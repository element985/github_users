'use strict';

// init github

var github = new Github();

// init UI

var ui = new UI();

// init search input

var searchIput = document.getElementById('searchUser');

// add event listener

searchIput.addEventListener('keyup', function (e) {
    // get input Text
    var userText = e.target.value;

    if (userText !== '') {
        // Make http request
        github.getUser(userText).then(function (user) {
            if (user.message === 'Not Found') {
                // Show Alert
                ui.showAlert('user: ' + userText + ' not found', 'alert alert-danger');
                // Clear profile
                ui.clearProfile();
            } else {
                // Show profile
                ui.showProfile(user);
            }
            return user;
        });
        github.getRepos(userText).then(function (repos) {
            return console.log(repos);
        }).catch(function (err) {
            return console.log(err);
        });
    } else {
        // Clear profile
        ui.clearProfile();
    }
});