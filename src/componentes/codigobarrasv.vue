<template>
	<div class="bgbox">
		<div>
        	<input 
				type="text" 
				placeholder="Codigo barras"
				v-model="cod"
				@keyup.enter="enviarcodigo()"
				/>
    	</div>
	</div>
</template>

<script>
export default {
    data(){
        return {
            cod: ''
        }
	},
	methods:{
		enviarcodigo(){
			this.$emit('codd', this.cod)
			this.cod = ''
		},
	}
}
</script>

<style scoped>

	.bgbox{
		width: 300px;
		height: 150px;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

	}

    input[type="text"]{
		height: 60px;
		width: 0px;
		background: transparent url('../assets/img/ovni.png') no-repeat 1px center;
		padding: 9px 10px 9px 70px;
		border: none;
		transition: all .5s;
		outline: none;
	}

	input[type="text"]:focus{
		width: 100px;
		padding-left: 70px;
		color: whitesmoke;
	}
</style>