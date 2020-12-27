import Vue from 'vue'
import menuvue from './componentes/menu.vue'
import boxedvue from './componentes/boxed.vue'

const app = new Vue({
    el: '#app',
    components:{
        'box' : boxedvue,
        'menus': menuvue
    }
})

