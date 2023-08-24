<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: 'title',
    },
  },
  render(h) {
    return h('div', { class: 'page-title' }, [h('p', this.title)]);
  },
};
</script>

<style lang="less" scoped></style>
