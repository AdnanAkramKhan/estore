<template>
    <v-app id="inspire">
     
  
      <v-container fluid>
        <v-row dense> 
          <v-col
            
            max-width="900"
           
          >
            <v-card>
              <v-img
                :src="singleproduct.thumbnail"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
            </v-img>
  
                <v-card-title >{{singleproduct.title}}</v-card-title>
            <v-card-p>Brand:{{singleproduct.brand}}</v-card-p>
                <v-card-p >Price:{{singleproduct.price}}</v-card-p>
                <v-card-p >Rating:{{singleproduct.rating}}</v-card-p>
             
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    
  </v-app>
  </template>
  <script >
import { mapActions, mapGetters } from 'vuex';

   
  
  export default {
    name:'ProductDetail',
    computed:{
      ...mapGetters(["singleproduct"])
      
    },
    methods:{
      ...mapActions(["singleProducts"]),
     singleProduct(){
        console.log(this.$store.state.singleproduct)
      }
    }
    ,
  created() {
    this.singleProducts();
    this.singleProduct()
  },
 
};
 
  </script>
