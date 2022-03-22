import React from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import './home.css';
import { userData } from '../../DummyData';

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Active Users" dataKey="name" grid />
    </div>
  )
}
