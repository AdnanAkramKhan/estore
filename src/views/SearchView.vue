<template>
    <div>
        
<div v-for="searchstate in GetSearched.products" :key="searchstate">
<h1>{{  searchstate.title }}</h1>
</div>
    </div>

    
</template>
<script>
// import {mapActions} from 'vuex'
export default{
    name:'SearchView',
    

    mounted(){
        this.$store.dispatch('searchProduct',this.$route.params.id)
    },
    computed:{
        GetSearched(){
        return this.$store.state.searchState
    }}
    
}


</script>