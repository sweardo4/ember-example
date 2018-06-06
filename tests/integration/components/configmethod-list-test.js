import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('configmethod-list', 'Integration | Component | configmethod list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{configmethod-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#configmethod-list}}
      template block text
    {{/configmethod-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
