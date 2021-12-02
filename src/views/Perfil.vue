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
                <h3>Inventário</h3>
<ul style="list-style: none;">
 <li> Poções de Cura : {{this.$store.state.potions}} <button class="success" @click="UsarpotX()">Usar</button></li>
</ul>
</div>
</template>

<script>
import { mapActions,mapGetters} from 'vuex'

export default {

  name: 'Home',
 data() {
   return {
     reveal: false
   }
 },
 computed: {
    ...mapGetters([
      'curarpode', 'potUsada'
    ]),
 },
 methods: {
    ...mapActions([
      'usarPot'
    ]),
    UsarpotX(){
       this.usarPot()
    }
 },
}
</script>

<style scope>
  h1{
    text-align: center;
  }
</style>
