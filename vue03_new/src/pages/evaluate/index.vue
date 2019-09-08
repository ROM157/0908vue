<template>
    <div class="evaluate">
        <div class="evaluate_con">
            <p>Our Guestbook</p>
            <p>People Say About Us! </p>
            <p>
                <img src="../../assets/images/Divider.jpg" />
            </p>
            <div class="evaluate_box">
               <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
                 <div class="slideshow">
                   <transition-group tag="ul" name="image">
                     <li v-for="(item, index) in pathArray" v-show="index===mark" :key="index" :style="item">
                       
                     </li>
                   </transition-group>
                 </div>
                 <div class="bar">
                   <span v-for="(item, index) in pathArray" :class="{ 'active':index===mark }"
                   @click="change(index)" :key="index"></span>
                 </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null, //定时器
      mark: 0, //比对图片索引的变量
      // imgArray: [//图片路径
      //   require('../../assets/images/banner1.jpg'),
      //   require('../../assets/images/banner2.jpg'),
      // ],
      pathArray: [
          'background-color:pink;',
          'background-color:gray;',
      ]
    }
  },
  methods: {
    autoPlay () {
      this.mark++;
      if (this.mark === 2) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    }
  },
  created () {
    this.play()
  }
}
</script>

<style scoped lang="scss">
    .evaluate{
        width: 100%;
        height: 800px;
        background-color: #fcfcfc;
        .evaluate_con{
            width: 1200px;
            height: 800px;
            margin: 0 auto;
            padding-top: 80px;
            box-sizing: border-box;
            p{
                text-align: center;
                line-height: 50px;
                margin: 0;
            }
            p:nth-child(1){
                font-size: 20px;
                color: #ceae6b;
            }
            p:nth-child(2){
                font-size: 30px;
                font-weight: bold;
                color: #222222;
            }
            .evaluate_box{
                width: 100%;
                height: 70%;
                margin-top: 2%;
                background-color: #FFFFFF;
                .slide{
                    width: 100%;
                    height: 100%;
                    .slideshow{
                        width: 100%;
                        height: 100%;
                        ul{
                            width: 100%;
                            height: 100%;
                            list-style: none;
                            padding: 0;
                            margin: 0;
                            li{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    .bar{
                        width: 2%;
                        height: 20px;
                        margin: 0 auto;
                        display: flex;
                        justify-content : space-between;
                        span{
                            display: block;
                            width: 6px;
                            height: 6px;
                            background-color: gray;
                            margin: 7px 0;
                            border-radius: 50%;
                        }
                        .active{
                            background-color: #000000;
                        }
                    }
                }
            }
        }
    }
</style>
