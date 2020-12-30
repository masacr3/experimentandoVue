<template>
    <div class="bg">
        <div class="titulo texto">
            <span title="tooltip">{{ titulo }}</span>
        </div>
        <div class="fila texto" v-for="(item,i) in push" :key="i">
            <div>
                {{ item.p }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            titulo : 'ventas 1.0',
            articulos : [
                { p : 'leopila '},
                { p : 'mati gato'},
                { p : 'facha puto'}
            ]
        }
    },
    computed:{
        push(){
            return this.articulos
        }
    }
}
</script>

<style scoped>
    .bg{
        display: flex;
        flex-direction: column;
        border-radius: 6px;

        background-color:#0d1117;
        border: 1px solid #21262d;
    }

    .titulo {
        width:350px;
        height: 55px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .texto{
        /* texto */
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #C9D1D9;
        font-size: 14px;
    }

    .fila{
        width:350px;
        height: 55px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top: solid 1px#21262d;
    }
</style>