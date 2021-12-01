<template>
  
<v-app>
  <v-navigation-drawer app>
     <ul>
       <li>
         menu
       </li>
     </ul>
    
  </v-navigation-drawer>

  <v-app-bar app>
 
<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
luiz  </v-footer>
</v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>