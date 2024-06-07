<template>
    <header>
      <RouterLink to="/"><button class="logo"><img src="./icons/dot.jpeg"></button></RouterLink>
  
      <RouterLink to="/Game">Play</RouterLink>
      <RouterLink to="/Records">Records</RouterLink>
      
  
      <div class="icons">
        
  
        <button @click="handleButtonClick"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
              clip-rule="evenodd" />
          </svg></button>
  
        <button v-if="isAuthenticated" @click="logout"><svg class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
          </svg></button>
      </div>
    </header>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        isAuthenticated: false,
        showDropdown: false
      }
    },
    mounted() {
      console.log(localStorage.getItem("user"));
      this.isAuthenticated = localStorage.getItem("user") !== null ? true : false;
    },
    methods: {
      hideDropdown() {
        setTimeout(() => {
          this.showDropdown = false;
        }, 200)
      },
      logout() {
        localStorage.removeItem("user");
        this.isAuthenticated = false;
        location.reload();
      },
      handleButtonClick() {
        if (this.isAuthenticated) {
          this.$router.push('/Game');
        } else {
          this.$router.push('/Login');
        }
      },
      navigateToShoppingCart() {
           this.$router.push('/ShoppingCart');
      }
    },
  }
  </script>
  
  <style scoped>
  header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000B1C;
  }
  
  header a {
    color: white;
    text-decoration: none;
  }
  
  .logo {
    order: 1;
    margin-left: 50px;
    cursor: pointer;
  }
  
  .magglass {
    position: absolute;
    cursor: pointer;
    border-radius: 75%;
    transform: translateY(-50%);
    margin-left: 295px;
    margin-top: 33px;
  }
  
  input {
    width: 60%;
    border-radius: 15px;
    border: none;
    padding: 0.5rem;
    color: white;
    background-color: #103973;
  }
  
  input:focus {
    outline: none;
    color: white;
    background-color: #103973;
  }
  
  input::placeholder {
    color: white;
  }
  
  .icons {
    order: 4;
    margin-right: 50px;
  }
  
  img {
    width: 10%;
  }
  
  button img {
    padding: 0;
    width: 80px;
    background: none;
  }
  
  button {
    cursor: pointer;
    color: white;
    background: none;
    border: none;
  }
  
  </style>
  