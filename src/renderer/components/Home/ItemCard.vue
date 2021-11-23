<template>
    <div>
        <div class="card inactive" id="itemCard">
            <div id="clickOverlay" @click="selectItem(item, $event)"></div>
            <div>
            <div id="cardImage" class="card-image" >
              <figure class="image">
                  <img :src="item.image" style="max-height: 80px">
              </figure>
            </div>
            <div id="cardName" class="card-content has-text-centered">
                <span class="is-size-7 has-text-weight-medium" style="line-height: 1.5; display: inline-block; vertical-align: middle;">
                  {{item.name}}
                </span>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'item-card',
  data: function(){
    return {       
    }
  },
  created: function(){

  },
  components: { },
  methods: {
    selectItem(item, event){
      this.setSelected(item);
      const node = event.target.parentNode;
      this.$emit('selected', node);
    }
  },
  props:{
      item: Object
  }
}
</script>

<style>
  #clickOverlay{
      position: absolute;
      right: 0px;
      top:0px;
      width:100px;
      max-width:100px;
      height:140px;
      max-height:140px;
      z-index: 5;
  }

  #itemCard{
    margin:10px;
    width:100px;
    max-width:100px;
    height:140px;
    max-height:140px;
    right: 3px;
    padding:5px;
  }

  #cardImage{
      max-height: 80px;
  }

  #cardName{
      height: 60px;
      padding: 10px;
  }

  .inactive{
      opacity: 0.5;
  }

  .active{
    background-color: #FFFFFFFF;
    border-style: solid;
    border-width: 3px;
    border-color: #1277FFcf;
  }
</style>
