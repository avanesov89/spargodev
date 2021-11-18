/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */


 const details = Array.from(document.querySelectorAll("details"));

 // Add the onclick listeners.
 details.forEach((targetDetail) => {
   targetDetail.addEventListener("click", () => {
     // Close all the details that are not targetDetail.
     details.forEach((detail) => {
       if (detail !== targetDetail) {
         detail.removeAttribute("open");
       }
     });
   });
 });