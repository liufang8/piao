<template>
	<div class="film-item" @click="goDetail">
		<div class="film-item-image">
			<CenterImage :src='film.cover.origin'></CenterImage>
		</div>
		<div class="film-item-desc">
			<div class="fi-desc-left">
				<div class="fname">{{film.name}}</div>
				<div class="fcount">{{film.cinemaCount}} 家电影院上映 {{film.watchCount}}人购票</div>
			</div>
			<div class="fi-desc-right">
				<span class="fscore">{{film.grade}}</span>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import CenterImage from './CenterImage.vue'
  import { mapActions } from 'vuex'

	export default {
		props: {
			film:{
				type: Object,
				required: true
			}
		},
    methods: {
      goDetail() {
        this.$router.push('/film/12');
      }
    },
		components: {
			CenterImage
		}
	}
</script>

<style scoped>
	.film-item {
    overflow: hidden;
    margin: 0 17px 17px 17px;
		background: #f9f9f9;
		cursor: pointer;
	}

	.film-item-desc {
		clear: both;
	}

	.fi-desc-left {
		float: left;
		padding: 13px 0 13px 13px;
	}
	.fi-desc-left .fname {
		font-size: 12px;
		line-height: 15px;
		text-align: left;
	}
	.fi-desc-left .fcount {
		font-size: 8px;
    color: #9a9a9a;
    padding-top: 3px;
    line-height: 15px;
	}
	.fi-desc-right {
		float: right;
	}
	.fi-desc-right .fscore {
    display: inline-block;
    padding-top: 9px;
    padding-right: 13px;
    font-size: 18px;
    color: #f78360;
	}
</style>
