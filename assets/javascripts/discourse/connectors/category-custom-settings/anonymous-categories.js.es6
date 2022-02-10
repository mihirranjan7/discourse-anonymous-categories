export default {
  actions: {
    onChangeSetting(value) {
      this.set(
        "category.custom_fields.force_anonymous_posting",
        value ? "true" : "false"
      );
    },
  },
};
