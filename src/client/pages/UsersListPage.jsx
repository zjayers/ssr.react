import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/actions/fetchUsersAction';

/**
 * User List - renders an unordered list of users from the API
 */
class UsersListPage extends Component {
    // Lifecycle method to dispatch action creator on load
    componentDidMount() {
        this.props.fetchUsers();
    }

    // Custom method to return a number of 'li' tags containing users from the store
    renderUserList() {
        return this.props.users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ));
    }

    // Render JSX to the screen
    render() {
        return (
            <div>
                Users List
                <ul>{this.renderUserList()}</ul>
            </div>
        );
    }
}

// Used to load data during server side rendering
// Manually dispatch the action creator and return a promise
// promises are then handled by a Promise.all in the server/index.js module
const loadData = (store) => {
    return store.dispatch(fetchUsers());
};

const mapStateToProps = (state) => {
    return { users: state.users };
};

const connectedComponent = connect(mapStateToProps, { fetchUsers })(
    UsersListPage
);

export default {
    component: connectedComponent,
    loadData,
};
