import DS from 'ember-data';

export default DS.Model.extend({
    db_zname:DS.attr(),
    db_ip:DS.attr(),
    db_port:DS.attr(),
    db_type:DS.attr(),
    db_user_name:DS.attr(),
    db_user_pwd:DS.attr(),
    jz_id:DS.attr(),
    jz_zname:DS.attr(),
    configjz:DS.belongsTo('configjz',{async:true})
});
