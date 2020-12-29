import Vue from 'vue'
import menuvue from './componentes/menu.vue'
import boxedvue from './componentes/boxed.vue'

const app = new Vue({
    el: '#app',

    data(){
        return{
            codigo:''
        }
    },
    components:{
        'box' : boxedvue,
        'menus': menuvue,
    },
    methods:{
        obtenercod(value){
            this.$refs.codbarras.agregar(value)
        }

    }
})

