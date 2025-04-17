document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainMenu = document.querySelector('.main-menu');

  if (mobileMenuToggle && mainMenu) {
    mobileMenuToggle.addEventListener('click', function () {
      mainMenu.classList.toggle('active');
      // Optional: Change toggle button text/icon
      if (mainMenu.classList.contains('active')) {
        mobileMenuToggle.textContent = '✕'; // Close icon
      } else {
        mobileMenuToggle.textContent = '☰'; // Hamburger icon
      }
    });
  }

  // Optional: Close mobile menu when a link is clicked
  const menuLinks = mainMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainMenu.classList.contains('active')) {
        mainMenu.classList.remove('active');
        mobileMenuToggle.textContent = '☰';
      }
    });
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Only prevent default if it's an internal link on the same page
      if (this.hash !== "") {
        const targetElement = document.querySelector(this.hash);
        if (targetElement) {
          e.preventDefault();
          // Smooth scroll to target element
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust offset if needed (e.g., for fixed header)
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Placeholder for appointment button click
  const appointmentButtons = document.querySelectorAll('a[href="#appointment"]');
  appointmentButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      // Prevent default if it's just a placeholder '#' link
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
      }

      // If it's the main section link, smooth scroll handled above.
      // If it's the button in the header/banner/appointment section,
      // you might want to show a modal or redirect later.

      // Example: Alert for placeholder
      // alert('예약 시스템은 현재 준비 중입니다. 전화로 문의해주세요.');
      console.log('Appointment button/link clicked. Implement booking logic here.');
    });
  });

});
