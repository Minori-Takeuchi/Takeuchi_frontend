<template>
  <div class="post wrap-m">
    <div class="post-item flex">
      <p class="post-user txt">{{ $store.state.user }}</p>
      <img src="~/assets/img/heart.png" alt="いいね" class="item-img">
      <p class="txt">2</p>
      <img src="~/assets/img/cross.png" alt="削除" @click="deletePost" class="item-img">
      <img src="~/assets/img/detail.png"  alt="コメントへ" class="item-img" @click="goPostDetail">
    </div>
    <br>
    <div class="post-content txt">{{ post.content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
    like: {
      type: Object,
    },
  },
  data() {

  },
  methods: {
    async getPost() {
      const resData = await this.$axios.get("http://127.0.0.1:8000/api/post/");
      this.posts = resData.data.data
    },
    async deletePost(id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/post/" + id)
      this.getPost();
    },
    goPostDetail() {
      this.$router.push({ path: `/posts/${this.id}` });
    },
    created() {
      this.getPost();
    },
  },
}
</script>
<style>
.post {
  width: 100%;
}

.wrap-m {
  width: 100%;
  border-left: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
}

.post-item {
  padding-top: 15px;
}

.post-user {
  font-weight: bold;
}

.post-content {
  display: inline;
  padding-bottom: 10px;
}

.post-item .item-img:last-child {
  margin-left: 50px;
}
</style>