<template>
    <div class="lunch_box">
        <div class="lunch_box_">
            <div class="lunch_box_menu" v-for="(tab,index) in lunch_content" :key="index">
                <!-- {{tab.txt}} -->
                <ul class="lunch_menu">
                    <li>黯然销魂饭</li>
                    <li>电影《食神》 里边的一碗普通叉烧饭加荷包蛋的叫法</li>
                </ul>
                <div class="lunch_price">
                    ￥88.88
                </div>
            </div>
        </div>
        <div class="lunch_box_">
            <div class="lunch_box_menu" v-for="(tab,index) in lunch_content" :key="index">
                <ul class="lunch_menu">
                    <li>黯然销魂饭</li>
                    <li>电影《食神》 里边的一碗普通叉烧饭加荷包蛋的叫法</li>
                </ul>
                <div class="lunch_price">
                    ￥88.88
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        lunch_content:[
          {
            txt:''
          },
          {
            txt:''
          },
          {
            txt:''
          },
          {
            txt:''
          },
          {
            txt:''
          }
        ]
      }
    },
    methods:{
      toggle(i,v){
        this.active=i;
        this.currentView=v;
      }
    }
  }
</script>

<style lang="scss">
    .lunch_box{
        width: 100%;
        height: 360px;
        margin-top: 20px;
        .lunch_box_{
            width: 50%;
            height: 360px;
            float: left;
            .lunch_box_menu{
                width: 100%;
                height: 20%;
                .lunch_menu{
                    width: 70%;
                    height: 72px;
                    float: left;
                    list-style:none;
                    margin: 0;
                    padding: 0 0 0 20px;
                    li{
                        width: 100%;
                        height: 36px;
                        text-align: left;
                        color: tan;
                        line-height: 36px;
                    }
                }
                .lunch_price{
                    width: 20%;
                    height: 72px;
                    float: left;
                    line-height: 72px;
                }
            }
        }
    }
</style>
