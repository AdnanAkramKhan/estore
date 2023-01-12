<template>
    <div>
        <p v-for="single in singlecategory" :key="single"
>
{{single.title}}
</p>
       <!-- {{singlecategory}} -->
    
        <!-- <p >{{this.$store.state.singlecategory}}</p> -->
    </div>
  </template>
  <script >
    
import { mapActions, mapGetters } from "vuex";

  
  export default {
    name:'CategoryProduct',
 
  computed: {
    ...mapGetters(["singlecategory"]),
  },
  methods: {
    ...mapActions(["singleCategory"]),
    // onProduct(singleproduct){
    //   this.$router.push( {name:'product_detail'} )
    // }
  },
  created() {
    this.singleCategory();
  },
};
 
  </script>
  <style>
  #state{
display: block;
  }

</style>