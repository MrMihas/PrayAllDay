let dots = document.querySelector(".slider-dots");

dots.addEventListener('click', function (e) {
	if (e.target.classList.contains('dots-item')) {
		const activeClass = this.querySelector(".active");
		if(activeClass){
			activeClass.classList.remove("active");
		}
		e.target.classList.add('active');
	}
});


let dotsLink = document.querySelectorAll('.dots-link');

dotsLink.forEach((e)=>{
	e.addEventListener('click', function(){
		let bgWrapper = document.querySelector(".slider-item span");
bgWrapper.classList.add('active');

	})
})