/* Name Change */


document.addEventListener('DOMContentLoaded', () =>{
    let name = prompt(); // Prompt ile kullanıcı ismini aldık
    let username = document.querySelector('#myName') // querySelector ile yazdıracağımız div'in bilgilerini aldık
    username.innerHTML = name; // div'in içeriğini belirrttik
})

function showTime() {

    let now = new Date() // JS'in hazır olarak sunduğu date nesnesinden now adıyla yeni bir obje ürettik 
    let day = now.toLocaleDateString('tr-TR', { weekday: 'long' }) // now objemiz ile hafta günlerini türkçe ve String formatında çektik/ day isimli değişkene atadık. 
    let time = now.toLocaleTimeString('tr-TR')  //oluşturduğumuz now objesi ile daha önceden tanımlanmış yerel saat, dakika ve saniyeti time isimli değişkene atadık 
    let myClock = document.querySelector("#myClock") // DOM ile saati yazdıracağımız div' e ulaştık
    myClock.innerHTML = time + ' ' + day // Değişkenlere atadığımız değerleri innerHTML kullanarak ekrana yazdırdık
    
}

setInterval(showTime, 1000) //saniye artışını anlık göstermesi için kullandığımız fonksiyon