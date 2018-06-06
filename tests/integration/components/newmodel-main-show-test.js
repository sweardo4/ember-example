import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('newmodel-main-show', 'Integration | Component | newmodel main show', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{newmodel-main-show}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#newmodel-main-show}}
      template block text
    {{/newmodel-main-show}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
