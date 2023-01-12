<template>

<div>  
    <h1>dsflk</h1>
    <h1 v-for="add in AddcartReturn" :key="add.id" >{{ add}}</h1>
</div>


</template>
<script>
export default{
    name:'AddCart',
    // 
    // mounted(){
    //     this.$store.dispatch('AddCarts', this.$route.params.id)
    // },
    computed:{
        AddcartReturn(){
            return this.$store.state.addCart
        }
    }
}

</script>