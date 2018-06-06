import DS from 'ember-data';

export default DS.Model.extend({
    message:DS.attr(),
    status:DS.attr(),
    labeldata:DS.attr()
});