    <?php
        function menyapa($nama = "Tamu", $waktu = "") {
            
            if ($waktu == "pagi") {
                    echo "Selamat pagi, $nama! Semangat menjalani hari.";
                } elseif ($waktu == "siang") {
                    echo "Selamat siang, $nama! Take your time.";
                } elseif ($waktu == "sore") {
                    echo "Selamat sore, $nama! Good Luck.";
                } elseif ($waktu == "malam") {
                    echo "Selamat malam, $nama! Sleep well.";
                } else {
                    echo "Halo, $nama! Selamat datang kembali!";
                }
            }

                
                menyapa("Gentar", "pagi");   
                menyapa("Frostfire", "malam");   
                menyapa("Glacier", "");        
                menyapa();                  
    ?>