<template>
<div>
  <h1> Perfil</h1>
     <h3>Perfil de {{username}}</h3>
                <ul style="list-style: none;">
                    <li @morreu=" hp = 0">Vida: {{hp}}/{{hPMax}} <i class="fa-solid fa-arrow-up"></i></li>
                    <li>Força: {{force}} <i class="fa-solid fa-arrow-up"></i></li>
                    <li>Defesa: {{defesa}} <i class="fa-solid fa-arrow-up"></i></li>
                    <li>Agilidade: {{agilidade}} <i class="fa-solid fa-arrow-up"></i></li>
                    <li>Inteligência: {{inteli}} <i class="fa-solid fa-arrow-up"></i></li>
                    <li>Nível: {{lvl}} </li>
                    <li>Experiência: {{xp}}/{{xpMax}} </li>
                    <li>Cobre: {{cobre}} </li>
                </ul>
</div>
</template>

<script>

export default {

  name: 'Perfil',
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
}
</script>

<style>
  h1{
    text-align: center;
  }
</style>
