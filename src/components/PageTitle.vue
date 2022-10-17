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

<style lang="less" scoped>
.page-title {
  padding: 20px 0;
  p {
    padding-left: 16px;
    font-size: 16px;
    color: #153a5c;
    height: 16px;
    line-height: 1;
    border-left: 2px solid #153a5c;
  }
}
</style>
