export default function () {
  // route 
  this.transition(
    this.toRoute(['admin.configjz','admin.configdb','admin.configtable','admin.configfield','admin.configpart','admin.configmonitor',
                  'admin.configmethod','admin.configparam','admin.configuser','main.newjm','main.modelerror','main.resultmodel',
                  'main.monitor','main.runreport']),
    this.use('toLeft'),
  );
  // 添加
  this.transition(
    this.hasClass('config-add'),
    this.use('crossFade')
  )
  // 编辑
  this.transition(
    this.hasClass('config-edit'),
    this.use('crossFade')
  )
  // 查看
  this.transition(
    this.hasClass('config-see'),
    this.use('crossFade')
  )
  // login
  this.transition(
    this.hasClass('is-login'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
  this.transition(
    this.childOf('#crossFade-jz'),
    this.use('crossFade')
  );
  // loading
  this.transition(
    this.hasClass('fancy-loading'),
    this.toValue(true),
    this.use('toUp'),
    this.reverse('toDown')
  );
  this.transition(
    this.matchSelector('.outlet-anim'),
    this.use('toDown')
  );
  this.transition(
    this.hasClass('home-left'),
    this.use('toRight'),
  );
  // 错误详情
  this.transition(
    this.hasClass('modelerror'),
    this.use('fade'),
    // this.use('calloutShake'),
  );
  // 后台添加编辑错误
  this.transition(
    this.hasClass('isdanger'),
    this.use('fade',{ duration: 20 }),
  );
  
}
