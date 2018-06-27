import * as React from 'react';
import {FormControlProps} from 'react-bootstrap';
import {FormGroup, FormControl, Button, Row, Col} from 'react-bootstrap';
import { doPost } from '../utils/requests.js';
import { showAlert, isLoggedIn } from '../utils/index.js';
import {AxiosResponse} from 'axios';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';

export class LoginPanelImpl extends React.Component {
    toastId = 1;
    
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }

    componentWillMount() {
      if (isLoggedIn()) {
        this.props.history.push('view');
      }
    }

    handleInput = (event) => {
        const value = event.target[`value`];
        const inputType = event.target[`id`];
        
        if (value) {
            this.setState({[inputType]: value});
        }
    }

    submitForm = (event) => {
        event.preventDefault();

        const {email = '', password = ''} = this.state;
        doPost(
            '/api/login/',
            {username: email, password},
            this.success,
            this.fail
        );
    }

    success = (response) => {
        localStorage.setItem('TOKEN', response.data.token);
        this.props.history.push('view');
    }

    fail = (error) => {
        showAlert(this.toastId, 'Invalid Credential');
    }
    render() {

        return (

                <form
                        onSubmit={this.submitForm}
                        id="loginForm"
                        style={{display: 'table', margin: 'auto', maxWidth: '500px'}}
                >
                    <h1>Login</h1>
                    <hr style={{maxWidth: '200px', marginBottom: '30px'}}/>
                    <FormGroup>
                        <FormControl
                                id="email"
                                type="text"
                                required={true}
                                placeholder="Username"
                                onChange={this.handleInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                                id="password"
                                required={true}
                                type="password"
                                placeholder="Password"
                                onChange={this.handleInput}
                        />
                    </FormGroup>
                    <Row>
                        <Link to="create"><Col sm={8} style={{fontSize: '13px'}}>Create a new account</Col></Link>
                        <Col sm={2} style={{paddingLeft: 0}}>
                            <Button bsStyle="success" type="submit">Log in</Button>
                        </Col>
                    </Row>
                </form>
        );
    }
}

export const LoginPanel = withRouter(LoginPanelImpl);