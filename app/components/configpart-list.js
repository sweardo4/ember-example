import Component from '@ember/component';

export default Component.extend({
  id: null,
  init() {
    this._super(...arguments);
  },
  setSelect() {
    this.get('allPartAction')().then((res) => {
      this.set('partData', res)
    })
    this.get('allPartTAction')().then((res) => {
      this.set('tableData', res)
    })
    this.get('allMonitorAction')().then((res) => {
      this.set('monitorData', res)
    })
  },

  actions: {
    chakan(id) {
      this.$('#pages').hide()
      this.$('#chakan').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("数据库详情").next().hide()
      this.get("getAction")(id).then((res) => {
        let data = res.data;
        this.set('id', id);
        this.set('part_name', data.part_name)
        this.set('part_zname', data.part_zname)
        this.set('part_son_id', data.part_son_id);
        this.set('table_zname', data.table_zname);
        this.set('method_id', data.method_id);

        
      })
    },
    setSome(key, value) {
      this.set(key, value)
    },
    editView(id) {

      this.set('id', id)
      this.$('#pages').hide();
      this.$('#edit').removeClass('hidden').siblings('.box-body').hide();
      this.$('#id').text('id : ' + id)
      this.$('#action_title').text("修改").next().hide()
      this.setSelect()

      this.get('getAction')(id).then((res) => {
        let data = res.data
        this.set('part_name', data.part_name)
        this.set('part_zname', data.part_zname)
        // this.set('part_son_id', this.get('selectPartId'))
        // this.set('table_id', this.get('selectPartId'))
      })
    },
    edit() {
      let db_id = this.get('selectPartId')
      let table_id = this.get('selectPartTId')
      let monitorId = this.get('monitorIds')
      let tablename = this.get('tableName')
      let monitorName= this.get('monitorName')
      let partNames = this.get('sunPartsName')

      this.get("delAction")(this.get('id')).then((post) => {
        post.set('part_name', this.get('part_name'));
        post.set('part_zname', this.get('part_zname'));
        post.set('part_son_id', db_id ? db_id : undefined);
        post.set('table_id', table_id ? table_id : undefined)
        post.set('monitor_id', monitorId ? monitorId : undefined)
        post.set('table_zname', tablename ? tablename : undefined)
        post.set('monitor_zname', monitorName ? monitorName : undefined)
        // post.save();
        post.save().then((s) => {
          // 请求成功
          this.set('iserror', false)
        }).catch((e) => {
          this.set('iserror', true)
          console.log(e)
        });

        this.$('form').each((key) => this.$('form')[key].reset())
      })

    },

    del(id) {
      let isTrue = confirm("确认删除吗？")
      if (isTrue) {
        this.get("delAction")(id).then((res) => {
          res.deleteRecord();
          res.get('isDeleted');
          res.save();
        })
      }
    },

    addView() {
      this.$('#pages').hide();
      this.$('#add').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("添加").next().hide()
      this.setSelect()

    },
    bindSelectPart() {
      let selected = this.$(event.target).val().toString();
      let ps = this.$(event.target).find('option:selected');
      let names = []
      for(let i=0,len=ps.length;i<len;i++){
        names.push(ps[i].text)
      }
      // debugger
      this.set('sunPartsName',names.toString())
      this.set('selectPartId', selected);
    },
    bindSelectPartT() {
      let selected = this.$(event.target).find('option:selected').val();
      let name = this.$(event.target).find('option:selected').text();
      this.set('selectPartTId', selected);
      this.set('tableName',name)
    },
    bindSelectMonitor() {
      let selected = this.$(event.target).find('option:selected').val();
      let name = this.$(event.target).find('option:selected').text();
      debugger
      this.set('monitorIds', selected);
      this.set('monitorName',name)
    },
    add() {
      let db_id = this.get('selectPartId')
      let table_id = this.get('selectPartTId')
      let monitorId = this.get('monitorIds')
      let tablename = this.get('tableName')
      let monitorName= this.get('monitorName')
      let partNames = this.get('sunPartsName')

      let res = this.get('addAction')({
        part_name: this.get('part_name'),
        part_zname: this.get('part_zname'),
        part_son_id: db_id ? db_id : undefined,
        table_id: table_id ? table_id : undefined,
        monitor_id: monitorId ? monitorId : undefined,
        table_zname:tablename?tablename:undefined,
        monitor_zname:monitorName?monitorName:undefined
      })
      res.save().then((s) => {
        // 请求成功
        this.set('iserror', false)
      }).catch((e) => {
        this.set('iserror', true)
        console.log(e)
      });
      res ? this.$('form').each((key) => this.$('form')[key].reset()) : ''
    }
  }
});
