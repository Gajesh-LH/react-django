import * as React from 'react';
import ReactDOM from 'react-dom';
import {LoginPanel} from './LoginPanel.jsx';

export class MainPage extends React.Component {
    render() {
        return (
            <div style={mainPageStyle}>
                <LoginPanel/>
            </div>
        );
    }
}

const mainPageStyle = {
    backgroundColor: '#fafafa',
    padding: '25px 15px',
    textAlign: 'center',
    fontSize: '22px',
    height: '90vh'
};
