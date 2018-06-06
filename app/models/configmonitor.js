import DS from 'ember-data';

export default DS.Model.extend({
    user_id:DS.attr(),
    monitor_name:DS.attr(),
    monitor_zname:DS.attr(),
    monitor_title:DS.attr(),
    monitor_usethd:DS.attr(),
    redisdata_period:DS.attr(),
    redisdata_datanum:DS.attr(),
    monitor_isuse:DS.attr(),
    method_id:DS.attr(),
    method_zname:DS.attr(),
    redisdata_type:DS.attr(),
    monitor_getfields:DS.attr(),
    monitor_getdatas:DS.attr(),
    monitor_isunite:DS.attr(),//是否统一监测
    monitor_chartopts:DS.attr()//统一图类option
});
