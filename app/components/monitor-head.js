import Component from '@ember/component';
import config from '../config/environment';

export default Component.extend({
  websocketUrl: 'ws://' + config.APP.SKIO_HOST+ '/getredisdatas/',
  charts: [],
  ftname: '',
  runname: [],
  xlen: 60,
  maxt: 10,

  init() {
    this._super(...arguments);
    // this.$('.realtime-item')? this.$('.realtime-item').remove():''
    this.set('theme', 'my_macarons');
    this.set('isLoading', true);
    this.set('toption', this.get('option'))
  },

  /******公共options****start***/
  option: {
    title: {
      text: '1',
      x: 'left',
      textStyle: {　　　　
        fontSize: 12
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        let lena = params.length;
        let a = (t) => {
          return t.getFullYear() + "-" + ((t.getMonth() + 1) < 10 ? "0" : "") + (t.getMonth() + 1) + "-" + (t.getDate() < 10 ? "0" : "") + t.getDate() + ' ' + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "." + t.getMilliseconds()
        }

        let str = '';
        if (lena > 0) {
          for (let i = 0; i < lena; i++) {
            let timespace = new Date(params[i].axisValue * 1);
            let temp = (params[i].value[1] * 1).toFixed(5) * 1;
            if (temp < 0.001) {
              temp = temp.toExponential(2);
              // if (temp == 0) {
              //   temp = params[i].value[1].toExponential(2)
              // }
            }

            str += a(timespace) + ' : ' + (temp == 0 ? 0 : temp) + '</br>';
          }
        }
        return str;
      },
      axisPointer: {
        // type: 'cross',
        animation: false
      },

    },
    dataZoom: [{
        show: true,
        realtime: true,
        start: 0,
        end: 100
      },
      {
        type: 'inside',
        realtime: true,
        start: 0,
        end: 100
      }
    ],
    yAxis: {
      type: 'value',
      nameTextStyle: {
        fontSize: 10
      },
      axisLabel: {
        formatter: (yv) => {
          if (yv === 0) {
            return 0
          }
          if (yv < 0.009) {
            return yv.toExponential(1);
          }

          return yv
        }
      },
      scale: true,
      splitLine: {
        show: false
      },
    },
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      },
      nameTextStyle: {
        fontSize: 10
      },
    },
    legend: {
      orient: 'vertical',
      left: 'center',
      data: ['1']
    },
    series: [{
      data: [],
      type: 'line',
      name: '1',
      // showSymbol: false,
      // hoverAnimation: false,
      markLine: {
        precision: 30,
        itemStyle: {
          normal: {
            lineStyle: {
              color: 'red',
            },
            label: {
              show: true,
              formatter: function (params) {
                if (params.name) {
                  return params.name + '\n' + params.value;
                }
                return params.value;
              },
              textStyle: {　　　　
                fontSize: 10
              }
            },
          }
        },
        data: [{
          yAxis: 20,
          name: '标准阈值'
        }]
      }
    }]
  },
  /******公共options****end***/

  actions: {
    realTimeMonitor(jzid) {
    },
    //开启socket
    runSocket(msg) {
      this.runSockets(this)
    },
    // 关闭socket操作
    closeSocket(msg) {
      // runSockets(this)
      this.get('sockets').close()
    },

    //图表初始化
    onChartReady() {
      let data = arguments[0]
      let field = arguments[1]
      let chart = arguments[2]
      let name = data.monitor_name
      let that = this
      let charts = this.get('charts')
      let runname = this.get('runname')
      if (name === this.get('ftname')) {
        charts[charts.length - 1].push(chart);
      } else {
        runname.push(name)
        charts.push([chart])
      }
      this.set('charts', charts)
      this.set('runname', runname)
      this.get(name)(chart, field, that)
      this.set('ftname', name)
    },
    beforeSetup() {
      // console.log('Before Setup');
    },
    afterSetup() {
      // console.log('After Setup');
      this.set('option', this.get('toption'))
    },
  },

  setCommontMarkLine(markoption) {
    markoption.markLine = {
      precision: 30,
      itemStyle: {
        normal: {
          lineStyle: {
            color: 'red',
          },
          label: {
            show: true,
            formatter: function (params) {
              if (params.name) {
                return params.name + '\n' + params.value;
              }
              return params.value;
            },
            textStyle: {　　　　
              fontSize: 10
            }
          },
        }
      },
      data: [{
        yAxis: 0,
        name: null
      }]
    }
  },
  //初始化相同内容
  commontSet(chart, field, that) {
    var curopt = that.option
    let field_zname = field.field_zname
    curopt.title.text = field_zname
    curopt.legend.data = [field_zname]
    curopt.series[0].name = field_zname
    if (field.field_unit) {
      curopt.yAxis.name = '(' + field.field_unit + ')'
    } else {
      curopt.yAxis.name = null
      curopt.xAxis.name = null
    }
    chart.setOption(curopt)
  },

  /**
   * ---------各模块初始化----start--------*
   * 前端函数定义:
   * 1.初始化函数
   *   需要和数据库中模块名称一样,参数相同(此模块图表charts数组,后端返回的field数据,此部件this)
   * 2.socket实时调用模块渲染函数
   *   定义:'run'+模块名称 参数相同(此模块图表charts数组,当前时刻此模块数据,此部件this)
   */

  //峰峰值
  MonitorPersonal(chart, field, that) {
    that.commontSet(chart, field, that)
    let tatOption = chart.getOption()
    let thd1 = field.field_personalthd[0].field_personalthd;
    let thd2 = field.field_personalthd[1].field_personalthd;
    let n1 = field.field_personalthd[0].work_condition_idx
    let n2 = field.field_personalthd[1].work_condition_idx
    let g = field.field_groundthd;
    let max = thd1 > thd2 ? (thd1 > g ? thd1 : g) : (thd2 > g ? thd2 : g)
    tatOption.yAxis[0].max = max + max / that.maxt
    if (!tatOption.series[0].markLine) {
      that.setCommontMarkLine(tatOption.series[0])
    }
    //添加工况阈值和标准阈值
    tatOption.series[0].markLine.data = [{
      yAxis: thd1,
      name: null
    }, {
      yAxis: thd2,
      name: null
    }, {
      yAxis: g,
      name: '标准阈值'
    }]
    chart.setOption(tatOption)
  },
  //相关性
  MonitorBivar(chart, field, that) {
    let curopt = that.option;
    that.commontSet(chart, field, that)
    let field_zname = field.field_zname1 + '-' + field.field_zname2
    curopt.title.text = field_zname
    curopt.legend.data = [field_zname]
    curopt.series[0].name = field_zname
    chart.setOption(curopt)
  },
  //轴心轨迹
  MonitorTrack(chart, field, that) {
    let curopt = that.option;
    let field_zname = field.part_zname
    curopt.title.text = field_zname
    curopt.legend.data = [field_zname]
    curopt.series[0].name = field_zname
    curopt.yAxis.name = field.field_znames[1] + '(' + field.field_units[1] + ')'
    curopt.xAxis.name = field.field_znames[0] + '(' + field.field_units[0] + ')'
    // curopt.series[0].markLine.data = null
    chart.setOption(curopt)
  },
  //频谱
  MonitorXfs(chart, field, that) {
    that.commontSet(chart, field, that)
    let tatOption = chart.getOption()
    tatOption.series[0].markLine = null
    chart.setOption(tatOption)
  },
  //健康度
  MonitorIsof(chart, field, that) {
    that.commontSet(chart, field, that)
    let curopt = that.option;
    let field_zname = field.part_zname;
    let yu = field.isof_thd;
    curopt.title.text = field_zname;
    curopt.legend.data = [field_zname];
    curopt.series[0].name = field_zname;
    if (!curopt.series[0].markLine) {
      that.setCommontMarkLine(curopt.series[0])
    }
    curopt.series[0].markLine.data = [{
      yAxis: yu ,
      name: '',
    }];
    chart.setOption(curopt)
  },
  //趋势
  MonitorMonit(chart, field, that) {
    that.commontSet(chart, field, that)
    let tatOption = chart.getOption()
    //添加周期阈值
    let ser = []
    let names = []
    for (var i = 0, len = field.monit_period.length; i < len; i++) {
      names.push(field.monit_period[i] + '分钟')
      ser.push({
        name: field.monit_period[i] + '分钟',
        data: [],
        type: 'line',
        markLine: {
          data: [{
            yAxis: field.monit_thd[i],
            name: field.monit_period[i] + '分钟'
          }]
        }
      })
    }
    tatOption.series = ser
    tatOption.legend = {
      data: names
    }
    chart.setOption(tatOption)
  },
  //时序预测
  MonitorPredict(chart, field, that) {
    let curopt = that.option;
    curopt.title.text = field.out_zname;
    let time_gap = field.time_gap
    let ser = [{
      name: "输入值",
      type: 'line',
      data: []

    }, {
      name: "预测值",
      type: 'line',
      itemStyle: {
        normal: {
          lineStyle: {
            width: 2,
            type: 'dotted' //'dotted'虚线 'solid'实线
          }
        }
      },
      data: []
    }]
    curopt.legend = {
      data: ['输入值', '预测值']
    }

    curopt.series = ser
    curopt.series[0].markLine = null
    chart.setOption(curopt)

  },
  /*******初始化模块变量方法***end******/

  //启动socket函数
  runSockets(that) {
    let sk = this.get('sockets')
    if (sk) {
      sk.close()
    }
    if ('WebSocket' in window) {
      // 创建websocket实例
      var sockets = new WebSocket(this.get('websocketUrl'));
      //打开
      sockets.onopen = function (event) {
        // 发送
        sockets.send(JSON.stringify({
          'jz_name': that.get('jz_name')
        }));
        sockets.onmessage = function (event) {
          if(event.data == '{}'){
            return false
          }
          let result = Object.values(JSON.parse(event.data))
          let datalist = Array.apply(null, result).filter((v, k) => {
            if (v && v.length > 0 && JSON.stringify(v) !== "{}") {
              return v
            }
          });
          
          that.commonRunData(that.get('runname'), that.get('charts'), datalist, that);
        };
        sockets.onclose = function (event) {
          // 关闭监听
          console.log('Client notified socket has closed', event);
        };
        sockets.onerror = function (event) {
          //产生异常
          console.log('Error ', event)
        };
        that.set('sockets', sockets)
      };
    } else {
      alert('本浏览器不支持WebSocket哦~');
    }
  },
  /**********实时更新数据*********start******/
  commonRunData(names, charts, datalist, that) {
    let data = datalist
    Array.apply(null, names).some((v, k) => {
      that.get('run' + v)(charts[k], data[k], that)
    })
  },
  //峰峰值更新
  runMonitorPersonal(charts, data, that) {
    for (let i = 0, len = charts.length; i < len; i++) {
      let curOption = charts[i].getOption()
      let xlen = curOption.series[0].data.length
      if (data[i]) {
        let curtime = data[i].time
        if (xlen < 2) {
          for (let j = 0; j < that.xlen; j++) {
            curOption.series[0].data.unshift({
              name: curtime - j * 10,
              value: [curtime - j * 10, 0]
            });
          }
          curOption.series[0].data.pop();
        }
        curOption.series[0].data.shift()
        curOption.series[0].data.push({
          name: curtime,
          value: [curtime, data[i].data]
        })
        charts[i].setOption({
          series: [{
            data: curOption.series[0].data
          }]
        })
      }
    }
  },
  // 相关性
  runMonitorBivar(charts, data, that) {
    for (let i = 0, len = charts.length; i < len; i++) {
      let curOption = charts[i].getOption()
      if (data[i]) {
        let temp = []
        Array.apply(null,data[i].data1).some((v,k)=>{
             temp.push([v,data[i].data2[k]])
        })
        curOption.xAxis = [{
          type: 'value',
          scale: true,
      
        }]
        curOption.yAxis = [{
          type: 'value',
          scale: true,
        }]
        curOption.series = [{
          type: 'scatter',
          symbolSize: 5,
          data: temp
        }]
        curOption.tooltip[0].formatter = null
        charts[i].setOption(curOption)
      }
    }
  },
  //频谱
  runMonitorXfs(charts, data) {
    for (let i = 0, len = charts.length; i < len; i++) {
      if (data[i]) {
        let curOption = charts[i].getOption()
        curOption.xAxis[0].type = 'category'
        curOption.xAxis[0].data = Array.apply(null, {
          length: data[i].data.length
        }).map((v, k) => {
          return k / 8;
        })
        curOption.series[0].data = data[i].data
        curOption.series[0].type = 'bar'
        curOption.series[0].data.shift()
        curOption.tooltip[0].formatter = (params) => {
          let par = params[0];
          return par.axisValue + ' : ' + par.data.toFixed(5);
        }
        charts[i].setOption(curOption)
      }
    }
  },
  //轴心轨迹
  runMonitorTrack(charts, data, that) {
    for (let i = 0, len = charts.length; i < len; i++) {
      if (data[i]) {
        let curOption = charts[i].getOption()

        let temp = []
        Array.apply(null,data[i].data[0]).some((v,k)=>{
             temp.push([v,data[i].data[1][k]])
        })
        curOption.xAxis = {
          type: 'value',
          scale: true,
        }
        curOption.yAxis = {
          type: 'value',
          scale: true,
        }
        curOption.series = [{
          type: 'scatter',
          symbolSize: 5,
          data: temp
        }]
        curOption.tooltip[0].formatter = null
        charts[i].setOption(curOption)
      }
    }
  },
  //健康度
  runMonitorIsof(charts, data, that) {
    for (let i = 0, len = charts.length; i < len; i++) {
      if (data[i]) {
        let curOption = charts[i].getOption()
        let xlen = curOption.series[0].data.length
        let curtime = data[i].time
        if (xlen < 2) {
          let a = Array.apply(null, {
            length: that.xlen
          }).map((v, k) => {
            return {
              name: curtime - k * 10,
              value: [curtime - k * 10, 0]
            }
          })
          curOption.series[0].data = a
          curOption.series[0].data.pop();
        }
        curOption.series[0].data.shift()
        curOption.series[0].data.push({
          name: curtime,
          value: [curtime, data[i].data]
        })

        charts[i].setOption({
          series: [{
            data: curOption.series[0].data
          }]
        })
      }
    }
  },
  //趋势
  runMonitorMonit(charts, data, that) {
    console.log(data)
    for (let i = 0, len = charts.length; i < len; i++) {
      if (data[i]) {
        let curOption = charts[i].getOption()
        let xlen = curOption.series[0].data.length
        let serlen = data[i].data.length
        let curtime = data[i].time
        if (xlen < 2) {
          for (let k = 0; k < serlen; k++) {
            let a = Array.apply(null, {
              length: that.xlen
            }).map((v, k) => {
              return {
                name: curtime - k * 10,
                value: [curtime - k * 10, 0]
              }
            })
            curOption.series[k].data = a
            curOption.series[k].data.pop();
          }
        }
        for (let k = 0; k < serlen; k++) {
          curOption.series[k].data.shift()
          curOption.series[k].data.push({
            name: curtime,
            value: [curtime, data[i].data[k]]
          })
        }
        charts[i].setOption(curOption)
      }
    }
  },
  //时序预测
  runMonitorPredict(charts, data, that) {
    for (let i = 0, len = charts.length; i < len; i++) {
      if (data[i]) {
        let curOption = charts[i].getOption()
        let xlen = curOption.series[0].data.length
        let curtime = data[i].current_time
        if (xlen < 2) {
          let a = Array.apply(null, {
            length: that.xlen
          }).map((v, k) => {
            return {
              name: curtime - k * 10,
              value: [curtime - k * 10, 0]
            }
          })
          curOption.series[0].data = a
          curOption.series[0].data.pop();
        }
        curOption.series[0].data.shift()
        curOption.series[0].data.push({
          name: curtime,
          value: [curtime, data[i].current_data]
        })
        let xu = data[i].predict_data
        let xutime = data[i].predict_time

        let a = [];
        for (let i = 0, len = xu.length; i < len; i++) {
          a.push({
            name: xutime[i],
            value: [xutime[i], xu[i]]
          });
        }
        a.unshift({
          name: curtime,
          value: [curtime, data[i].current_data]
        })
        curOption.series[1].data = a

        charts[i].setOption(curOption)
      }
    }
  },
  /**********实时更新数据*********end******/

  didRender() {
    this._super(...arguments);
    this.set('errors', []);

    if (this.get('isrun')) {
      // console.log('socket 开始了 重置一些变量')
      this.set('charts', [])
      this.set('ftname', '')
      this.set('runname', [])
      this.runSockets(this)
      this.set('isrun', false)
    }!this.get('allData') ? this.set('isNothing', true) : this.set('isNothing', false);
  },
  willClearRender() {
    this._super(...arguments);
  },
  //将要销毁
  willDestroyElement() {
    this._super(...arguments);
    // this.get('socket').close()
  },
  //已经销毁
  didDestroyElement() {
    this._super(...arguments);
    this.set('allData', null)
  }
});
