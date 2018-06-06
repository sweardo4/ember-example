import DS from 'ember-data';

export default DS.Model.extend({
    user_name:DS.attr(),
    user_pwd:DS.attr(),
    user_email:DS.attr(),
});
