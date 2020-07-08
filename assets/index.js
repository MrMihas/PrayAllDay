let dots = document.querySelector(".slider-dots");

dots.addEventListener('click', dotsActive);


function dotsActive(e){
	if (e.target.classList.contains('dots-item')) {
		const activeClass = this.querySelector(".active");
		if(activeClass){
			activeClass.classList.remove("active");
		}
		e.target.classList.add('active');
		console.log(e.target.getAttribute('data-attr'));
		test(e.target.getAttribute('data-attr'));
	} 
}

function test(e){
	let slider = document.querySelectorAll(".slider-item");
	for (let i = 0; i < slider.length; i++) {
		if(e == slider[i].getAttribute('data-attr')){
			slider[i].classList.add("active");
		} else{
			slider[i].classList.remove("active");
		}
	}
	
}


// function slider(){

// 	let slideItem = document.querySelectorAll(".slider-item");
// 	for (let i = 0; i < slideItem.length; i++) {
// 		console.log(slideItem.length);
// 	}
// }

// let dotsLink = document.querySelectorAll('.dots-link');

// dotsLink.forEach((e)=>{
// 	e.addEventListener('click', function(){
// 		let bgWrapper = document.querySelector(".slider-item span");
// 		bgWrapper.classList.add('active');

// 		let sliderItem = 

// 	})
// })