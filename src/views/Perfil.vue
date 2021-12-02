<template>
<div>
  <h1> Perfil</h1>
     <h3>Perfil de {{this.$store.state.username }}</h3>
                <ul style="list-style: none;">
                    <li>Vida: {{this.$store.state.playerLife}}/{{this.$store.state.hPMax}} <i class="fa-solid fa-arrow-up"></i></li>
                    <li>Força: {{this.$store.state.force}} <i class="fa-solid fa-arrow-up"></i></li>
                    <li>Defesa: {{this.$store.state.defesa}} <i class="fa-solid fa-arrow-up"></i></li>
                    <li>Agilidade: {{this.$store.state.agilidade}} <i class="fa-solid fa-arrow-up"></i></li>
                    <li>Inteligência: {{this.$store.state.inteli}} <i class="fa-solid fa-arrow-up"></i></li>
                    <li>Nível: {{this.$store.state.lvl}} </li>
                    <li>Experiência: {{this.$store.state.xp}}/{{this.$store.state.xpMax}} </li>
                    <li>Cobre: {{this.$store.state.cobre}} </li>
                </ul>
</div>
</template>

<script>

export default {

  name: 'Home',
 data() {
   return {
     reveal: false
   }
 },
 computed: {
  
 },
}
</script>

<style>
  h1{
    text-align: center;
  }
</style>
