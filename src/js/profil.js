// Switcher to Dark

// Event for switcher

const switchFunction = () => {
    // Get root element and data-theme value
    const rootElem = document.documentElement;
    console.log(rootElem);
    let dataTheme = rootElem.getAttribute('data-theme');
    let newTheme;

    newTheme = dataTheme === 'light' ? 'dark' : 'light';

    // Set the new HTML attribute
    rootElem.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);
};

document
    .querySelector("[data-js='theme-switcher']")
    .addEventListener('click', switchFunction);
