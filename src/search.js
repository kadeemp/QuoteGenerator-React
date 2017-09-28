import React, {Component} from 'react'


class Search extends Component {
//initialize Component
  constructor(props) {
    super(props);

    this.state = {searchTerm: ""}
  }

  render() {
    return (
      <div>
      <form onSubmit={(e) => {
        e.preventDefault
        this.props.onSubmit(this.state.searchTerm) ;
      }}>
      <input
       type="text"
      placeholder={this.props.placeholder}
      value={this.state.searchTerm}
      onChange = {(e) => {
        this.setState({
          searchTerm:e.target.value
        })}}
        />
        <button type="Submit">Submit</button>
      </form>
      </div>
    )
  }
}

export default Search;
