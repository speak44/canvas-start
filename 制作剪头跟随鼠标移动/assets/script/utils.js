let C={};
//获取坐标在元素上的坐标
C.getOffset=function(ele){
	let mouse={x:0,y:0};
	ele.addEventListener('mousemove',function(e){
		let {x,y}=C.eventWrapper(e);
		mouse.x=x;
		mouse.y=y;
	})
	return mouse;
}
C.eventWrapper=function(ev){
	let {pageX,pageY,target}=ev;
	let {left,top}=target.getBoundingClientRect()
	return {x:pageX-left,y:pageY-top}
}
//角度转化弧度
C.toRad=function(argle){
	return angle*Math.PI/180
}
//弧度转角度
C.toAngle=function(rad){
	return rad*180/Math.PI
}
