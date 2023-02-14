<template>
  <div>
    <div class="container flex">
      <SideNav class="side"></SideNav>
      <div class="main">
        <div class="wrap-s">
          <p class="ttl m-15">ホーム</p>
        </div>
        <div class="wrap-m">
          <Message v-for="(post,index) in posts" :key="index" :post="post"></Message>
          <p class="txt">{{ resData }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          user_id: 'u-iddayo',
          content: '内容'
        },
        {
          user_id: 'u-iddayo',
          content: '内容2'
        }]
    }
  },
  methods: {
    async getPost() {
      const resData = await this.$axios.get("http://127.0.0.1:8000/api/post/");
      if (resData.user_id == $store.state.user) {
        this.posts.user_id = resData.user_id
        this.posts.content = resData.content
      }

    },
  },
  created() {
    this.$nuxt.$on('sendPost', posts => {
      this.posts = posts;
    });
  },
}
</script>
<style>

</style>
<style>
.container {
  width: 100vw;
  height: 100vh;
  background: black;
}

.main {
  width: 80vw;
}

.flex {
  display: flex;
}

.side {
  width: 20vw;
}

.txt {
  text-decoration: none;
  color: white;
  display: inline-block;
  align-items: center;
  margin: 10px;
}

.m-15 {
  margin: 15px;
  height: 100%;
}

.wrap-s {
  width: 100%;
  border: 3px solid white;
}

.ttl {
  color: white;
  display: inline-block;
  align-items: center;
  padding-left: 20px;
}

.item-img {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.btn {
  cursor: pointer;
}
</style>