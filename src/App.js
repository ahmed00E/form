import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isEmailValid: false,
      isPasswordValid: false,
      isFormSubmit: false,
    };
  }

  onPasswordChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        password: e.target.value,
        isPasswordValid: e.target.value.length > 5 /* ? true : false, */
      };
    });
  }

onEmailChange = (e) => {
  this.setState((prevState) => {
    return {
      ...prevState,
      email: e.target.value,
      isEmailValid: emailPattern.test(e.target.value),
    };
  });
};

handleSubmit = (e) => {
  e.prevState();

  if (this.state.isEmailValid && this.state.isPasswordValid) {
    this.setState((prevState) => {
      return {
        ...prevState,
        isFormSubmit: true,
      };
    });
  }
};

  renderForm() {
    return !this.state.isFormSubmit ? (
      <form onSubmit={this.handleSubmit}>
          <div>
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              className={
                this.state.isEmailValid 
                ? "form-control is-valid" 
                : "form-control is-invalid"
              } 
              onChange={this.onEmailChange} 
            />
          </div>

          <div>
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className={
                this.state.isPasswordValid
                ? "form-control is-valid"
                : "form-control is-invalid"
              }
              onChange={this.onPasswordChange}
            />
          </div>

          <div className="my-3 form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              onChange={this.handleChange} 
            />
            <label for="inputCheck" className="form-check-label">Remember me</label>
          </div>

          <input className="btn btn-primary" type="submit"/>
      </form>
    ) : (
      <div className="container text-center">
        <h2>Form submitted</h2>
      </div>
    );
  }


  render() {
    return(
      <div className="container"> 
      <h2>Login</h2>
          {this.renderForm()}
      </div>
    )
  }
}

export default App;