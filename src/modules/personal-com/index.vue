<template>
  <div class="PCwarp">
      <div class="PCtop">
          <sha-icon type="" size="24rem"></sha-icon>
          <h4>编辑个人信息</h4>
      </div>
      <div class="userMsg">
          <ul class="uMsglist">
              <li>
                  <sha-icon type="" size="65rem"></sha-icon>
                  <h5>头像</h5>
                  <img src="../">
                  <sha-icon type="" size="16rem"></sha-icon>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon'
export default {
  components: {
    shaIcon
  },
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,h2,h3,h4 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
