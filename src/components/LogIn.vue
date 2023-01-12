<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validationd
    style="margin: 12rem; margin-left: 20rem; max-width: 30rem; height: 100rem"
  >
    <p>
      username: kminchelle<br />
      password: 0lelplR
    </p>
    <v-card-title class="success darken-2 text-leftfont-weight-bold">
      <span class="white--text">Login </span>
    </v-card-title>
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
      color="success darken-2"
      class="mr-4"
      @click="Login()"
    >
      Login
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async Login() {                                      //function on login button
      const fetched = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.userData.username,              //input date binds 
          password: this.userData.password,
        }),
      });

      const login = await fetched.json();           //change in json
      await localStorage.setItem("Login", JSON.stringify(login));   //store data in localstorage
      if (!login.token) {                           //condition for authentication check
        alert("The username or password is incorrect!");
      } else {
        this.$router.push({ name: "LoginView" });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
