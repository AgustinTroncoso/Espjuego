<template>
    <div>
      <div class="monster-container">
      <Monster :health="monsterHealth" :monsterGifUrl="monsterGifUrl" ref="monster" />
    </div>
      <div class="players-container">
        <div class="player-container">
            <Player ref="player1" :isTurn="turn === 1" playerNumber="1" :playerGifUrl="player1GifUrl" @attack="handleAttack" @manaRecharged="handleManaRecharge" @defeated="handleDefeat" />
        </div>
        <div class="player-container">
            <Player ref="player2" :isTurn="turn === 2" playerNumber="2" :playerGifUrl="player2GifUrl" @attack="handleAttack" @manaRecharged="handleManaRecharge" @defeated="handleDefeat" />
        </div>
      </div>
      <div v-if="monsterHealth <= 0">
        <h2>El monstruo ha sido derrotado!</h2>
        <p>Jugador 1 daño total: {{ player1Damage }}</p>
        <p>Jugador 2 daño total: {{ player2Damage }}</p>
        <p v-if="player1Damage > player2Damage">¡Jugador 1 gana!</p>
        <p v-else-if="player2Damage > player1Damage">¡Jugador 2 gana!</p>
        <p v-else>¡Es un empate!</p>
      </div>
      <div v-if="player1Defeated || player2Defeated">
        <h2>¡Un jugador ha sido derrotado!</h2>
        <p v-if="player1Defeated">Jugador 1 ha sido derrotado</p>
        <p v-if="player2Defeated">Jugador 2 ha sido derrotado</p>
      </div>
    </div>
   
  </template>
  
  <script>
  import Monster from './Monster.vue';
  import Player from './Player.vue';
  
  export default {
    components: {
      Monster,
      Player,
    },
    data() {
      return {
        monsterHealth: 100,
        monsterGifUrl: 'https://static.planetminecraft.com/files/avatar/2441768_2.gif',
        player1GifUrl: 'https://cdnb.artstation.com/p/assets/images/images/061/276/935/original/michael-yosan-andaria-omni-idle.gif?1680420788', 
          player2GifUrl: 'https://cdnb.artstation.com/p/assets/images/images/061/276/833/original/michael-yosan-tridon-omni-idle.gif?1680420437', 
        player1Damage: 0,
        player2Damage: 0,
        player1Defeated: false,
        player2Defeated: false,
        turn: 1, 
      };
    },
    methods: {
      handleAttack({ damage, playerNumber }) {
        this.monsterHealth -= damage;
        if (this.monsterHealth < 0) this.monsterHealth = 0;
  
        if (playerNumber == 1) {
          this.player1Damage += damage;
        } else {
          this.player2Damage += damage;
        }
  
      
        this.monsterAttack();
        this.toggleTurn();
      },
      handleManaRecharge({ playerNumber }) {
       
        this.monsterAttack();
        this.toggleTurn();
      },
      monsterAttack() {
        const damage = this.$refs.monster.attackPlayer();
        if (this.turn === 1) {
          this.$refs.player2.receiveDamage(damage);
        } else {
          this.$refs.player1.receiveDamage(damage);
        }
      },
      toggleTurn() {
        this.turn = this.turn === 1 ? 2 : 1;
      },
      handleDefeat(playerNumber) {
        if (playerNumber == 1) {
          this.player1Defeated = true;
        } else {
          this.player2Defeated = true;
        }
      },
    },
  };
  </script>
  
  <style scoped>
.monster-container {
  text-align: center;
}

.players-container {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.player-container {
  flex: 1;
  margin: 0 200px; 
}
  </style>
  