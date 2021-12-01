<template>
 <div>
    <div class="home">
   <h1>Bem vindo ao Adath</h1>
<v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Anuncio</div>
      <p class="text-h4 text--primary">
        Novos Monstros adicionados!
      </p>
      <p>Conselho</p>
      <div class="text--primary">
        "Farmem nas zonas iniciais e acumulem itens!"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Explorar!!
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Mais de 200 monstros foram criados
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
  </div>
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
}
</script>

<style>
  h1{
    text-align: center;
  }
</style>
