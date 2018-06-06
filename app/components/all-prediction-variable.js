// 预测设备变量选择
import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.get('getJzAction')().then((results) => {
      this.set('list', results)
    })
  },
  actions: {
    index: 0,
    currentId: null,
    methodId: null,
    _tag: 0,
    /**
     * 根据机组获取变量   
     * @param {*} id 设备id
     * @param {*} jzname 设备name
     */
    getJzParams(id, jzname) {
      let method_id = this.get('method_id')
      if (this.actions.currentId == id && this.actions.methodId == method_id) {
        return false;
      } else {
        let method_name = this.get('tid')
        this.get('getModelfieldAction')(id, method_id).then((field) => {
          let data = field.content[0]._data.message
          let temp = ''
          let temp2 = ''
          let p = this.$('#jz' + id + ' .jz-checkbox')
          let p2 = this.$('#jz' + id + ' .jz2-checkbox')
          if (data && data.length) {
            p.children().remove();
            p2.children().remove();
            data.some((d) => {
              temp += '<div class="checkbox ck-field"><label><input type="checkbox" data-id="' + d.id + '"  value="' + d.field_name + '">' + d.field_zname + '</label></div>'
              temp2 += '<div class="checkbox ck-pred"><label><input type="checkbox" data-id="' + d.id + '"  value="' + d.field_name + '">' + d.field_zname + '</label></div>'
            })
          } else {
            this.$('#jz' + id + ' .jz-checkbox .loading').text('暂无数据')
            this.$('#jz' + id + ' .jz2-checkbox .loading').text('暂无数据')
          }
          p.append(temp)
          p2.append(temp2)

        })
      
        let a = this.$('#jz' + id).closest('.ac-jz-show').siblings().find('.accordion-body').removeClass('in');
        a.find('.jz-checkbox input[type="checkbox"]:checked').removeAttr('checked')
        a.find('.jz2-checkbox input[type="checkbox"]:checked').removeAttr('checked')

        this.set('m-methodid', method_id)
        this.get('setGlobalParams')('jz_id', id)
        this.get('setGlobalParams')('jz_zname', jzname)
        this.get('setGlobalParams')(this.get('tid'), null)
        this.actions.currentId = id
        this.actions.methodId = method_id
      }
    },

    getParams() {
      if (this.actions.index % 2) {
        let params = this.$('.ck-field input[type="checkbox"]:checked');
        let parts = this.$('.ck-pred input[type="checkbox"]:checked');
        let temp = [];
        let partTemp = [];
        let fids = [];
        let pids = [];
        // 变量
        for (let i = 0, len = params.length; i < len; i++) {
          let t = {
            key: null,
            value: null,
            id: null
          }
          t.key = params[i].value
          t.value = params[i].labels[0].innerText
          t.id = params[i].dataset.id
          temp.push(t)
          fids.push(t.id)
        }
        // 部件
        for (let i = 0, len = parts.length; i < len; i++) {
          let t = {
            key: null,
            value: null,
            id: null
          }
          t.key = parts[i].value
          t.value = parts[i].labels[0].innerText
          t.id = parts[i].dataset.id
          partTemp.push(t)
          pids.push(t.id)
        }
        JSON.stringify(temp) == "[]" ? temp = null : ''
        JSON.stringify(partTemp) == "[]" ? partTemp = null : ''
        // this.get('setGlobalParams')('field_list', temp)
        // this.get('setGlobalParams')('part_list', partTemp)
        // this.get('setGlobalParams')('field_ids', fids)
        // this.get('setGlobalParams')('p_field_ids', pids)
        // this.get('setGlobalParams')(this.get('tid'), {
        //     x_ids:fids,
        //     y_ids:pids,
        //     x_names:temp,
        //     y_names:partTemp
        // })
         this.get('setGlobalParams')(this.get('tid'),[fids,pids])
      }
      this.actions.index++;
    },
  }
});
