function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}

// Show the Summary section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('summary');
});
