import React, { Component } from "react";
import Chart from "react-apexcharts";
import './barchart.css';

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barOptions: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9"]
        }
      },
      barSeries: [
        {
          name: "Objective Percentage Complete",
          data: [40, 50, 60, 70, 80, 85, 90, 95, 100]
        }
      ],
      lineOptions: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9"]
        }
      },
      lineSeries: [
        {
          name: "Miles Walked on the Day",
          data: [2, 1, 4, 6, 8, 5, 2, 3, 1.5]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="chart-container" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', display: 'inline-block' }}>
          <Chart
            options={this.state.barOptions}
            series={this.state.barSeries}
            type="bar"
            width="500"
          />
          <div className="chart-label">Objective Percentage Complete</div>
        </div>
        <div className="chart-container" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', display: 'inline-block' }}>
          <Chart
            options={this.state.lineOptions}
            series={this.state.lineSeries}
            type="line"
            width="500"
          />
          <div className="chart-label">Miles Walked on the Day</div>
        </div>
      </div>
    );
  }
}

export default BarChart;
