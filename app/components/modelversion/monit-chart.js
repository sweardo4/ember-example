import Component from '@ember/component';

export default Component.extend({
  option: {
    title: {
      x: 'left',
      textStyle:{
        fontSize:14
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [0],
      x:'right'
    },
    dataZoom: [{
        type: 'inside'
      }, {
        type: 'slider'
      }],
    xAxis: [{
      type: 'value',
     
    }],
    yAxis: [{
      type: 'value',
    }],
    series: [{
      name: 0,
      type: 'line',
      smooth: true,
      data: [
        [1, 1]
      ]
    }]
  },
  init() {
    this._super(...arguments);
  },
  didRender() {
    console.log(this.get('chartdata'))
  },
  actions: {
    onChartReady(a,...b) {
      let chart = b[0]
      console.log(chart)
      let curopt = this.get('option');
      curopt.title.text = a.data_title
      
      curopt.xAxis =[{
        type: 'category',
        name:"(单位:"+a.data_x_unit+")",
      
      }];
      curopt.yAxis = [{
        type: 'value',
        name:"(单位:"+a.data_y_unit+")",
        // axisLabel : {
        //   formatter: '{value} '+a.data_y_unit
        // }
      }]
      let names = []
      let ser = []
      for(let i=0,len = a.data_y.length;i<len;i++){
        a.line_name?names.push("line"+ a.line_name[i]):names.push("line" + i)
        let tm = []
        Array.apply(null,a.data_x[i]).some((v,k)=>{
          tm.push([v,a.data_y[i][k]])
        })
        ser.push({
            type:'line',
            data:tm,
            name:a.line_name?"line"+ a.line_name[i]:'line'+i
        })
      }
      curopt.series = ser
      curopt.legend.data = names;
      chart.setOption(curopt)
      console.log(a)
    }
  }
});