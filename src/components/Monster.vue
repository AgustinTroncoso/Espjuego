<template>
    <div>
      <h2>El diablo</h2>
      <img :src="monsterGifUrl" alt="Monstruo" class="monster-gif"/>       
      <p>Vida: {{ health }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      health: {
        type: Number,
        required: true,
      },
    monsterGifUrl: {
      type: String,
      required: true,
    },

    },
    methods: {
      attackPlayer() {
        return Math.floor(Math.random() * 10) + 1;
      },
    },
  };
  </script>
  
  <style scoped>
 .monster-gif {
  width: 200px; 
  height: auto; 
}
  </style>
  