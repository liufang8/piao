<template>
  <div class="film-detail">
    <div>
      <CenterImage :src='film.cover.origin'></CenterImage>
    </div>
    <div class="film-intro">
      <div class="film-title">影片介绍</div>
      <div>
        <span>导&nbsp;&nbsp;演:</span>
        <span>{{film.director}}</span>
      </div>
      <div>
        <span>地区语言:</span>
        <span class="film-nation-language">{{film.nation}}({{film.language}})</span>
      </div>
      <div>
        <span>类&nbsp;&nbsp;型:</span>
        <span>{{film.category}}</span>
      </div>
      <div>
        <span>上映日期:</span>
        <span>{{date}}</span>
      </div>
      <div>
        {{film.synopsis}}
      </div>
    </div>
  </div>
</template>

<script>
  import CenterImage from './CenterImage.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'FilmDetail',

    computed: {
      date: function(prop) {
        var date = new Date(prop.film.premiereAt);
        return (date.getMonth() + 1) + '月' + date.getDate() + '日上映';
      },
      ...mapGetters({
        film: 'detail'
      })
    },

    methods: mapActions([
      'getFilmDetail'
    ]),

    created() {
      this.getFilmDetail();
    },

    components: {
      CenterImage
    }
  }
</script>

<style lang="sass">
  .film-detail {
    padding-top: 50px;

   .film-intro {
    .film-title {
      margin: 16px auto;
      border-left: 16px solid RGB(228, 200, 156);
      padding-left: 4px;
    }

    div:not(:first-child){
      font-size: 14px;
      margin-bottom: 10px;
      overflow: hidden;

      span:first-child{
        padding-left: 16px;
      }
    }

    div:last-child {
      overflow:ellipsis;
      padding: 0 20px 0;
      margin-bottom: 80px;
    }

   }
  }
</style>
