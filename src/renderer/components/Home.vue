<template>
  <div >
  <div class="columns height-fix">    
    <section class="column">
      <div class="container" style="height: 360px; ">
        <router-link :to="'View/'+selectedObject.id"><div  @mouseleave="hideOverlay" @mouseenter="showOverlay" class="container has-text-centered" id="imgOverlay"><span v-show="visible===true" class="subtitle has-text-grey-lighter">Open details</span></div></router-link><figure class="image ">
            <img class="is-shadowless" :src="selectedItem.image" style="max-height: 320px; max-width: 280px; margin:70px auto">
        </figure>
      </div>
      <div class="container has-text-centered">
        <h1 class="title">{{selectedItem.name}}</h1>
        <h2 class="subtitle">
          <strong>Click</strong> on the image to open details.
        </h2>
      </div>
      <div id="buttons" class="level">
          <a @click="previousItem" class="button is-info is-rounded" style="height: 46px; width: 46px; padding: 2px;"  ><img style="position: relative; right:2px" class="is-shadowless" src="./Home/Icons/backward-arrow.png" width="24" height="24"></a>
          <router-link :to="'View/'+selectedObject.id"><a @mouseleave="hideOverlay" @mouseenter="showOverlay" id="descButton" class="button is-info is-rounded" style="height: 56px; width: 56px; padding: 2px" ><img class="is-shadowless" src="./Home/Icons/documents-button.png" width="32" height="32"></a></router-link>
          <a @click="nextItem" class="button is-info is-rounded" style="height: 46px; width: 46px; padding: 2px" ><img style="position: relative; left:2px" class="is-shadowless" src="./Home/Icons/right-chevron-.png" width="24" height="24"></a>
      </div>
    </section>

  <nav  id="sideSelection" class="panel column is-one-fifth has-background-black-ter">
    <ul  v-for="item in this.devices.phones" style="padding: auto">
      <item-card @selected="atSelect"  :item="item"></item-card>  
    </ul>
  </nav>
  </div>
  </div>
</template>

<script>
import itemCard from './Home/ItemCard.vue';
export default {
  name: 'Home',
  data: function(){
    return {
        selectedNode: null,
        selectedObject: {},
        finished: false,
        visible: false
    }
  },
  watch: {
    'finished': function(newVal, OldVal){
        this.atSelect(document.getElementById('sideSelection').childNodes[0].childNodes[0].childNodes[0]);
    }
  },
  created: function(){
    let that = this;
    if (this.devices.length === 0) {  
      this.fetchData().then(()=>this.finished=true); 
    }
    
  },
  components: { itemCard },
  methods: {
    atSelect(node){
      if(this.selectedNode!=null){
        this.selectedNode.classList.add('inactive');
        this.selectedNode.classList.remove('active');
      }
      this.selectedNode = node;
      this.selectedNode.classList.add('active');
      this.selectedNode.classList.remove('inactive');
    },
    nextItem(){
    if(this.selectedNode.parentNode.parentNode.nextElementSibling){
     const ringAround = this.selectedNode.parentNode.parentNode.nextElementSibling;
     ringAround.scrollIntoView(false);
     this.setNext();
     this.atSelect(ringAround.childNodes[0].childNodes[0]);
     }
    },
    previousItem(){
    if(this.selectedNode.parentNode.parentNode.previousElementSibling){
     const ringAround = this.selectedNode.parentNode.parentNode.previousElementSibling;
     ringAround.scrollIntoView(true);
     this.setPrevious();
     this.atSelect(ringAround.childNodes[0].childNodes[0]);
     }
    },
    showOverlay(){
      this.visible=true;
      document.getElementById("imgOverlay").classList.add('transparent');
    },
    hideOverlay(){
      this.visible=false;
      document.getElementById("imgOverlay").classList.remove('transparent');
    },
  }
}
</script>

<style>


  .height-fix{
    height: 626px;
  }

  #imgOverlay{
    position: absolute;
    width: 576px;
    height: 360px;
    max-height: 360px;
    border-radius: 16px;
    border-style: solid;
    border-color: #1277FF;
    z-index: 5;
    top: 0px;
    left: 20%;
    margin: -15px auto;
    line-height: 360px;
  }
  #sideSelection{
    max-width: 160px;
    overflow-y: scroll;
    padding: 15px;
  }
  #sideSelection::-webkit-scrollbar { 
    display: none; 
  }

  #buttons{
    width: 20%;
    position: relative;
    bottom: 16px;
    margin: 40px auto;   
  }

  #descButton{
    background-color: #FFFFFF00;
    border: solid 3px #1277FF;
  }

  .transparent{
    background-color: #0005;
  }

</style>
