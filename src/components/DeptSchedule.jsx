import downloadIcon from '../assets/download.svg';
import shareIcon from '../assets/share.svg';
import { useEffect, useState } from 'react';
import {
  fetchDeptSchedule as fakeInterestTableData,
} from '../data-source/mock-data.js';
import LoadingSpinner from './LoadingSpinner.jsx';

const DeptSchedule = () => {

  const [interestTable, setInterestTable] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Set the table time frame where 1 => monthly, 2 => annually
   * @var number
   */
  const [timeframe, setTimeframe] = useState(1);

  useEffect(() => {
    const getDeptSchedule = async () => {
      setLoading(true);
      setInterestTable(await fakeInterestTableData());
      setLoading(false);
    };

    getDeptSchedule();
  }, []);

  return (<div className="w-full p-2 bg-white rounded">
    {/* Header */}
    <div
      className="w-full flex items-center justify-between h-16 border-b-[0.1em] border-gray-200">
      <h2 className="font-semibold capitalize ml-8">Dept Schedule</h2>

      <div className="flex items-center">
        <div className="flex text-sm items-center">
          <p>Average annual interest rate</p>
          <div
            className="text-xs rounded bg-teal-50 text-white flex items-center p-1 ml-5">
            <span className="text-teal-500">2.25%</span>
          </div>
        </div>

        {/* Report switch buttons */}
        <div className="flex p-1 gap-4 bg-gray-100 rounded-lg ml-5 h-10">
          <button
            className={`py-1 px-4 rounded-lg text-xs ${timeframe === 2 ? 'bg-white' : ''}`}
            onClick={() => setTimeframe(2)}
          >
            Annual
          </button>
          <button
            className={`py-1 px-4 rounded-lg text-xs ${timeframe === 1 ? 'bg-white' : ''}`}
            onClick={() => setTimeframe(1)}
          >
            Monthly
          </button>
        </div>

        <div className="flex gap-5 items-center mx-5">
          <button className="">
            <img src={downloadIcon} alt="Download Icon"/>
          </button>
          <button className="">
            <img src={shareIcon} alt="Share Icon"/>
          </button>
        </div>
      </div>
    </div>

    {/* Table */}
    <table className="w-full">
      <thead className="h-16 border-b-[0.1em] border-gray-200">
      <tr className="text-sm text-left">
        <th className="font-normal pl-8">Month</th>
        <th className="font-normal">Date</th>
        <th className="font-normal">Monthly Payment</th>
        <th className="font-normal">Interest</th>
        <th className="font-normal">Principal Pay Down</th>
        <th className="font-normal">Ending Principal</th>
        <th className="font-normal">Cumulative Interest</th>
      </tr>
      </thead>
      <tbody>
      {
        loading
          ? <tr>
            <td colSpan="7">
              <span className="w-full py-2 flex items-center justify-center">
                <LoadingSpinner/>
              </span>
            </td>
          </tr>
          : interestTable.map((value, index) => (
            <tr className="h-14 text-left text-xs" key={index}>
              <td className="pl-8">
                <span
                  className="border-gray-200 border-[0.1em] rounded px-4 py-1">
                  {value?.id >= 10 ? value?.id : `0${value?.id}`}
                </span>
              </td>
              <td>{value?.date}</td>
              <td>
                <sup>$</sup>
                {value?.monthly_payment}
              </td>
              <td>
            <span>
              <sup>$</sup>
              {value?.interest}
            </span> <br/>
                <span className={` ml-[15%] text-xs ${[1,2,3].includes(index) ? 'text-red-600' : 'text-teal-500'} `}>1.23%</span>
              </td>
              <td>
                <sup>$</sup>
                {value?.principal_pay_down}
              </td>
              <td>
                <sup>$</sup>
                {value?.ending_principal}
              </td>
              <td>
                <sup>$</sup>
                {value?.cumulative_interest}
              </td>
            </tr>))
      }

      </tbody>
    </table>
  </div>);
};

export default DeptSchedule;
