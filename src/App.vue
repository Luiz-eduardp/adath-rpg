<template>
  <v-app>
    <v-navigation-drawer app>
      <v-card class="cardSide"> <strong> Adath RPG </strong> </v-card>
    </v-navigation-drawer>

    <v-app-bar app>
      <ul style="display:inline; " id="nav">
       <li class="inline"><router-link to="/">Home</router-link> </li>
        <li class="inline"><router-link to="/Contato">Contato</router-link></li>
       <li class="inline"> <router-link to="/loja">Loja</router-link></li>
        <li class="inline"><router-link to="/perfil">Perfil</router-link></li>
        <li class="inline"><router-link to="/explorar">Explorar</router-link></li>
      </ul>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> luiz </v-footer>
  </v-app>
</template>

<script>
export default {



  
};
</script>

<style>
.cardSide{
  padding:25px; text-align:center;
  background-color: rgb(89, 58, 129) !important;
  color:white !important
}
.inline{
display:inline;
padding-left: 10px;

}
#app {
  color: white !important;
  background-color: #1F1D36;
}

</style>