import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from "apexcharts";
import { fetchDeptInfoChartData } from '../data-source/mock-data.js';
import LoadingSpinner from './LoadingSpinner.jsx';

const LoanInterestChart = () => {
    const [loading, setLoading] = useState(false);

    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState({});

    useEffect(() => {
      const getChartData = async () => {
        setLoading(true);

        const chartData = await fetchDeptInfoChartData();

        setSeries([
          {
            name: 'Interests',
            data: chartData.interests,
            color: '#1c448e',
          },
          {
            name: 'Principal',
            data: chartData.principals,
            color: '#e2725b',
          },
        ]);

        setOptions({
            chart: {
              id: 'depts-chart',
              toolbar: {
                show: false,
              },
            },
            stroke: {
              show: true,
              curve: 'straight',
              lineCap: 'butt',
              colors: ['#1c448e', '#e2725b'],
              width: 2,
              dashArray: 0,
            },
            legend: {
              show: false,
            },
            xaxis: {
              type: 'datetime',
              categories: chartData.dates,
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: true,
              },
              labels: {
                show: true,
              },
            },
            yaxis: {
              opposite: true,
              stepSize: 5000,
              labels: {
                show: true,
                formatter: (value) => {
                  return `$${Intl.NumberFormat().format(value)}`;
                },
                style: {
                  cssClass: 'text-[0.1.9em] text-gray-500',
                },
              },
            },
            annotations: {
              xaxis: [
                {
                  x: new Date('2023-03-26').getTime(),
                  borderColor: '#000',
                  strokeDashArray: 0,
                },
              ],
            },
            tooltip: {
              enabled: true,
              marker: {
                show: false,
              },
              // eslint-disable-next-line no-unused-vars
              custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                return '<div class="arrow_box px-4 py-2 bg-gray-800 rounded-lg">' +
                  '<span class="text-gray-200 text-xs">' + new Date(w.globals.labels[dataPointIndex]).toDateString() + '</span>' +
                  '</div>';
              },
            },
          },
        );

        setLoading(false);
      };

      getChartData();
    }, []);

    return (
      <div className="w-full bg-white rounded p-2">
        {/* Custom legend */}
        <div className="flex items-center p-8">
          <div>
            <div className="flex items-center gap-2 cursor-default"
                 onClick={() => {
                   ApexCharts.exec('depts-chart', 'toggleSeries', 'Principal');
                 }}
            >
              <div className="h-3 w-3 bg-[#1C448E]"></div>
              <span className="text-sm text-gray-500">Interest</span>
            </div>

            <p className="text-xl text-gray-800 font-semibold">
              <sup>$</sup>1,254,011
              <span
                className="ml-4 bg-[#EDFDFD] text-teal-500 text-sm font-semibold py-1 px-4 rounded">65%</span>
            </p>
          </div>

          <div className="ml-16">
            <div className="flex items-center gap-2 cursor-default"
                 onClick={() => {
                   ApexCharts.exec('depts-chart', 'toggleSeries', 'Interests')
                 }}
            >
              <div className="h-3 w-3 bg-[#E2725B]"></div>
              <span className="text-sm text-gray-500">Principal</span>
            </div>
            <p className="text-xl text-gray-800 font-semibold">
              <sup>$</sup>675,237
              <span
                className="ml-4 bg-[#EDFDFD] text-teal-500 text-sm font-semibold py-1 px-4 rounded">35%</span>
            </p>
          </div>
        </div>
        {
          loading
            ? <div className="w-full py-2 flex items-center justify-center">
              <LoadingSpinner/>
            </div>
            : <Chart
              options={options}
              series={series}
              type="line"
              width="100%"
              height="300"
              id="depts-chart"
            />
        }
      </div>
    );
  }
;

export default LoanInterestChart;
