gsap.registerPlugin(ScrollTrigger);

//ScrollTrigger.create({
//  trigger: ".pin-container",
//  start: "top top",
//  end: "bottom top",
//  pin: true,
//  scrub: 2,
//  markers: true,
//});

const image_containers = gsap.utils.toArray('.image-container');

image_containers.forEach((image_container) => {
  gsap.from(image_container, {
    scrollTrigger: {
      start: 'top center',
      end: 'bottom center',
      scrub: 1.5,
      trigger: image_container,
      toggleClass: 'active',
      markers: true,
      onUpdate: () => {
          ScrollTrigger.refresh()
      },
    }
  });
});