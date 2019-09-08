<template>
    <div class="list_img">
        <ul>
            <li class="img_li" v-for="( img_ , index ) in list_img" :key="index">
                <img :src="img_" />
            </li>
            <li style="clear:both;"></li>
        </ul>
    </div>
</template>

<script>
    export default ({
        data(){
            return{
                list_img:[
                    require('../../assets/images/carttab.jpg'),
                    require('../../assets/images/carttab.jpg'),
                    require('../../assets/images/carttab.jpg'),
                    require('../../assets/images/carttab.jpg'),
                    require('../../assets/images/carttab.jpg'),
                    require('../../assets/images/carttab.jpg'),
                    require('../../assets/images/carttab.jpg'),
                    require('../../assets/images/carttab.jpg')
                ]
            }
        }
    })
</script>

<style scoped lang="scss">
  .list_img{
      width: 100%;
      height: auto;
      ul{
          width: 100%;
          height: auto;
          list-style: none;
          padding: 0;
          margin: 0;
          .img_li{
              width: 25%;
              float: left;
              border:1px solid #eee;
              box-sizing:border-box;
              cursor: pointer;
              img{
                  display: block;
                  width: 100%;
              }
          }
      }
  }
</style>
