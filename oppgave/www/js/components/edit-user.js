//edit-user.js
import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  /*Render html by JS. Contains a user form with mailadresse (uid), fornavn, etternavn, gammelt passord
  and nytt passord. The page contains a form where the user can edit their corresponding user data.*/
  render() {
    return html`
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <form onsubmit="javascript: return false;" id="userForm" method="POST">
    <div class="form-group pt-3 ml-5" style="width: 30rem;">
      <label for="email">Mailadresse:</label>
      <input class="form-control" id="uname" name="uname" type="text" value="${this.user.uname}" required>
      <input type="hidden" id="uid" name="uid" value="${this.user.uid}">
    </div>
    <div class="form-group pt-1 ml-5" style="width: 30rem;">
      <label for="firstName">Fornavn:</label>
      <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
    </div>
    <div class="form-group pt-1 ml-5" style="width: 30rem;">
      <label for="lastName">Etternavn:</label>
      <input class="form-control" id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
    </div>
    <div class="form-group pt-1 ml-5" style="width: 30rem;">
      <label for="oldpwd">Gammelt passord:</label>
      <input type="password" class="form-control" id="oldpwd" name="oldpwd" type="text" value="">
    </div>
    <div class="form-group pt-1 ml-5" style="width: 30rem;">
      <label for="newpwd">Nytt passord:</label>
      <input type="password" class="form-control" id="pwd" name="pwd" type="text" value="">
  </div>
  <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn btn-info mt-4 ml-2" value="Rediger bruker"></input>
</form>
    `;
  }

  //Updating data on user
  updateUser(err) {
    //Data fetched from the HTML-file
    const dataForma = new FormData(err.target.form);
    console.log(err)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForma
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("User data was updated");
        } else {
            console.log("The user data was not updated");
        }
      })
  }
}
customElements.define('edit-user', EditUser);
