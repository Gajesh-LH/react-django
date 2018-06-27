import * as React from 'react';
import {FormControl, FormGroup, Row, Col, Button, FormControlProps} from 'react-bootstrap';
import { RouteComponentProps, Link} from 'react-router-dom';
import { isLoggedIn, showAlert } from '../utils/index.js';
import { doPost } from '../utils/requests.js';


export class CreateUser extends React.Component {

    componentWillMount() {
        if (isLoggedIn()) {
            this.props.history.push('view');
        }
    }

    inputHandler = (event)=> {
        const value = event.target[`value`];
        const inputType = event.target[`id`];
        
        if (value) {
            this.setState({[inputType]: value});
        }
    }

    renderInputField = (
            id,
            type,
            placeholder,
            handler
    ) => {
        return (
            <FormGroup>
                <FormControl
                        id={id}
                        type={type}
                        required={true}
                        placeholder={placeholder}
                        onChange={handler}
                />
            </FormGroup>
        );
    }

    submitForm = (event) => {
        event.preventDefault();

        const {email, password, username, confirmPassword} = this.state;
        
        if (!password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')) {
            showAlert(1, 'Password should be alphanumeric');
            return;
        }
        
        if (password !== confirmPassword) {
            showAlert(1, 'passwords are not same.');
            return;
        }

        doPost(
            '/createUser/',
            {username, password, email},
            this.success,
            this.fail
        );
    }

    success = () => {
        showAlert(1, 'Account created successfully, Login to continue', 'success');
        this.props.history.push('/');
    }

    fail = (error) => {
        if (error.response && error.response.data) {
            if (error.response.data.message === 'UNIQUE constraint failed: auth_user.username') {
                showAlert(1, 'Username is exist. Please choose other username');
                return;
            }

            showAlert(1, 'An other account exist for this email.');
            return;
        }

        showAlert(1, 'Unable to create account please try again.');  
    }

    render() {
        return (
            <div style={{textAlign: 'center', display: 'table', margin: 'auto'}}>
                    <form
                            onSubmit={this.submitForm}
                            id="loginForm"
                            style={{display: 'table', margin: 'auto', maxWidth: '500px'}}
                    >
                        <h1>Create your account</h1>
                        <hr style={{maxWidth: '200px', marginBottom: '30px'}}/>
                        {this.renderInputField('username', 'text', 'Username', this.inputHandler)}
                        {this.renderInputField('email', 'email', 'Email', this.inputHandler)}
                        {this.renderInputField('password', 'password', 'Password', this.inputHandler)}
                        {this.renderInputField('confirmPassword', 'password', 'Confirm Password', this.inputHandler)}
                        <Row>
                           <Col sm={8} style={{fontSize: '15px', textAlign: 'left'}}>
                                <Link to="/">Click here to login</Link>
                            </Col>
                            <Col sm={2} style={{paddingLeft: 0}}>
                                <Button bsStyle="success" type="submit">Create New</Button>
                            </Col>
                        </Row>
                    </form>
            </div>
        );
    }
}
