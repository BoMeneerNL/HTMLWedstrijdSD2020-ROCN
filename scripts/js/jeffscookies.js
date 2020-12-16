const jeffscookies = document.querySelector(".jeffsdeliciouscookies")
const jeffscbutton = document.querySelector(".cookiebutton")
jeffscbutton.addEventListener("click", () =>{
    jeffscookies.classList.remove("active");
    localStorage.setItem("cookiedisp", "true")
});

setTimeout(() =>
{
    
    jeffscookies.classList.add("active");
}, 2000);