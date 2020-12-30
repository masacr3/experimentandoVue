<template>
    <div class="bg">
        <div class="titulo texto">
            <span title="tooltip">{{ titulo }}</span>
        </div>
        <div class="fila texto" v-for="(item,i) in push" :key="i">
            <div class="content-descripcion">
                <div>{{item.marca}}<span class="badge">{{item.cant}}</span></div>
                <div>{{item.des}}</div>
            </div>
            <div class="bg-precio">
                ${{ item.precio }}
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
                { marca : 'coca cola', des: '2l', cant: 1, precio:20000},
                { marca : 'luchetti', des: 'mostacholi 500g', cant:1, precio:30},
                { marca : 'yogurisimo', des: 'vainilla 1 kg', cant:1, precio:40}
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
        flex-direction: row;
        justify-content: space-between;
        border-top: solid 1px#21262d;

        /*padding*/
        padding: 0px 15px;
    }

    .content-descripcion{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /*precios*/
    .bg-precio{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


    /* badge */
    .badge {
        display: inline-block;
        min-width: 20px;
        height: 20px;
        padding: 0 6px;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        color: white;
        text-align: center;
        background-color: #6e40c9;
        border: 1px solid transparent;
        border-radius: 2em;
        margin-left: 3px; 
    }
</style>