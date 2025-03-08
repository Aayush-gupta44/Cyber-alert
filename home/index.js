document.getElementById('toggleButton').addEventListener('click', function () {
    const list = document.getElementById('mylist');
    
    // Toggle the 'hidden' class to show/hide the list
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden'); // Show the list
    } else {
        list.classList.add('hidden'); // Hide the list
    }
});

// Close the dropdown if clicked outside
window.addEventListener('click', function(event) {
    const button = document.getElementById('toggleButton');
    const list = document.getElementById('mylist');
    
    if (!button.contains(event.target) && !list.contains(event.target)) {
        list.classList.add('hidden'); // Hide the list if clicked outside
    }
});
