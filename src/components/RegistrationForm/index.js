import {Component} from 'react'
import './index.css'
class LoginForm extends Component {
    state = {
        searchInput: '',
    }

    render(){

        return(
            <div>
            <h1 className="form-heading">Add User</h1>
            <form id="myForm">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <p id="nameErrMsg" className="error-message"></p>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
                <p id="emailErrMsg" className="error-message"></p>
              </div>
              <div>
                <label htmlFor="status">Working Status</label>
                <select id="status">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div>
                <h1 className="gender-field-heading">Gender</h1>
                <input type="radio" name="gender" id="genderMale" value="Male" checked />
                <label htmlFor="genderMale">Male</label>
                <input type="radio" name="gender" id="genderFemale" value="Female" />
                <label htnlFor="genderFemale">Female</label>
              </div>
              <button>Submit</button>
            </form>
          </div>
        )
    }
}

export default LoginForm