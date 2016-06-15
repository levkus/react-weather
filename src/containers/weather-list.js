import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import WeatherChart from '../components/weather-chart';
import SimpleMap from '../components/google-map';

class WeatherList extends Component {
  renderList() {
    const cities = _.map(this.props.weather, data => {
      const temps = _.map(data.list, item => item.main.temp - 273.15);
      const pressures = _.map(data.list, item => _.round(item.main.pressure * 0.750062));
      const humidities = _.map(data.list, item => item.main.humidity);
      console.log(temps);

      return (
        <tr key={data.city.id}>
          <td><SimpleMap lat={data.city.coord.lat} lng={data.city.coord.lon} /></td>
          <td><WeatherChart data={temps} unit={'℃'} color="blue" /></td>
          <td><WeatherChart data={pressures} unit={' mmHg'} color="red" /></td>
          <td><WeatherChart data={humidities} unit={'%'} color="orange" /></td>
        </tr>
      );
    });

    return cities;
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
