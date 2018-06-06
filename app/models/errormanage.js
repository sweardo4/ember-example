import DS from 'ember-data';

export default DS.Model.extend({
    field_ids:DS.attr(),
    part_ids:DS.attr(),
    error_zname:DS.attr(),
    error_time:DS.attr(),
    error_data:DS.attr(),
    param_dict:DS.attr(),
    model_id:DS.attr(),
    model_zname:DS.attr(),
    error_type:DS.attr()
});
