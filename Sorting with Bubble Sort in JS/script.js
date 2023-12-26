function hesapla() {
    var ToplamSayi = 0;
    var diziValue = document.getElementById("dizi").value.trim();
    for (var i = 0; i < diziValue.length; i++) {
        if (diziValue[i] === ",") {
            ToplamSayi++;
        }
    }
    var sayiDizisi = new Array(ToplamSayi + 1);

    for (var i = 0; i <= ToplamSayi; i++) {
        sayiDizisi[i] = parseInt(diziValue.split(',')[i].trim());
    }

    var siralamaSecenekleri = document.getElementsByName("siralama");
    var siralamaSecenegi;

    for (var i = 0; i < siralamaSecenekleri.length; i++) {
        if (siralamaSecenekleri[i].checked) {
            siralamaSecenegi = siralamaSecenekleri[i].value;
            break;
        }
    }

    if (siralamaSecenegi === "buyuktenKucuge") {
        sayiDizisi.sort(function (a, b) {
            return b - a;
        });
    } else {
        sayiDizisi.sort(function (a, b) {
            return a - b;
        });
    }

    var sonucDiv = document.getElementById("sonuc");
    var sonucTablo = document.getElementById("sonucTablo");
    if (!isNaN(sayiDizisi[0]) && ToplamSayi+1 > 1 ) {
        sonucTablo.innerHTML = ""; // Önceki içeriği temizle
        var sutunSayisi = 9;
        var satirSayisi = ToplamSayi + 1;


        for (var i = 0; i < satirSayisi; i++) {
            if (i * sutunSayisi < sayiDizisi.length) {
                var newRow = sonucTablo.insertRow();

                for (var j = 0; j < sutunSayisi; j++) {
                    var cell = newRow.insertCell(j);
                    if (i * sutunSayisi + j < sayiDizisi.length) {
                        cell.innerHTML = sayiDizisi[i * sutunSayisi + j];
                    }
                }
            }
        }
    }else {
        sonucTablo.innerHTML = "";
        var newRow = sonucTablo.insertRow();
        var cell = newRow.insertCell(0);
        cell.innerHTML = "Geçerli bir sıralama için birden fazla sayı girin.";
    }
}
