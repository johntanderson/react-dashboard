import React from 'react'
import './home.css';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import { WidgetSM, WidgetLG } from '../../components/Widget/Widget';
import { userData } from '../../DummyData';

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Active Users" dataKey="name" grid />
      <div className="homeWidgets">
        <WidgetSM />
        <WidgetLG />
      </div>
    </div>
  )
}
