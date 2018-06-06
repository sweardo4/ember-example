import Controller from '@ember/controller';

export default Controller.extend({
  _tag:false,
  all_data_select:{},
  actions: {
    allJz() {
      return this.store.findAll('configjz');
    },
    getModelfield(id,method_id) {
      return this.store.query('modelgetfield', {
        jz_id: id,
        method_id:method_id
      })
    },
    getAllParts(id,mid){
      return this.store.query('modelgetpart',{
        jz_id:id?id:1,
        method_id:mid?mid:1
      })
    },
    setGlobal(key, val) {
      this.set('_tag',!this.get('_tag'))
      let temp = this.get('all_data_select')
      temp[key] = val
      this.set('all_data_select',temp)
      this.set(key,val) 
    },
    getGlobal(key) {
      return this.get(key)
    },
    allMonitor() {
      return this.store.findAll('configmethod');
    },
    getParts(method, jz_id) {
   
      
    },
    getVariable(id){
      return this.store.query('modelgetparam',{
        method_id:id
      })
    },
   
    /**
     * 新建模型
     * @param {传递的参数} data 
     */
    createModel(data){
      return this.store.query('modelcreate',data)
    },
  }
});
