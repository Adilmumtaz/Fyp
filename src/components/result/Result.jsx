import React from 'react';
import Header from "./../include/header";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Result() {
  const data = [
    { name: 'Category 1', value: 10 },
    { name: 'Category 2', value: 20 },
    { name: 'Category 3', value: 15 },
    { name: 'Category 4', value: 25 },
  ];

  return (
    <div className="container-fluid">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
            <BarChart width={600} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
