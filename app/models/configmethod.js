import DS from 'ember-data';

export default DS.Model.extend({
    method_typezname:DS.attr(),
    method_function:DS.attr(),
    method_table:DS.attr(),
    method_type:DS.attr(),
    param_ids:DS.attr(),
    param_znames:DS.attr()
});

