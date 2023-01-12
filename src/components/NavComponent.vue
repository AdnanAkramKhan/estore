<!-- <template>
  <div>
    <h1>djsf</h1>
    <input v-model = "search_input" type="text">
    <button @click="Search">Search</button>
  </div>

  
</template> -->
<!-- <template>
  <v-app-bar app color="#3853D8" dark>
    <v-btn icon >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-divider vertical class="ml-1 mr-3"></v-divider>
        <v-btn icon>
          <v-icon>
            mdi-menu
          </v-icon>
        </v-btn>

  </v-app-bar>
</template> -->
<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar
      extended
      extension-height="10"
    >
      <v-toolbar-title>a</v-toolbar-title>
    
      
      <v-text-field
        single-line
        
      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn>Category</v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
  
<script>
export default{
    name:'NavComponent',
   data(){
    return{
        search_input: '',
   
    }
   },

    methods:{
        Search(){
           this.$router.push({name:'SearchView', params: {id:this.search_input}   })
          //  console.log(this.search_input)
            // this.$store.state.SearchState = this.search_input
            // console.log(this.$store.state.SearchState)
        
        
              }
    },
   
}

</script>