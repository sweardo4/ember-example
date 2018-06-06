import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('getconfig/get-jzname', 'Integration | Component | getconfig/get jzname', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{getconfig/get-jzname}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#getconfig/get-jzname}}
      template block text
    {{/getconfig/get-jzname}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
