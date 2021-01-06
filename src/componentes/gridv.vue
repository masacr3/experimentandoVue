<template>
    <div class="bg">
        <div class="titulo texto">
            <span title="tooltip">{{ titulo }}</span>
        </div>
        <div class="fila texto" v-for="(item,i) in push" :key="i">
            <div class="content-descripcion">
                <div>{{item.marca}}<span class="badge">{{item.cant}}</span></div>
                <div class="muted">{{item.des}}</div>
            </div>
            <div class="bg-precio">
                <span :title="item.textprecio">${{ item.sub }}</span>
            </div>
        </div>
        <div class="no-fila texto" v-if="noHayArticulos">
            <div class="no-productos">{{ existencias }}</div>
        </div>
    </div>
</template>

<script>

class Articulo{
    constructor(id,marca,des,precio){
        this.id = id
        this.marca = marca 
        this.des = des 
        this.precio = precio
        this.cant = 1
        this.sub = precio
        this.textprecio = "precio unitario: $"+ precio
    }
}

export default {
    data(){
        return{
            titulo : 'ventas 1.0',
            existencias : 'no hay articulos',
            articulos : [],
            basedatos : [
                { id:'1001', marca : 'coca cola', des: '2l', cant: 1, precio:20},
                { id:'1002', marca : 'luchetti', des: 'mostacholi 500g', cant:1, precio:30},
                { id:'1003', marca : 'yogurisimo', des: 'vainilla 1 kg', cant:1, precio:40}
            ]
        }
    },
    methods:{
        estaArticuloBd(id){
            let ok = false
            let pos = -1
            for(let i=0; i< this.basedatos.length; i++){
                if( this.basedatos[i].id === id){
                    ok = true
                    pos = i
                    break
                }
            }
            return { ok , pos }
        },
        estaArticuloGrid(id){
            let ok = false
            let pos = -1
            for(let i=0; i< this.articulos.length; i++){
                if( this.articulos[i].id === id){
                    ok = true
                    pos = i
                    break
                }
            }
            return { ok , pos }
        },
        agregarProducto(id){
            let buscarGrid = this.estaArticuloGrid(id)
            if ( buscarGrid.ok ){
                this.articulos[buscarGrid.pos].cant += 1
                this.articulos[buscarGrid.pos].sub += this.articulos.[buscarGrid.pos].precio
                this.$emit('total',this.articulos[buscarGrid.pos].precio)
            }
            else{
                let ok = this.estaArticuloBd(id)
                if (ok.ok){
                    let articulo = this.basedatos[ok.pos]
                    this.articulos.push( new Articulo(articulo.id,articulo.marca,articulo.des,articulo.precio))
                    this.$emit('total', articulo.precio)
                }
            }
        }
    },
    computed:{
        push(){
            return this.articulos
        },
        noHayArticulos(){
            return this.articulos.length < 1 
        }
    }
}
</script>

<style scoped>
    .bg{
        height: min-content;
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

    .muted{
        font-size: 12px;
    }

    .no-fila{
        width:350px;
        height: 55px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-top: solid 1px#21262d;

        /*padding*/
        padding: 0px 15px;
    }
</style>