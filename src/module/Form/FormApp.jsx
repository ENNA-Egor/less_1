import React from 'react';

// don't change the Component name "App"
 class FormApp extends React.Component {
      state = {
        email: '',
        isAgreeWithTerms: false,
  }

    handleChangeEmail=(event) =>{
        this.setState({[event.target.name]:event.target.value})    
    }
    handleChangeCheckbox=(event) =>{
        this.setState({[event.target.name]:event.target.checked})    
    }

    validateEmail=()=>{
        if(this.state.email.length <3){
            alert('No')
        }
    }
  
  render() {
    // TODO: implement component
    const { email, isAgreeWithTerms } = this.state;

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChangeEmail}
                    onBlur={this.validateEmail}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleChangeCheckbox}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button>Send</button>
            </div>
        );
  }
}

export default FormApp;