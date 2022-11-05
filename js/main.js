
// Modal

window.addEventListener('DOMContentLoaded', () => {

    const modalAsosiy = document.querySelectorAll('[data-modal]')

    const modal = document.querySelector('.modal')

    const modalClose = document.querySelector('[data-close]')

    function closeModal() {

        modal.classList.add('hide')

        modal.classList.remove('show')

        document.body.style.overflow = 'auto'

    }

    function openModal() {

        modal.classList.add('show')

        modal.classList.remove('hide')

        document.body.style.overflow = 'hidden'

        clearInterval(timeModal)
   
    }

    modalAsosiy.forEach((item) => {

        item.addEventListener('click', openModal)

    })

    modalClose.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {

        if (e.target === modal ) {

            closeModal()                
            
        }

    }) 

    window.addEventListener('keydown', (e) => {

        if (e.code === 'Escape' && modal.classList.contains('show')) {

            closeModal()
            
        } 

    })

    const timeModal = setTimeout(openModal, 8000);

    function ochiqModal(){

        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
            
            openModal()

            removeEventListener('scroll', ochiqModal)

        }

    }
    
    window.addEventListener("scroll", ochiqModal)

});

// Modal Destination

window.addEventListener('DOMContentLoaded', () => {

    // Toshkent

    const body = document.querySelector('body')

    const modalToshkent = document.querySelector('.toshkent')

    const toshkentModal = document.querySelector('.toshkent-about')

    const toshkentClose = document.querySelector('.toshkent-close')

    function openToshkent() {

        toshkentModal.style.display = 'block'

        document.body.style.overflow = 'hidden'
        
    }

    function closeToshkent() {

        toshkentModal.style.display = 'none'
        
        document.body.style.overflow = 'auto'
        
    }

    modalToshkent.addEventListener('click', openToshkent)

    toshkentClose.addEventListener('click', closeToshkent)

    toshkentModal.addEventListener('click', (t) => {

        if (t.target === toshkentModal ) {
            
            closeToshkent()
                
        }
    
    })

    // Toshkent City

    const modalToshkentCity = document.querySelector('.toshkent-city')

    const toshkentCityModal = document.querySelector('.toshkent-city-about')

    const toshkentCityClose = document.querySelector('.toshkent-city-close')

    function openToshkentCity() {

        toshkentCityModal.style.display = 'block'

        document.body.style.overflow = 'hidden'
        
    }

    function closeToshkentCity() {

        toshkentCityModal.style.display = 'none'
        
        document.body.style.overflow = 'auto'
        
    }

    modalToshkentCity.addEventListener('click', openToshkentCity)

    toshkentCityClose.addEventListener('click', closeToshkentCity)

    toshkentCityModal.addEventListener('click', (t) => {

        if (t.target === toshkentCityModal ) {
            
            closeToshkentCity()
                
        }
    
    })

    // Samarqand

    const modalSamarqand = document.querySelector('.samarqand')

    const samarqandModal = document.querySelector('.samarqand-about')

    const SamarqandClose = document.querySelector('.samarqand-close')

    function openSamarqand() {

        samarqandModal.style.display = 'block'

        document.body.style.overflow = 'hidden'
        
    }

    function closeSamarqand() {

        samarqandModal.style.display = 'none'
        
        document.body.style.overflow = 'auto'
        
    }

    modalSamarqand.addEventListener('click', openSamarqand)

    SamarqandClose.addEventListener('click', closeSamarqand)

    samarqandModal.addEventListener('click', (t) => {

        if (t.target === samarqandModal ) {
            
            closeSamarqand()
                
        }
    
    })

    // Xiva

    const modalXiva = document.querySelector('.xiva')

    const xivaModal = document.querySelector('.xiva-about')

    const xivaClose = document.querySelector('.xiva-close')

    function openXiva() {

        xivaModal.style.display = 'block'

        document.body.style.overflow = 'hidden'
        
    }

    function closeXiva() {

        xivaModal.style.display = 'none'
        
        document.body.style.overflow = 'auto'
        
    }

    modalXiva.addEventListener('click', openXiva)

    xivaClose.addEventListener('click', closeXiva)

    xivaModal.addEventListener('click', (t) => {

        if (t.target === xivaModal ) {
            
            closeXiva()
                
        }
    
    })

    // Xorazm

    const modalXorazm = document.querySelector('.xorazm')

    const xorazmModal = document.querySelector('.xorazm-about')

    const xorazmClose = document.querySelector('.xorazm-close')

    function openXorazm() {

        xorazmModal.style.display = 'block'

        document.body.style.overflow = 'hidden'
        
    }

    function closeXorazm() {

        xorazmModal.style.display = 'none'
        
        document.body.style.overflow = 'auto'
        
    }

    modalXorazm.addEventListener('click', openXorazm)

    xorazmClose.addEventListener('click', closeXorazm)

    xorazmModal.addEventListener('click', (t) => {

        if (t.target === xorazmModal ) {
            
            closeXorazm()
                
        }
    
    })

    // Buxoro

    const modalBuxoro = document.querySelector('.buxoro')

    const buxoroModal = document.querySelector('.buxoro-about')

    const buxoroClose = document.querySelector('.buxoro-close')

    function openBuxoro() {

        buxoroModal.style.display = 'block'

        document.body.style.overflow = 'hidden'
        
    }

    function closeBuxoro() {

        buxoroModal.style.display = 'none'
        
        document.body.style.overflow = 'auto'
        
    }

    modalBuxoro.addEventListener('click', openBuxoro)

    buxoroClose.addEventListener('click', closeBuxoro)

    buxoroModal.addEventListener('click', (t) => {

        if (t.target === buxoroModal ) {
            
            closeBuxoro()
                
        }
    
    })


    

})

// loader-animation-none

window.addEventListener('DOMContentLoaded', () => {

    const loger = document.querySelector('.loader');

    setTimeout(() => {

        loger.style.opacity = '0';

        setTimeout(() => {

            loger.style.display = 'none';

        },1000);

    }, 6000);

});