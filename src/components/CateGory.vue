<template>
    <div class="category">
        
    <!-- <div v-for="category in category" :key="category">
      <button id="state">{{ category }}</button>
      
    
    </div> -->
    <v-btn
    v-for="category in category" :key="category" 
      rounded
      color="primary"
      dark
      @click="Category_Detail(category)"
      
    >
    {{category}}
    </v-btn>
    </div>
  </template>
  <script >
    
import { mapActions, mapGetters } from "vuex";

  
  export default {
    name:'CateGory',
 
  computed: {
    ...mapGetters(["category"]),
  },
  methods: {
    ...mapActions(["fetchAllCategory"]),
    Category_Detail(category){
      console.log(category)
      this.$router.push({name:'category_product'})

      this.$store.state.singlecategory=category
    }
  },
  created() {
    this.fetchAllCategory();
  },
};
 
  </script>
  <style>
  #state{
display: block;
  }

</style>