<template>
  <div class="panel loja">
                <h3>Loja de Itens</h3>

                <!-- <div class="block"><input type="text" v-model="pesquisarV"  id="searchInput" class="input-res">

                    <button @click="pesquisaLojax()"> Pesquisar</button>
                </div> -->
                <table id="table">

                    <thead>
                        <tr>
                            <th scope="col">Custo</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Quantidade</th>

                        </tr>
                    </thead>

                    <tbody>


                        <tr v-for="(item, i) in this.filteredItems" :key="i">
                            <td data-label="Custo">&nbsp; {{ item.Custo }} </td>
                            <td data-label="Nome:">&nbsp;{{ item.Nome }}</td>
                            <td data-label="Quantidade:">&nbsp;{{ item.Quantidade }} </td>
                            <td>&nbsp; <button class="success item-loja" @click="comprarPotX()">Comprar</button></td>

                        </tr>
                    </tbody>
                </table>

            </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Loja",
data() {
  return {
    pesquisarV: ''
  }
},
  computed: {
    ...mapGetters(["pesquisarItem", "catalogo", "filteredItems"]),
  
        
    },
  methods: {
    ...mapActions(["pesquisaLoja", "comprarPotions"]),
    pesquisaLojax(pesquisarV){
      let search = pesquisarV.toLowerCase(pesquisarV)
      this.pesquisaLoja(search)
    },
    comprarPotX(){
       this.comprarPotions()
    }
  },

};
</script>

<style scope>
h1 {
  text-align: center;
}

/* LOJA */

table {
  border: 1px solid black;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  background-color: #30475e;
  border: 1px solid BLACK;
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }
  table caption {
    font-size: 1.3em;
  }
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  table tr {
    border-bottom: 3px solid black;
    display: block;
    margin-bottom: 0.625em;
  }
  table td {
    border-bottom: 1px solid black;
    display: block;
    font-size: 15px;
    text-align: right;
  }
  table td::before {
    /*
      * aria-label has no advantage, it won't be read inside a table
      content: attr(aria-label);
      */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  table td:last-child {
    border-bottom: 0;
  }
}

.block {
  margin: 0 auto;
  max-width: 900px;
  padding: 50px 30px;
}

.input-res {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font: 15px/1 "Open Sans", sans-serif;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: 500px;
  background-color: #dddddd;
  border: none;
  padding: 10px 11px 11px 11px;
  border-radius: 3px;
  box-shadow: none;
  outline: none;
  margin: 0;
  box-sizing: border-box;
}
.success, .item-loja{
  width: 80px !important;
  height: 80px !important;
}
</style>
