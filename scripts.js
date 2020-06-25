
    (function openMobileMenu() {
        $('.header__menu__mobile').on('click', function () {     
                $('.header__menu').toggle(1000);    
        });
     
    })();
   
   function ModalOpen(){
  let modalWindow = document.querySelector('.wmodal')

modalWindow.classList.remove('hide')
setTimeout(() => {modalWindow.classList.add('open')}, 200)
}
function ModalClose(){
  let modalWindow = document.querySelector('.wmodal')
  modalWindow.classList.add('hide')
 setTimeout(() => { modalWindow.classList.remove('open')}, 200)
}



  $(".gadget__form").submit(function() {
        $.ajax({
            type: "POST",
            url: "/contact-form.php",
            data: $(this).serialize()
             })
				
    $(this).replaceWith(
`<div class="gadget__form thanks">
        <p class="gadget__form__title">Ваша заявка принята</p>
    </div>`
)
        });
 

