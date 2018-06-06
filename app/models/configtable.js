import DS from 'ember-data';

export default DS.Model.extend({
    table_zname:DS.attr(),
    table_name:DS.attr(),
    db_id:DS.attr(),
    db_zname:DS.attr()
});
