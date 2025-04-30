// This script handles the mobile menu toggle functionality
    document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('show');
    });


// header language select
document.addEventListener('DOMContentLoaded', function() {
  const languageOptions = document.querySelectorAll('.language-option');
  
  // Set initial active language (Arabic by default)
  languageOptions[0].classList.add('active');
  
  languageOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all options
      languageOptions.forEach(opt => opt.classList.remove('active'));
      
      // Add active class to clicked option
      this.classList.add('active');
      
      // Here you would typically add code to change the language
      const lang = this.getAttribute('data-lang');
      console.log('Language changed to:', lang);
    });
  });
});



//    Script to toggle selection 
    document.addEventListener("DOMContentLoaded", function () {
        const boxes = document.querySelectorAll('.item-box');
        boxes.forEach(box => {
          box.addEventListener('click', function () {
            this.classList.toggle('selected');
          });
        });
      });



    //   upload image 
    const fileInput = document.getElementById('fileUpload');
    const previewContainer = document.getElementById('previewContainer');
  
    fileInput.addEventListener('change', function () {
      [...fileInput.files].forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
          const box = document.createElement('div');
          box.classList.add('preview-box');
  
          const img = document.createElement('img');
          img.src = e.target.result;
  
          const removeBtn = document.createElement('button');
          removeBtn.innerHTML = '×';
          removeBtn.classList.add('remove-btn');
          removeBtn.onclick = () => box.remove();
  
          box.appendChild(img);
          box.appendChild(removeBtn);
          previewContainer.appendChild(box);
        };
        reader.readAsDataURL(file);
      });
  
      // Clear input to allow same file selection again
      fileInput.value = '';
    });



    
    // Drop down for Furtniture selection
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownPanel = document.getElementById('dropdownPanel');
    const dropdownText = document.getElementById('dropdownText');
    const selectedItemsContainer = document.getElementById('selected-items-container');
    const itemBoxes = document.querySelectorAll('.item-box');
    const hiddenSelect = document.getElementById('furniture-select');
    
    // Track selected items
    const selectedItems = new Map();
  
    // Initialize from hidden select (if any pre-selected)
    Array.from(hiddenSelect.options).forEach(option => {
      if (option.selected) {
        selectedItems.set(option.value, option.text);
      }
    });
  
    // Toggle dropdown visibility
    dropdownToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownPanel.classList.toggle('show');
    });
  
    // Handle item selection
    itemBoxes.forEach(box => {
      const value = box.getAttribute('data-value');
      const text = box.querySelector('p').textContent;
      
      // Initialize selection state
      if (selectedItems.has(value)) {
        box.classList.add('selected');
      }
      
      box.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (selectedItems.has(value)) {
          selectedItems.delete(value);
          this.classList.remove('selected');
        } else {
          selectedItems.set(value, text);
          this.classList.add('selected');
        }
        
        updateSelectedItems();
        updateHiddenSelect();
      });
    });
  
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!dropdownPanel.contains(e.target) && e.target !== dropdownToggle) {
        dropdownPanel.classList.remove('show');
      }
    });
  
    // Update selected items display
    function updateSelectedItems() {
      selectedItemsContainer.innerHTML = '';
      
      if (selectedItems.size === 0) {
        dropdownText.textContent = 'حدد القطع والأثاث إن وجد';
        return;
      }
      
      dropdownText.textContent = `تم اختيار ${selectedItems.size} عناصر`;
      
      selectedItems.forEach((text, value) => {
        const tag = document.createElement('div');
        tag.className = 'selected-tag';
        tag.innerHTML = `
          <span>${text}</span>
          <img src="assets/img/cross.png" class="h-3 w-3" onclick="removeSelectedItem('${value}')">
        `;
        selectedItemsContainer.appendChild(tag);
      });
    }
  
    // Update the hidden select element
    function updateHiddenSelect() {
      Array.from(hiddenSelect.options).forEach(option => {
        option.selected = selectedItems.has(option.value);
      });
    }
  
    // Remove selected item
    window.removeSelectedItem = function(value) {
      selectedItems.delete(value);
      document.querySelector(`.item-box[data-value="${value}"]`).classList.remove('selected');
      updateSelectedItems();
      updateHiddenSelect();
    }
  
    // Initialize display
    updateSelectedItems();
    


    // Track Order Popup
   