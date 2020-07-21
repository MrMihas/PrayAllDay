

let dots = document.querySelector(".slider-dots");

dots.addEventListener('click', dotsActive);


function dotsActive(e) {
	pausePlayIcon();
	if (e.target.classList.contains('dots-item')) {

		const activeClass = this.querySelector(".active");
		if (activeClass) {
			activeClass.classList.remove("active");
			// activeClass.classList.remove("play");
			// activeClass.removeAttribute("id");

		}
		e.target.classList.add('active');
		// e.target.setAttribute('id', 'play');
		slideActive(e.target.getAttribute('data-attr'));

	}
}

function slideActive(e) {
	let slides = document.querySelectorAll(".slider-item");
	for (let i = 0; i < slides.length; i++) {
		if (e == slides[i].getAttribute('data-attr')) {
			slides[i].classList.add("active");
		} else {
			slides[i].classList.remove("active");
		}
	}

}


// function pausePlayIcon() {
// 	let dots = document.querySelectorAll(".dots-item");
// 	for (let k = 0; k < dots.length; k++) {
// 		let checkedDots = dots[k];
// 		if (checkedDots.hasAttribute('id')) {
// 			checkedDots.onclick = function () {
// 				checkedDots.classList.toggle('play');
// 				checkedDots.removeAttribute('id');
// 				checkedDots.setAttribute('id', 'play');
// 			}
// 		}
// 	}

// }


// document.querySelector('.play').onclick = play;
// document.querySelector('.stop').onclick = stop;


// let video;
// let display;

// video = document.querySelector('#video-player');
// progress = document.querySelector('#progress');

// console.log(video);

