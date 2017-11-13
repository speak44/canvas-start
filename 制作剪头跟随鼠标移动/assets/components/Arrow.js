/**
 * 绘制剪头函数
 * */
class Arrow{
	constructor(props){
		this.x=0;
		this.y=0;
		this.w=60;
		this.h=30;
		//旋转角度
		this.rotation=0;
		//剪头颜色设置
		this.fillStyle='rgb(57,119,224)';
		//描边设置
		this.strokeStyle = 'rgba(0, 0, 0, 0)';
//		this.strokeStyle='rgba(0,0,0,0)';
		//浅克隆
		Object.assign(this,props);
		return this;
	}
	//绘制剪头的方法
	createPath(ctx){
	 let {w,h}=this;
	 ctx.beginPath();
	 ctx.moveTo(-w/2,-h/2);
	 ctx.lineTo(w/10,-h/2);
	 ctx.lineTo(w/10,-h);
	 ctx.lineTo(w/2,0);
	 ctx.lineTo(w/10,h);
	 ctx.lineTo(w/10,h/2);
	 ctx.lineTo(-w/2,h/2);
	 ctx.closePath();
	 return this;
	}
	render(ctx){
		let {fillStyle,strokeStyle,rotation,x,y}=this;
		ctx.save()
		ctx.fillStyle=fillStyle;
//		console.log(ctx.fillStyle)
		ctx.strokeStyle=strokeStyle;
		ctx.translate(x,y);
		//角度
		ctx.rotate(rotation);
		
		this.createPath(ctx);
		//填充
		ctx.fill();
		//描边
		ctx.stroke();
		ctx.restore();
		return this;
	}
}
