<template>
    <div class="carttab">
        <ul class="cart_ul_a">
            <li v-for="(item,index) in welcome" :key="index">
                <img :src="item">
                <p>
                    Babette 欢迎您的到来
                </p>
            </li>
        </ul>
        <p class="carttab_p">
            A recognized track-record of excellence
        </p>
        <ul class="cart_ul_b">
            <li v-for="(item,index) in cartlogo" :key="index">
                <img :src="item">
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          timer: null, //定时器
          mark: 0, //比对图片索引的变量
          cartlogo: [//图片路径
            require('../../assets/images/Logo0.jpg'),
            require('../../assets/images/Logo1.jpg'),
            require('../../assets/images/Logo2.jpg'),
            require('../../assets/images/Logo3.jpg'),
            require('../../assets/images/Logo4.jpg'),
            require('../../assets/images/Logo5.jpg'),
            require('../../assets/images/Logo6.jpg')
          ],
          welcome: [//图片路径
            require('../../assets/images/carttab.jpg'),
            require('../../assets/images/carttab.jpg'),
            require('../../assets/images/carttab.jpg'),
            require('../../assets/images/carttab.jpg')
          ]
        }
      }
    }
</script>
<style scoped lang="scss">
    body{
        margin:0;
    }
    .carttab{
        width: 100%;
        height: 800px;
        padding: 150px 0;
        box-sizing: border-box;
        background: url(../../assets/images/carttabbgi.jpg) no-repeat;
         /* 以父元素的百分比来设置背景图像的宽度和高度。*/
        background-size: 100% 100%;
        .cart_ul_a{
            width: 1230px;
            height: 300px;
            list-style:none;
            padding: 0;
            margin:0 auto;
            display:flex;
            justify-content : space-between;
            li{
                width: 300px;
                height: 300px;
                float: left;
                padding:0;
                position:relative;
                perspective: 1000px;
                img{
                    width: 100%;
                    height:100%;
                    transition:.5s;
                }
                p{
                    position: absolute;
                    top:0;
                    left:0;
                    width: 100%;
                    height: 100%;
                    margin:0;
                    background-color:rgba(0,0,0,.4);
                    text-align:center;
                    line-height: 300px;
                    transform:rotateY(90deg);
                    transition:.5s;
                }
                &:hover p{
                    transform:rotateY(0deg);
                }
                &:hover img{
                    transform:rotateY(-90deg);			
                }
            }
        }
        .carttab_p{
            text-align: center;
            line-height: 50px;
            margin: 32px 0;
        }
        .cart_ul_b{
            list-style: none;
            width: 800px;
            padding: 0;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
        }
    }    
</style>