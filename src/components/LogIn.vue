<template>
  <!-- <div class="hello">
      <label>Hints</label>
      
<p>
       username: kminchelle<br/>
     password: 0lelplR
      </p>
 
    <form >
      <h1> Login Page</h1>
    <label>UserName</label>
    
    
   <input type="text" placeholder="username" v-model="userData.username" required>
    
   <br>
   <br>
<label>Password</label>
   <input type="password" placeholder="password" v-model="userData.password" required>
<br><br>
  <button type="submit" @click="Login()" id=" submit">Login</button>
  <p>
    you are not register then,<br>
    <a href="#">Signup</a>
  </p>
</form> -->

<v-form
  ref="form"
  v-model="valid"
  lazy-validation
  style="margin:120px;width:30rem;"
>
<v-card-title class="success darken-2 text-left " >  <span class="white--text">Login </span></v-card-title>
  <v-text-field
  v-model="userData.username"
   :counter="20"
    :rules="nameRules"
    label="UserName"
    required
  ></v-text-field>

  <v-text-field
  v-model="userData.password" 
  :rules="emailRules"
    label="Password"
    required
  ></v-text-field>

  
  <v-btn
    :disabled="!valid"
    
    color="success"
    class="mr-4"
    @click="Login()"
  >
    Login
  </v-btn>

</v-form>
  <!-- </div> -->
</template>

<script>

export default {
  
  data() {
    return{
  userData:{
    username:"",
    password:"",
  
  }}
  },
  methods:{
    async Login() {
      // event.preventDefault()
      const fetched =await fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    // username: 'kminchelle',
    //  password: '0lelplR'
    username: this.userData.username,
    password: this.userData.password,
    // expiresInMins: 60, // optional
  })
})

 const loginjson = await fetched.json();
 console.log(loginjson)
 await localStorage.setItem('login', JSON.stringify(loginjson))
 console.log(loginjson);
 if(!loginjson.token){
  alert ("The username or password is incorrect!")
 }else{
      // window.location.href = "Home.vue";
      this.$router.push({name:'about'})
 }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
