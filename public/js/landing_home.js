document.addEventListener('DOMContentLoaded', () => {
    const authButtons = document.getElementById('auth-buttons');
    const profileSection = document.getElementById('profile-section');
    const logoutBtn = document.getElementById('logout-btn');
    const protectedNavItems = document.querySelectorAll('.protected-nav');
    const searchArea = document.getElementById('search-area');


    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    function updateUI() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (isLoggedIn) {
          authButtons.style.display = 'none';
      profileSection.style.display = 'flex';
      if (searchArea) searchArea.style.display = 'flex';

        protectedNavItems.forEach(item => item.style.display = 'inline-block');
    } else {
      authButtons.style.display = 'flex';
      profileSection.style.display = 'none';
      if (searchArea) searchArea.style.display = 'none';

      protectedNavItems.forEach(item => item.style.display = 'none');
    }

    }
    


    function handleLogout() {
        isLoggedIn = false;
        localStorage.setItem('isLoggedIn', 'false');
        updateUI();
        window.location.reload();
    }

    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

    updateUI();
});
