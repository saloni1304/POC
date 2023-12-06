// src/components/MutualFundList.js
import React from 'react';
import { Link } from 'react-router-dom';
import mutualFunds from '../data/MutualFunds';

const MutualFundList = () => {
  return (
    <div className=" p-4  ">
      <h2 className="text-3xl font-bold mb-4">Mutual Fund List</h2>
      {mutualFunds.map((fund) => (
        <div key={fund.id} className="flex justify-between  mb-8 bg-white p-6 rounded-lg shadow-md">
          <img className='w-20 h-20' src={fund.companyImg} alt="mutual"/>
          <div className='grid grid-col-2'>
            <p className='col-span-1'>{fund.dayGrowth}</p>
            <p className='col-span-1'>{fund.day}</p>
          </div>
          <div className='grid grid-col-2'>
            <p className='col-span-1'>{fund.yearGrowth}</p>
            <p className='col-span-1'>{fund.year}</p>
          </div>
          <div className='grid grid-col-2'>
            <p className='col-span-1'>{fund.yearsGrowth}</p>
            <p className='col-span-1'>{fund.years}</p>
          </div>
          <Link to={`/details/${fund.id}`} className="text-blue-500 hover:underline">
            <h3 className="text-xl font-bold mb-2">Know More</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MutualFundList;
