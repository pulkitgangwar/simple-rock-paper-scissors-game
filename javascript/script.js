const finalResult = document.querySelector(".final__result");

finalResult.innerHTML = JSON.parse(localStorage.getItem("winner"));
