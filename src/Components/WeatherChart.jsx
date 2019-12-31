import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const WeatherChart = props => {
  console.log(props.data);
  const row = props.data;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Wind</TableCell>
            <TableCell align="right">Cloudiness</TableCell>
            <TableCell align="right">Pressure</TableCell>
            <TableCell align="right">Humidity</TableCell>
            <TableCell align="right">Sunrise</TableCell>
            <TableCell align="right">Sunset</TableCell>
            <TableCell align="right">Geo coords</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.weather[0].description}</TableCell>
            <TableCell align="right">{row.main.pressure}hpa</TableCell>
            <TableCell align="right">{row.main.humidity}%</TableCell>

            <TableCell align="right">{row.sys.sunrise}</TableCell>
            <TableCell align="right">{row.sys.sunset}</TableCell>
            <TableCell align="right">
              [{row.coord.lat},{row.coord.lon}]
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherChart;
