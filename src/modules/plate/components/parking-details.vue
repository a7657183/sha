<template>
  <div class="shareItem details">
    <myHeader
    :leftBool="true"
    text="详情"
    routerName="subfunClick"
    rightIcon="shoucang1" />
     <Carousel :height="200" autoplay class="carouselBox">
        <Carousel-item>
            <div class="demo-carousel">
              <img src="~@/assets/img/per-center-b.png">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              <img src="~@/assets/img/per-center-c.png">
            </div>
        </Carousel-item>
    </Carousel>
    <p class="title bottomBor">南山科技大夏停车城</p>
    <div class="details-item bottomBor">
      <p class="moneyClass">400元/月</p>
    </div>
    <div class="details-item bottomBor">
      <p class="textClassTitle">车位描述</p>
      <p class="textClass">车位描述车位描述车位描述车位描述车位描述车位描述车位描述车位描述车位描述</p>
    </div>

    <div class="details-item bottomBor">
      <p class="textClass">车主信息</p>
      <div class="details-item-message">
        <div class="head-portrait">
          <img src="~@/assets/img/per-center-c.png">
        </div>
        <div class="name">
          <p>刘小姐</p>
          <a href="tel:1564568714" class="call">1564568714</a>
        </div>
        <div class="iconBox">
          <shaIcon type="dianhua" size="1.4"></shaIcon> &nbsp;联系 TA
        </div>
      </div>
    </div>

    <particularsFooter :moneyNumber="300" text="马上预约"></particularsFooter>
  </div>

</template>
<script>
import myHeader from '@/components/header';
import particularsFooter from '@/components/footer/particulars-footer';
import shaIcon from '@/components/sha-icon';
export default {
  components: {
    myHeader,
    shaIcon,
    particularsFooter
  }
};
</script>

<style lang="less">
@import "~@/assets/styles/variables";
.details {
  background: #ffffff;
  .title {
    font-size: 1.3rem;
    font-weight: 400;
    padding: 1rem;
  }
  .carouselBox {
    .demo-carousel {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-item {
    padding: 1rem;
    .moneyClass {
      color: @warning-color;
      font-size: 1.5rem;
    }
    .textClassTitle {
      font-size: 1rem;
      padding-bottom: 0.5rem;
      color: @text-color;
    }
    .textClass {
      font-size: 0.8rem;
      color: @text-light;
    }
    &-message {
      display: flex;
      padding: 1rem 0px;
      .head-portrait {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        flex: 1;
      }
      .iconBox {
        background: @primary-light-color;
        border-radius: 3px;
        color: #ffffff;
        height: 2.2rem;
        line-height: 2.2rem;
        padding: 0px 10px;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
