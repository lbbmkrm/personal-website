
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const content = document.getElementById(targetId);
      const icon = this.querySelector(".accordion-icon");

      // Toggle content visibility with animation
      if (content.classList.contains("hidden")) {
        // Close all other accordion items first
        document.querySelectorAll(".accordion-content").forEach((item) => {
          if (!item.classList.contains("hidden")) {
            item.style.maxHeight = "0";
            item.classList.add("hidden");
            const otherIcon = item.parentElement.querySelector(".accordion-icon");
            if (otherIcon) otherIcon.style.transform = "rotate(0)";
          }
        });

        // Open this accordion item
        content.classList.remove("hidden");
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      } else {
        // Close this accordion item
        content.style.maxHeight = "0";
        content.classList.add("hidden");
        icon.style.transform = "rotate(0)";
      }
    });
  });

  // Open the first accordion by default
  const firstHeader = document.querySelector(".accordion-header");
  if (firstHeader) {
    firstHeader.click();
  }
});
