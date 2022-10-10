<template>
  <div class="search-form">
    <Form ref="form" inline :style="{ height: showFold && fold ? `${height}px` : 'auto' }">
      <slot></slot>
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
    height: {
      type: [Number, String],
      default: 68,
    },
    showFold: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return { fold: true };
  },
};
</script>

<style lang="less" scoped>
.search-form {
  padding: 6px 6px 0;
  background: #f5f7f9;
  border: 1px solid #d7d7d7;

  ::v-deep .ivu-form {
    overflow: hidden;
    transition: all 0.3s ease;
  }
  ::v-deep .ivu-form-item {
    margin-bottom: 8px;
    width: calc((100% / 3) - 10px);
  }
  ::v-deep .ivu-form-item-label {
    width: 120px;
    padding: 7px 0;
  }
  ::v-deep .ivu-form-item-content {
    margin-left: 120px;
    line-height: 26px;
  }
  ::v-deep .ivu-date-picker {
    width: 100%;
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
