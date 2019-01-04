var img_arr = document.querySelectorAll('img.lazy-load'); // get the array of images to be lazy loaded
console.log(img_arr);

const observer = new IntersectionObserver(loadImg);  // create an intersection API observer

img_arr.forEach( function(element) {  // observe each image in the array
	observer.observe(element);
})

function loadImg(array) {
  console.log('loadImg fired!');
	array.forEach(obj=>{  // for each object in the intersection array
    if (obj.isIntersecting) {  // if the object is visible in the window
      console.log('obj.isIntersecting fired!')
			var target = obj.target;  // set it as the target element
			var src = target.getAttribute("lazy-load-src");  // set the src url of the image
      target.src = src;   // update the img src as the real source (aka loads the image)
      console.log(target.src);
			observer.unobserve(target);  // unobserve this image since it is now loaded
		}
	})
}