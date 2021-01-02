import Vue from 'vue'
import boxedvue from './componentes/boxed2.vue'
import totalvue from './componentes/totalv.vue'

const app = new Vue({
    el: '#app',

    data(){
        return{
            totalventas : 100
        }
    },
    components:{
        'box' : boxedvue,
        'total': totalvue
    }
})