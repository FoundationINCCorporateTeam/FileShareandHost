function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fileData = event.target.result;
            localStorage.setItem('uploadedFile', fileData);
            const fileUrl = document.getElementById('fileUrl');
            const fileLink = document.getElementById('fileLink');
            const pageUrl = window.location.origin + '/file.html';
            fileUrl.value = pageUrl;
            fileLink.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}
