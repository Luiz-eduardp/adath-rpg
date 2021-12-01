<template>
  <div>
    <h1>Explorar</h1>
    <div>
      <div v-show="running" class="panel scores">
        <div class="score">
          <h1>{{ username }}</h1>
          <img class="user-img" v-bind:src="userImg" />
          <div class="life-bar">
            <div
              class="life"
              :class="{ danger: playerLife < 20 }"
              :style="{ width: playerLife + '%' }"
            ></div>
          </div>
          <div>{{ playerLife }} pontos de HP Restantes</div>
        </div>
        <div class="score">
          <h1>{{ selectedMob }}</h1>
          <img class="monster-img" v-bind:src="selectedMobImg" />
          <div class="life-bar">
            <div
              class="life"
              :class="{ danger: monsterLife < 20 }"
              :style="{ width: monsterLife + '%' }"
            ></div>
          </div>
          <div>{{ monsterLife }} pontos de HP Restantes</div>
        </div>
      </div>
      <div v-if="hasResult" class="panel result">
        <div v-if="monsterLife == 0" class="win">Você ganhou!!! :)</div>
        <div v-else class="lose">Você perdeu! :(</div>
      </div>
      <div class="panel buttons">
        <template v-if="running">
          <button @click="attack(false)" class="btn attack">Ataque</button>
          <button @click="attack(true)" class="btn especial-attack">
            Ataque Especial
          </button>
          <button @click="healAndHurt" class="btn heal">Curar</button>
          <button @click="running = false" class="btn give-up">Desistir</button>
        </template>
        <button v-else @click="startGame" class="btn new-game">
          Procurar inimigo
        </button>
      </div>
      <div v-if="logs.length" class="panel logs">
        <ul>
          <li v-for="log in logs" :class="log.cls" class="log" :key="log.text">
            {{ log.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explorar",
  data() {
    return {
      running: false,
      explorar: false,
      loja: false,
      perfil: false,
      playerLife: 100,
      monsterLife: 100,
      logs: [],
      username: "Ed",
      userImg:
        "https://media.discordapp.net/attachments/875746841516453911/914140552210034698/12710439_0.png",
      hp: "100",
      hPMax: "100",
      force: "20",
      defesa: "30",
      agilidade: "40",
      inteli: "60",
      lvl: "1",
      xp: "0",
      xpMax: "500",
      cobre: "80",
      classe: "Mago",
      search: "",
      items: [
        { Custo: "5", Nome: "Poção de Cura", Quantidade: "1" },
        { Custo: "50", Nome: "Poção de XP", Quantidade: "1" },
        { Custo: "500", Nome: "Espada de cobre", Quantidade: "1" },
      ],
      selectedMob: "Procurando",
      selectedMobImg: "Procurando",
      mobs: ["Slime", "Verme", "Dêmonio", "Besouro"],
      mobsImgs: [
        "https://media.discordapp.net/attachments/875746841516453911/914138578743873576/d1dde4d97d7792a3c839a3af2254ee43.png",
        "https://media.discordapp.net/attachments/875746841516453911/914138546590330900/cd966776a8576a968a87f8a5ee3b5def.png",
        "https://media.discordapp.net/attachments/905519263404654603/906888178928066620/Zalgo-0.jpg",
        "https://media.discordapp.net/attachments/905519263404654603/905520055058587689/images_-_2021-11-03T151151.781.jpeg",
      ],
    };
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    },
    filteredItems() {
      return this.items.filter((item) => {
        return item.Nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
  },
  methods: {
    startGame() {
      this.running = true;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.logs = [];
      const idx = Math.floor(Math.random() * this.mobs.length);
      this.selectedMob = this.mobs[idx];

      this.selectedMobImg = this.mobsImgs[idx];
    },
    attack(especial) {
      this.hurt("monsterLife", 5, 10, especial, "Jogador", "Monstro", "player");
      if (this.monsterLife > 0) {
        this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster");
      }
    },
    hurt(prop, min, max, especial, source, target, cls) {
      const plus = especial ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus);
      this[prop] = Math.max(this[prop] - hurt, 0);
      this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls);
    },
    healAndHurt() {
      this.heal(10, 15);
      this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster");
    },
    heal(min, max) {
      const heal = this.getRandom(min, max);
      this.playerLife = Math.min(this.playerLife + heal, 100);
      this.registerLog(`Jogador se curou em ${heal}.`, "player");
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },
  },
  watch: {
    hasResult(value) {
      if (value) this.running = false;
    },
    vidaUser() {
      if (this.playerLife <= 0) {
        this.$emit('morreu', this.playerLife);
      }
    },
  },
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
