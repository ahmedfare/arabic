 const theme = document.getElementById("theme")
 const section1 = document.getElementById("section1")
 const section2 = document.getElementById("section2")
 const section3 = document.getElementById("section3")
 const section4 = document.getElementById("section4")
 const section5 = document.getElementById("section5")
const body = document.getElementById("body")
const theme1 = document.getElementById("theme1")


 theme.addEventListener("click" , (eo) => {
   body.classList.toggle("addtheme")
section2.classList.toggle("addtheme")
section3.classList.toggle("addtheme")
section4.classList.toggle("addtheme")
section5.classList.toggle("addtheme")
head.classList.toggle("addtheme")
toup.classList.toggle("darkcolortoup")
  ar.classList.toggle("darkcolortoup")


 })
 theme1.addEventListener("click" , (eo) => {
  body.classList.toggle("addtheme")
section2.classList.toggle("addtheme")
section3.classList.toggle("addtheme")
section4.classList.toggle("addtheme")
section5.classList.toggle("addtheme")
head.classList.toggle("addtheme")
head2.classList.toggle("addtheme")
toup.classList.toggle("darkcolortoup")

})
