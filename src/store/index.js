import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        playerLife: 100,
        monsterLife: 100,
        danoRealMob: 10,
        danoRealUser: 10,
        logs: [],
        username: "Ed",
        userImg: "https://media.discordapp.net/attachments/875746841516453911/914140552210034698/12710439_0.png",
        running: false,
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
    },
    getters: {
        hasResult() {
            return (
                this.$store.playerLife == 0 || this.$store.monsterLife == 0
            );
        },
        filteredItems() {
            return this.items.filter(item => {
                return item.Nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        }
    },
    mutations: {
        dano(state, payload) {
            state.playerLife -= payload
        },
        danoMob(state, payload) {
            state.monsterLife -= payload
        },
        false(state, payload) {
            state.running = payload
        }
    },
    actions: {
        dano(context, payload) {
            context.commit('dano', payload)
        },

        danoMob(context, payload) {
            context.commit('danoMob', payload)
        },

    },
    modules: {}
})