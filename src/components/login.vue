<template>
<div class="login">
	<h2>登录</h2>
	<h3><img src="../assets/images/logo.png" /></h3>
	<div class="login_box">
		<ul>
			<li><input type="text" placeholder="用户名" v-model="username" id="username" name="username" /></li>
			<li>
				<input v-if='type' type="text" v-model="pwd" placeholder="密码" id="password" name="password" />
				<input v-else type="password" v-model="pwd" placeholder="密码" id="password" name="password" />
				<i @click="type = !type" :class="{red:type}"></i>
			</li>
		</ul>
		<p class="forget_pass"><a href="">忘记密码？</a></p>
		<p><button type="button" :class="{btn_login:'a',btn_login_cur:username.length>=5&&pwd.length>=5}" @click="onsubmit">登&nbsp;录</button></p>
		<p><button type="button" class="btn_register">注&nbsp;册</button></p>
	</div>
</div>
</template>

<script>
import {headers} from '@/server/getData.js';
export default{
	data(){
		return {
			type:!1,
			username:'testzd',
			pwd:'q123456'
		}
	},
	methods:{
		onsubmit:function(){
			if(this.username.length>=5 && this.pwd.length>=5){
				this.$axios.post('/passport/api/user/userLogin', {
				    'username': this.username,
				    'password': this.pwd
				  },{
				  	headers: headers
				  })
				  .then((response)=> {
				    if(response.data.data.result==0){
				    	var self = this;
				    	console.log(this);
				    	this.$toast({
				    		message: '登录成功',
							position: 'top',
							duration: 1000
				    	});
				    	setTimeout(function () {
                            self.$router.push('home')
                        }, 1000)
				    }else{
				    	this.$toast({
				    		message: '登录失败',
							position: 'top',
							duration: 1000
				    	});
				    }
				  })
				  .catch((response)=> {
				    
				  });
			}
		}
	}
}

</script>

<style lang="less">
@import url("../assets/css/common.css");
@size:37.5rem;
.login{
	h2{
		font-size: 14/@size;
		text-align: center;
		padding: 10/@size 0;
		border-bottom: 1px solid #ccc;
	}
	h3{
		text-align: center;
		padding: 20/@size 0 10/@size 0;
		img{
			width: 50%;	
		}
	}
	&_box{
		width: 80%;
		margin: 0 auto;
		ul{
			li{
				font-size: 14/@size;
				position: relative;
				border-bottom: 1px solid #e6e6e6;
				margin-bottom: 20/@size;
				input{
					width: 100%;
					height: 40/size;
					border: none;
					line-height: 40/@size;
				}
				i{
					position: absolute;
					background: url(../assets/images/icon_paw_hide.png) no-repeat;
					background-size:contain;
					right: 0;
					width: 19/@size;
					height: 8/@size;
					top: 20/@size;
				}
				i.red{
					background: url(../assets/images/icon_paw_show.png) no-repeat;
					background-size:contain;
				}
			}
		}
		.forget_pass{
			text-align: right;
			margin-bottom: 10px;
			a{
				font-size: 12/@size;
				text-align: right;
				color:#999;
			}
		}
		button{
			width: 100%;
			height: 40/@size;
			font-size: 14/@size;
			margin-top: 20/@size;
		}
		button.btn_login{background: #eee;color: #333;}
		button.btn_login_cur{background: #f23030; color: #fff;}
		button.btn_register{border:1px solid #f23030;color: #F23030;background: #fff;}
	}
}
</style>
