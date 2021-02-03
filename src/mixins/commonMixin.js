export const modalMixin = {
  methods: {
    $modal(options) {
      let {
        title,
        content,
        type = 'warning',
        confirmHandle,
        cancelHandle = () => {
        }
      } = options;

      // console.log(cancelHandle);

      this.$confirm(
        `${title}`,
        `${content}`,
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type
        })
        .then(confirmHandle)
        .catch(cancelHandle);
    }
  },
};
