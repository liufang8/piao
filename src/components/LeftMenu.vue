<template>
  <div class="left-menu" v-show="showLeftNav">
    <div class="left-menu-container" @click="toggleLeftNav">
    	<div class="left-menu-overlayer sidebar">
        <transition name="left-menu"
            @enter="beforeEnter"
            @leave="beforeLeave">
      			<nav class="left-menu-nav" v-show="showLeftNav">
      				<ul>
      					<li>
                  <a href="/#/home">
                    <span>首页</span>
                    <i class="iconfont icon-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>影片</span>
                    <i class="iconfont icon-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>影院</span>
                    <i class="iconfont icon-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="/#/userlogin">
                    <span>我的</span>
                    <i class="iconfont icon-arrow-right"></i>
                  </a>
                </li>
      				</ul>
            </nav>
          </transition>
       </div>
      </div>
  	</div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

	export default {
    computed: mapGetters([
      'showLeftNav'
    ]),

    methods: {
      beforeEnter(el) {
        el.parentElement.style.opacity = 1;
      },
      beforeLeave(el) {
        el.parentElement.style.opacity = 0;
      },
      ...mapActions([
        'toggleLeftNav'
      ])
    }
  }
</script>

<style lang="sass">
	.left-menu {
    .left-menu-container {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 501;

      .left-menu-overlayer {
    		position: absolute;
    		top: 50px;
    		left: 0;
    		right: 0;
    		bottom: 0;
        opacity: 1;
    		background: rgba(0, 0, 0, 0.5);

        .left-menu-nav {
          position: absolute;
          top: 0;
          right: 110px;
          bottom: 0;
          left: 0;
          display: block;
          background: #282828;
          border-top: 1px solid #222;
          box-shadow: 0 1px 1px #363636 inset;

          li {
            height: 50px;
            line-height: 50px;

            a {
              color: #9a9a9a;
              font-size: 14px;
              display: block;
              padding: 0 16px;
              border-bottom: 1px dotted #333;

              i {
               float: right;
               color: #666;
               font-size: 14px;
              }
            }
          }
        }
    	}

      .sidebar {
        transition: all ease .4s;
        -webkit-transition: all ease .4s;
      }
    }
  .left-menu-enter-active,
  .left-menu-leave-active {
    transition: right .4s ease;
  }

  .left-menu-enter {
    right: 320px;
  }
  .left-menu-leave-active {
    right: 110px;
  }
}



</style>
