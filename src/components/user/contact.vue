<template>
 <div class="about">
    <h1>聊天室</h1>
  </div>
</template>

<script>
	export default {
		data() {
			return {
					ws:''
			};
		},
		created() {
			this.ws=new WebSocket('ws://localhost:8095/ws/chat')
			this.ws.onmessage=function(event){
				var data=event.data;
				console.log(data)
			}
			this.ws.onclose=function(evl){
				console.log(evl)
			}
			this.ws.onerror=function(code,msg){
				console.log(coed,msg)
			}
		},
	}
</script>

<style>

</style>
