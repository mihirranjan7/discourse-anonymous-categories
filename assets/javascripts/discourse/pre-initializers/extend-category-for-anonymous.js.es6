import Category from 'discourse/models/category';

export default {
  name: 'extend-category-for-anonymous',
  before: 'inject-discourse-objects',

  initialize() {
    Category.reopen({
      force_anonymous_posting: Ember.computed(
        "custom_fields.force_anonymous_posting",
        {
          get(fieldName) {
            return Ember.get(this.custom_fields, fieldName) == "true";
          },
        }
      ),
    });
  }
};
