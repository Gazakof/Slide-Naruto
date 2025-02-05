const slideItem = $('.slideItems li');
const slideIndex = $('.slideIndex li');
const next = $('.next');
const prev = $('.prev');


let itemSelectionne = 0;

function setSlideItem(index) {
    itemSelectionne = index;

    slideItem.each(function(id) {
        let bord = id - itemSelectionne;
        if (bord < 0) bord += slideItem.length;

        for (let i=0; i < slideItem.length + 1; i++) {
            $(this)
            .removeClass(`item${i}`)
            .addClass(`item${bord + 1}`);
        }

        slideIndex
            .eq(itemSelectionne)
            .addClass('active')
            .siblings('li')
            .removeClass('active');
    });
}

slideItem.click(function() {
    setSlideItem($(this).index());
})

slideIndex.click(function() {
    setSlideItem($(this).index());
})

next.click(function() {
    itemSelectionne = itemSelectionne < (slideItem.length - 1) ? ++itemSelectionne : 0;
    setSlideItem(itemSelectionne);
})

prev.click(function() {
    itemSelectionne = itemSelectionne >= 1 ? --itemSelectionne : (slideItem.length - 1);
    setSlideItem(itemSelectionne);
})


$(document).ready(function() {
    $(".competence").on("mouseenter", function() {
        $(this).addClass("selected").siblings().removeClass("selected")
    })
})