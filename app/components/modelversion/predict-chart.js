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
      
      let xData = []
      
      for (let index = 0; index < a.data_x.length; index++) {
        const element = a.data_x[index];
        xData.push({
          type: 'category',
          data:element,
          name:"(单位:"+a.data_x_unit+")",
        })
      }
      curopt.xAxis = xData
      curopt.yAxis = [{
        type: 'value',
        name:"(单位:"+a.data_y_unit+")",
      }]
      let names = []
      let ser = []
      for(let i=0,len = a.data_y.length;i<len;i++){
        names.push(a.line_name[i])
        ser.push({
            type:'line',
            data:a.data_y[i],
            name:a.line_name[i]
        })
      }
      curopt.series = ser
      curopt.legend.data = names;
      chart.setOption(curopt)
      console.log(a)
    }
  }
});