import React from "react";
import ReactApexChart from "react-apexcharts";


class ReportChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Desktops",
                data: [41, 10, 30, 10, 25],
            }],
            options: {
                chart: {
                    height: 100,
                    type: 'line',
                    zoom: {
                        enabled: true
                    },
                    toolbar: {
                        show: false,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                menubar: {
                    show: false
                },
                stroke: {
                    curve: "smooth",
                    width: 3,
                    colors: ["#4467EF"]
                },
                title: {
                    show: false
                },
                grid: {
                    show:false,
                    padding: { left: -20, right: 0, top: 0, bottom: 0 },
                    row: {
                        colors: ['transparent'],
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: [1, 2, 3, 4, 5],
                    labels: {
                        show: false,
                    },
                },
                yaxis: {
                    labels: {
                        show: false,
                    },
                },
                plotOptions: {
                    show: false,
                    bar: {
                        barHeight: "100%",
                        horizontal: true
                    }
                },
                
            },


        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={100} width={110} />
            </div>
        )
    }
}

export default ReportChart