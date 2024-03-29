class Scroll {
  constructor(options) {
    this.root = options.root;

    this.init();

    setTimeout(this.showImages.bind(this), 700);
  }

  init() {
    this.scroll = new LocomotiveScroll({
      el: this.root,
      direction: 'horizontal',
      smooth: true,
      lerp: 0.05,
      gestureDirection: 'both',
      tablet: {
        el: this.root,
      direction: 'horizontal',
      gestureDirection: 'both',
      smooth: true,
      lerp: 0.05,
    },
    
    smartphone: {
        gestureDirection: 'both',
        el: this.root,
      direction: 'horizontal',
      smooth: true,
      lerp: 0.05,
    } });



    this.images = this.root.querySelectorAll('.image-scroll');

    [].forEach.call(this.images, image => {
      image.addEventListener('click', () => {
        image.classList.add('-clicked');
        this.hideImages();
      });
    });
  }

  showImages() {
    [].forEach.call(this.images, image => {
      image.classList.remove('-clicked');
      image.classList.add('-active');
    });
  }

  hideImages() {
    [].forEach.call(this.images, image => {
      image.classList.remove('-active');
    });

    setTimeout(this.showImages.bind(this), 2000);
  }}



window.addEventListener('DOMContentLoaded', event => {
  const locoscroll = new Scroll({
    root: document.querySelector('.scroll-animations') });

});