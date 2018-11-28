
// init github

    const github = new Github();

// init UI

    const ui = new UI();

// init search input

    const searchIput = document.getElementById('searchUser');

// add event listener

    searchIput.addEventListener('keyup', (e) => {
        // get input Text
        const userText = e.target.value;

        if (userText !== ''){
            // Make http request
                github.getUser(userText)
                    .then(user => {
                        if (user.message === 'Not Found'){
                            // Show Alert
                                ui.showAlert(`user: ${userText} not found`, 'alert alert-danger');
                                // Clear profile
                                ui.clearProfile();
                        } else {
                            // Show profile
                            ui.showProfile(user);
                        }
                        return user;
                    });
                github.getRepos(userText)
                    .then(repos => console.log(repos))
                    .catch(err => console.log(err));
        } else {
            // Clear profile
                ui.clearProfile();
        }
    });

