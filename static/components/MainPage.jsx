import * as React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {LoginPanel} from './LoginPanel.jsx';

export class MainPage extends React.Component {
    render() {
        const match = {url: 'faculties'};
        const faculty = {_id: 3}
        return (
            <div style={mainPageStyle}>
                <LoginPanel/>
                <Link to={`${match.url}/${faculty._id}`}>Change</Link>
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
