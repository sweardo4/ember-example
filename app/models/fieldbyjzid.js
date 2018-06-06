import DS from 'ember-data';

export default DS.Model.extend({
    field_name:DS.attr(),
    field_zname:DS.attr(),
    field_type:DS.attr(),
    field_inmodel:DS.attr(),
    field_empty:DS.attr(),
    field_period:DS.attr(),
    field_datanum:DS.attr(),
    field_unit:DS.attr(),
    field_groundthd:DS.attr(),
    field_monitorids:DS.attr(),
    table_id:DS.attr(),
    jzid: DS.belongsTo('configjz')
   
});
