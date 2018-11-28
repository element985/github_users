

    class UI {
        constructor() {
            this.profile = document.getElementById('profile');
            this.search_container = document.querySelector('.searchContainer');
        }

        // Display profile
        showProfile(user){
            this.profile.innerHTML = `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${user.avatar_url}" alt="avatar" class="img-fluid mb-2">
                            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a> 
                        </div>
                        <div class="col-md-9">
                            <div class="user-info-header mb-3">
                                <span class="badge badge-primary p-2 mr-2">Pablic Repos: ${user.pablic_repos}</span>
                                <span class="badge badge-secondary p-2 mr-2">Pablic Gists: ${user.pablic_gists}</span>
                                <span class="badge badge-sucsses p-2 mr-2">Followers: ${user.followers}</span>
                                <span class="badge badge-info p-2">Following: ${user.following}</span>
                            </div>
                            <ul class="list-group">
                                <li class="list-group-item">Company: ${user.company ? user.company : 'N/A'}</li>
                                <li class="list-group-item">Website/blog: ${user.blog ? user.blog : 'N/A'}</li>
                                <li class="list-group-item">Location: ${user.location ? user.location : 'N/A'}</li>
                                <li class="list-group-item">Member Since: ${user.created_at}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3 class="page-heading mb-3">Latest Repos</h3>
                <div id="repos"></div>
            `;
        }

        // Display repos
        showRepos(repos){

        }

        // Display alert message
        showAlert(message = '', className = 'alert alert-info'){
            // Clear any alert
                this.clearAlert();

            // Creat template
            const alert = `<div class="${className}">${message}</div>`;
            this.search_container.insertAdjacentHTML('afterbegin', alert);

            // Hide alert after 2s
            setTimeout(() => this.clearAlert(), 2000);
        }

        // Clear alert
        clearAlert(){
            const currentAlert = document.querySelector('.alert');
            if (currentAlert){
                currentAlert.remove();
            }
        }

        // Clear profile
        clearProfile(){
            this.profile.innerHTML = '';
        }

    }