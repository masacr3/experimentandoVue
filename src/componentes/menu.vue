<template>
    <div class="bg">
        <codigobarras @sendcod="mostrarmensaje"></codigobarras>
        <div style="color: white;">
            {{ mensaje }}
        </div>  
    </div>
</template>

<script>
import cbarrasvue from './cbarras.vue'
export default {
    data(){
        return{
            mensaje : ''
        }
    },
    methods:{
        mostrarmensaje(value){
            this.$emit('codbarras',value)
        }
    },
    components:{
        'codigobarras' : cbarrasvue
    }
}
</script>

<style scoped>
    .bg{
        position: sticky;
		top: 0;
        height: 200px;
        display: flex;
        flex-direction: columns;
        justify-content: center;
        align-items: center;
    }

</style>