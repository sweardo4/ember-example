import DS from 'ember-data';

export default DS.Model.extend({
    param_name:DS.attr(),
    param_zname:DS.attr(),
    param_type:DS.attr(),
    param_code:DS.attr(),
});

