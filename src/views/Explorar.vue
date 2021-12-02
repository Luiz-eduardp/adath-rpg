<template>
  <div>
    <h1>Explorar</h1>
    <div>
      <div v-show="this.$store.state.running" class="panel scores">
        <div class="score">
          <h1>{{ this.$store.state.username }}</h1>
          <img class="user-img" v-bind:src="this.$store.state.userImg" />
          <div class="life-bar">
            <div
              class="life"
              :class="{ danger: this.$store.state.playerLife < 20 }"
              :style="{ width: this.$store.state.playerLife + '%' }"
            ></div>
          </div>
          <div >{{ this.$store.state.playerLife }} pontos de HP Restantes</div>
        </div>
        <div class="score">
          <h1>{{ this.$store.state.selectedMob }}</h1>
          <img
            class="monster-img"
            v-bind:src="this.$store.state.selectedMobImg"
          />
          <div class="life-bar">
            <div
              class="life"
              :class="{ danger: this.$store.state.monsterLife < 20 }"
              :style="{ width: this.$store.state.monsterLife + '%' }"
            ></div>
          </div>
          <div>{{ this.$store.state.monsterLife }} pontos de HP Restantes</div>
        </div>
      </div>
      <div v-if="hasResult" class="panel result">
        <div v-if="this.$store.state.ganhou" class="win">
          Você ganhou!!! :)
        </div>
        <div v-else class="lose">Você perdeu! :(</div>
      </div>
      <div class="panel buttons">
        <template v-if="this.$store.state.running">
          <button @click="atacar()" class="btn attack">Ataque</button>
          <button @click="attack(true)" class="btn especial-attack">
            Ataque Especial
          </button>
          <button v-show="this.curarpode" @click="curarx()" class="btn heal ">Curar</button>
          <button
            @click="falsex()"
            class="btn give-up"
          >
            Desistir
          </button>
        </template>
        <button v-if="this.$store.state.podejogar" @click="startGame" class="btn new-game">
          Procurar inimigo
        </button>
        <div v-else>
          Você precisa se curar
        </div>
      </div>
      <div v-if="this.$store.state.logs.length" class="panel logs">
        <ul>
          <li
            v-for="log in logs"
            :class="log.cls"
            class="log"
            :key="log.text"
          >
            {{ log.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "Explorar",
  data() {
    return {

danoRealMob: 10,
danoRealUser: 10,
    };
  },
  computed: {
    ...mapGetters([
      'curarpode', 'hasResult', 'podejogarx'
    ]),
   

    logs() {
      return this.$store.state.logs;
    },
  },
  methods: {
    ...mapActions([
      'dano', 'danoMob','false', 'curar'
    ]),
    startGame() {
      this.$store.state.running = true;
      this.$store.state.playerLife = 100;
      this.$store.state.monsterLife = 100;
      this.$store.state.logs = [];
      const idx = Math.floor(Math.random() * this.$store.state.mobs.length);
      this.$store.state.selectedMob = this.$store.state.mobs[idx];

      this.$store.state.selectedMobImg = this.$store.state.mobsImgs[idx];
    },
    atacar(){
      this.dano(),
      
         this.danoMob()
           
    },
    falsex(){
       this.false()
       console.log('foi')
    },
    curarx(){
       this.curar()
        this.dano()
    }
  }
};
</script>

<style scope>
h1 {
  text-align: center;
}
/* Geral */

html {
  font-family: "Montserrat", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
}

.panel {
  margin: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

/* Área dos Pontos */

@media only screen and (max-width: 31.25em) {
  .scores {
    flex-direction: column;
  }
  .buttons {
    flex-direction: column;
  }
}

.scores {
  display: flex;
}

.score {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.score h1 {
  font-weight: 300;
  font-size: 1.6rem;
}

.life-bar {
  width: 80%;
  height: 20px;
  border: 1px solid rgb(255, 255, 255);
}

.life-bar .life {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: green;
}

.life-bar .life.danger {
  background-color: red;
}

.monster-img {
  width: 50%;
  border-radius: 100px;
}

.user-img {
  width: 40%;
  border-radius: 100px;
}

/* Área do Resultado */

.result {
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 600;
}

.result .win {
  color: green;
}

.result .lose {
  color: red;
}

/* Área dos Botões (Controle do Jogo) */

.buttons {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 5px 10px;
  margin: 0px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 1.1rem;
}

.new-game {
  background-color: #4253af;
  color: #fff;
}

.attack {
  background-color: #e51c23;
  color: #fff;
}

.especial-attack {
  background-color: #ff9800;
  color: #000;
}

.heal {
  background-color: #259b24;
  color: #fff;
}

.give-up {
  background-color: #bbb;
  color: #000;
}

/* Área dos Logs */

.logs ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
}

.logs ul li {
  display: flex;
  justify-content: center;
  margin: 4px 0px;
  padding: 3px 0px;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  border-radius: 3px;
}

.player {
  background-color: #4253afaa;
  color: #fff;
}

.monster {
  background-color: #e51c23aa;
  color: #fff;
}
</style>
