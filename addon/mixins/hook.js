import Ember from 'ember';
import config from 'ember-get-config';
import delimit from 'ember-hook/utils/delimit';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';

const {
  Mixin,
  computed,
  get
} = Ember;

const hookName = get(config, 'emberHook.hookName') || 'hook';

export default Mixin.create({
  attributeBindings: ['_hookName:data-test'],

  _hookName: computed(hookName, {
    get() {
      const hook = get(this, hookName);
      
      if (hook) {
        return returnWhenTesting(config, delimit(hook));
      }
    }
  }).readOnly()
});
