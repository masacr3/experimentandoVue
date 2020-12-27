<template>
    <div class="counter">
        <span>{{ cantidad }}</span>
    </div>
</template>

<script>
export default {
    props:{
        cantidad:Number
    }
}
</script>
<style scoped>

    .counter {
        display: inline-block;
        min-width: 20px;
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