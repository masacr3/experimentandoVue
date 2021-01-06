import Vue from 'vue'
import gridvue from './componentes/gridv.vue'
import totalvue from './componentes/totalv.vue'
import codigobarrasvue from './componentes/codigobarrasv.vue'

const app = new Vue({
    el: '#app',

    data(){
        return{
            totalventas : 0,
        }
    },
    components:{
        'codigobarras' : codigobarrasvue,
        'grid' : gridvue,
        'total': totalvue
    },
    methods:{
        obtenerExpresion(value){
            this.$refs.gg.agregarProducto(value)
        },
        obtenervalor(value){
            this.totalventas += value
        }

    }
})