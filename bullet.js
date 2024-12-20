function showCategory(categoryId) {
    // Hide all categories first
    const allCategories = document.querySelectorAll('.category-content');
    allCategories.forEach((category) => {
      category.style.display = 'none';
    });
  
    // Show the clicked category's content
    const activeCategory = document.getElementById(categoryId);
    activeCategory.style.display = 'block';
  
    // Reset active tab
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach((tab) => {
      tab.classList.remove('active');
    });
  
    // Mark the clicked tab as active
    const activeTab = document.getElementById(categoryId + '-tab');
    activeTab.classList.add('active');
  }