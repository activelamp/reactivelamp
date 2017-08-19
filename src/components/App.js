import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from './Navbar/Navbar';
import { PageFooter } from './Footer/PageFooter';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar isAuthenticated={false}/>
        {this.props.children}
        <PageFooter />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
