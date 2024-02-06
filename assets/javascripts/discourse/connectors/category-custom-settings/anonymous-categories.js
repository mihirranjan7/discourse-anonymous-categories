import { action } from "@ember/object";

export default {
  @action
  onChangeSetting(value) {
    this.set(
      "category.custom_fields.force_anonymous_posting",
      value ? "true" : "false"
    );
  },
};