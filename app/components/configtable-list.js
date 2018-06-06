import Component from '@ember/component';

export default Component.extend({
  id: null,
  setSelect() {
    this.get('allDbAction')().then((res) => {
      this.set('dbData', res)
    })
  },
  actions: {
    chakan(id) {
      this.$('#pages').hide()
      this.$('#chakan').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("详情").next().hide()
      this.get("getAction")(id).then((res) => {
        let data = res.data;
        this.set('id', id);
        this.set('table_name', data.table_name)
        this.set('table_zname', data.table_zname)
        this.set('db_zname', data.db_zname);
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
        this.set('table_name', data.table_name)
        this.set('table_zname', data.table_zname)
        this.set('db_id', this.get('selectDbId'));
      })
    },
    edit() {
      let db_id = this.get('selectDbId')
      if (db_id) {
        this.get("delAction")(this.get('id')).then((post) => {
          post.set('table_zname', this.get('table_zname'));
          post.set('table_name', this.get('table_name'));
          post.set('db_id', this.get('selectDbId'));
          post.set('db_zname', this.get('dbname'));
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
      } else {
        alert("请选择所在的数据库")
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
      this.$('#action_title').text("添加").next().hide();
      this.setSelect();
    },
    bindSelectDb(did) {
      let selected = this.$('#' + did).find('option:selected').val();
      this.set('selectDbId', selected);
      console.log(selected)
      this.set('dbname',this.$(event.target).find("option:selected").text())
    },
    add() {
      let db_id = this.get('selectDbId')
      if (db_id) {
        let res = this.get('addAction')({
          table_zname: this.get('table_zname'),
          table_name: this.get('table_name'),
          db_id: db_id,
          db_zname:this.get('dbname')
        })
        // res.save();
        res.save().then((s) => {
          // 请求成功
          this.set('iserror', false)
        }).catch((e) => {
          this.set('iserror', true)
          console.log(e)
        });
        this.$('form').each((key) => this.$('form')[key].reset())
      } else {
        alert('请选择所在数据库')
      }

    }
  }
});
