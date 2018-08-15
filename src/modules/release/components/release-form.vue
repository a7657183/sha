<template>
  <div class="releaseFormBox">
    <!-- <myHeader
    :leftBool="true"
    text="发布共享"
    rightText="取消"
    :textBotton="topTypeText"
    routerName="subfunClick"
    :topRightFun="topRightFun"
    /> -->
    <div class="content">

      <div class="content-item">
        <label>标题<span class="fromxinRed">*</span></label>
        <div class="content-item-right"><Input placeholder="请输入..." v-model="name" /></div>
      </div>

      <div class="content-item">
        <label>类别<span class="fromxinRed">*</span></label>
        <div class="content-item-right">
          <Select v-model="selectVal" size="large" style="width:100%">
              <Option v-for="(item, index) in typeList" :key="index" :value="index + 1">{{ item }}</Option>
          </Select>

        </div>
      </div>
      <div class="content-item"  v-if="typeText === '1'">
        <label>开始时间<span class="fromxinRed">*</span></label>
        <div class="content-item-right">
          <DatePicker type="datetime" v-model="statusData"
          placeholder="开始时间" style="width: 100%"></DatePicker>
        </div>
      </div>

      <div class="content-item"  v-if="typeText === '1'">
        <label>结束时间<span class="fromxinRed">*</span></label>
        <div class="content-item-right">
          <DatePicker type="datetime"
          v-model="endData"
          :options="disabledDateVal()"
          placeholder="结束时间" style="width: 100%"></DatePicker>
        </div>
      </div>

      <div class="content-item">
        <label>时间节点<span class="fromxinRed">*</span></label>
        <div class="content-item-right">
          <Select v-model="timeSelectVal" :disabled="typeText === '1'" size="large" style="width:100%">
            <Option :value="item.id" v-for="item in timeList" :key="item.id">{{item.name}}</Option>
          </Select>

        </div>
      </div>

      <div class="content-item" v-if="typeText === '4'">
        <label>票据有效期<span class="fromxinRed">*</span></label>
        <div class="content-item-right">
          <DatePicker v-model="validity_time" placeholder="Select date" style="width: 100%"></DatePicker>
        </div>
      </div>

      <div class="content-item" v-if="typeText === '3'">
        <label>学校名称<span class="fromxinRed">*</span></label>
        <div class="content-item-right"><Input v-model="schoole_name" placeholder="请输入学校名称" /></div>
      </div>

      <div class="content-item" v-if="typeText === '2'">
        <label>房型<span class="fromxinRed">*</span></label>
        <div class="content-item-right"><Input v-model="housetype" placeholder="请输入房型" /></div>
      </div>

      <div class="content-item" v-if="typeText === '2'">
        <label>面积<span class="fromxinRed">*</span></label>
        <div class="content-item-right"><Input v-model="areas" placeholder="请输入面积" /></div>
      </div>

      <div class="content-item">
        <label>价格<span class="fromxinRed">*</span></label>
        <div class="content-item-right">
          <InputNumber :min="0" v-model="price" style="width: 100%" placeholder="请输入价格"></InputNumber></div>
      </div>

      <div class="content-item">
        <label>区域<span class="fromxinRed">*</span></label>
        <div class="content-item-right" @click="cityClick">
          <Input placeholder="请选择区域..." disabled v-model="cityObj.all_city_msg" />
          <p  v-if="typeText === '1'" @click.stop="mapClick">
            <sha-icon type="suozaidi"></sha-icon
            >附近小区</p></div>
      </div>

      <div class="content-item">
        <label>详情地址<span class="fromxinRed">*</span></label>
        <div class="content-item-right"><Input v-model="addr" placeholder="请输入详情地址" /></div>
      </div>

      <div class="content-item" v-if="typeText === '3'">
        <label>联系电话<span class="fromxinRed">*</span></label>
        <div class="content-item-right"><Input placeholder="请输入联系电话" v-model="phone" /></div>
      </div>
      <div class="content-item">
        <label>详情介绍<span class="fromxinRed">*</span></label>
        <div class="content-item-right"><Input v-model="descb" placeholder="请输入详情介绍..." type="textarea"/></div>
      </div>

      <div class="content-item">
        <label>上传图片</label>
        <div class="content-item-right">
          <Upload
          :action="uploadFile"
          :data="frtItem"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          :before-upload="handleBeforeUpload"
          :on-exceeded-size="handleMaxSize"
          :on-format-error="handleFormatError"
          multiple
          :on-success="handleSuccess"
          class="uploadClass">
            <shaIcon type="tupian" color="#498eff"></shaIcon>
        </Upload>
        </div>
      </div>

      <div class="content-item">
        <div class="demo-upload-list" v-for="(item, index) in uploadList" :key="index">
            <img :src="`${serverPath}${item}`">
            <div class="demo-upload-list-cover">
                <!-- <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon> -->
                <sha-icon type="shanchu" @click.native="handleRemove(item)"></sha-icon>
            </div>
        </div>
      </div>
      <div class="errClass" v-if="uploadList.length === 5 ">
        <span>最多只能上传5张图片</span>
      </div>
      <div class="content-item">
        <label>使用规则</label>
        <div class="content-item-right">
          件改变数据时，使用者的数据并没有变化。
          可以直接设置 style 来改变输入框的宽度，默认 100%
        </div>
      </div>

      <div class="content-item">
        <label>风险提示</label>
        <div class="content-item-right">
          件改变数据时，使用者的数据并没有变化。
          可以直接设置 style 来改变输入框的宽度，默认 100%
        </div>
      </div>
    </div>
    <!-- <div class="footerBox" @click="statusCodeFun">
      发布
    </div> -->
    <statusCode v-model="statusCodeBool"></statusCode>
    <modalCity v-model="modalCityBool" :cityFun="cityFun" style="z-index: 1001; position: fixed;"></modalCity>

    <modalFiltrate v-model="modalFiltrateBool"
    :releaseBool="true"
    :distriFunClick="distriFunClick"
    :cityItem="cityItem"
    :listCityClickFun="listCityClickFun"></modalFiltrate>
    <mapFan v-model="mapFanBool" :cityName="cityObj.all_city_msg" />
  </div>
