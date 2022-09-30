<template>
  <section>
    <div class="container">
      <div class="inputs">
        <label for="numerodeadultos">Digite o número de adultos</label>
        <input id="adultos" type="number" placeholder="Digite um valor aqui" v-model="adultos">
        <label for="numerodecriancas">Digite o número de crianças</label>
        <input id="criancas" type="number" placeholder="Digite um valor aqui" v-model="criancas">
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
        adultos: null,
        criancas: null,
        gigante: 12,
        familia: 10,
        normal: 8,
        resultado: null,
      }
    },
    methods:{
      Calcular()
      {
        let pizzasgigantes = Math.floor((this.adultos * 3 + this.criancas * 2) / this.gigante);
        let pizzasfamilia = Math.floor(((this.adultos * 3 + this.criancas * 2) % this.gigante) / this.familia);
        let pizzasnormais = Math.floor((((this.adultos * 3 + this.criancas * 2) % this.gigante) % this.familia) / this.normal);

        this.resultado = "Você precisa pedir " + pizzasgigantes + " pizzas gigantes, " + pizzasfamilia + " pizzas familia e " + pizzasnormais + " pizzas normais.";
      }
    }
  } 
</script>

<style>
  .container{
    margin-bottom: 5rem;
    margin-right: auto;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }

  .inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .inputs input{
    margin-bottom: 1rem;
  }

  .inputs button{
    margin-top: 0.5rem;
  }

  .inputs label{
    margin-bottom: 0.5rem;
  }

  .inputs input, .inputs button{
    width: 20rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid #000;
    padding-left: 0.5rem;
  }

  .inputs button{
    background-color: #000;
    color: #fff;
    border: none;
  }

  .inputs button:hover{
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }

  .inputs input:focus{
    outline: none;
  }
</style>