<template>
	<div id="user-info">
	  <section>
      <form>
        <div class="from-group">
          <input type="text" name="username" placeholder="请输入手机号/邮箱">
          <div class="input-bg"></div>
        </div>
        <div class="from-group">
          <input type="text" name="password" placeholder="请输入密码">
          <div class="input-bg"></div>
        </div>
        <button type="submit" class="submit" @click.stop="submit">登陆</button>
      </form>
    </section>
	</div>
</template>

<script>
	export default {
    methods: {
      submit() {
        // alert("qingd");
      }
    }
	}
</script>

<style lang="sass">
	#user-info {
		padding: 50px 0 0;

    section {
      position: absolute;
      background: #f6f6f6;
      padding-top: 30px;
      width: 100%;
      height: 100%;

      form {
        margin: 0 31px 0 31px;

        .from-group {
          position: relative;
          margin-top: 30px;
          height: 34px;

          input {
            line-height: 1.4435;
            padding: 6px 12px;
            border: none;
            outline: none;
            box-shadow: none;
            border-radius: 0;
            font-size: 14px;
            background: #f6f6f6;
          }

          .input-bg {
            position: absolute;
            top: 20px;
            height: 10px;
            width: 100%;
            border-style: solid;
            border-color: #c4c4c4;
            border-width: 0 1px 1px 1px;
          }
        }

        .submit {
          display: block;
          width: 163px;
          padding: 8px 12px;
          margin: 40px auto 0 auto;
          border: none;
          border-radius: 36px;
          outline:none;
          color: white;
          background-color: #fe8233;
        }
      }
    }
	}

</style>
