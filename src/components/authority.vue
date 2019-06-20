<script>
export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true
    }
  },
  // render (h, context) {
  //   console.log(h, context)
  //   // console.log(this.$slots.default)
  //   // return this.authority.includes('admin') ? this.$slots.default: ''
  //   console.log(this.$slots.default)
  //   return this.authority.includes('admin') ? this.$slots.default: ''
  // }
  render(h, context) {
    console.log(h, context);
    const { props, scopedSlots } = context;
    return props.authority.includes('admin') ? scopedSlots.default() : null;
  }
};
</script>
