class Modal {
  
  constructor (element, options = {}) {
    this.element = element;
    this.options = Object.assign({}, {
      openBtns: '[data-action="open-modal"]',
      closeBtns: '[data-action="close-modal"]',
      activeClass: 'is-open',
      bodyClass: 'has-modal'
    }, options);
    
    let isOpen;
    let elementId = this.element.getAttribute('id');
    
    this.openModalHandler(elementId);
    this.closeModalHandler(elementId);
  }

  /**
   * Open modal
   */
  openModalHandler (elementId) {
    let self = this;
    let openBtns = document.querySelectorAll(self.options.openBtns);
    
    openBtns.forEach(openBtn => {
      
      let openBtnTarget = openBtn.dataset.target;
      
      if (openBtnTarget === elementId) {
        openBtn.addEventListener('click', function() {
          self.isOpen = true;
          self.modalStateHandler();
        });
      }
    });
  }

  /**
   * Close modal
   */
  closeModalHandler (elementId) {
    let self = this;
    let closeBtns = document.querySelectorAll(self.options.closeBtns);
    
    closeBtns.forEach(closeBtn => {
      
      let closeBtnTarget = closeBtn.dataset.target;
      
      if (closeBtnTarget === elementId) {
        closeBtn.addEventListener('click', function() {
          self.isOpen = false;
          self.modalStateHandler();
        });
      }
    });
  }
  
  /**
   * Modal state handler
   */
  modalStateHandler () {
    let self = this;
    
    if(self.isOpen === true) {
      self.modalStateOpen();
    } else {
      self.modalStateClose();
    }
  }
  
  /**
   * Open state
   */
  modalStateOpen () {
    let self = this;
    
    document.body.classList.add(self.options.bodyClass);
    self.element.classList.add(self.options.activeClass);
    self.element.hidden = false;
  }
  
  /**
   * Close state
   */
  modalStateClose () {
    let self = this;
    
    document.body.classList.remove(self.options.bodyClass);
    self.element.classList.remove(self.options.activeClass)
    self.element.hidden = true;
  }
}

document.addEventListener('DOMContentLoaded', function() {

  new Modal(document.getElementById('modal'));
  
  new Modal(document.getElementById('modal2'));
  
  new Modal(document.getElementById('modal3'));

});