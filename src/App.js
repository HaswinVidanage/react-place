import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import { simpleAction } from './_actions/simpleAction';
import MapComponent from './components/MapComponentLink';
import SearchBarComponent from './components/SearchBarLinkComponent';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: '#fff' },
  },
});

class App extends Component {
  
  simpleAction = (event) => {
    this.props.simpleAction();
  }
  
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
          <SearchBarComponent theme={theme}/>
          <MapComponent/>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
