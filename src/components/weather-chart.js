import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const WeatherChart = ({ data, color, unit }) => {

  const average = data => {

      return _.round(_.sum(data)/data.length);
    }

  return(
    <div>
      <Sparklines data={data} width={200} height={150} >
        <SparklinesLine color={color} />
        <SparklinesReferenceLine typ e="avg" />
      </Sparklines>
      <div>{average(data)}{unit}</div>
    </div>
  );
}

export default WeatherChart;
