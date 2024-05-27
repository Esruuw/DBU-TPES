import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class TeacherCriteria extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15,25,65],
      labels: ['A', 'B', 'C', 'D', 'E','F','G']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default TeacherCriteria;