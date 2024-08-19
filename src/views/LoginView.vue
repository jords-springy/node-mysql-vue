<template>
    <button @click="signUp = !signUp">SignUp / Login</button>
    <div v-if="signUp">
      <h1>hehehe Register</h1>
      <table border="1">
        <tr>
          <th><label>Enter Name</label></th>
          <td><input type="text" v-model="name"></td>
        </tr>
        <tr>
          <th><label>Enter Surname</label></th>
          <td><input type="text" v-model="surname"></td>
        </tr>
        <tr>
          <th><label>Enter Age</label></th>
          <td><input type="text" v-model="age"></td>
        </tr>
        <tr>
          <th><label>Favorite Coding Language</label></th>
          <td><input type="text" v-model="fav_coding_lang"></td>
        </tr>
        <tr>
          <th><label>Favorite Car</label></th>
          <td><input type="text" v-model="fav_car"></td>
        </tr>
        <tr>
          <th><label>Eye Color</label></th>
          <td><input type="text" v-model="eye_color"></td>
        </tr>
        <tr>
          <th><label>Username</label></th>
          <td><input type="text" v-model="username"></td>
        </tr>
        <tr>
          <th><label>Password</label></th>
          <td><input type="password" v-model="password"></td>
        </tr>
        <tr>
          <td colspan="2"><button @click="addUser()">Submit</button></td>
        </tr>
      </table>
    </div>
    <div v-else>
      <h1>hehehehe Login</h1>
      <table>
        <tr>
          <th><label>Username</label></th>
          <td><input type="text" v-model="username"></td>
        </tr>
        <tr>
          <th><label>Password</label></th>
          <td><input type="password" v-model="password"></td>
        </tr>
        <tr>
          <td colspan="2"><button @click="loginUser()">Submit</button></td>
        </tr>
      </table>
    </div>
  </template>
  
<script>
export default {
    data(){
        return {
            name:"",
            surname:"",
            age:"",
            fav_coding_lang:"",
            fav_car:"",
            eye_color:"",
            username:"",
            password:"",
            signUp:true
        }
    },
    methods:{
        addUser(){
            this.$store.dispatch('addUser',this.$data)
        },
        loginUser(){
            this.$store.dispatch('loginUser',{username:this.username,password:this.password})
            location.reload()
        }
    },
    mounted(){
        this.addUser()
    },
    
}
</script>
<style>
table{
    margin: auto;
}
</style>