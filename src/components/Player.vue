<template>
    <div>
      <h2>Player {{ playerNumber }}</h2>
      <img :src="playerGifUrl" alt="Jugador" class="player-gif" />
      <p>Vida: {{ health }}</p>
      <p>Mana: {{ mana }}</p>
      <p>Daño total: {{ totalDamage }}</p>
      <button @click="attack('physical')" :disabled="!isTurn || isDefeated">Atack</button>
      <button @click="attack('magic')" :disabled="!isTurn || mana < 10 || isDefeated">Use magic</button>
      <button @click="handleRegenerateMana" :disabled="!isTurn || isDefeated">Recharge   Mana</button>
    </div>
    <audio ref="attackSound" src="../assets/Punch"></audio>
  </template>
  
  <script>
  export default {
    props: {
      playerNumber: {
        type: Number,
        required: true,
      },  playerGifUrl: {
      type: String,
      required: true,
    },
      isTurn: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        totalDamage: 0,
        health: 100,
        mana: 0,
        isDefeated: false,
      };
    },
    methods: {
      attack(type) {
        let damage = 0;
        if (type === 'physical') {
          damage = Math.floor(Math.random() * 10) + 1;
          
        } else if (type === 'magic' && this.mana >= 10) {
          damage = Math.floor(Math.random() * 20) + 5;
          this.mana -= 10;
        }
        this.totalDamage += damage;
        this.$emit('attack', { damage, playerNumber: this.playerNumber });
        this.$refs.attackSound.play();
      },
      receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
          this.health = 0;
          this.isDefeated = true;
          this.$emit('defeated', this.playerNumber);
        }
      },
      handleRegenerateMana() {
        this.regenerateMana();
        this.$emit('manaRecharged', { playerNumber: this.playerNumber });
      },
      regenerateMana() {
        this.mana = Math.min(this.mana + 10, 50); 
      },
    },
  };
  </script>
  
  <style scoped>
 .player-gif {
  width: 100px; 
  height: auto; 
}
#p{
  color: white;
}
  </style>
  