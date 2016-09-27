import React, { Component } from 'react';
import { reduxForm } from 'redux-form';


class Signin extends Component {

  onFormSubmit( {email, password}) {
    // log in user
    console.log("onFormSubmit", email, password);
  }

  render() {
    const { handleSubmit, fields: {email, password} } = this.props;

    return (

        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
          <fieldset className="form-group">
            <label>Email:</label>
            <input {...email} className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input {...password} className="form-control" />
          </fieldset>
          <button action="submit" className="btn btn-primary">Sign in</button>
        </form>

    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);