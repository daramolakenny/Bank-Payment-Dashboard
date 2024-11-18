    // var toggleText = document.getElementById('toggle-text');
    // var toggleButton = document.getElementById('toggle-button');
    // var toggleIcons = document.getElementById('toggle-icon');
    
    // // const originalText = toggleText.innerText;
    // const originalText = toggleText.innerText.trim();
    // const hiddenText = 'xxx';

    // let isHidden = false;

//     toggleButton.addEventListener('click', () => {
//     // Flip the state (true if hidden, false if visible)
//     isHidden = !isHidden;

//     // Toggle the text between the original amount and the hidden '₦xxx'
//     toggleText.innerText = isHidden ? hiddenText : originalText;

//     // Update the icon class depending on whether the amount is hidden or shown
//     toggleIcons.className = isHidden ? 'fa-solid fa-toggle-off' : 'fa-solid fa-toggle-on';
// });

    // toggleButton.addEventListener('click', () => {
    //     // Check if the current text is the original text
    //     const isTextHidden = toggleText.innerText === originalText;

    //     isHidden = !isHidden;
    //     // Toggle text content
    //     toggleText.innerText = isHidden ? hiddenText : `<i class="fa-solid fa-naira-sign"></i> ${originalText}`;

    //     // Update the toggle icons
    //     toggleIcons.className = isHidden ? 'fa-solid fa-toggle-off' : 'fa-solid fa-toggle-on';
    // });






    var toggleText = document.getElementById('toggle-text');
    var toggleButton = document.getElementById('toggle-button');
    var toggleIcons = document.getElementById('toggle-icon');

    // Capture the original amount dynamically
    const originalText = toggleText.innerText.trim(); // Capture the original amount without any extra spaces
    const hiddenText = 'xxx'; // Define the hidden text
    let isHidden = false; // Track the toggle state

    toggleButton.addEventListener('click', () => {
        // Flip the state (true if hidden, false if visible)
        isHidden = !isHidden;

        // Toggle the text between the hidden '₦xxx' and the original amount with Naira icon
        toggleText.innerHTML = isHidden 
            ? hiddenText 
            : `<i class="fa-solid fa-naira-sign"></i> ${originalText}`;

        // Update the toggle icon class depending on the hidden state
        toggleIcons.className = isHidden ? 'fa-solid fa-toggle-off' : 'fa-solid fa-toggle-on';
    });