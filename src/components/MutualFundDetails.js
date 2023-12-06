// src/components/MutualFundDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import mutualFunds from '../data/MutualFunds';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const MutualFundDetails = () => {
  const { id } = useParams();
  const fund = mutualFunds.find((f) => f.id === parseInt(id, 10));

  if (!fund) {
    return <div className="container mx-auto p-4">Fund not found</div>;
  }

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-medium mb-4">{fund.policyName} Details</h2>
      {/* <div className=""> */}
        <div>
          <img src={fund.companyImg} alt="mutual" className='w-20 h-20'/>
          <p className="text-gray-700 mb-4">{fund.description}</p>
          <p className="text-gray-700">{fund.otherDetails}</p>
          <Line data={chartData} />
        </div>
      {/* </div> */}
    </div>
  );
};

export default MutualFundDetails;
