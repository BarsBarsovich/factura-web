const btn = document.getElementById("loadMore");


btn.addEventListener('click', function ($event){
    $event.preventDefault();
    const el = document.getElementById("morePhoto");
    el.classList.remove("gallery__container_hidden");
})