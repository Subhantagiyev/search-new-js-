//function search (){
   //  let filter = document.getElementById('find').value.toUpperCase();
   //  let item = document.querySelectorAll('.product');
    // let I = document.getElementsByTagName('h3');
//}


function search() {
    // Istifadecinin girdiyi  axtaris terminini al ve büyük herfe çevir
    let filter = document.getElementById('find').value.toUpperCase();
    
    // .product sınıfıne sahip butun elementleri seç
    let items = document.querySelectorAll('.product');
    
    // h3 etiketine sahib tüm elementleri seç
    let headers = document.getElementsByTagName('h3');

    // Her mehsul ucun axtaris terimini kontrol et
    for (let i = 0; i < items.length; i++) {
        // Her mehsulun içindeki h3 etiketini al
        let header = headers[i];
        
        // Eger h3 etiketi varsa
        if (header) {
            // h3 etiketinin metin içeriyini al
            let txtValue = header.textContent || header.innerText;
            
            // Axtaris terimini olub olmadigini kontrol et
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                // Eger axtaris terimini varsa, elemeti göster
                items[i].style.display = "";
            } else {
                // Eger axtaris terimini yoxdursa, elementi gizle
                items[i].style.display = "none";
            }
        }
    }
}
