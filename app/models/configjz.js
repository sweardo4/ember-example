import DS from 'ember-data';

export default DS.Model.extend({
    jz_name:DS.attr(),
    jz_zname:DS.attr(),
    user_name:DS.attr(),
    jz_isuse:DS.attr(),
    configdbs: DS.hasMany('configdb',{async:true})
});
