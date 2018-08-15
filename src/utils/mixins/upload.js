export default {
  data() {
    return {
      uploadList: [],
      defaultList: [],
      uploadImg: '',
      checkBool: false
    };
  },
  methods: {
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      return check;
    },
    handleFormatError(file) {
      this.$Message.error(`'文件 ' + ${file.name} + '不是图片格式'`);
    },
    handleMaxSize(file) {
      this.$Message.error(`'文件 ' + ${file.name} + '大于2M。'`);
    },
    handleSuccess(res) {
      this.uploadImg = res.data;
      if (res.ret === 200 && this.uploadList.length < 5) {
        this.uploadList.push(res.data);
      }
    },
    handleRemove(file) {
      this.uploadList.splice(this.uploadList.indexOf(file), 1);
    }
  }
};
