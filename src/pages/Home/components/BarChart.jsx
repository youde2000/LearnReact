// 封装echarts图表，用于复用
import * as echarts from 'echarts'
const { useEffect } = require('react');

// 1、把功能代码放到这个组件中
// 2、把可变的部分抽象成prop参数

const BarChart = ({title})=>{
    useEffect(()=>{
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: title
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },[])
    return (
        <div id='main' style={{width:'500px',height:'400px'}}></div>
    )
}

export default BarChart;