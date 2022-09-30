<template>
  <section>
    <div class="container">
      <div class="inputs">
        <label for="tamanho">Digite o tamanho em m² da área a ser pintada</label>
        <input id="tamanho" type="number" placeholder="Digite um valor aqui" v-model="tamanho">
        <button type="button" v-on:click="Calcular">Enviar</button>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <span v-html="resultado"></span>
    </div>
  </section>
</template>

<script>
  export default{
    name: 'Inputs',
    data(){
      return{
        tamanho: null,
        litros: null,
        latas: null,
        galoes: null,
        resultado: null,
        precoLatas: null,
        precoGaloes: null,
        precoTotal: null,
      }
    },
    methods:{
      Calcular()
      {
        this.litros = this.tamanho / 6;
        this.latas = Math.ceil(this.litros / 18);
        this.galoes = Math.ceil(this.litros / 3.6);
        
        this.precoLatas = this.latas * 80;
        this.precoGaloes = this.galoes * 25;

        this.resultado = "Você precisa de " + this.latas + " latas de tinta, que custam R$" + this.precoLatas + ",00." + "<br>" +  "ou " + this.galoes + " galões de tinta, que custam R$" + this.precoGaloes + ",00.";   
        
        //misturar latas e galões, de forma que o desperdício de tinta seja menor.Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

        let latas = Math.floor(this.litros / 18);
        let litrosRestantes = this.litros % 18;
        let galoes = Math.ceil(litrosRestantes / 3.6);
        let precoTotal = latas * 80 + galoes * 25;

        this.resultado += "<br><br>Caso misture as tintas precisará de " + latas + " latas e " + galoes + " galões, que custam R$" + precoTotal + ",00.";


      }
    }
  }
</script>

<style>

</style>