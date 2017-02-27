<template>
	<div class="topmenu">
  	<div>
      <span class="topmenu-title-icon" @click='toggleLeftNav'>
        <i class="iconfont icon-list"></i>
      </span>
      <span class="topmenu-title">电影票</span>
    </div>
		<div>
      <a href="#/userlogin" class="topmenu-user">
        <i class="iconfont icon-user"></i>
      </a>
    </div>
	</div>
</template>

<script>
  import { mapActions } from 'vuex'
	export default {
    methods: mapActions([
      'toggleLeftNav'
    ])
	}

</script>

<style scoped>
	.topmenu {
		background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
	}

  .topmenu .iconfont {
     color: #999;
  }

	.topmenu-title {
		padding: 0 1em;
    float: left;
    font-size: 14px;
    font-weight: bold;
    color: #efefef;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;

	}
	.topmenu-title-icon {
    float: left;
    width: 48px;
    text-align: center;
    border-right: 1px solid #222;
    box-shadow: 1px 0 1px #363636;
	}

  .topmenu-user {
    float: right;
    font-size: 16px;
    width: 48px;
    text-align: center;
  }


</style>
