<template>
    <div>
        <div class="bg-header">
            <div class="header-titulo">
                <img src="../assets/img/logo.png" width="45" height="45" />
                <div class="header-content">
                    {{titulo}}
                </div>
            </div>
        </div>
        <div class="bg-middle" v-for="(item,i) in push()" :key="i">
             <div class="middle-content">
                <div class="middle-marca">
                    <div>
                        {{ item.marca }}
                    </div>
                    <badge :cantidad="item.cantidad"></badge>
                </div>
                <div>${{ item.precio }}</div>
            </div>
        </div>
        <div class="bg-foo">
            <div v-if="hayArticulos" class="foo-content">
                <div class="foo-marca">
                    <div>
                        {{ ultimoArticulo.marca }}
                    </div>
                    <badge :cantidad="ultimoArticulo.cantidad"></badge>
                </div>
                <div>${{ ultimoArticulo.precio }}</div>
            </div>
            <div v-else class="foo-content">
                <div>
                    {{ defaultcontenido }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import badgevue from './badges.vue'

class Articulos{
    constructor(marca, precio){
        this.marca = marca
        this.cantidad = 1
        this.precio = precio
    }
}

export default {
    data(){
        return{
            titulo : 'Ventas 1.0',
            hayArticulos: false,
            defaultcontenido: 'No hay articulos en carrito',
            listaArticulos : [],
            cont: 1,
            ultimoArticulo : null,
        }
    },
    components:{
        'badge' : badgevue
    },
    methods:{
        agregar(value){
            if(value){
                if (!this.hayArticulos && this.listaArticulos.length == 0){
                    this.ultimoArticulo = new Articulos( value, 20)
                    this.hayArticulos = true
                }
                else {
                    this.buscar(value)
                }
            }
        },
        buscar(cod){
            if ( this.ultimoArticulo.marca === cod ){
                this.ultimoArticulo.cantidad += 1
            }
            else{
                let pos = -1
                for(let i=0; i < this.listaArticulos.length ; i++){
                    let ok = this.listaArticulos[i].marca === cod
                    console.log('estatus '+ok)
                    if ( this.listaArticulos[i].marca === cod){
                        pos = i
                        break
                    }
                }
                if (pos > -1){
                    this.listaArticulos[pos].cantidad +=1
                }
                else{
                    this.listaArticulos.unshift( new Articulos(cod,20000))
                }
            }
        },
        push(){ 
            return this.listaArticulos
        }
    }
}
</script>

<style scoped>
    
    @media screen and (min-width: 800px) {
        .bg-header{
        /* tamanio */
        position: sticky;
        top: 0;
        width: 350px;
        height: 55px;

        /* print */
        background-color:#0d1117;
        border: 1px solid #21262d;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;

        /*position*/
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .header-titulo{
        /* position */
        display: flex;
        justify-content: space-evenly;
    }

    .header-content{
        /* position */
        display: flex;
        justify-content: center;
        align-items: center;

        /* texto */
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #C9D1D9;
        font-size: 14px;
    }

    .bg-middle{
        width: 350px;
        height: 55px;
        border: 1px solid #21262d;
        border-top: none;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .middle-content, .foo-content {
        /*t-cabezera flex c-space-beet p-left-right*/
        display: flex;
        justify-content: space-between;
        padding: 0px 10px 0px 10px;

        /* texto */
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #C9D1D9;
        font-size: 14px;
    }

    .middle-marca, .foo-marca{
        display: flex;
        flex-direction: row;
    }

    .bg-foo{ 
        width: 350px;
        height: 55px;

        border: 1px solid #21262d;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        border-top: none;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }   
}

</style>