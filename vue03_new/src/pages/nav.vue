<template>
  <div id="app">
    <div class="header">
      <div class="header_con">
        <div class="logo commom_display">
          <span class="commom_span">
            <img class="commom_img" src="../assets/images/Logo.png" />
          </span>
        </div>
        <div id="nav">
          <ul>
              <li>
                  <router-link class="commom_a" replace to="/">Home</router-link>
              </li>
              <li>
                  <router-link class="commom_a" replace to="/about">About</router-link>
              </li>
              <li>
                  <router-link class="commom_a" replace to="/menu">Menu</router-link>
              </li>
              <li>
                  <router-link class="commom_a" replace to="/gallery">Gallery</router-link>
              </li>
              <li>
                  <router-link class="commom_a" replace to="/blog">Blog</router-link>
              </li>
              <li>
                  <router-link class="commom_a" replace to="/features">Features</router-link>
              </li>
              <li>
                  <router-link class="commom_a" replace to="/shop">Shop</router-link>
              </li>
          </ul>
        </div>
        <div class="search commom_display">
          <span class="commom_span">
            <img class="commom_img" src="../assets/images/Search.png" />
          </span>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.commom_display{
  display:table;
  .commom_span{
     display: table-cell;
     vertical-align: middle;
     .commom_img,.commom_a{
      display: inline-block;
     }
  }
}
.header{
  width: 100%;
  height: 80px;
  background-color: #252525;
  border-bottom: 1px solid #3e3e3e;
  .header_con{
    width: 80%;
    height: 80px;
    margin: 0 auto;
    .logo{
        width: 10%;
        height:100%;
        float:left;
        img{
            width: 100%;
        }
    }
    #nav {
      width: 60%;
      height: 100%;
      float:left;
      margin-left:5%;
      ul{
        list-style:none;
        padding:0;
        margin:0;
        display:flex;
        justify-content : space-between;
        li{
            width: 100px;
            height: 80px;
            float: left;
            padding:0;
            text-align: center;
            line-height: 80px;
            color: #fff;
        }
      }
      a {
        display: block;
        width: 100%;
        font-weight: bold;
        color: #fff;
        text-decoration:none;
        &.router-link-exact-active {
          color: #c7a254;
          border-bottom: 2px solid #c7a254;
        }
      }
    }
    .search{
       width: 1%;
       height: 100%;
       float:left;
       margin-left: 2%;
       img{
           width: 100%;
       }
    }
  }
}

</style>
