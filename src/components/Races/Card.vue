<template>
<div class="p-2 border border-blue-200 rounded">

<div class="text-center " :style="style">
  <div class="text-center bg-white bg-opacity-90">
 
 <h2 class="text-xl font-bold">
   {{race.raceName}}
   
   </h2> 

   <p>View results</p>
  </div>
</div>
</div>
  
</template>

<script lang="ts">
export default {
  props:{
      race:{
          type: Object,
          required: true
      }
  },
  setup(){
    const style = 
    `
      background-image: url(img/circuit.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
    `;
    return {style}
  }
}
</script>
