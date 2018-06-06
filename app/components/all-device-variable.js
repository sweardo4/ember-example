// 设备和部件选择
import Component from '@ember/component';
export default Component.extend({
  allfields: {},
  init() {
    this._super(...arguments);
    this.get('getJzAction')().then((results) => {
      this.set('list', results)
    })
  },

  /**
   * 获取部件
   */
  getParts(id, mid) {
    this.get('getAllParts')(id, mid).then((field) => {
      let data = field.content[0]._data.message
      let temp = ''
      let p = this.$('#jz' + id + ' .part-checkbox')
      if (data && data.length) {
        p.children().remove();
        data.some((d) => {
          temp += '<div class="checkbox ck-part"><label><input type="checkbox" data-id="' + d.id + '"  value="' + d.part_name + '">' + d.part_zname + '</label></div>'
        })
      } else {
        this.$('#jz' + id + ' .part-checkbox .loading').text('暂无数据')
      }
      p.append(temp)
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
        this.get('getModelfieldAction')(id, method_id).then((field) => {
          let data = field.content[0]._data.message
          let temp = ''
          let p = this.$('#jz' + id + ' .jz-checkbox')
          if (data && data.length) {
            p.children().remove();
            data.some((d) => {
              temp += '<div class="checkbox ck-field"><label><input type="checkbox" data-id="' + d.id + '"  value="' + d.field_name + '">' + d.field_zname + '</label></div>'
            })
          } else {
            this.$('#jz' + id + ' .jz-checkbox .loading').text('暂无数据')
          }
          p.append(temp)
        })
        //按照当前选择的机组显示出部件 
        this.getParts(id, method_id)
        let a = this.$('#jz' + id).closest('.ac-jz-show').siblings().find('.accordion-body').removeClass('in');
        a.find('.jz-checkbox input[type="checkbox"]:checked').removeAttr('checked')
        a.find('.part-checkbox input[type="checkbox"]:checked').removeAttr('checked')
        this.set('m-methodid', method_id)
        this.get('setGlobalParams')('jz_id', id)
        this.get('setGlobalParams')('jz_zname', jzname)
        this.get('setGlobalParams')(this.get('tid'), null)
        // this.get('setGlobalParams')('field_ids', null)
        // this.get('setGlobalParams')('part_ids', null)
        this.actions.currentId = id
        this.actions.methodId = method_id
      }
    },

    getParams() {
      if (this.actions.index % 2) {
        let params = this.$('.ck-field input[type="checkbox"]:checked');
        let parts = this.$('.ck-part input[type="checkbox"]:checked');
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
        JSON.stringify(temp) == "[]" ? temp = '' : ''
        JSON.stringify(partTemp) == "[]" ? partTemp = '' : ''
        this.get('setGlobalParams')('field_list', temp)
        this.get('setGlobalParams')('part_list', partTemp)
        this.get('setGlobalParams')('field_ids', fids)
        this.get('setGlobalParams')('part_ids', pids)
        // this.get('setGlobalParams')(this.get('tid'),{
        //   'field_list':temp,
        //   'part_list':partTemp,
        //   'field_ids':fids,
        //   'part_ids':pids
        // })
      }
      this.actions.index++;
    },
    otherChange() {
      let p = $('#accordion_other').find('input')
      for (let i = 0, len = p.length; i < len; i++) {
        if (p[i].value) {
          this.get('setGlobalParams')(p[i].name, p[i].value)
        }
      }
      this.get('setGlobalParams')('_tag', this.actions._tag++)
    }
  },

});
