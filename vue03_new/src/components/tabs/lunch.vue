<template>
    <div class="lunch_box">
        <div class="lunch_box_">
            <div class="lunch_box_menu" v-for="(tab,index) in lunch_content" :key="index">
                <!-- {{tab.txt}} -->
                <ul class="lunch_menu">
                    <li>红烧狮子头</li>
                    <li>由六成肥肉和四成瘦肉加上葱、姜、鸡蛋等配料斩成肉泥，做成拳头大小的肉丸</li>
                </ul>
                <div class="lunch_price">
                    ￥88.88
                </div>
            </div>
        </div>
        <div class="lunch_box_">
            <div class="lunch_box_menu" v-for="(tab,index) in lunch_content" :key="index">
                <ul class="lunch_menu">
                    <li>红烧狮子头</li>
                    <li>由六成肥肉和四成瘦肉加上葱、姜、鸡蛋等配料斩成肉泥，做成拳头大小的肉丸</li>
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
                        line-height: 36px;
                    }
                    li:nth-child(1){
                        cursor: pointer;
                        color: #282828;
                        font-weight: bold;
                    }
                    li:nth-child(2){
                        font-size:14px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        color: #a4a4a4;
                    }
                }
                .lunch_price{
                    width: 20%;
                    height: 72px;
                    float: left;
                    line-height: 72px;
                    color: #bb9357;
                    font-weight: bold;
                }
            }
        }
    }
</style>
