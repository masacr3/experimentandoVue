<template>
    <div>
        <div class="bg">
            <div class="content">${{valor}}</div>
        </div>}
    </div>
</template>

<script>
export default {
    props:{
        valor : {
            type : Number,
            default : 0
        }
    },
}
</script>

<style scoped>
    .bg{
        position: sticky;
        top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 6px;

        background-color:#0d1117;
        border: 1px solid #21262d;
    }

    .content{
        width: 100px;
        height: 100px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: white;
    }
</style>