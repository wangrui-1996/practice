//控制顶部搜索栏的显示与隐藏
window.onscroll=function(){
	console.log('页面滚动啦-----');
	//1 获取到滚动条滚动的距离
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	console.log(top);
	//2 获取到顶部div class=nav-search
	var nav = document.getElementsByClassName('nav-search')[0];
	var m =document.getElementsByClassName('main-middle-nav')[0];
	//假如top为500时 nav出现了
	if (top>=650) {
		nav.style.position = "fixed";
		nav.style.top = "0";
		nav.style.height = "50px";
		nav.style.display = "block";
		nav.style.zIndex = 1000;
		m.style.position = "fixed";
		m.style.display = "block";
		m.style.zIndex = 1000;
	} else {
		nav.style.display = "none";
		nav.style.height = "0";
		m.style.display = "none";
	}
}


	
