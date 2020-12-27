<template>
    <div class="bg">
        <div class="codigob">
            <div>
                <img src="../assets/img/ovni.png"  style="cursor: crosshair;" width="45" height="45">
            </div>
            <div>
                <input type="text" placeholder="codigo barras" class="btn">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .btn{
        width: 100px;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #21262d ;
        color:white;
        outline: none;
        margin-left: 3px;
    }

    .bg{
        position: sticky;
        top: 0px;
        display: flex;
        width: 300px;
        height: 150px;
        flex-direction: row;
        border-radius: 6px;
        border: 1px solid #21262d;
    }

    .codigob{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

</style>