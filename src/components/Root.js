import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routes from '../routes';
import { Router } from 'react-router';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

export default class Root extends Component {
  createClient() {
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'http://activelamp.docker.localhost:8000/graphql',
      }),
    });
  }

  render() {
    const { store, history } = this.props;
    return (
      <ApolloProvider store={store} client={this.createClient()}>
        <Router history={history} routes={routes} />
      </ApolloProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
