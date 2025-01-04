import * as echarts from 'echarts'
import { useEffect } from 'react';
import BarChart from './components/BarChart';


const Home = () =>{
  return (
    <div>
      <BarChart title={满意度1} />
      <BarChart title={满意度2} />
    </div>
  )
}

export default Home;