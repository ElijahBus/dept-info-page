import boaLogo from '../assets/boa-logo.svg';
import { useEffect, useState } from 'react';
import { fetchBankDetails } from '../data-source/mock-data.js';
import LoadingSpinner from './LoadingSpinner.jsx';

const LoanBankDetails = () => {
  const [bankDetails, setBankDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBankDetails = async () => {
      setLoading(true);
      setBankDetails(await fetchBankDetails());
      setLoading(false);
    };

    getBankDetails();
  }, []);

  return (
    <>
      {
        loading
          ? <div className="w-full py-2 flex items-center justify-center">
            <LoadingSpinner/>
          </div>
          : <div className="bg-white rounded-lg w-[60%]">
            {/* Card header */}
            <div
              className="w-full flex justify-around items-center px-5 h-16 border-b-[0.01em] border-gray-200 text-sm">
              <img src={boaLogo} alt="Bank Of America Logo"/>

              <p className="text-lg">{bankDetails?.bank_name}</p>

              <div>
                <p className="text-[1.1rem]">Lighthouse Storage Batesville</p>
                <p className="text-xs font-light">123 Address Road, Storage
                  Street</p>
              </div>

              <button
                className="border-[0.1em] rounded-lg border-gray-200 text-teal-950 text-lg p-2 font-semibold">
                Contact Info
              </button>
            </div>

            {/* Card content */}
            <div className="w-full text-sm p-5">
              <table className="w-full">
                <tbody className="w-full">
                <tr className="h-20">
                  <td>
                    <p className="text-gray-600 text-xs">Initial Loan Balance</p>
                    <p className="font-medium text-xl">{`$${bankDetails?.initial_loan}`}</p>
                  </td>

                  <td>
                    <p className="text-gray-600 text-xs">Initial Amortization</p>
                    <p>
                      <span className="font-medium text-xl">{bankDetails?.initial_amortization} </span>
                      <span className="text-xs text-gray-600">months</span>
                    </p>
                  </td>

                  <td>
                    <p className="text-gray-600 text-xs">Initial Term</p>
                    <p className="font-medium text-xl">
                      <span className="font-medium text-xl">{bankDetails?.initial_term} </span>
                      <span className="text-xs text-gray-600">months</span>
                    </p>
                  </td>
                </tr>

                <tr className="h-20">
                  <td>
                    <p className="text-gray-600 text-xs">Remaining Loan
                      Balance</p>
                    <p className="font-medium text-xl">{`$${bankDetails?.remaining_loan}`}</p>
                  </td>

                  <td>
                    <p className="text-gray-600 text-xs">Remaining
                      Amortization</p>
                    <p className="font-medium text-xl">
                      <span className="font-medium text-xl">{bankDetails?.remaining_amortization} </span>
                      <span className="text-xs text-gray-600">months</span>
                    </p>
                  </td>

                  <td>
                    <p className="text-gray-600 text-xs">Remaining Term</p>
                    <p className="font-medium text-xl">
                      <span className="font-medium text-xl">{bankDetails?.remaining_term} </span>
                      <span className="text-xs text-gray-600">months</span>
                    </p>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>

            {/* Card Footer */}
            <div
              className="w-full flex justify-between px-10 h-12 items-center bg-teal-950 text-white rounded-b-lg">
              <p className="text-lg caption font-semibold">Monthly payment</p>
              <p className="text-lg text-[#C5FBFB] font-semibold">
                <sup>$</sup>1,720
              </p>
            </div>
          </div>
      }
    </>
  );
};

export default LoanBankDetails;
