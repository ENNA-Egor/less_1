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
        if(!/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(this.state.email.toLowerCase())){
            alert('Invalid email')
            this.setState({
                email: '',
                isAgreeWithTerms: false,
            })

        }
    }

    buttonOnClick =()=> {
        let chesked = this.state.isAgreeWithTerms;
        let mailed = this.state.email;
        if (mailed == ''){
            alert ('You must fill in your email address')
            return
        }
        else if(chesked == false){
            alert('you should accept all agreements');
            return
        }else {
            alert('Thank you for your subsciption!')
            this.setState({
                email: '',
                isAgreeWithTerms: false,
            })
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
                <button
                    onClick={this.buttonOnClick}
                    >Send
                </button>
            </div>
        );
  }
}

export default FormApp;