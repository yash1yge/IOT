import React from "react";
import ReactApexChart from "react-apexcharts";

class SColumnChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Sales',
                data: [55, 90, 70, 100, 60, 110, 44, 75]
            }, {
                name: 'Profit',
                data: [28, 60, 50, 50, 25, 40, 28, 40]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 260,
                    toolbar: {
                        show: false
                    },

                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: false,
                        borderRadiusApplication: 'around',
                        columnWidth: '38%',
                        endingShape: 'rounded',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                grid: {
                    show: false,
                    padding: { left: 0, right: 0, top: 0, bottom: 0 },
                    row: {
                        colors: ['transparent'],
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    lines: {
                        show: false
                    },
                },
                yaxis: {
                    labels: {
                        show: false
                    },
                },
                legend: {
                    show: false
                },
                fill: {
                    opacity: 1,
                    colors: ["#6567e9", "#30b1eb"],
                    type: 'solid',
                },
                stroke: {
                    show: false,
                },
                responsive: [
                    {
                        breakpoint: 827,
                        options: {
                            plotOptions: {
                                bar: {
                                    columnWidth: '55%',
                                    borderRadius: 3,
                                }
                            },
                        },
                    },
                    {
                        breakpoint: 640,
                        options: {
                            chart: {
                                height: 300,
                                width: "100%",
                            },
                            plotOptions: {
                                bar: {
                                    columnWidth: '55%',
                                    borderRadius: 3,
                                }
                            },
                            grid: {
                                show: false,
                                padding: { left: -10, right: 0, top: 0, bottom: 0 },
                            },
                        },
                    },
                    {
                        breakpoint: 400,
                        options: {
                            chart: {
                                height: "250px"
                            },
                            plotOptions: {
                                bar: {
                                    columnWidth: '55%',
                                    borderRadius: 3,
                                }
                            },
                        },
                    }
                ]
            },


        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={260} />
            </div>
        );
    }
}

export default SColumnChart