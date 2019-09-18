window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a = 1) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }
    
    hideTabContent();

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }
    info.addEventListener('click', function(event) {
        let target = event.target;//ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
        if (target && target.classList.contains('info-header-tab')) {//ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })
    //timer

    const deadline = '2019-10-13';

    function getTimeRemaining(endTime = deadline) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endTime = deadline) {
        let  timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            IFtimeOneDigitAddZero(hours, t.hours);
            IFtimeOneDigitAddZero(minutes, t.minutes);
            IFtimeOneDigitAddZero(seconds, t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        function IFtimeOneDigitAddZero(typeTime,time) {
            if (time < 10) {
                typeTime.textContent =`0${time}`;
            } else {
                typeTime.textContent = time;
            }
        }
        }

    }

    setClock('timer', deadline);

    //modal
    
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabsWrapper = document.querySelector('.info');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    tabsWrapper.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });
    //Form
    function clearInputs(input) {
        for(let i = 0;i < input.length; i++) {
            input[i].value = '';
        }
    }
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset = utf-8');

            let formData = new FormData(form);
            
            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener('readystatechange', function() {
                if(request.readyState <4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
            clearInputs(input);
        });

    let additionalForm = document.querySelector('#form'),
        inputAdditForm = additionalForm.getElementsByTagName('input');

    additionalForm.addEventListener('submit', function(event) {
        event.preventDefault();
        statusMessage.style.color = "white";
        additionalForm.appendChild(statusMessage);
        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset = utf-8');

        let addFormData = new FormData(additionalForm);

        let obj = {};
        addFormData.forEach(function(value, key) {
                obj[key] = value;
            });
        let json = JSON.stringify(obj);
        request.send(json);

        request.addEventListener('readystatechange', function() {
            if(request.readyState <4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        clearInputs(inputAdditForm);

    });

} )