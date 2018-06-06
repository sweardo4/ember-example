import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.registerTheme()
  },


  actions: {
    getAllJz() {
      return this.get('store').findAll('configjz')
    },
    setParams(key, value) {
      this.set(key, value)
    },
    getParams(key) {
      return this.get(key)
    },
    getAllData(name) {
      return this.store.query('monitorfield', {
        jz_name: name
      })
    }
  },

  /**
   * 注册图表主题
   */
  registerTheme() {
    this.registerDark();
    this.registerRoma();
    this.registerShine();
    this.registerMacarons();
  },

  //以下chart四种主题色
  registerDark() {
    echarts.registerTheme('my_dark', {
      "color": [
        "#dd6b66",
        "#759aa0",
        "#e69d87",
        "#8dc1a9",
        "#ea7e53",
        "#eedd78",
        "#73a373",
        "#73b9bc",
        "#7289ab",
        "#91ca8c",
        "#f49f42"
      ],
      "backgroundColor": "rgba(51,51,51,1)",
      "textStyle": {},
      "title": {
        "textStyle": {
          "color": "#eeeeee"
        },
        "subtextStyle": {
          "color": "#aaaaaa"
        }
      },
      "line": {
        "itemStyle": {
          "normal": {
            "borderWidth": 1
          }
        },
        "lineStyle": {
          "normal": {
            "width": 2
          }
        },
        "symbolSize": 4,
        "symbol": "circle",
        "smooth": false
      },
      "radar": {
        "itemStyle": {
          "normal": {
            "borderWidth": 1
          }
        },
        "lineStyle": {
          "normal": {
            "width": 2
          }
        },
        "symbolSize": 4,
        "symbol": "circle",
        "smooth": false
      },
      "bar": {
        "itemStyle": {
          "normal": {
            "barBorderWidth": 0,
            "barBorderColor": "#ccc"
          },
          "emphasis": {
            "barBorderWidth": 0,
            "barBorderColor": "#ccc"
          }
        }
      },
      "pie": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "scatter": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "boxplot": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "parallel": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "sankey": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "funnel": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "gauge": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "candlestick": {
        "itemStyle": {
          "normal": {
            "color": "#fd1050",
            "color0": "#0cf49b",
            "borderColor": "#fd1050",
            "borderColor0": "#0cf49b",
            "borderWidth": 1
          }
        }
      },
      "graph": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        },
        "lineStyle": {
          "normal": {
            "width": 1,
            "color": "#aaaaaa"
          }
        },
        "symbolSize": 4,
        "symbol": "circle",
        "smooth": false,
        "color": [
          "#dd6b66",
          "#759aa0",
          "#e69d87",
          "#8dc1a9",
          "#ea7e53",
          "#eedd78",
          "#73a373",
          "#73b9bc",
          "#7289ab",
          "#91ca8c",
          "#f49f42"
        ],
        "label": {
          "normal": {
            "textStyle": {
              "color": "#eeeeee"
            }
          }
        }
      },
      "map": {
        "itemStyle": {
          "normal": {
            "areaColor": "#eeeeee",
            "borderColor": "#444444",
            "borderWidth": 0.5
          },
          "emphasis": {
            "areaColor": "rgba(255,215,0,0.8)",
            "borderColor": "#444444",
            "borderWidth": 1
          }
        },
        "label": {
          "normal": {
            "textStyle": {
              "color": "#000000"
            }
          },
          "emphasis": {
            "textStyle": {
              "color": "rgb(100,0,0)"
            }
          }
        }
      },
      "geo": {
        "itemStyle": {
          "normal": {
            "areaColor": "#eeeeee",
            "borderColor": "#444444",
            "borderWidth": 0.5
          },
          "emphasis": {
            "areaColor": "rgba(255,215,0,0.8)",
            "borderColor": "#444444",
            "borderWidth": 1
          }
        },
        "label": {
          "normal": {
            "textStyle": {
              "color": "#000000"
            }
          },
          "emphasis": {
            "textStyle": {
              "color": "rgb(100,0,0)"
            }
          }
        }
      },
      "categoryAxis": {
        "axisLine": {
          "show": true,
          "lineStyle": {
            "color": "#eeeeee"
          }
        },
        "axisTick": {
          "show": true,
          "lineStyle": {
            "color": "#eeeeee"
          }
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#eeeeee"
          }
        },
        "splitLine": {
          "show": true,
          "lineStyle": {
            "color": [
              "#aaaaaa"
            ]
          }
        },
        "splitArea": {
          "show": false,
          "areaStyle": {
            "color": [
              "#eeeeee"
            ]
          }
        }
      },
      "valueAxis": {
        "axisLine": {
          "show": true,
          "lineStyle": {
            "color": "#eeeeee"
          }
        },
        "axisTick": {
          "show": true,
          "lineStyle": {
            "color": "#eeeeee"
          }
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#eeeeee"
          }
        },
        "splitLine": {
          "show": true,
          "lineStyle": {
            "color": [
              "#aaaaaa"
            ]
          }
        },
        "splitArea": {
          "show": false,
          "areaStyle": {
            "color": [
              "#eeeeee"
            ]
          }
        }
      },
      "logAxis": {
        "axisLine": {
          "show": true,
          "lineStyle": {
            "color": "#eeeeee"
          }
        },
        "axisTick": {
          "show": true,
          "lineStyle": {
            "color": "#eeeeee"
          }
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#eeeeee"
          }
        },
        "splitLine": {
          "show": true,
          "lineStyle": {
            "color": [
              "#aaaaaa"
            ]
          }
        },
        "splitArea": {
          "show": false,
          "areaStyle": {
            "color": [
              "#eeeeee"
            ]
          }
        }
      },
      "timeAxis": {
        "axisLine": {
          "show": true,
          "lineStyle": {
            "color": "#eeeeee"
          }
        },
        "axisTick": {
          "show": true,
          "lineStyle": {
            "color": "#eeeeee"
          }
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#eeeeee"
          }
        },
        "splitLine": {
          "show": true,
          "lineStyle": {
            "color": [
              "#aaaaaa"
            ]
          }
        },
        "splitArea": {
          "show": false,
          "areaStyle": {
            "color": [
              "#eeeeee"
            ]
          }
        }
      },
      "toolbox": {
        "iconStyle": {
          "normal": {
            "borderColor": "#999999"
          },
          "emphasis": {
            "borderColor": "#666666"
          }
        }
      },
      "legend": {
        "textStyle": {
          "color": "#eeeeee"
        }
      },
      "tooltip": {
        "axisPointer": {
          "lineStyle": {
            "color": "#eeeeee",
            "width": "1"
          },
          "crossStyle": {
            "color": "#eeeeee",
            "width": "1"
          }
        }
      },
      "timeline": {
        "lineStyle": {
          "color": "#eeeeee",
          "width": 1
        },
        "itemStyle": {
          "normal": {
            "color": "#dd6b66",
            "borderWidth": 1
          },
          "emphasis": {
            "color": "#a9334c"
          }
        },
        "controlStyle": {
          "normal": {
            "color": "#eeeeee",
            "borderColor": "#eeeeee",
            "borderWidth": 0.5
          },
          "emphasis": {
            "color": "#eeeeee",
            "borderColor": "#eeeeee",
            "borderWidth": 0.5
          }
        },
        "checkpointStyle": {
          "color": "#e43c59",
          "borderColor": "rgba(194,53,49,0.5)"
        },
        "label": {
          "normal": {
            "textStyle": {
              "color": "#eeeeee"
            }
          },
          "emphasis": {
            "textStyle": {
              "color": "#eeeeee"
            }
          }
        }
      },
      "visualMap": {
        "color": [
          "#bf444c",
          "#d88273",
          "#f6efa6"
        ]
      },
      "dataZoom": {
        "backgroundColor": "rgba(47,69,84,0)",
        "dataBackgroundColor": "rgba(255,255,255,0.3)",
        "fillerColor": "rgba(167,183,204,0.4)",
        "handleColor": "#a7b7cc",
        "handleSize": "100%",
        "textStyle": {
          "color": "#eeeeee"
        }
      },
      "markPoint": {
        "label": {
          "normal": {
            "textStyle": {
              "color": "#eeeeee"
            }
          },
          "emphasis": {
            "textStyle": {
              "color": "#eeeeee"
            }
          }
        }
      }
    });
  },
  registerRoma() {
    var colorPalette = ['#E01F54', '#001852', '#f5e8c8', '#b8d2c7', '#c6b38e',
      '#a4d8c2', '#f3d999', '#d3758f', '#dcc392', '#2e4783',
      '#82b6e9', '#ff6347', '#a092f1', '#0a915d', '#eaf889',
      '#6699FF', '#ff6666', '#3cb371', '#d5b158', '#38b6b6'
    ];
    var theme = {
      color: colorPalette,

      visualMap: {
        color: ['#e01f54', '#e7dbc3'],
        textStyle: {
          color: '#333'
        }
      },

      candlestick: {
        itemStyle: {
          normal: {
            color: '#e01f54',
            color0: '#001852',
            lineStyle: {
              width: 1,
              color: '#f5e8c8',
              color0: '#b8d2c7'
            }
          }
        }
      },

      graph: {
        color: colorPalette
      },

      gauge: {
        axisLine: {
          lineStyle: {
            color: [
              [0.2, '#E01F54'],
              [0.8, '#b8d2c7'],
              [1, '#001852']
            ],
            width: 8
          }
        }
      }
    };

    echarts.registerTheme('my_roma', theme);
  },
  registerShine() {
    var colorPalette = [
      '#c12e34', '#e6b600', '#0098d9', '#2b821d',
      '#005eaa', '#339ca8', '#cda819', '#32a487'
    ];

    var theme = {

      color: colorPalette,

      title: {
        textStyle: {
          fontWeight: 'normal'
        }
      },

      visualMap: {
        color: ['#1790cf', '#a2d4e6']
      },

      toolbox: {
        iconStyle: {
          normal: {
            borderColor: '#06467c'
          }
        }
      },

      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.6)'
      },

      dataZoom: {
        dataBackgroundColor: '#dedede',
        fillerColor: 'rgba(154,217,247,0.2)',
        handleColor: '#005eaa'
      },

      timeline: {
        lineStyle: {
          color: '#005eaa'
        },
        controlStyle: {
          normal: {
            color: '#005eaa',
            borderColor: '#005eaa'
          }
        }
      },

      candlestick: {
        itemStyle: {
          normal: {
            color: '#c12e34',
            color0: '#2b821d',
            lineStyle: {
              width: 1,
              color: '#c12e34',
              color0: '#2b821d'
            }
          }
        }
      },

      graph: {
        color: colorPalette
      },

      map: {
        label: {
          normal: {
            textStyle: {
              color: '#c12e34'
            }
          },
          emphasis: {
            textStyle: {
              color: '#c12e34'
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#eee',
            areaColor: '#ddd'
          },
          emphasis: {
            areaColor: '#e6b600'
          }
        }
      },

      gauge: {
        axisLine: {
          show: true,
          lineStyle: {
            color: [
              [0.2, '#2b821d'],
              [0.8, '#005eaa'],
              [1, '#c12e34']
            ],
            width: 5
          }
        },
        axisTick: {
          splitNumber: 10,
          length: 8,
          lineStyle: {
            color: 'auto'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'auto'
          }
        },
        splitLine: {
          length: 12,
          lineStyle: {
            color: 'auto'
          }
        },
        pointer: {
          length: '90%',
          width: 3,
          color: 'auto'
        },
        title: {
          textStyle: {
            color: '#333'
          }
        },
        detail: {
          textStyle: {
            color: 'auto'
          }
        }
      }
    };
    echarts.registerTheme('my_shine', theme);
  },
  registerMacarons() {
    echarts.registerTheme('my_macarons', {
      "color": [
        "#2ec7c9",
        "#b6a2de",
        "#5ab1ef",
        "#ffb980",
        "#d87a80",
        "#8d98b3",
        "#e5cf0d",
        "#97b552",
        "#95706d",
        "#dc69aa",
        "#07a2a4",
        "#9a7fd1",
        "#588dd5",
        "#f5994e",
        "#c05050",
        "#59678c",
        "#c9ab00",
        "#7eb00a",
        "#6f5553",
        "#c14089"
      ],
      "backgroundColor": "rgba(0,0,0,0)",
      "textStyle": {},
      "title": {
        "textStyle": {
          "color": "#008acd"
        },
        "subtextStyle": {
          "color": "#aaaaaa"
        }
      },
      "line": {
        "itemStyle": {
          "normal": {
            "borderWidth": 1
          }
        },
        "lineStyle": {
          "normal": {
            "width": 2
          }
        },
        "symbolSize": 3,
        "symbol": "emptyCircle",
        "smooth": true
      },
      "radar": {
        "itemStyle": {
          "normal": {
            "borderWidth": 1
          }
        },
        "lineStyle": {
          "normal": {
            "width": 2
          }
        },
        "symbolSize": 3,
        "symbol": "emptyCircle",
        "smooth": true
      },
      "bar": {
        "itemStyle": {
          "normal": {
            "barBorderWidth": 0,
            "barBorderColor": "#ccc"
          },
          "emphasis": {
            "barBorderWidth": 0,
            "barBorderColor": "#ccc"
          }
        }
      },
      "pie": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "scatter": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "boxplot": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "parallel": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "sankey": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "funnel": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "gauge": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          },
          "emphasis": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        }
      },
      "candlestick": {
        "itemStyle": {
          "normal": {
            "color": "#d87a80",
            "color0": "#2ec7c9",
            "borderColor": "#d87a80",
            "borderColor0": "#2ec7c9",
            "borderWidth": 1
          }
        }
      },
      "graph": {
        "itemStyle": {
          "normal": {
            "borderWidth": 0,
            "borderColor": "#ccc"
          }
        },
        "lineStyle": {
          "normal": {
            "width": 1,
            "color": "#aaaaaa"
          }
        },
        "symbolSize": 3,
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
          "#e5cf0d",
          "#97b552",
          "#95706d",
          "#dc69aa",
          "#07a2a4",
          "#9a7fd1",
          "#588dd5",
          "#f5994e",
          "#c05050",
          "#59678c",
          "#c9ab00",
          "#7eb00a",
          "#6f5553",
          "#c14089"
        ],
        "label": {
          "normal": {
            "textStyle": {
              "color": "#eeeeee"
            }
          }
        }
      },
      "map": {
        "itemStyle": {
          "normal": {
            "areaColor": "#dddddd",
            "borderColor": "#eeeeee",
            "borderWidth": 0.5
          },
          "emphasis": {
            "areaColor": "rgba(254,153,78,1)",
            "borderColor": "#444444",
            "borderWidth": 1
          }
        },
        "label": {
          "normal": {
            "textStyle": {
              "color": "#d87a80"
            }
          },
          "emphasis": {
            "textStyle": {
              "color": "rgb(100,0,0)"
            }
          }
        }
      },
      "geo": {
        "itemStyle": {
          "normal": {
            "areaColor": "#dddddd",
            "borderColor": "#eeeeee",
            "borderWidth": 0.5
          },
          "emphasis": {
            "areaColor": "rgba(254,153,78,1)",
            "borderColor": "#444444",
            "borderWidth": 1
          }
        },
        "label": {
          "normal": {
            "textStyle": {
              "color": "#d87a80"
            }
          },
          "emphasis": {
            "textStyle": {
              "color": "rgb(100,0,0)"
            }
          }
        }
      },
      "categoryAxis": {
        "axisLine": {
          "show": true,
          "lineStyle": {
            "color": "#008acd"
          }
        },
        "axisTick": {
          "show": true,
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#333"
          }
        },
        "splitLine": {
          "show": false,
          "lineStyle": {
            "color": [
              "#eee"
            ]
          }
        },
        "splitArea": {
          "show": false,
          "areaStyle": {
            "color": [
              "rgba(250,250,250,0.3)",
              "rgba(200,200,200,0.3)"
            ]
          }
        }
      },
      "valueAxis": {
        "axisLine": {
          "show": true,
          "lineStyle": {
            "color": "#008acd"
          }
        },
        "axisTick": {
          "show": true,
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#333"
          }
        },
        "splitLine": {
          "show": true,
          "lineStyle": {
            "color": [
              "#eee"
            ]
          }
        },
        "splitArea": {
          "show": true,
          "areaStyle": {
            "color": [
              "rgba(250,250,250,0.3)",
              "rgba(200,200,200,0.3)"
            ]
          }
        }
      },
      "logAxis": {
        "axisLine": {
          "show": true,
          "lineStyle": {
            "color": "#008acd"
          }
        },
        "axisTick": {
          "show": true,
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#333"
          }
        },
        "splitLine": {
          "show": true,
          "lineStyle": {
            "color": [
              "#eee"
            ]
          }
        },
        "splitArea": {
          "show": true,
          "areaStyle": {
            "color": [
              "rgba(250,250,250,0.3)",
              "rgba(200,200,200,0.3)"
            ]
          }
        }
      },
      "timeAxis": {
        "axisLine": {
          "show": true,
          "lineStyle": {
            "color": "#008acd"
          }
        },
        "axisTick": {
          "show": true,
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#333"
          }
        },
        "splitLine": {
          "show": true,
          "lineStyle": {
            "color": [
              "#eee"
            ]
          }
        },
        "splitArea": {
          "show": false,
          "areaStyle": {
            "color": [
              "rgba(250,250,250,0.3)",
              "rgba(200,200,200,0.3)"
            ]
          }
        }
      },
      "toolbox": {
        "iconStyle": {
          "normal": {
            "borderColor": "#2ec7c9"
          },
          "emphasis": {
            "borderColor": "#18a4a6"
          }
        }
      },
      "legend": {
        "textStyle": {
          "color": "#333333"
        }
      },
      "tooltip": {
        "axisPointer": {
          "lineStyle": {
            "color": "#008acd",
            "width": "1"
          },
          "crossStyle": {
            "color": "#008acd",
            "width": "1"
          }
        }
      },
      "timeline": {
        "lineStyle": {
          "color": "#008acd",
          "width": 1
        },
        "itemStyle": {
          "normal": {
            "color": "#008acd",
            "borderWidth": 1
          },
          "emphasis": {
            "color": "#a9334c"
          }
        },
        "controlStyle": {
          "normal": {
            "color": "#008acd",
            "borderColor": "#008acd",
            "borderWidth": 0.5
          },
          "emphasis": {
            "color": "#008acd",
            "borderColor": "#008acd",
            "borderWidth": 0.5
          }
        },
        "checkpointStyle": {
          "color": "#2ec7c9",
          "borderColor": "rgba(46,199,201,0.4)"
        },
        "label": {
          "normal": {
            "textStyle": {
              "color": "#008acd"
            }
          },
          "emphasis": {
            "textStyle": {
              "color": "#008acd"
            }
          }
        }
      },
      "visualMap": {
        "color": [
          "#5ab1ef",
          "#e0ffff"
        ]
      },
      "dataZoom": {
        "backgroundColor": "rgba(47,69,84,0)",
        "dataBackgroundColor": "rgba(239,239,255,1)",
        "fillerColor": "rgba(182,162,222,0.2)",
        "handleColor": "#008acd",
        "handleSize": "100%",
        "textStyle": {
          "color": "#333333"
        }
      },
      "markPoint": {
        "label": {
          "normal": {
            "textStyle": {
              "color": "#eeeeee"
            }
          },
          "emphasis": {
            "textStyle": {
              "color": "#eeeeee"
            }
          }
        }
      }
    });
  }
});
