export const fetchDeptSchedule = async () => {

  return new Promise((resolve) => {
    let interestTable = [];

    setTimeout(() => {
      interestTable = [
        {
          id: 1,
          date: 'Jan 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 2,
          date: 'Feb 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 3,
          date: 'Mar 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 4,
          date: 'Apr 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 5,
          date: 'May 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 6,
          date: 'Jun 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 7,
          date: 'Jul 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 8,
          date: 'Aug 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 9,
          date: 'Sep 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 10,
          date: 'Oct 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 11,
          date: 'Nov 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
        {
          id: 12,
          date: 'Dec 2021',
          monthly_payment: '3,312,000',
          interest: '3,312,000',
          principal_pay_down: '3,312,000',
          ending_principal: '449,124',
          cumulative_interest: '844',
        },
      ];

      resolve(interestTable);
    }, 3000);
  });
};

export const fetchDeptInfoChartData = () => {

  return new Promise((resolve) => {
    let chartInfo = {};

    setTimeout(() => {
      chartInfo = {
        interests: [
          8000, 10000, 13000, 15000, 10000, 22000, 23000, 24000, 23000, 24000, 22000, 25000,
        ],

        principals: [
          7000, 9000, 12000, 13000, 22000, 20000, 10000, 18000, 20000, 22000, 20000, 23000,
        ],

        dates: [
          '2023-01-23',
          '2023-02-23',
          '2023-03-23',
          '2023-04-23',
          '2023-05-23',
          '2023-06-23',
          '2023-07-23',
          '2023-08-23',
          '2023-09-23',
          '2023-10-23',
          '2023-11-23',
          '2023-12-23',
        ],
      };

      resolve(chartInfo);
    }, 1000);
  });

};

export const fetchBankDetails = () => {

  return new Promise((resolve) => {
    let bankDetails = {};

    setTimeout(() => {
      bankDetails = {
        bank_name: 'Bank Of America',
        initial_loan: '450,000',
        initial_amortization: '360',
        initial_term: '60',
        remaining_loan: '424,922',
        remaining_amortization: '347',
        remaining_term: '47',
      };

      resolve(bankDetails);
    }, 500);
  });
};

export const fetchInterestDetails = () => {

  return new Promise((resolve) => {
    let interestDetails = {};

    setTimeout(() => {
      interestDetails = {
        interest_rate: '2.5',
        interest_only_period: '12',
        rate_type: 'Fixed',
        principal_pay_down_start: '12/05/2023',
        maturation_date: '12/05/2023',
      };

      resolve(interestDetails);
    }, 200);
  });
};


