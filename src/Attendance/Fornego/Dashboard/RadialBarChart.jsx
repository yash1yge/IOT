import React from "react";
import ReactApexChart from "react-apexcharts";

class RadialBarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [76],
            options: {
                chart: {
                    type: 'radialBar',
                    offsetY: -20,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#e7e7e7",
                            strokeWidth: '97%',
                            margin: 5,
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: '22px'
                            }
                        }
                    }
                },
                grid: {
                    padding: {
                        top: 20, bottom: 0
                    }
                },
                fill: {
                    type: 'solid',
                },
                labels: ['Average Results'],
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" />
            </div>
        );
    }
}

export default RadialBarChart