</template>
<script>
import myHeader from '@/components/header';
import statusCode from '@/components/status-code';
import modalCity from '@/components/sha-modal/modal-city';
import modalFiltrate from '@/components/sha-modal/modal-filtrate';
import { postPublish, uploadFile, getTimeType } from '@/api/modules/mine';
import shaIcon from '@/components/sha-icon';
import upload from '@/utils/mixins/upload';
import mapFan from '@/components/map-item/mapFan';
import moment from 'moment';
export default {
  mixins: [upload],
  components: {
    myHeader,
    statusCode,
    modalCity,
    modalFiltrate,
    shaIcon,
    mapFan
  },
  data() {
    return {
      selectVal: '1',
      timeList: [],
      statusCodeBool: false,
      cityItem: {
        name: '深圳',
        id: '28558'
      },
      modalCityBool: false,
      modalFiltrateBool: false,
      cityObj: {},
      name: '',
      price: 0,
      addr: '',
      descb: '',
      phone: '',
      housetype: '',
      areas: '',
      schoole_name: '',
      validity_time: '',
      uploadList: [],
      checkBool: false,
      timeSelectVal: '1',
      uploadFile,
      mapFanBool: false,
      endData: '',
      statusData: ''
    };
  },
  computed: {
    phoneFun() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      return !reg.test(this.phone);
    },
    frtItem() {
      return {
        share_token: localStorage.getItem('token'),
        share_sign: '123456'
      };
    },
    typeText() {
      return this.$route.query.type;
    },
    topTypeText() {
      switch (this.typeText) {
        case '1':
          return '车位';
        case '2':
          return '房屋';
        case '3':
          return '人力';
        case '4':
          return '票据';
        case '5':
          return '交通工具';
        default:
          return '';
      }
    },
    typeList() {
      switch (this.typeText) {
        case '1':
          return ['私家车位'];
        case '2':
          return ['公寓', '私家房', '酒店', '民宿'];
        case '3':
          return ['老师辅助', '游戏达人', '兼职'];
        case '4':
          return ['超市小票', '电影票', '演唱会票', '其他'];
        case '5':
          return ['汽车', '顺风车', '单车', '电动车', '婴儿车', '轮椅'];
        default:
          return ['公寓', '私家车', '酒店', '民宿'];
      }
    }
  },
  created() {
    this.getTimeTypeFun();
    window.topRightFun = this.topRightFun;
    window.topLeftFun = this.topRightFun;
    window.statusCodeFun = this.statusCodeFun;
  },
  methods: {
    disabledDateVal() {
      let timeDisable = new Date(this.statusData).getTime();
      return {
        disabledDate(date) {
          return date && date.valueOf() < timeDisable - 8640000;
        }
      };
    },
    mapClick() {
      if (this.cityObj.all_city_msg) {
        this.mapFanBool = true;
      } else {
        this.$Message.destroy();
        this.$Message.error('请先选择区域');
      }
    },
    getTimeTypeFun() {
      getTimeType().then(res => {
        this.timeList = res.data;
      });
    },
    topRightFun() {
      this.$router.back(-1);
    },
    listCityClickFun() {
      this.modalCityBool = true;
    },
    distriFunClick(item) {
      this.cityObj = item;
    },
    cityFun(item) {
      this.cityItem = item;
    },
    cityClick() {
      this.modalFiltrateBool = true;
    },
    statusCodeFun() {
      let {imageUrl, img1, img2, img3, img4} = '';
      this.$Message.destroy();
      this.uploadList.filter((e, index) => {
        if (index === 0) {
          imageUrl = e;
        }
        if (index === 1) {
          img1 = e;
        }
        if (index === 2) {
          img2 = e;
        }
        if (index === 3) {
          img3 = e;
        }
        if (index === 4) {
          img4 = e;
        }
      });
      const data = {
        name: this.name,
        type: this.selectVal,
        time_type: this.timeSelectVal,
        addr: this.addr,
        price: this.price,
        cityid: this.cityObj.id,
        isshare: this.$route.query.isshare,
        descb: this.descb
      };
      //  *listData *依次为车位、房屋、人力、票据 中不同的参数
      const listData = [
        {
          num: 1,
          start_time: moment(this.statusData).format('YYYY-MM-DD HH:mm:ss'),
          end_time: moment(this.endData).format('YYYY-MM-DD HH:mm:ss')
          // preif: ''
        },
        {
          areas: this.areas,
          housetype: this.housetype
        },
        {
          schoole_name: this.schoole_name,
          phone: this.phone
        },
        {
          validity_time: moment(this.validity_time).format('YYYY-MM-DD HH:mm:ss')
        }
      ];
      const item = listData.filter((e, index) => {
        if (Number(this.typeText) === (index + 1)) {
          return e;
        }
      });
      const itemData = {
        ...data,
        ...item[0]
      };
      const bool = Object.keys(itemData).some(e => {
        return itemData[e] === '';
      });
      if (bool) {
        this.$Message.error('请填写完整！');
        return;
      }
      if (this.phone && this.phoneFun) {
        this.$Message.error('请填写正确手机号码');
        return;
      }
      if (!imageUrl) {
        this.$Message.error('最少上传一张图片');
        return;
      }
      const txtItemDa = {
        ...itemData,
        image_url: imageUrl,
        img_1: img1,
        img_2: img2,
        img_3: img3,
        img_4: img4
      };
      postPublish(this.typeText, txtItemDa).then(res => {
        this.$Message.success('发布成功');
        this.$router.push({
          name: 'release'
        });
      }).catch(err => {
        this.$Message.error(err.msg);
      });
      // const fn2 = () => {
      //   const item = listData.filter((e, index) => {
      //     if (Number(this.typeText) === (index + 1)) {
      //       return e;
      //     }
      //   });
      //   const itemData = {...data, ...item[0]};
      //   return Promise.resolve(itemData);
      // };
      // fn2().then(function(val) {
      //   const bool = Object.keys(val).some(e => {
      //     console.log(val.e);
      //     return val.e;
      //   });
      //   if (!bool) {
      //     this.$Message.error('请填写完整！');
      //     return;
      //   }
      //   postPublish(val).then(res => {
      //     console.log(res);
      //   });
      // });
    }
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.releaseFormBox {
  .errClass{
    color: red;
    padding-left: 1rem;
  }
  .ivu-input[disabled], fieldset[disabled] .ivu-input{
    background-color: #ffffff;
    color: #495060;
  }
  .ivu-select-large .ivu-select-item{
    display: block;
  }
  .content {
    background: #ffffff;
    padding: 1rem;
    &-item {
      display: flex;
      padding: 1rem 0px;
      .demo-upload-list{
        width: 20%;
        height: 4rem;
        text-align: center;
        position: relative;
        img{
          height: 100%;
          width: 80%;
          margin: auto;
        }
        .demo-upload-list-cover{
          position: absolute;
          right: 7%;
          top: -4px;
          height: 2rem !important;
          line-height: 2rem !important;
          font-size: 1rem;
          color: red;
          width: 2rem;
          height: 2rem;
          background: #ffffff;
          border-radius: 50%;
        }
      }
      label {
        width: 6rem;
        line-height: 32px;
        text-align: right;
      }
      &-right {
        margin-left: 1rem;
        flex: 1;
      }
    }
  }
  .footerBox {
    position: fixed;
    text-align: center;
    line-height: 3.5rem;
    background: @primary-light-color;
    font-size: 1.2rem;
    color: #ffffff;
    width: 100%;
    bottom: 0px;
  }
}
</style>
