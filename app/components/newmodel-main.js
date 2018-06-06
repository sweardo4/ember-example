import Component from '@ember/component';

export default Component.extend({
  isCome: false,
  cannot: false,
  isTree: false,
  init() {
    this._super(...arguments);
    this.get('getMonitorAction')().then((res) => {
      this.set('list', res)
    })
    this.set('isLoading', true)
  },
  treeOption: {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    legend: {
      top: '2%',
      left: '3%',
      orient: 'vertical',
      data: [{
          name: 'tree1',
          icon: 'rectangle'
        },
        {
          name: 'tree2',
          icon: 'rectangle'
        }
      ],
      borderColor: '#c23531'
    },
    series: [{
      type: 'tree',
      name: 'tree1',
      data: [{
        'name': 'petal width (cm) > 0.800000011921',
        'children': [{
          'name': 'petal width (cm) > 1.75',
          'children': [{
            'name': 'petal length (cm) > 4.85000038147',
            'children': [{
              'name': '0 of setosa, 0 of versicolor, 43 of virginica'
            }, {
              'name': 'sepal length (cm) > 5.94999980927',
              'children': [{
                'name': '0 of setosa, 0 of versicolor, 2 of virginica'
              }, {
                'name': '0 of setosa, 1 of versicolor, 0 of virginica'
              }]
            }]
          }, {
            'name': 'petal length (cm) > 4.94999980927',
            'children': [{
              'name': 'petal width (cm) > 1.54999995232',
              'children': [{
                'name': 'petal length (cm) > 5.44999980927',
                'children': [{
                  'name': '0 of setosa, 0 of versicolor, 1 of virginica'
                }, {
                  'name': '0 of setosa, 2 of versicolor, 0 of virginica'
                }]
              }, {
                'name': '0 of setosa, 0 of versicolor, 3 of virginica'
              }]
            }, {
              'name': 'petal width (cm) > 1.65000009537',
              'children': [{
                'name': '0 of setosa, 0 of versicolor, 1 of virginica'
              }, {
                'name': '0 of setosa, 47 of versicolor, 0 of virginica'
              }]
            }]
          }]
        }, {
          'name': '50 of setosa, 0 of versicolor, 0 of virginica'
        }]
      }],
      left: '2%',
      right: '2%',
      top: '8%',
      bottom: '20%',
      orient: 'vertical',
      symbolSize: 10,
      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        }
      },
    }]
  },
  option: {
    title: {
      text: '工况',
      x: 'left',
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [0, 1]
    },
    xAxis: [{
      type: 'value',
      // splitNumber: 4,
      scale: true
    }],
    yAxis: [{
      type: 'value',
      splitNumber: 4,
      scale: true
    }],

    series: [{
      name: 0,
      type: 'scatter',
      smooth: true,
      data: [
        [1, 1]
      ]
    }, {
      name: 1,
      type: 'scatter',
      smooth: true,
      data: [
        [2, 2]
      ]
    }]
  },


  didRender() {
    this._super(...arguments);
    this.set('errors', []);
    this.set('cannot', true)

    // 监测
    // this.createCheck() ? this.set('cannot', true) : this.set('cannot', false)
  },

  // 当两个参数时  1是变量 2为信息 ==》 判断是否为空
  //当 三个参数是  1时间一 2时间二  3信息 判断第一时间是否大于第二个时间 且各自是否为空
  createCheck() {
    let d = this.get('data')
    let keys = Object.keys(d)
    let iscome = true
    if (keys.length < 2) {
      iscome = false
    }
    keys.some(k => {
      if (!d[k]) {
        iscome = false
      }
    })

    return iscome
  },

  /**
   * 更新左边对应设备变量
   */
  updateLeftVariable(currentJzid, id) {
    let d = ' <div class="checkbox"><label class="loading">loading...</label></div>'
    let p = this.$('div').closest('body').find('#jz' + currentJzid);

    p.find('.jz-checkbox').children().remove();
    p.find('.jz-checkbox').append(d)

    this.get('getModelfieldAction')(currentJzid, id).then((field) => {

      let data = field.content[0]._data.message
      let temp = ''
      if (data && data.length) {
        p.find('.jz-checkbox').children().remove();
        data.some((d) => {
          temp += '<div class="checkbox ck-field"><label><input type="checkbox" data-id="' + d.id + '"  value="' + d.field_name + '">' + d.field_zname + '</label></div>'
        })
      } else {
        p.find('.jz-checkbox .loading').text('暂无数据')
      }
      p.find('.jz-checkbox').append(temp)
    })
  },
  updateLeftPart(currentJzid, id) {
    let d = ' <div class="checkbox"><label class="loading">loading...</label></div>'
    let p = this.$('div').closest('body').find('#jz' + currentJzid);

    p.find('.part-checkbox').children().remove();
    p.find('.part-checkbox').append(d)

    this.get('getAllParts')(currentJzid, id).then((field) => {

      let data = field.content[0]._data.message
      let temp = ''
      if (data && data.length) {
        p.find('.part-checkbox').children().remove();
        data.some((d) => {
          temp += '<div class="checkbox ck-part"><label><input type="checkbox" data-id="' + d.id + '"  value="' + d.part_name + '">' + d.part_zname + '</label></div>'
        })
      } else {
        p.find('.part-checkbox .loading').text('暂无数据')
      }
      p.find('.part-checkbox').append(temp)
    })
  },
  /**
   * 获取对应的参数列表
   * @param {*} method_id 方法id
   */
  updateLeftParams(method_id) {
    let p = this.$('#accordion_other')
    p.children().remove()
    this.get('getVariableAction')(method_id).then((res) => {
      let data = res.content[0]._data.message
      this.get('setGlobalParams')('all_params', data.reverse())
      this.get('setGlobalParams')('isLoading', true)
      this.get('setGlobalParams')('method_id', method_id)
    })
  },
  actions: {
    newModelBtn(method, id) {
      let that = this
      this.set('isLoading', false)
      let data = this.get('all_data_select')
      data['isLoading'] = ''
      data['all_params'] = ''
      data['start_time'] = '2017-07-12 00:00:00';
      data['end_time'] = '2017-07-12 01:00:00';
      data['model_time'] = new Date().getTime()
      this.set('currentMethod', method)
      if (method === 'tree') {
        this.set('isTree', true)
        this.set('isLoading', true)
        return false
      }
      this.get('createModel')({
        method_id: id,
        param_dict: JSON.stringify(data),
        jz_id: data['jz_id']
      }).then((res) => {
        this.set('isLoading', true)
        let d = res.content[0]
        let dp = '<p class="text-primary">' + d._data.message + '</p>';
        this.$('#' + method + '_end').children().remove()
        this.$('#' + method + '_end').prepend(dp)
        //工况
        let labeldata = d._data.labeldata;
        if (JSON.stringify(labeldata) != "{}" && labeldata && JSON.stringify(labeldata) != "[]") {
          that.set('labeldata', labeldata)
        }
      }, (err) => {
        alert('建模失败')
        console.log(err)
        this.set('isLoading', true)

      })

    },

    // 切换建模类型
    setPartAction(id) {
      this.get('setGlobalParams')('isLoading', false)
      this.get('setGlobalParams')('all_data_select', {})
      // 工况重置
      this.set('labeldata', null)
      this.set('field_ids', null)
      this.set('part_ids', null)
      this.set('field_list', null)
      this.set('part_list', null)
      this.set('isTree', false)
      // 更新参数
      this.updateLeftParams(id)
    },
    // 绘制图表
    onChartReady() {
      let data = arguments[0]
      let title = arguments[1]
      let chart = arguments[2]
      let that = this
      let method = this.get('currentMethod');
      let settChart = this.get(method + 'Chart')
      if (settChart) {
        settChart(data, chart, title, that)
      }
    },
  },
  //个性化阈值工况图表
  modelpersonalsChart(data, chart, title, that) {
    let names = []
    let op = []
    for (let i = 0, len = data.length; i < len; i++) {
      names.push(data[i].labelname)
      op.push({
        name: data[i].labelname,
        type: 'scatter',
        data: data[i].labeldata
      })
    }
    let option = that.option;
    option.series = op;
    option.legend.data = names
    chart.setOption(option)
  },
  //预测图表
  modelpredictsChart(data, chart, title, that) {
    let out_datas = data['out_datas']
    let test_datas = data['test_datas']
    // debugger
    // let outs = []
    // let tests = []
    // Array.apply(null, out_datas).some((v, k) => {
    //   let t1 = data['out_times'][k]
    //   let t2 = data['test_times'][k]
    //   outs.push([t1, out_datas[k]])
    //   tests.push([t2, test_datas[k]])
    // })

    let names = ['实际数据', '预测数据']
    let op = [{
      name: '实际数据',
      type: 'line',
      data: test_datas
    }, {
      name: '预测数据',
      type: 'line',
      data: out_datas
    }]
    let option = that.option;
    option.legend.data = names;
    option.title.text = data['out_fieldznames'];
    option.xAxis = [{
      type:'category',
      data:data['test_times']
    },{
      type:'category',
      data:data['out_times']
    }]
    // option.xAxis[0].data = data['out_times'];
    option.series = op
    chart.setOption(option)
  },
  // 建模决策
  treeChart(data, chart, title, that) {
    chart.setOption(that.treeOption)
  }
});
