<template>
  <div class="colum-content">
    <!--  多栏布局  -->
    <template v-for="item in 3">
      <div class="colum-item" :key="item">
        <div style="width: 100%">
          国家药品监督管理局12月31日消息，
        </div>
        <p>
          国家药品监督管理局12月31日消息，近日，国家药品监督管理局批准厦门万泰沧海生物技术有限公司的双价人乳头瘤病毒疫苗（大肠杆菌）（商品名：馨可宁（Cecolin））上市注册申请，该药是首家获批的国产人乳头瘤病毒疫苗，适用于9-45岁女性。

          人乳头瘤病毒（HPV
        </p>
        <p>
          国家药品监督管理局12月31日消息，近日，国家药品监督管理局批准厦门万泰沧海生物技术有限公司的双价人乳头瘤病毒疫苗（大肠杆菌）（商品名：馨可宁（Cecolin））上市注册申请，该药是首家获批的国产人乳头瘤病毒疫苗，适用于9-45岁女性。

          人乳头瘤病毒（HPV）疫苗俗称宫颈癌疫苗，可用来预防女性宫颈癌和男、女生殖器癌以及生殖器疣。目前全球已上市的HPV疫苗有3种，分别是英国葛兰素史克公司生产的针对HPV16、18型的双价疫苗，美国默沙东公司生产的针对HPV6、11、16、18型的四价疫苗和针对HPV6、11、16、18、31、33、45、52、58型的九价疫苗。

          此次获批的双价人乳头瘤病毒疫苗（大肠杆菌）系国内首家申报生产的HPV疫苗，针对HPV16、18型，被纳入国家重大新药创制专项支持。国家药监局按照《关于优化药品注册审评审批有关事宜的公告》等有关规定，将其纳入优先审评品种，加快批准其上市注册申请。本品的获批上市将进一步满足公众需求，提高产品的可及性。
        </p>
        <p>
          国家药品监督管理局12月31日消息，近日，国家药品监督管理局批准厦门万泰沧海生物技术有限公司的双价人乳头瘤病毒疫苗（大肠杆菌）（商品名：馨可宁（Cecolin））上市注册申请，该药是首家获批的国产人乳头瘤病毒疫苗，适用于9-45岁女性。

          人乳头瘤病毒（HPV
        </p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'colum'
}
</script>

<style lang="scss" scoped>
.colum-content {
  background-color: aliceblue;
  .colum-item {
    background-color: antiquewhite;
    padding: 20px;
    margin-bottom: 20px;
    column-gap: 50px;
    column-rule: 2px solid #fdf;
    &:nth-of-type(1) {
      width: 100%;
      column-count: 3;
    }
    &:nth-of-type(2) {
      width: 100%;
      column-count: 3;
    }
    &:nth-of-type(3) {
      width: 100%;
    }
  }
}
</style>
