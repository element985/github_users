

    class Github {
        constructor(){
            this.client_id = 'Iv1.0f065558fc754553';
            this.client_secret = 'ebea76b2cbb6c1c21c8bd3b40ea87870312afd98';
        }

        // Get user by name
        getUser(name){
            return new Promise((resolve, reject) => {
                fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
                    .then(res => res.json())
                    .then(user => resolve(user))
                    .catch(err => reject(err));
            })
        }

        // Get repos by name
        getRepos(user){
            return new Promise((resolve, reject) => {
                // if (!user.login) reject('user not found');
                fetch(`https://api.github.com/users/${user}/repos?per_page=${5}&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
                    .then(res => res.json())
                    .then(user => resolve(user))
                    .catch(err => reject(err));
            })
        }
    }


