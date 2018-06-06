import Component from '@ember/component';

export default Component.extend({
  id: null,
  isnull: null,
  init() {
    this._super(...arguments);
    // let a = $.getJSON("assets/precautions.json")
  },
  setSelect() {
    this.get('allTableAction')().then((res) => {
      this.set('tableData', res)
    })
  },
  actions: {
    chakan(id) {
      this.$('#pages').hide()
      this.$('#chakan').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("变量详情").next().hide()

      this.get("getAction")(id).then((res) => {
        let data = res.data;
        this.set('id', id);
        this.set('field_name', data.field_name)
        this.set('field_zname', data.field_zname)
        this.set('field_type', data.field_type)
        this.set('field_empty', data.field_empty)
        this.set('field_period', data.field_period)
        this.set('field_datanum', data.field_datanum)
        this.set('field_unit', data.field_unit)
        this.set('field_groundthd', data.field_groundthd)
        this.set('field_monitorids', data.field_monitorids)
        this.set('table_zname', data.table_zname)

        this.set('field_chartopts', data.field_chartopts)
        this.set('field_chart', data.field_chart)
      })
    },
    setSome(key, value) {
      this.set(key, value)
    },
    getRadio(a) {
      this.isnull = a;
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
        this.set('field_name', data.field_name)
        this.set('field_zname', data.field_zname)
        this.set('field_type', data.field_type)
        this.set('field_empty', data.field_empty)
        this.set('field_period', data.field_period)
        this.set('field_datanum', data.field_datanum)
        this.set('field_unit', data.field_unit)
        this.set('field_groundthd', data.field_groundthd)
        this.set('field_monitorids', data.field_monitorids)
        this.set('table_id', this.get('selectTableId'))

        this.set('field_chartopts', data.field_chartopts)
        this.set('field_chart', data.field_chart)
      })
    },
    edit() {
      let db_id = this.get('selectTableId')
      if (db_id) {
        this.get("delAction")(this.get('id')).then((post) => {
          post.set('field_name', this.get('field_name'));
          post.set('field_zname', this.get('field_zname'));
          post.set('field_type', this.get('field_type'));
          post.set('field_empty', this.isnull !== null ? this.isnull : 1);
          post.set('field_period', this.get('field_period'));
          post.set('field_datanum', this.get('field_datanum'));
          post.set('field_unit', this.get('field_unit'));
          post.set('field_groundthd', this.get('field_groundthd'));
          post.set('field_monitorids', this.get('field_monitorids'));
          post.set('field_inmodel', 0);
          post.set('field_chartopts', this.get('field_chartopts'));
          post.set('field_chart', this.get('field_chart'));
          post.set('table_id', db_id)
          post.save().then((s) => {
            // 请求成功
            this.set('iserror', false)
          }).catch((e) => {
            this.set('iserror', true)
            console.log(e)
          });
          this.$('form').each((key) => this.$('form')[key].reset())
        })
      } else {
        alert('请选择数据表')
      }
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
    bindSelectTable(did) {
      let selected = this.$('#' + did).find('option:selected').val();
      this.set('selectTableId', selected);
    },

    add() {
      let db_id = this.get('selectTableId')
      if (db_id) {
        let res = this.get('addAction')({
          field_name: this.get('field_name'),
          field_zname: this.get('field_zname'),
          field_type: this.get('field_type'),
          field_empty: this.isnull !== null ? this.isnull : 1,
          field_inmodel: 0,
          field_period: this.get('field_period'),
          field_datanum: this.get('field_datanum'),
          field_unit: this.get('field_unit'),
          field_groundthd: this.get('field_groundthd'),
          field_monitorids: this.get('field_monitorids'),
          field_split: '0',
          field_chartopts: this.get('field_chartopts'),
          field_chart: this.get('field_chart'),
          table_id: db_id
        })
        res.save().then((s) => {
          // 请求成功
          this.set('iserror', false)
        }).catch((e) => {
          this.set('iserror', true)
          console.log(e)
        });
        this.$('form').each((key) => this.$('form')[key].reset())
      } else {
        alert('请选择数据表')
      }
    }
  }
});
