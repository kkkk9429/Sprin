(function(){
	var swiper = new Swiper(".mySwiper", {
	  spaceBetween: 30,
	  centeredSlides: true,
	  autoplay: {
	    delay: 2500,
	    disableOnInteraction: false,
	  },
	  pagination: {
	    el: ".swiper-pagination",
	    clickable: true,
	  },
	  navigation: {
	    nextEl: ".swiper-button-next",
	    prevEl: ".swiper-button-prev",
	  },
	});
})();
// 立即执行函数
(function(){
	// 鼠标悬停到购物车修改样式
	// 1.查找元素
	var car = document.querySelector(".car")
	//console.log(car)
	//鼠标悬停事件
	car.onmouseover = function(){
		//console.log(this);
		this.style.backgroundColor = "#fff"
		this.style.backgroundImage = "url(img/images/buy01.png)"
		this.firstElementChild.style.color="#FF6A00"
		this.lastElementChild.style.display = "block"
	}
	// 鼠标移出事件
	car.onmouseout = function(){
		this.style.backgroundColor = "#424242"
		this.style.backgroundImage = "url(img/images/buy.png)"
		this.firstElementChild.style.color="#B0B0B0"
		this.lastElementChild.style.display = "none"
	}
	
	//练习: 鼠标激活时 搜索框颜色为 #FF6A00
	// onfocus
	var inp = document.querySelector("#middleNav input")
	//console.log(inp)
	var inpBox = inp.parentElement
	inp.onfocus = function(){
		inpBox.style.borderColor="#FF6A00"
		inpBox.nextElementSibling.style.borderColor="#FF6A00"
		inpBox.nextElementSibling.children[0].style.backgroundColor="#FF6A00"
	}
	// 查找元素
	// 设置样式
	// onblur 
	inp.onblur = function(){
		inpBox.style.borderColor="#b0b0b0"
		inpBox.nextElementSibling.style.borderColor="#b0b0b0"
		inpBox.nextElementSibling.children[0].style.backgroundColor="#fff"
	}
})();