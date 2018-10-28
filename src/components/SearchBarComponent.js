import React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export default class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      single: '',
      popper: '',
      suggestions: [],
    };
    
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderInputComponent = this.renderInputComponent.bind(this);
    this.handleSuggestionsClearRequested = this.handleSuggestionsClearRequested.bind(this);
    this.handleSuggestionsFetchRequested = this.handleSuggestionsFetchRequested.bind(this);
  }
  
  
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.props.getSuggestions(value),
    });
  };
  
  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  
  
  getSuggestionValue(suggestion) {
    console.log('hdv suggestion.label', suggestion);
  
    this.props.addLocation(suggestion.place_id);
    return suggestion.label;
  }
  
  renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);
    
    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            );
          })}
        </div>
      </MenuItem>
    );
  }
  
  renderInputComponent(inputProps) {
    const { inputRef = () => {}, ref, ...other } = inputProps;
    
    return (
      <TextField
        fullWidth
        InputProps={{
          inputRef: node => {
            ref(node);
            inputRef(node);
          },
          classes: {
            root: "inputRoot",
            input: "search-input",
          },
        }}
        {...other}
      />
    );
  }
  
  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue,
    });
  };
  
  render() {
    
    console.log('HDV mapLocations: ', this.props.mapLocations);
    const autosuggestProps = {
      renderInputComponent: this.renderInputComponent,
      suggestions: this.props.suggestions? this.props.suggestions: [],
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue:this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion,
    };
    
    return (
      <div className="searchbar-wrapper">
        <AppBar position="static">
          <Toolbar>
            <div className="search-form">
              
              {/*<div className="searchIcon-wrapper ">*/}
              {/*<SearchIcon />*/}
              {/*</div>*/}
              
              {/*<InputBase*/}
              {/*placeholder="Search…"*/}
              {/*classes={{*/}
              {/*root: "inputRoot",*/}
              {/*input: "inputInput",*/}
              {/*}}*/}
              {/*/>*/}
              <Autosuggest
                {...autosuggestProps}
                inputProps={{
                  placeholder: 'Search for a place',
                  value: this.state.single,
                  onChange: this.handleChange('single'),
                }}
                theme={{
                  container: "autocomplete-container",
                  suggestionsContainerOpen:"suggestionsContainerOpen",
                  suggestionsList: "suggestionsList",
                  suggestion: "suggestion",
                }}
                renderSuggestionsContainer={options => (
                  <Paper {...options.containerProps} square>
                    {options.children}
                  </Paper>
                )}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}