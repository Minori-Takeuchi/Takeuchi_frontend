<template>
  <div>
    <div class="container flex">
      <SideNav @sendPost="newPost" class="side"></SideNav>
      <div class="main">
        <div class="wrap-s">
          <p class="ttl m-15">ホーム</p>
        </div>
        <div class="wrap-m">
          <Message v-for="(post,index) in displayPosts" :key="index" :post="post"></Message>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [{}],
    }
  },
  computed: {
    displayPosts() {
      return this.posts.user_id === this.$store.state.user;
  },
  },
  methods: {
    async getPost() {
      const resData = await this.$axios.get("http://127.0.0.1:8000/api/post/");
      this.posts = resData.data.data
    },
    newPost(sendData) {
      this.posts.push(sendData);
    },
    
  },
  async created() {
    await this.getPost()
  }
  
}
</script>
<style>

</style>
<style>
.container {
  width: 100vw;
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
  position: sticky;
  top:0;
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