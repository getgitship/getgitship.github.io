// & --------------us------------------
  function OnOff() {
    var divElement = document.querySelector('.con1');
    var h1RedElement = document.querySelector('h1.red');
  
    if (divElement.classList.contains('on')) {
      divElement.classList.remove('on');
      h1RedElement.classList.remove('on');
      if (h1RedElement.textContent === 'N') {
        h1RedElement.textContent = '&';
      } else {
        h1RedElement.textContent = 'N';
      }
    } else {
      divElement.classList.add('on');
      h1RedElement.classList.add('on');
      if (h1RedElement.textContent === 'N') {
        h1RedElement.textContent = '&';
      } else {
        h1RedElement.textContent = 'N';
      }
    }
  }

  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile_navigasi');

  menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is_active')
    mobile_menu.classList.toggle('is_active')
  });
  