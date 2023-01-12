<template>
  <div class="about">
  <!-- <input type="text"> -->
    <NavComponent/>
    <CateGory />
    <!-- <PagiNation /> -->
    <ProDuct />
    <FooterComponet />

  </div>
</template>
<script >
import NavComponent from '@/components/NavComponent.vue';
import CateGory from '@/components/CateGory.vue';
import ProDuct from '@/components/ProDuct.vue';
import FooterComponet from '@/components/FooterComponent.vue'
// import PagiNation from '@/components/PagNation.vue/PagiNation.vue';
export default {
  name:'HomeView',
  components :{
    NavComponent,
    CateGory,
    ProDuct,
    FooterComponet,
    
    // PagiNation,
  }
}
</script>