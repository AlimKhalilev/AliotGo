--include("_webpsup.js");
    
--include("_globals.js")

--include("_modal.js")
--include("_burger.js")
//-include("_slider.js")
--include("_scroll.js")

--include("_passwordSwitcher.js")
--include("_customSelect.js")
--include("_details.js")
--include("_dropdown.js")

--include("_adaptImg.js")
--include("_intersection.js")

--include("_contentSelect.js")
--include("_swiper.js")

document.querySelectorAll(".version").forEach(item => { // устанавливаем на нужных элементах версию разработки
    item.innerHTML = "1.2.4";
});

document.querySelectorAll(".cardSection__baseCard").forEach(card => {
    let moveBlock = card.querySelector(".cardSection__moveBlock");
    let baseCard = card.querySelector(".baseCard");

    if (moveBlock !== null) {
        baseCard.addEventListener("mousemove", function(e) {
            moveBlock.style.left = `${e.layerX}px`;
            moveBlock.style.top = `calc(${e.layerY}px + 200px)`;
        });
    }
});
