import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        playerLife: 100,
        monsterLife: 100,
        danoRealMob: 10,
        danoRealUser: 15,
        curarvalue: 30,
        curarpode: false,
        havePot: false,
        potions: 0,
        ganhou: false,
        perdeu: false,
        podejogar: true,
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
        products: [
            { Custo: "5", Nome: "Poção de Cura", Quantidade: "1" },
            { Custo: "50", Nome: "Poção de XP", Quantidade: "1" },
            { Custo: "500", Nome: "Espada de cobre", Quantidade: "1" },
        ],
        selectedMob: "Procurando",
        selectedMobImg: "Procurando",
        mobs: ["Slime", "Verme", "Dêmonio", "Besouro", "Royal Crab", "Rubros", "Fear", "Hell Horse"],
        mobsImgs: [
            "https://media.discordapp.net/attachments/875746841516453911/914138578743873576/d1dde4d97d7792a3c839a3af2254ee43.png",
            "https://media.discordapp.net/attachments/875746841516453911/914138546590330900/cd966776a8576a968a87f8a5ee3b5def.png",
            "https://media.discordapp.net/attachments/905519263404654603/906888178928066620/Zalgo-0.jpg",
            "https://media.discordapp.net/attachments/905519263404654603/905520055058587689/images_-_2021-11-03T151151.781.jpeg", "https://media.discordapp.net/attachments/905521237994922076/914889768200982538/kelvin-rojas-compositepsd.png", "https://media.discordapp.net/attachments/905521237994922076/914863305137471558/59f9b758c265ffd9037fee2c95490afd.jpg", "https://media.discordapp.net/attachments/905521237994922076/905521265358557275/images_-_2021-11-03T150725.430.jpeg?width=342&height=479", "https://media.discordapp.net/attachments/905521237994922076/905521265845088337/images_-_2021-05-30T171931.868.jpeg?width=333&height=479"
        ],
    },
    getters: {
        hasResult(state) {

            if (state.monsterLife <= 0) {
                return state.running = false,
                    state.ganhou = true

            }

            if (state.playerLife <= 0) {
                return state.running = false,
                    state.perdeu = true,
                    state.podejogar = false

            }

        },
        podejogarx(state) {
            if (state.playerLife >= 0) {

                state.podejogar = true

            }



        },
        filteredItems(state) {
            return state.products.filter(item => {
                return item.Nome.indexOf(state.search) > -1
            })
        },
        curarpode(state) {
            if (state.playerLife < state.hPMax) {
                return state.curarpode = true
            }
        },
        catalogo(state) {
            return [state.products]
        },


    },
    mutations: {
        dano(state) {
            state.playerLife -= state.danoRealMob
        },
        danoMob(state) {
            state.monsterLife -= state.danoRealUser
        },
        false(state) {
            state.running = false
        },
        curar(state) {
            state.playerLife += state.curarvalue
        },
        pesquisarItem(state, payload) {
            state.search = payload
        },
        comprarPot(state) {
            state.potions++
        },
        potUsada(state) {

            state.playerLife = state.hPMax,
                state.potions--
                state.podejogar = true
        }

    },
    actions: {

        dano(context) {
            context.commit('dano')
        },

        danoMob(context) {
            context.commit('danoMob')
        },
        false(context) {
            context.commit('false')
        },

        curar(context) {
            context.commit('curar')
        },
        pesquisaLoja(context, payload) {
            context.commit('pesquisarItem', payload)
        },
        comprarPotions(context) {
            context.commit('comprarPot')
        },
        usarPot(context) {
            context.commit('potUsada')
        },

    },
    modules: {}
})