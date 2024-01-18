document.getElementById('upload-btn').addEventListener('click', function () {
    document.getElementById('file-input').click();
  });

  document.getElementById('file-input').addEventListener('change', function () {
    const fileInput = this;
    const profileImage = document.getElementById('profile-image');

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        profileImage.src = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  });