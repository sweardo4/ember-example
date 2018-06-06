import DS from 'ember-data';

export default DS.Model.extend({
    part_name:DS.attr(),
    part_zname:DS.attr(),
    part_son_id:DS.attr(),
    table_id:DS.attr()
});
