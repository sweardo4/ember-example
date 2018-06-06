import Component from '@ember/component';

export default Component.extend({
  id: null,

  setSelect() {
    this.get('allJzAction')().then((res) => {
      this.set('jzData', res)
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
        this.set('db_zname', data.db_zname)
        this.set('db_ip', data.db_ip)
        this.set('db_port', data.db_port)
        this.set('db_type', data.db_type)
        this.set('db_user_name', data.db_user_name)
        this.set('jz_zname', data.jz_zname);
      })
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
        this.set('db_zname', data.db_zname)
        this.set('db_ip', data.db_ip)
        this.set('db_port', data.db_port)
        this.set('db_type', data.db_type)
        this.set('db_user_name', data.db_user_name)
        this.set('db_user_pwd', data.db_user_pwd)
        this.set('jz_id', this.get('selectJzId'))
      })
    },
    setSome(key, value) {
      this.set(key, value)
    },
    edit() {
      let db_id = this.get('selectJzId')
      if (db_id) {
        this.get("delAction")(this.get('id')).then((post) => {
          post.set('db_zname', this.get('db_zname'));
          post.set('db_ip', this.get('db_ip'));
          post.set('db_port', this.get('db_port'));
          post.set('db_type', this.get('dbtype'));
          post.set('db_user_name', this.get('db_user_name'));
          post.set('db_user_pwd', this.get('db_user_pwd'));
          post.set('jz_id', this.get('selectJzId'));
          post.set('jz_zname',this.get('jzname') );
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
        alert('请选择设备')
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
    bindSelectJz(did) {
      let selected = this.$('#' + did).find('option:selected').val();
      let jzname = this.$(event.target).find("option:selected").text()
      this.set('selectJzId', selected);
      this.set('jzname', jzname);
    },
    bindDBType(){
      let temp = this.$(event.target).find("option:selected").text()
      console.log(temp)
      this.set('dbtype',temp)
    },
    add() {
      let db_id = this.get('selectJzId')
      if (db_id) {
        let res = this.get('addAction')({
          db_zname: this.get('db_zname'),
          db_ip: this.get('db_ip'),
          db_port: this.get('db_port'),
          db_type: this.get('dbtype'),
          db_user_name: this.get('db_user_name'),
          db_user_pwd: this.get('db_user_pwd'),
          jz_id: this.get('selectJzId'),
          jz_zname: this.get('jzname'),
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
        alert('请选择设备')
      }


    }
  }
});
