// This script changes the grid layout based on the checkboxes selected

// Variables for checkboxes and animal columns
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const animals = document.querySelectorAll('section[id^="animal_col"] div');

// Event listeners for checkboxes
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        const selectedSpecies = Array.from(checkboxes)
            .filter(function (box) {
                return box.checked;
            })
            .map(function (box) {
                return box.value;
            });

        // Filter the animals based on their species    
        const matchingSpecies = Array.from(animals).filter(function (animal) {
            return (
                selectedSpecies.length == 0 || selectedSpecies.includes(animal.getAttribute('data-species'))
            );
        });

        // Clear the existing grid
        document.querySelectorAll('section[id^="animal_col"]').forEach(function (section) {
            section.innerHTML = '';
        });

        if (selectedSpecies.length > 0) {
            const columns = document.querySelectorAll('section[id^="animal_col"]');
            matchingSpecies.forEach(function (animal, index) {
                const columnIndex = index % columns.length;
                const clone = animal.cloneNode(true);
                columns[columnIndex].appendChild(clone);
            });
        } else {
            // If no specific species is selected then all species will show
            const columns = document.querySelectorAll('section[id^="animal_col"]');
            animals.forEach(function (animal, index) {
                const columnIndex = index % columns.length;
                const clone = animal.cloneNode(true);
                columns[columnIndex].appendChild(clone);
            });
        }
    });
});

function directToAdopt(species) {
    window.location.href = `adopt.html?species=${species}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const species = urlParams.get("species");

function filterAnimalBySpecies(selectedSpecies) {
    const allAnimals = document.querySelectorAll("[data-species]");
    const columns = document.querySelectorAll('section[id^="animal_col"]');

    columns.forEach(function (column) {
        column.innerHTML = "";
    });

    const matchingSpecies = Array.from(allAnimals).filter(function (animal) {
        return !selectedSpecies || animal.dataset.species === selectedSpecies;
    });

    matchingSpecies.forEach(function (animal, index) {
        const columnIndex = index % columns.length;
        const clone = animal.cloneNode(true);
        columns[columnIndex].appendChild(clone);
    });
}

    if (species) {
        filterAnimalBySpecies(species);

        const checkbox = document.querySelector(`#filters input[value="${species}"]`);
        if (checkbox) checkbox.checked = true;
    }
    
    const checkboxes = document.querySelectorAll('#filters input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function() {
            const selectedCheckbox = document.querySelector('#filters input[type="checkbox"]:checked');
            const selectedSpecies = selectedCheckbox ? selectedCheckbox.value : null;
            filterAnimalBySpecies(selectedSpecies); 
        });
    });
});
