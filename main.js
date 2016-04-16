"use strict";
var Tab = $("#tabs");
var BlogTab = $("#blog-tabs");
var ContactTab = $("#contact-tabs");
var ItemTab = $("#item-tabs");
var map1 = $("#map1");
var map2 = $("#map2");
var map3 = $("#map3");
var rangemax = $("#rangemax");
var rangemin = $("#rangemin");
var quantityModule = $(".item__price-tableRow");
var basketsumm = $(".basket__summ");
var Tabs;

function Calculate() {
    var elements = document.querySelectorAll('.basket__row');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].querySelector(".quantity").value == "" || elements[i].querySelector(".quantity").value == null) {
            elements[i].querySelector(".quantity").value = 1;
        }
        var price = elements[i].querySelector(".basket__one-price").innerText;
        price = (price.match(/\d/g).toString()).replace(/,/g, '');
        var summa = (parseInt(elements[i].querySelector(".quantity").value) * parseInt(price)).toString();
        elements[i].querySelector(".basket__summ").innerText = summa + " руб.";
    }
}



function Quantity(el) {
    var self = el;

    this.minus = self.querySelector('.minus');
    this.plus = self.querySelector('.plus');

    var Init = function () {
        this.minus.onclick = function (e) {
            e.preventDefault();
            if (self.querySelector('.quantity').value != 1) {
                self.querySelector('.quantity').value = parseInt(self.querySelector('.quantity').value) - 1;
                if (basketsumm.length) {
                    Calculate();
                }
            }

        };
        this.plus.onclick = function (e) {
            e.preventDefault();
            self.querySelector('.quantity').value = parseInt(self.querySelector('.quantity').value) + 1;
            if (basketsumm.length) {
                Calculate();

            }

        }
        return null
    }.bind(this);

    this.run = function () {
        Init();
    };
}

$(document).ready(function () {
    if (Tab.length) {
        Tab.tabtab({
            tabMenu: '.tabs__menu'
            , tabContent: '.tabs__content'
            , next: '.tabs-controls__next'
            , prev: '.tabs-controls__prev'
            , useAnimations: true
            , startSlide: 1
            , rotateX: 0
            , speed: 500
            , transformOrigin: "center left"
            , rotateY: 90
            , easing: "easeInOutCubic"
            , translateX: 0
        })
    }
    if (BlogTab.length) {
        BlogTab.tabtab({
            tabMenu: '.tabs__menu'
            , tabContent: '.tabs__content'
            , next: '.tabs-controls__next'
            , prev: '.tabs-controls__prev'
            , useAnimations: true
            , startSlide: 1
            , rotateX: 0
            , speed: 500
            , transformOrigin: "center left"
            , rotateY: 90
            , easing: "easeInOutCubic"
            , translateX: 0
        })
    }
    if (ContactTab.length) {
        ContactTab.tabtab({
            tabMenu: '.tabs__menu'
            , tabContent: '.tabs__content'
            , next: '.tabs-controls__next'
            , prev: '.tabs-controls__prev'
            , useAnimations: true
            , startSlide: 1
            , rotateX: 0
            , speed: 500
            , transformOrigin: "center left"
            , rotateY: 90
            , easing: "easeInOutCubic"
            , translateX: 0
        })
    }
    if (ItemTab.length) {
        ItemTab.tabtab({
            tabMenu: '.tabs__menu'
            , tabContent: '.tabs__content'
            , useAnimations: true
            , startSlide: 1
            , rotateX: 0
            , speed: 500
            , transformOrigin: "center left"
            , rotateY: 90
            , easing: "easeInOutCubic"
            , translateX: 0
        })
    }
    if (map1.length) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map1', {
                    center: [60.940171, 76.537235]
                    , zoom: 16
                    , controls: ['smallMapDefaultSet']
                })
                , myPlacemark = new ymaps.Placemark(myMap.getCenter());

            myMap.geoObjects.add(myPlacemark);
        });
    }
    if (map2.length) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map2', {
                    center: [60.940171, 76.537235]
                    , zoom: 16
                    , controls: ['smallMapDefaultSet']
                })
                , myPlacemark = new ymaps.Placemark(myMap.getCenter());

            myMap.geoObjects.add(myPlacemark);
        });
    }
    if (map3.length) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map3', {
                    center: [60.940171, 76.537235]
                    , zoom: 16
                    , controls: ['smallMapDefaultSet']
                })
                , myPlacemark = new ymaps.Placemark(myMap.getCenter());

            myMap.geoObjects.add(myPlacemark);
        });
    }
    if (quantityModule.length) {

        quantityModule.map(function (i, item, arr) {
            item = new Quantity(item);
            item.run();
        })
    }
    if (basketsumm.length) {
        Calculate();
        $('.quantity').on('keyup', Calculate);
        $('.quantity').on('change', Calculate);

    }
    if (rangemax.length) {
        rangemax.autoGrowInput({
            minWidth: 1
            , maxWidth: 70
            , comfortZone: 20
        });
    }
    if (rangemin.length) {
        rangemin.autoGrowInput({
            minWidth: 1
            , maxWidth: 70
            , comfortZone: 20
        });
    }



    $('.simple-ajax-popup').magnificPopup({
        type: 'ajax'
        , preloader: true
    });




});