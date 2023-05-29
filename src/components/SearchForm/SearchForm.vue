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
};
</script>

<style lang="less">
.search-form {
  padding: 6px 6px 0;
  background: #f5f7f9;
  border: 1px solid #d7d7d7;

  .ivu-form {
    transition: all 0.3s ease;
  }
  .ivu-form-item {
    margin-bottom: 8px;
    width: calc((100% / 3) - 10px);
  }
  .ivu-form-item-label {
    padding: 7px 0;
  }
  .ivu-date-picker {
    width: 100%;
  }
}

.search-form-2 {
  .ivu-form-item {
    width: calc(50% - 10px);
  }
}

.search-options {
  text-align: right;
  padding: 4px 12px 8px;

  button,
  span {
    margin-left: 6px;
  }

  i {
    transition: all 0.3s ease;
    &.active {
      transform: rotate(180deg);
    }
  }
}
</style>
