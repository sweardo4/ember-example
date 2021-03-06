import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('common/error-danger', 'Integration | Component | common/error danger', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{common/error-danger}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#common/error-danger}}
      template block text
    {{/common/error-danger}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
