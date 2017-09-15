<template>
	<div class="container">
		<div class="banner">录播图</div>
		<ul class="fastentry">
			<li>
				<span></span>
				<h2>快速采购</h2>
				<p>快速下单常购商品</p>
			</li>
			<li>
				<span></span>
				<h2>店铺馆</h2>
				<p>认证店铺优质货源</p>
			</li>
		</ul>
		<div class="scrollNews">
			<h2></h2>
			<ul>
				<li>广东*****大药房采购了20000元订单</li>
				<li>广东*****大药房采购了20000元订单</li>
				<li>广东*****大药房采购了20000元订单</li>
				<li>广东*****大药房采购了20000元订单</li>
				<li>广东*****大药房采购了20000元订单</li>
				<li>广东*****大药房采购了20000元订单</li>
				<li>广东*****大药房采购了20000元订单</li>
				<li>广东*****大药房采购了20000元订单</li>
				<li>广东*****大药房采购了20000元订单</li>
			</ul>
		</div>
		<div class="topList">
			<h2>
				<div class="line"></div>
				<p>广东采购排行榜</p>
				<p class="top"></p>
			</h2>
			<ul>
				<li>
					<div class="img">
						<img src="../assets/images/12.jpg" />
					</div>
					<div class="text">
						<p class="productName">阿苯达唑片0.85g…</p>
						<p class="price">¥9.90</p>
						<p class="company">海南养生堂保健</p>
					</div>
				</li>
				<li>
					<div class="img">
						<img src="../assets/images/12.jpg" />
					</div>
					<div class="text">
						<p class="productName">阿苯达唑片0.85g…</p>
						<p class="price">¥9.90</p>
						<p class="company">海南养生堂保健</p>
					</div>
				</li>
				<li>
					<div class="img">
						<img src="../assets/images/12.jpg" />
					</div>
					<div class="text">
						<p class="productName">阿苯达唑片0.85g…</p>
						<p class="price">¥9.90</p>
						<p class="company">海南养生堂保健</p>
					</div>
				</li>
				<li>
					<div class="img">
						<img src="../assets/images/12.jpg" />
					</div>
					<div class="text">
						<p class="productName">阿苯达唑片0.85g…</p>
						<p class="price">¥9.90</p>
						<p class="company">海南养生堂保健</p>
					</div>
				</li>
				<li>
					<div class="img">
						<img src="../assets/images/12.jpg" />
					</div>
					<div class="text">
						<p class="productName">阿苯达唑片0.85g…</p>
						<p class="price">¥9.90</p>
						<p class="company">海南养生堂保健</p>
					</div>
				</li>
				<p class="more">查看更多</p>
			</ul>
		</div>
		<ul class="ad">
			<li><img src="../assets/images/ad1.png" /></li>
			<li><img src="../assets/images/ad2.png" /></li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	}
}

</script>

<style lang="less">
@import url("../assets/css/common.less");
@size:37.5rem;
body{background: #F4F5F9;}
.banner{
	height: 170/@size;
}
.fastentry{
	border-bottom: 1px solid #eee;
	background: #fff;
	overflow: hidden;
	li{
		width: 50%;
		position: relative;
		height: 75/@size;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		float: left;
		padding:15/@size 0 0 71/@size;
		h2{
			font-size: 17/@size;
			font-weight: 800;
			color: #343434;
			margin-bottom: 2/@size;
		}
		p{
			font-size: 12/@size;
			color: #666;
		}
		span{
			background: url(../assets/images/Group_11@3x.png) no-repeat;
			background-size: contain;
			display: block;
			position: absolute;
			left:14/@size;
			top:15/@size;
			width: 46/@size;
			height: 46/@size;
		}
	}
	li:first-child{
		border-right: 1px solid #eee;
		span:first-child{
			background: url(../assets/images/Group_10@3x.png) no-repeat;
			background-size: contain;
		}
	}
}
.scrollNews{
	height: 60/@size;
	overflow: hidden;
	position: relative;
	background: #fff;
	h2{
		background: url(../assets/images/news.png) no-repeat;
		width: 39/@size;
		height:33/@size;
		position:absolute;
		left:14/@size;
		top: 13/@size;
		background-size: contain;
	}
	ul{
		height: 50/@size;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		overflow: hidden;
		padding: 12px 33/@size 0 72/@size;
		li{
			float: left;
			font-size:14/@size;
			height: 20/@size;
			line-height: 20/@size;
			color: #343434;
			width: 100%;
			padding: 0 0 0 17/@size;
			background: url(../assets/images/Combined Shape@3x.png) no-repeat left center;
			background-size: 12/@size 13/@size;
			.ellipsis();
		}
	}
}
.topList{
	padding: 14/@size 10/@size;
	height: 167/@size;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
	position: relative;
	.scrollX();
	h2{
		position: absolute;
		left: 10/@size;
		top: 14/@size;
		width: 80/@size;
		height: 140/@size;
		margin-right: 5/@size;
		font-size: 15/@size;
		color: #fff;
		font-weight: 800;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		line-height: 25/@size;
		box-sizing: border-box;
		padding:12/@size 12/@size 0 8/@size;
		background-image: linear-gradient(-139deg, #4182FE 25%, #615CFE 78%);
		border-radius: 3px;
		.line{
			background: #1E62E5;
			width: 55/@size;
			height: 5/@size;
			border-radius: 100px;
			margin-bottom: 10/@size;
		}
		.top{
			position: absolute;
			background: url(../assets/images/top1.png) no-repeat;
			background-size: contain;
			width: 71/@size;
			height: 38/@size;
			bottom: -8/@size;
			left: 4/@size;
		}
	}
	ul{
		float: left;
		height: 140/@size;
		padding-left: 85/@size;
		width: 800/@size;
		li{
			float: left;
			width: 102/@size;
			height: 140/@size;
			margin-right: 5/@size;
			background: #fff;
			border-radius: 3px;
			.text{
				background-image: linear-gradient(-160deg, #65B2FF 0%, #56A9F7 97%);
				width: 102/@size;
				height: 62/@size;
				padding: 4/@size 0 0 8/@size;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
				border-radius: 0 0 3px 3px;
				color: #fff;
				p.productName{
					font-size: 14/@size;
					font-weight: 800;
					.ellipsis();
				}
				p.price{
					font-size: 12/@size;
					padding: 2/@size 0;
				}
				p.company{
					font-size: 10/@size;
				}
			}
			.img{
				width: 102/@size;
				height: 78/@size;
				text-align: center;
				img{
					width: 72/@size;
					height:72/@size;
				}
			}
		}
		.more{
			width: 22/@size;
			font-size:14/@size;
			height: 140/@size;
			float:left;
			margin: 0 10/@size;
			text-align: center;
			color:#666;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			padding: 30/@size 0 0 0;
			background: url(../assets/images/more.png) no-repeat center 110/@size;
			background-size: 14/@size 14/@size;
		}
	}
}
.ad{
	overflow: hidden;
	background: #fff;
	padding: 14/@size 9/@size;
	li{
		float: right;
		width: 174/@size;
		height: 97/@size;
		img{
			width: 100%;
			height: 100%;
		}
	}
	li:first-child{
		float: left;
	}
}

</style>
