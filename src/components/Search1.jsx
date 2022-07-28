import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.cb(this.state.search, this.state.type);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.cb(this.state.search, event.target.value);
  };
  render() {
    const { search, type } = this.state;
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />

          <button
            className="btn search-btn"
            onClick={() => this.props.cb(search, type)}
          >
            Search
          </button>
          <div>
            <label className="radio">
              <input
                className="with-gap"
                type="radio"
                name="type"
                value="all"
                onChange={this.handleChange}
                checked={type === "all"}
              />
              <span>All</span>
            </label>
            <label className="radio">
              <input
                className="with-gap"
                type="radio"
                name="type"
                value="movie"
                onChange={this.handleChange}
                checked={type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label className="radio">
              <input
                className="with-gap"
                type="radio"
                name="type"
                value="series"
                onChange={this.handleChange}
                checked={type === "series"}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
