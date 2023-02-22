import React from "react";
import ReactApexChart from "react-apexcharts";

class SqlChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'series1',
                data: [51, 55, 25, 42, 28, 51]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                menubar: {
                    show: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                    colors: ["#3ac5bc"]
                },
                fill: {
                    colors: ["#3ac5bc"],
                    opacity: 0.5,
                    gradient: {
                        stops: [0, 50, 50],
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["1", "2", "3", "4", "5","6"],
                    labels: {
                        show: false,
                    },
                },
                tooltip: {
                    shaw: true
                },
                title: {
                    show: false
                },
                grid: {
                    show: false,
                    padding: { left: -20, right: 0, top: -20, bottom: -20 },
                    row: {
                        colors: ['transparent'],
                        opacity: 0.5
                    },
                },
                yaxis: {
                    labels: {
                        show: false,
                    },
                },
            },


        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} width="100%" series={this.state.series} type="area" height={100} />
            </div>
        );
    }
}

export default SqlChart;