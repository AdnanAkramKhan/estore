// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })


import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  
  state: {
    product:[],
    category:[],
    singleproduct:[],
    singlecategory:[], 
    searchState:[],
    addCart:[],
    
   
  },
  
  mutations: {
    // setCountries(state, countries) {
    //   state.countries = countries;
    setCategory(state,category){
      state.category = category
    },
    // for product 
    setProduct(state,product){
      state.product = product
    },
    singleProduct(state,singleproduct){
      state.singleproduct = singleproduct
    },
    singleCategory(state,singlecategory){
      state.singlecategory=singlecategory
    },
    addProduct(state,product){
      state.products= product   
     },
     searched(state,searchState){
      state.searchState= searchState 
       },
       updateCart(state, addCart){
        state.addCart = addCart
       }
  },
  
  actions: {
    // for products 
    
    fetchAllProduct({commit},[ limits , skip]) {
      console.log(limits)
      console.log(skip)
      return fetch( `https://dummyjson.com/products/?limit=${limits}&skip=${skip} ` )
        .then((response) => response.json())
        .then((data) => {
          commit("setProduct", data);
          
        })
        
        .catch((err) => console.error(err));
    },
    // single product 
    singleProducts(context) {
      return fetch(`https://dummyjson.com/products/${this.state.singleproduct}` )
        .then((response) => response.json())
        .then((data) => {
          context.commit("singleProduct", data);
        })
        .catch((err) => console.error(err));
    },
    //  add product 
     AddProducts( inputProduct) { 
      const addproduct = window.localStorage.getItem(inputProduct)
      const addproducts= JSON.parse(addproduct)
      return fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          title: addproducts.title,
          price: addproducts.price,
          /* other product data */
                })
                
      })
       .then(res => res.json())
      .then( console.log(addproducts.title)
      );
                
    },
    //add cart
    AddCarts( { commit }, id ){
     
     const cartproduct = this.state.addCart
     console.log(cartproduct)
     cartproduct.push(id)
     commit('updateCart',cartproduct)  
      
      // console.log(d)
           },

    // filter product 
    searchProduct({commit}, id) {
       return fetch(`https://dummyjson.com/products/search?q=${id}`)
      .then(res => res.json())

      
        .then((data) => {
         commit("searched", data);
         console.log(data.products)
        })
        .catch((err) => console.error(err));
    },
    //  add product 
    
    // for category 
    fetchAllCategory(context) {
      return fetch("https://dummyjson.com/products/categories")
        .then((response) => response.json()) 
        .then((data) => {
          context.commit("setCategory", data);
        })
        .catch((err) => console.error(err));
    },
    singleCategory(context) {
      return fetch(` https://dummyjson.com/products/category/${this.state.singlecategory}` )
        .then((response) => response.json())
        .then((data) => {
        
          context.commit("singleCategory", data.products);
         console.log(data)
        },
        
        )
        .catch((err) => console.error(err));
    },


   
  },
  
  getters: {
    product(state) {
      return state.product;
    },
    category(state) {
      return state.category;
    },
    singleproduct(state){
      return state.singleproduct
    },
    singlecategory(state){
      return state.singlecategory
    },
   
  },
  
});