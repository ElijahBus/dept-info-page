import { useEffect, useState } from 'react';
import { fetchInterestDetails } from '../data-source/mock-data.js';
import LoadingSpinner from './LoadingSpinner.jsx';

const LoanInterestDetails = () => {
  const [interestDetails, setInterestDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getInterestDetails = async () => {
      setLoading(true);
      setInterestDetails(await fetchInterestDetails());
      setLoading(false);
    };

    getInterestDetails();
  }, []);

  return (
    <div className="bg-white rounded-lg w-[45%] mb-12">
      {/* Card header */}
      <div
        className="w-full flex  items-center px-5 h-16 border-b-[0.01em] border-gray-200 text-sm">

        <h2 className="capitalize text-lg font-semibold text-gray-800">Interest
          details</h2>
      </div>

      {/* Card content */}
      <div className="w-full text-sm p-5">
        <table className="w-full">
          <tbody className="w-full">
          {
            loading ?
              <tr>
                <td>
                  <span className="w-full py-2 flex items-center justify-center">
                    <LoadingSpinner/>
                  </span>
                </td>
              </tr>
              : <>
                <tr className="h-20">
                  <td>
                    <p className="text-gray-600 text-xs">Interest rate</p>
                    <p
                      className="font-medium text-xl">{`${interestDetails?.interest_rate}%`}</p>
                  </td>

                  <td>
                    <p className="text-gray-600 text-sm">Interest only period</p>
                    <p>
                      <span
                        className="font-medium text-xl">{interestDetails?.interest_only_period} </span>
                      <span className="text-xs text-gray-600">months</span>
                    </p>
                  </td>

                  <td>
                    <p className="text-gray-600 text-xs">Rate type</p>
                    <p
                      className="font-medium text-xl">{interestDetails?.rate_type}</p>
                  </td>
                </tr>

                <tr className="h-20">
                  <td>
                    <p className="text-gray-600 text-xs">Principal Paydown
                      Start</p>
                    <p
                      className="font-medium text-lg">{interestDetails?.principal_pay_down_start}</p>
                  </td>

                  <td>
                    <p className="text-gray-600 text-xs">Maturation Date</p>
                    <p
                      className="font-medium text-lg">{interestDetails?.maturation_date}</p>
                  </td>
                </tr>
              </>
          }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanInterestDetails;
