    let container = document.getElementById("container");
    let gambar = document.getElementById("gambar");

    // Function untuk menambah atau menghapus background color dan menampilkan gambar
    container.onclick = function () {
        if (container.classList.contains("background-color")) {
                container.classList.remove("background-color");
                gambar.style.display = "block"; // Menampilkan gambar jika ada
            } else {
                container.classList.add("background-color");
                gambar.style.display = "none"; // Menyembunyikan gambar
            }
    };

    // Function untuk menambahkan gambar
    function tambahgambar() {
            if (!gambar) {
                gambar = document.createElement("img");
                gambar.id = "gambar";
                gambar.src = "https://via.placeholder.com/150"; // URL gambar default
                gambar.alt = "Gambar default";
                gambar.style.width = "150px"; // Memberikan ukuran gambar
                gambar.style.height = "150px";
                container.appendChild(gambar);
            }
    }
