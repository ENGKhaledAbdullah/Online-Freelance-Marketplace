$(function(){
    $("#project-categories-list1").click(function(){
        $("#project-categories-list-items1").toggle(100);
        $("#oc-arrow1").toggleClass("rotate-arrow");
    });   
    $("#project-categories-list2").click(function(){
        $("#project-categories-list-items2").toggle(100);
        $("#oc-arrow2").toggleClass("rotate-arrow");
    });   
    $("#project-categories-list3").click(function(){
        $("#project-categories-list-items3").toggle(100);
        $("#oc-arrow3").toggleClass("rotate-arrow");
    });
    console.clear();
    const list = document.querySelectorAll('.list');
    const nav = document.querySelector('.navigation');
    list.forEach(item => item.addEventListener('click', function(e){
        list.forEach(li => li.classList.remove('active'));
        e.currentTarget.classList.add('active');
    }));   
});

