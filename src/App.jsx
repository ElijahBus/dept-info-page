import './App.css';
import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import LoanBankDetails from './components/LoanBankDetails.jsx';
import LoanInterestDetails from './components/LoanInterestDetails.jsx';
import LoanInterestChart from './components/LoanInterestChart.jsx';
import DeptSchedule from './components/DeptSchedule.jsx';

import seeDownIcon from './assets/see-down.svg';
import backTopIcon from './assets/back-top.svg';

function App() {
  return (
    <>
      <div
        className="w-full h-auto bg-[#F5F5F5] flex flex-col justify-center items-center gap-[0.1em]">
        <Header/>

        <main className="w-full flex gap-[0.1em]">
          <div>
            <SideBar/>
          </div>

          <div className="flex-1 w-full">
            <div className="w-full h-14 flex items-center px-10 bg-white">
              <h2 className="text-gray-800 font-semibold">Loan Details</h2>

              <div className="flex-1 text-center">
                <button
                  className="border-[0.1em] rounded-lg border-gray-200 py-2 px-4 text-md text-gray-800 font-semibold">
                  <span>Bank of America - Lighthouse Storage Bate...</span>
                </button>
              </div>
            </div>

            {/* Loan details cards */}
            <div className="mt-4 mx-8 flex gap-4">
              {/* Loan details - Bank */}
              <LoanBankDetails/>

              {/* Loan details - Interest */}
              <LoanInterestDetails/>
            </div>

            <div className="mt-6 mx-8">
              <LoanInterestChart/>
            </div>

            {/* Dept Schedule table */}
            <div className="mt-6 mx-8">
              <DeptSchedule/>
            </div>

            <div className="flex justify-center gap-5 mt-8 mb-10">
              <button
                className="bg-white border-gray-300 border-[0.1em] p-2 rounded-lg text-sm flex items-center justify-center gap-2">
                <img src={seeDownIcon} alt="Keep scrolling icon"/>
                <span>View full schedule</span>
              </button>

              <button
                className="bg-white border-gray-300 border-[0.1em] p-2 rounded-lg text-sm flex items-center justify-center gap-2">
                <img src={backTopIcon} alt="Back to top icon"/>
                <span>Back on top</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
