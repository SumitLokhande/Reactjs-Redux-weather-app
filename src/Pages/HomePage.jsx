import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import WeatherChart from "../Components/WeatherChart";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", submitted: false, tableData: rows };
  }
  myChangeHandler = event => {
    this.setState({ username: event.target.value });
    this.setState({ submitted: false });
  };

  mySubmitHandler = event => {
    event.preventDefault();
    // alert("You are submitting " + this.state.username);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.username}&appid=dabfc1f81db6b0a3f44c84f3a426537f`
      )
      .then(res => this.setState({ submitted: true, tableData: res.data }));
  };

  render() {
    return (
      <div>
        <form
          noValidate
          autoComplete="off"
          className="ip-form"
          onSubmit={this.mySubmitHandler}
        >
          <TextField
            id="outlined-basic"
            onChange={this.myChangeHandler}
            label="Location"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className="form-btn"
          >
            Search
          </Button>
        </form>
        {this.state.submitted ? (
          <WeatherChart data={this.state.tableData} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default HomePage;
