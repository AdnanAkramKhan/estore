<template>
    <v-app id="inspire">
    
  <!-- user for products  -->
  <v-container fluid >
        <v-row dense>
          <v-col  
          min-width="100" 
          v-for="product in product.products"
            :key="product.id"
            
           
          >
  <v-card
          
    class="mx-auto"
    max-width="400"
  >
    <v-img
    @click="onProduct(product.id)"
                :src="product.thumbnail"
             
      height="200px"
    >
    </v-img>
    <v-card-title >{{product.title}}</v-card-title>
            <v-card-text>Brand:{{product.brand}}</v-card-text>
                <v-card-text >Price:{{product.price}}</v-card-text>
                <v-card-text >Rating:{{product.rating}}</v-card-text>
             
      
                <v-spacer></v-spacer>
              <v-btn @click="addCart(product.title)" 
             >Add cart
            </v-btn>
  </v-card>
  </v-col>
  </v-row>
  </v-container>


  <!-- seprate card  -->
      <!-- <v-container fluid>
        <v-row dense>
          <v-col
            :cols="product.flex"
            max-width="300"
            
           
          >
            <v-card
            v-for="product in product.products"
            :key="product.id"
          
            
           >
              <v-img
              @click="onProduct(product.id)"
                :src="product.thumbnail"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
            </v-img>
  
                <v-card-title >{{product.title}}</v-card-title>
            <v-card-text>Brand:{{product.brand}}</v-card-text>
                <v-card-text >Price:{{product.price}}</v-card-text>
                <v-card-text >Rating:{{product.rating}}</v-card-text>
             
              <v-card-actions>
                <v-spacer></v-spacer>
              <v-btn @click="addCart(product.id)" 
             >
                  Add cart
                </v-btn>
              
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
       </v-container> -->
    <!-- close products  -->

    <!-- add pagination  -->

  <!-- {{ product.products }} -->
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="10"
      @input= "onChange"
    ></v-pagination>
  </div>

    <!-- start add products -->
    
     <form @submit.prevent="onSubmit()">
      <input type="text" v-model="inputProduct.title" placeholder="name"/>
      <input type="text" v-model="inputProduct.price" placeholder="price"/>
      <input type="submit" value="submit"/>
    
    
     </form>
    
  <!-- close add product  -->

</v-app>
  </template>
  <script >
    
import { mapActions, mapGetters } from "vuex";
  
  export default {
    name: "ProDuct",
    data() {
        return {
          items:[],
          page:"",
          limits:9,
          skip:0,

          
            inputProduct: {
                title: "",
                price: "",
            },
        };
    },
    computed: {
        ...mapGetters(["product"]),
    },
    methods: {
        ...mapActions(["fetchAllProduct"]),
        ...mapActions(["AddProducts"]),
        onProduct(singleproduct) {
            this.$router.push({ name: "product_detail" }),
                this.$store.state.singleproduct = singleproduct;
        },
        onSubmit() {
            window.localStorage.setItem("InputProduct", JSON.stringify(this.inputProduct));
            console.log(this.inputProduct);
        },
        onChange(page){
          this.page = page
          console.log(page)
          if(this.page){
          this.skip = this.limits * this.page
          this.$store.dispatch('fetchAllProduct', [this.limits,this.skip])
          // console.log(this.page)
        }
        //  console.log( product.products)
         
          // product.products = product

       

        },
        addCart(product){
          this.$store.dispatch('AddCarts' , product)
          // this.$router.push({name:'AddCart', params:{id: product}})
          this.$router.push({name:'AddCart'})
        }
       
    },
    created() {
        this.fetchAllProduct();
    },
  
}
 
  </script>
  <style>
  #state{
display: block;
  }

</style>