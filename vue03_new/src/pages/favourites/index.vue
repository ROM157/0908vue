<template>
    <div class="favourites">
        <div class="fav_con">
            <p>Our Favourites</p>
            <p>Discover Our Menu</p>
            <div class="fav_box">
                <div class="fav_box_c">
                    <!-- 2开始 -->
                    <ul class="tabs">
                      <li v-for="(tab,index) in tabs" @click="toggle(index,tab.view)" :class="{active:active==index}" :key="index">
                        {{tab.type}}
                      </li>
                    </ul>
                    <!-- // 子组件，显示不同的 tab
                    // is 特性动态绑定子组件 ;;;实现多个组件实现同一个挂载点
                    // keep-alive 将切换出去的组件保留在内存中 -->
                    <component :is="currentView"></component>
                    <!-- 2结束 -->
                </div>
                <div class="triangle-topleft"></div>
                <div class="triangle-topright"></div>
                <div class="triangle-txt">
                    Full Menu
                </div>
            </div>
        </div>
    </div>
</template>

<!--这里是js代码-->
<script>
// 引入子组件
// import swiper from "@/views/swiper/swiper.vue";
import lunch from '@/components/tabs/lunch.vue';
import dinner from '@/components/tabs/dinner.vue';
import dessert from '@/components/tabs/dessert.vue';
import dirnks from '@/components/tabs/dirnks.vue';

export default {
  name: 'app',
  data(){
    return {
      active:0,
      currentView:'lunch',
      tabs:[
        {
          type:'lunch',
          view:'lunch'
        },
        {
          type:'dinner',
          view:'dinner'
        },
        {
          type:'dessert',
          view:'dessert'
        },
        {
          type:'dirnks',
          view:'dirnks'
        }
      ]
    }
  },
  methods:{
    toggle(i,v){
      this.active=i;
      this.currentView=v;
    }
  },
  components:{
    lunch,
    dinner,
    dessert,
    dirnks,
  }
}
</script>

<style scoped lang='scss'>
.favourites{
    width: 100%;
    height: 800px;
    background-color: #252525;
    .fav_con{
        width: 1200px;
        height: 800px;
        margin: 0 auto;
        padding-top: 80px;
        box-sizing: border-box;
        p{
            text-align: center;
            line-height: 50px;
            margin: 0;
            color: #fff;
        }
        p:nth-child(1){
            font-size: 20px;
        }
        p:nth-child(2){
            font-size: 30px;
            font-weight: bold;
        }
        .fav_box{
            width: 100%;
            height: 70%;
            margin-top: 2%;
            background-color: #FFFFFF;
            position: relative;
            .fav_box_c{
                width: 90%;
                height: 80%;
                position: absolute;
                top:10%;
                left: 5%;
                /*  */
                .tabs{
                    width: 36%;
                    list-style:none;
                    padding:0;
                    margin:0 auto;
                    display:flex;
                    justify-content : space-between;
                    li{
                        width: 20%;
                        float: left;
                        padding: 0;
                        text-align: center;
                        line-height: 26px;
                        color: #000;
                        font-size: 18px;
                        cursor: pointer;
                    }
                    .active{
                        color: #c7a254;
                        border-bottom: 2px solid #c7a254;
                    }
                }
                /*  */
            }
            .triangle-topleft { 
                width: 0;
                height: 0;
                border-top: 70px solid #b88b41;
                border-right: 100px solid transparent;
                position: absolute;
                left: 45%;
                bottom: -70px;
            }
            .triangle-topright {
                width: 0;
                height: 0; 
                border-top: 70px solid #b88b41; 
                border-left: 100px solid transparent;
                position: absolute;
                left: 45%;
                bottom: -70px;
            }
            .triangle-txt{
                width: 100px;
                height: 30px;
                text-align: center;
                line-height: 30pxs;
                position: absolute;
                left: 45%;
                bottom: -42px;
                color: #fff;
            }
        }
    }
}

</style>
