import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('configmonitor-list', 'Integration | Component | configmonitor list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{configmonitor-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#configmonitor-list}}
      template block text
    {{/configmonitor-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
