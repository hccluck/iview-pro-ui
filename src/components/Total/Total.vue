<template>
  <span>
    <template v-if="total == 1001 || (total == 0 && length)">
      <span>共 {{ total == 1001 ? '1000+' : 0 }} 条</span>
      <Button :loading="loading" :disabled="loading || disabled" :type="type" @click="getTotal" class="ml4" style="height: 24px; padding: 0px 7px">获取总条数</Button>
    </template>
    <template v-else>共 {{ total }} 条</template>
  </span>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    length: {
      type: Number,
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  methods: {
    getTotal() {
      this.$emit('getTotal', 99999, 99999);
    },
  },
};
</script>

<style scoped></style>
