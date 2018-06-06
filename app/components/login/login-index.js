import Component from '@ember/component';
import { storageFor } from 'ember-local-storage';

export default Component.extend({
  user: storageFor('user'),
  init() {
    this._super(...arguments);
    this.set('subtitle','您还没有登录')
  },
  didRender() {
    let that = this
    let chd = $('#mpanel2').children();
    if (chd.length < 1) {
      $('#mpanel2').codeVerify({
        type: 1,
        width: '100%',
        height: '40px',
        fontSize: '30px',
        codeLength: 6,
        btnId: 'check-btn',
        ready: function () {},
        success: function () {
          let username = that.get('username')
          let userpwd = that.get('userpwd')
          let result = that.get('getUser')(username,userpwd)
          
          result.then((res)=>{
            if(!username || !userpwd){
              that.set('subtitle','用户名或密码不能为空')
              return false;
            }
            if(res.content.length){
              that.set('user.username',username)
              that.set('user.userpwd',Math.floor(Math.random()*1000000000))
              that.get('setTemp')('isLogin',true)
            }else{
              that.set('subtitle','用户名或密码错误')
            }
          })
          result.catch(()=>{
            that.set('subtitle','用户名或密码错误')
          })

        },
        error: function () {
          alert('验证码不匹配！');
        }
      });
    }
    

  }
});
