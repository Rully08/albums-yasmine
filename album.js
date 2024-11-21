new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/face 1.jpg",
          img2: "images/face 2.jpg",
          img3: "images/face 3.jpg",
          title: "PAGE 1",
          isOpen: false,
        },
        {
          img1: "images/face 4.jpg",
          img2: "images/face 5.jpg",
          img3: "images/face 6.jpg",
          title: "PAGE 2",
          isOpen: false,
        },
        {
          img1: "images/face 7.jpg",
          img2: "images/face 8.jpg",
          img3: "images/face 9.png",
          title: "PAGE 3",
          isOpen: false,
        },
        {
          img1: "images/face 10.png",
          img2: "images/body 1.jpg",
          img3: "images/IMG-20211023-WA0001.jpg",
          title: "PAGE 4",
          isOpen: false,
        },
        {
          img1: "images/body 3.jpg",
          img2: "images/cakep2.JPG",
          img3: "images/cakep1.JPG",
          title: "PAGE 5",
          isOpen: false,
        },
        {
          img1: "images/bocil1.png",
          img2: "images/bocil2.png",
          img3: "images/bocil5.png",
          title: "BOCILL",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
