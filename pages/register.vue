<template>
  <div>
    <label>uid</label>
    <input type="text" v-model="user">
    <label>名前</label>
    <input type="text" v-model="name">
    <button type="submit" @click="insertUser()">送信</button>
    <div>{{ $store.state.user }}</div>
    <div>{{ this.name }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: '',
      name: '',
    }
  },
  methods: {
    getUser() {
        
      },
      async insertUser() {
        const sendData = {
          id: this.user,
          name: this.name
        }
        await this.$axios.post("http://127.0.0.1:8000/api/auth/login/",sendData);
        this.$store.dispatch(`loginAction`, this.user);
        this.$router.push('/register');
        console.log(sendData);
      }
  }
}
</script>