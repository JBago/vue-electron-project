<template>
<div>
  <section class="section">
    <div class="container">  
    <figure id="imageBlock" class="image">
        <img class="is-shadowless" style="max-width: 160px; max-height: 160px; margin: 20px auto" :src="selectedObject.image">
    </figure>
      <h2 id="name" class="title">
        <strong>{{selectedObject.name}}</strong>
      </h2>      
    <button @click="goBack" class="delete is-large is-floated-right" style="float: right"></button>
    </div>
  </section>
  <div id="content" class="columns container">
  <div class="column has-text-justified">
      <strong>Manufacturer:</strong><br>
      {{selectedObject.manufacturer}}<br>
      <strong>RAM:</strong><br>
      {{selectedObject.ram}}<br>
      <strong>Internal Memory:</strong><br>
      {{selectedObject.internal_memory}}<br>
      <strong>CPU:</strong><br>
      {{selectedObject.cpu}}<br>
      <strong>Back camera:</strong><br>
      {{selectedObject.back_camera}}<br>
      <strong>Front Camera:</strong><br>
      {{selectedObject.front_camera}}<br>

    </div>
    <div class="column">
      <strong>GPU:</strong><br>
      {{selectedObject.gpu}}<br>
      <strong>Battery:</strong><br>
      {{selectedObject.battery}}<br>
      <strong>Battery Removable:</strong><br>
      {{selectedObject.battery_removable}}<br>
      <strong>LTE:</strong><br>
      {{selectedObject.lte}}<br><br><br><br>
      <h2  class="subtitle">
        <strong>{{selectedObject.price}}</strong>
      </h2>      
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'Home',
  data: function(){
    return {
        selectedObject: {},
    }
  },
  watch: {
  },
  created: function(){
    this.selectedObject=this.$store.getters.getSelected;
  },
  components: {  },
  methods: {
    goBack () {
    window.history.length > 1
      ? this.$router.go(-1)
      : this.$router.push('/')
  
    }
  }
}
</script>

<style>
  .height-fix{
    height: 624px;
  }
  #imageBlock{
    width: 186px;
    height: 190px;
    position: absolute;
    border: solid 1px #1277FF;
    border-radius: 10px
  }
  #name{
    position: absolute;
    left: 200px;
  }
  #content{
    left: 348px;
    top: 32px;
    height: 400px;
  }
</style>
