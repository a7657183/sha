<template>
    <div class="useralter-all">
      <!-- <myHeader :leftBool="true" text="编辑个人信息"></myHeader> -->
      <div class="useralter">
        <ul>
          <li style="height:7rem;line-height:7rem;">
            <div style="display: flex;">
              <sha-icon type="4" style="margin-right: 1rem;"></sha-icon>
              <p>头像</p>
            </div>
            <div class="itemDivClass" style="width: 60px">
                <Upload
                :action="uploadFile"
                :data="frtItem"
                :show-upload-list="false"
                :default-file-list="defaultList"
                :format="['jpg','jpeg','png']"
                :max-size="10240"
                :before-upload="handleBeforeUpload"
                :on-exceeded-size="handleMaxSize"
                :on-format-error="handleFormatError"
                multiple
                :on-success="handleSuccess"
                class="uploadClass">
                <img class="userimg" :src="`${serverPath}${uploadImg}`"/>
              </Upload>
              <sha-icon type="qianjin"></sha-icon>
            </div>
          </li>
          <li>
            <sha-icon type="nickname" style="margin-right: 1rem;"></sha-icon>
            <p>昵称</p>
            <div class="itemDivClass">
              <Input v-model="dataObje.user_name" style="width: 100%;margin-right: 1rem;color:#919191;" />
              <sha-icon type="qianjin"></sha-icon>
            </div>
          </li>
          <li>
            <sha-icon type="xingbie" style="margin-right: 1rem;"></sha-icon><p>性别</p><div class="itemDivClass">
              <Select v-model="dataObje.sex" style="width:100%">
                <Option value="1">女</Option><Option value="2">男</Option>
              </Select>
            <sha-icon type="qianjin"></sha-icon></div>
          </li>
          <li><sha-icon type="shengri" style="margin-right: 1rem;"></sha-icon><p>生日</p><div class="itemDivClass">
             <DatePicker type="date"
             format="yyyy-MM-dd"
            style="width: 100%" placement="bottom-end" v-model="dataObje.birth" placeholder="Select date"></DatePicker>
            <sha-icon type="qianjin"></sha-icon></div></li>
          <li>
            <sha-icon type="xiaogegeyizhuanhuan_xingzuo" style="margin-right: 1rem;"></sha-icon>
            <p>星座</p>
            <div class="itemDivClass">
              <Input style="margin-right: 1rem;color:#919191;" v-model="dataObje.constellation"/>
              <sha-icon type="qianjin"></sha-icon>
            </div>
          </li>
          <li>
            <sha-icon type="suozaidi" style="margin-right: 1rem;"></sha-icon>
            <p>所在地</p>
            <div class="itemDivClass">
              <Input placeholder="" v-model="cityItem.name" @click.native="cityClickFun" />
              <sha-icon type="qianjin"></sha-icon>
            </div>
          </li>
          <!-- <li><sha-icon type="jiaxiang" style="margin-right: 1rem;"></sha-icon><p>家乡</p><div class="itemDivClass"><i-input placeholder="添加家乡信息" style="width: 7rem;margin-right: 1rem;color:#919191;"></i-input><sha-icon type="qianjin"></sha-icon></div></li> -->
          <i-button style="margin-bottom: 1rem;" type="success" long @click.native="updateuser">确认提交</i-button>
        </ul>
      </div>
      <modalCity v-model="modalCityBool" :cityFun="cityFun" style="z-index: 1001; position: fixed;"></modalCity>
    </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import modalCity from '@/components/sha-modal/modal-city';
import { usermsg, doUpdateUserMsg } from '@/api/modules/personalcenter';
import { uploadFile } from '@/api/modules/mine';
import upload from '@/utils/mixins/upload';
import moment from 'moment';

export default {
  mixins: [upload],
  components: {
    shaIcon,
    myHeader,
    modalCity
  },
  data() {
    return {
      ageVal: '1',
      modalCityBool: false,
      cityItem: {},
      dataObje: {},
      uploadImg: [],
      uploadFile
    };
  },
  created() {
    window.topLeftFun = this.topLeftFun;
  },
  computed: {
    frtItem() {
      return {
        share_token: localStorage.getItem('token'),
        share_sign: '123456'
      };
    }
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    },
    updateuser() {
      const dateval = moment(this.dataObje.birth).format('YYYY-MM-DD');
      const data = {
        user_name: this.dataObje.user_name,
        sex: this.dataObje.sex,
        img: this.uploadImg,
        birth: dateval,
        constellation: this.dataObje.constellation,
        city_id: this.cityItem.id
      };
      doUpdateUserMsg(data).then(res => {
        console.log(res);
        this.$Message.success('更改成功，请稍后！');
        this.$router.push({
          name: 'usermsg'
        });
      }).catch(err => {
        console.log(err);
      });
    },
    cityFun(item) {
      this.cityItem = item;
    },
    cityClickFun() {
      this.modalCityBool = true;
    },
    indexRouterFun(name) {
      this.$router.push({
        name
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    usermsg().then(res => {
      next(vm => {
        vm.uploadImg = res.data.img;
        vm.dataObje = res.data;
        vm.cityItem = res.data.city_msg;
      });
    }).catch(() => {
      this.$Message.error('获取用户信息失败，请稍后重试！');
    });
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.useralter {
  // margin-top: 3.5rem;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  background: #fff;
  .uploadClass{
    border: none;
        line-height: 1rem;
  }
  .ivu-select-selection{
    border: none;
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    li {
      height: 4rem;
      line-height: 4rem;
      display: flex;
      flex: 1;
      justify-content: space-between;
      border-bottom: 1px solid #f8f8f8;
      .userimg {
        border-radius: 25%;
        width: 100%;
        height: 100%;
      }
      .iconfont {
        font-size: 2rem;
      }
      .itemDivClass {
        width: 45%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          font-size: 1rem;
        }
        ::-webkit-input-placeholder {
          font-size: 1rem;
        }
      }
      input {
        border: none;
        background: none;
      }
      p {
        width: 40%;
        text-align: left;
      }
    }
  }
}
</style>
