<template>
  <div ref="container" class="instagallery">
    <slot></slot>
  </div>
</template>

<script>
// JS
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
// CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

import { onMounted, ref } from "vue";

export default {
  name: "Instagallery",
  setup() {
    const container = ref(null);

    onMounted(() => {
      const lg = container.value;

      // lg.addEventListener("lgInit", () => {
      //   const $prevIcon = document.querySelector(".lg-prev.lg-icon");
      //   const $nextIcon = document.querySelector(".lg-next.lg-icon");
      //   const icon = `<svg aria-label="" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>`;

      //   // remove psuedo-element ::before
      //   $prevIcon.removeChild($prevIcon.firstChild);
      //   $prevIcon.insertAdjacentHTML(
      //     "beforeend",
      //     icon.replace('aria-label=""', 'aria-label="Previous"')
      //   );
      //   $prevIcon.style.transform = "rotate(-90deg)";

      //   // remove psuedo-element ::before
      //   $nextIcon.removeChild($nextIcon.firstChild);
      //   $nextIcon.insertAdjacentHTML(
      //     "beforeend",
      //     icon.replace('aria-label=""', 'aria-label="Next"')
      //   );
      //   $nextIcon.style.transform = "rotate(90deg)";
      // });

      lg.addEventListener("lgBeforeSlide", (event) => {
        const { index } = event.detail;
        const itemLength = document.querySelectorAll(".lg-item").length;

        const $prevIcon = document.querySelector(".lg-prev.lg-icon");
        const $nextIcon = document.querySelector(".lg-next.lg-icon");

        $prevIcon.style.display = index === 0 ? "none" : "block";
        $nextIcon.style.display = index === itemLength - 1 ? "none" : "block";
      });

      lightGallery(container.value, {
        plugins: [lgZoom],
        download: false,
        zoom: false,
        pager: false,
        counter: false,
        enableDrag: false,
        loop: false,
      });
    });

    return { container };
  },
};
</script>
