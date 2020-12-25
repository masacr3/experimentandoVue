<template>
    <div class="bg">
        <div v-for="(item,i) in items" :key="i" class="link">
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            items : ['menu1', 'menu2', 'menu3']
        }
    }
}
</script>

<style scoped>
    .bg{
        display: flex;
        width: 150px;
        flex-direction: column;
        border-radius: 20px;
        background-color:  #f48fb1;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .link{
        display: flex;
        align-items: center;
        height: 35px;
    }

    .link:hover{
        color: #fce4ec;
    }
</style>