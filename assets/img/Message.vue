<template>
  <div class="post wrap-m">
    <div class="post-item flex">
      <p class="post-user txt">ユーザー名</p>
      <img src="~/assets/img/heart.png" alt="いいね" class="item-img">
      <p class="txt">2</p>
      <img src="~/assets/img/cross.png" alt="削除" class="item-img">
      <img src="~/assets/img/detail.png" alt="コメント" class="item-img">
    </div>
    <br>
    <div class="post-content txt">内容</div>
  </div>
</template>
<style>
.post {
  width: 100%;
  height: 100px;
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

.post-content {
  display: inline;
  padding-bottom: 20px;
}

.post-item .item-img:last-child {
  margin-left: 50px;
}
</style>