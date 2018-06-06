import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('setting-main-pane', 'Integration | Component | setting main pane', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{setting-main-pane}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#setting-main-pane}}
      template block text
    {{/setting-main-pane}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
