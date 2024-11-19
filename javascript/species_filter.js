// Variables for checkboxes and original grid
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const animals = document.querySelectorAll('section[id^="animal_col"] div');
const gridContainer = document.querySelector('body');

// Event listeners for checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedSpecies = Array.from(checkboxes)
            .filter(box => box.checked)
            .map(box => box.value);

        // Filter the animals based on their species    
        const matchingSpecies = Array.from(animals).filter(animal =>
            selectedSpecies.length == 0 || selectedSpecies.includes(animal.getAttribute('data-species'))
        );
        
        // Clear the existing grid
        document.querySelectorAll('section[id^="animal_col"]').forEach(section => {
            section.innerHTML = '';
        });

        if (selectedSpecies.length > 0) {
            const columns = document.querySelectorAll('section[id^="animal_col"]');
            matchingSpecies.forEach((animal, index) => {
                const columnIndex = index % columns.length;
                const clone = animal.cloneNode(true);
                columns[columnIndex].appendChild(clone);
            });
        } else {
            // If no specific species is selected then all species will show
            const columns = document.querySelectorAll('section[id^="animal_col"]');
            animals.forEach((animal, index) => {
                const columnIndex = index % columns.length;
                const clone = animal.cloneNode(true);
                columns[columnIndex].appendChild(clone);
            });
        }
    });
});