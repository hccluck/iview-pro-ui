<template>
  <div class="search-form" :class="{ 'search-form-2': span == 2 }">
    <Form ref="form" inline :label-width="labelWidth" :model="model" :rules="rules">
      <slot></slot>
      <slot name="extra" v-if="showFold && !fold"></slot>
    </Form>

    <div class="search-options" v-if="showFold">
      <slot name="options"></slot>
      <Button @click="fold = !fold">
        {{ fold ? '展开' : '收起' }}
        <Icon :class="{ active: !fold }" type="ios-arrow-down" />
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    span: {
      type: [Number, String],
      default: 3,
    },
    labelWidth: {
      type: Number,
      default: 120,
    },
    model: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    showFold: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { fold: true };
  },
  methods: {
    resetFields() {
      this.$refs.form.resetFields()
    },
    async validate(callback) {
      return this.$refs.form.validate(callback)
    },
    validateField(prop, callback) {
      this.$refs.form.validateField(prop, callback)
    }
  }
};
</script>

<style lang="less"></style>
