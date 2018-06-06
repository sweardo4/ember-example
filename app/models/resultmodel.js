import DS from 'ember-data';

export default DS.Model.extend({
    jz_name: DS.attr(),
    table_id:  DS.attr(),
    model_time:  DS.attr(),
    // model_method:  DS.attr(),
    model_methodid:DS.attr(),
    model_methodzname: DS.attr(),
    start_time:  DS.attr(),
    end_time: DS.attr(),
    model_isuse:  DS.attr(),
  
    model_type:DS.attr(),
   
    user_name:DS.attr(),
    field_znames:DS.attr(),
    model_typezname:DS.attr(),

});
