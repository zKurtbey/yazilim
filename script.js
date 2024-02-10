//input bölgesine ad veriyorum
var secilendil = document.querySelector("#dil");
enbas();

//input bölgesini her harf girişinde etkileşimli olacak şekilde ayarlıyorum.
function enbas(){
    document.body.removeAttribute("onkeypress", "tekrar(event)");
    secilendil.focus();
    secilendil.removeAttribute("readonly", true);
    secilendil.value="";
    secilendil.addEventListener("input", ()=>{

        //Eğer Entera basıldıysa, renk değişiminin yeniden iptal olması için rengi siyah yapıyorum.
        document.querySelector("#sonuc").style="color: aliceblue; font-weight: normal";

        //olan dilleri atıyorum.
        var olandiller = ["Python", "HTML", "JavaScript", "Java", "C++", "C#"];

        //input değerini arrayde kontrol ederken büyük küçük sıkıntısı yaşamamak için bütün harflerini küçük harfe çeviriyorum
        var inputvalue = secilendil.value.toLowerCase();
        //olandiller arrayinin verilerinin hepsini küçük harfe çeviriyorum.
        var olandillersec = olandiller.map(function (diller) {
            return diller.toLowerCase();
        });
        //inputa hiçbir şey yazılmamışken boş kalması için girilen karakter sayacı ekliyorum.
        var lettercount = inputvalue.length;

        //eğer girilen harf sayısı 0 ise outputu boş bırakıyorum.
        if(lettercount == 0){
            document.querySelector("#sonuc").textContent = "";
        } else{
            //eğer 0 değil ise, küçük harfe çevirdiğim olandiller arrayinde küçük harfe çevirdiğim girilen input değerini aratıyorum.

            if(olandillersec.includes(inputvalue)){
                //girilen input değerinin olandillersec arrayindeki konumunu buluyorum.
                var girilendil = olandillersec.indexOf(inputvalue);

                //bulduğum konumdaki veriyi kesip alıyorum.
                var kesilmisdil = olandiller.splice(girilendil, 1)[0];
                //input değerindeki dil ismini gerçek büyük harfli yazılışıyla değiştiriyorum.
                secilendil.value = kesilmisdil;

                //seçilen dili onaylatıyorum.
                document.querySelector("#sonuc").textContent = kesilmisdil + " dilini seçtiniz. Onaylamak için 'Enter' tuşuna basın.";
            } else {
                //eğer girilen değer olandillersec arrayinde yoksa hata ekliyorum. 

                document.querySelector("#sonuc").textContent = inputvalue + " adında bir dil mevcut değildir.";    
            }
        } 
    });
}


//Enter tuşuna basılıp basılmadığını kontrol ediyorum.
function check(event){
    
    //buralarda değişkenleri yeniden atıyorum.
    
    var olandiller = ["Python", "HTML", "JavaScript", "Java", "C++", "C#"];
    var inputvalue = secilendil.value.toLowerCase();
    var olandillersec = olandiller.map(function (diller) {
        return diller.toLowerCase();
    });
    //Basılan tuş enter tuşu mu diye kontrol ediyorum.
    if(event.key === 'Enter'){
        //eğer enter tuşuysa, olandillersec arrayinin girilen input değerine sahip olup olmadığını kontrol ediyorum.
        if(olandillersec.includes(inputvalue)){
            
            //eğer sahipse,
            //girilen input değerinin olandillersec arrayindeki konumunu buluyorum.
            var girilendil = olandillersec.indexOf(inputvalue);
            
            //bulduğum konumdaki veriyi kesip alıyorum.
            var kesilmisdil = olandiller.splice(girilendil, 1)[0];
            
            //input üzerindeki odağı kaldırıyorum.
            secilendil.blur();
            //inputu değiştirilemez hale getiriyorum.
            secilendil.setAttribute("readonly", true);
            
            //outputun rengini yeşil ve ağırlığını kalın yapıyorum.
            
            document.querySelector("#sonuc").style="color: green; font-weight: bold";
            //girilen dilin javascript mi olduğunu kontrol ediyorum.
            if(girilendil == 2){
                //eğer javascriptse karışmasın diye veriden "java"yı çıkarıyorum.
                
                var inputvalue = "script";
                //soruları javascripte göre ayarlayacak ve javascripte özel olan script fonksiyonuna yolluyorum.
                script(inputvalue);
            } else {
                //eğer javascript değilse input değerini yeniden atıyorum.
                var inputvalue = secilendil.value.toLowerCase();
                
                //soruları dillere göre ayarlayacak olan başlat fonksiyonuna yolluyorum.
                baslat(inputvalue);
            }
            //seçtiği dili kullanıcıya bildiriyorum.
            document.querySelector("#sonuc").textContent = kesilmisdil + " dili hakkındaki bilginizi kanıtlıyorsunuz.";
        } else {
            //eğer olandillersec arrayi girilen değeri içermiyorsa yazıyı kırmızı ve kalın yapıyorum.
            document.querySelector("#sonuc").style="color: red; font-weight: bold";
        }
    }
}


//girilen değerlere göre soruları atıyorum.
function baslat(inputvalue){
    document.body.removeAttribute("onkeypress", "tekrar(event)");
    var java = "java";
    if (inputvalue == "html") {
        var sorular = [
            "HTML, ne anlama gelir ve neyi temsil eder?",
            "HTML dosyaları hangi dosya uzantısına sahiptir?",
            "HTML belgeleri, hangi iki temel unsurdan oluşur?",
            "HTML'de kullanılan başlık etiketleri nelerdir ve ne amaçla kullanılır?",
            "HTML'de 'div' ve 'span' etiketleri ne işe yarar?",
            "'href' ve 'src' HTML etiketleri neyi belirtir ve nasıl kullanılır?",
            "HTML'de 'alt' etiketi ne amaçla kullanılır?",
            "HTML form elemanları nelerdir ve her birinin görevi nedir?",
            "HTML'de 'table' etiketi ne işe yarar ve nasıl kullanılır?",
            "'DOCTYPE' nedir ve HTML belgesinde neden önemlidir?",
            "HTML'de 'ul' ve 'ol' etiketleri arasındaki fark nedir?",
            "'id' ve 'class' HTML öznitelikleri ne işe yarar?",
            "HTML'de 'meta' etiketi ne amaçla kullanılır?",
            "HTML sayfalarında 'style' etiketi neyi ifade eder?",
            "HTML'de 'header', 'footer' ve 'nav' etiketleri ne işe yarar?",
            "'iframe' etiketi ne amaçla kullanılır ve nasıl kullanılır?",
            "'input' etiketi ne amaçla kullanılır ve çeşitleri nelerdir?",
            "HTML'de 'a' etiketi neyi temsil eder ve ne işe yarar?",
            "'textarea' etiketi ne amaçla kullanılır?",
            "HTML sayfalarında 'img' etiketi neyi ifade eder ve nasıl kullanılır?"
        ];
        var cevaplar = [
            "HTML, HyperText Markup Language'ın kısaltmasıdır ve web sayfalarını yapmak için kullanılan bir işaretleme dilidir.",
            "HTML dosyaları '.html' uzantısına sahiptir.",
            "HTML belgeleri, başlık (head) ve gövde (body) olmak üzere iki temel unsurdan oluşur.",
            "Başlık etiketleri <'h1'> ila <'h6'> arasında değişir ve başlık seviyesini belirtmek için kullanılır.",
            "'div' ve 'span' etiketleri, HTML belgesinde içeriği gruplamak için kullanılır. 'div', blok düzeyinde içeriği gruplar, 'span' ise satır düzeyinde içeriği gruplar.",
            "'href' bir bağlantının hedefini (linkin gideceği URL'yi) belirtir, 'src' ise bir resmin veya başka bir içeriğin kaynağını belirtir.",
            "'alt' etiketi, bir resmin açıklamasını sağlar ve resim yüklenemediğinde görüntülenen metni temsil eder.",
            "HTML form elemanları, kullanıcıdan veri almak veya göndermek için kullanılır. Örnek olarak 'input', 'textarea', 'select' gibi elemanlar bulunur.",
            "'table' etiketi, tablo oluşturmak için kullanılır. Verileri düzenli bir biçimde göstermek için kullanılır.",
            "'DOCTYPE', belgenin türünü ve sürümünü belirtir. Doğru belirtilmesi, tarayıcının doğru bir şekilde belgeyi işlemesine yardımcı olur.",
            "'ul' (unordered list) ve 'ol' (ordered list) etiketleri listeleri temsil eder. 'ul' etiketi sırasız, 'ol' etiketi ise sıralı bir liste oluşturur.",
            "'id' ve 'class' öznitelikleri, belirli HTML öğelerine kimlik ve sınıf tanımları eklemek için kullanılır.",
            "'meta' etiketi, web sayfasının meta verilerini tanımlar. Meta veriler, sayfanın açıklaması, anahtar kelimeleri, karakter seti gibi bilgileri içerir.",
            "'style' etiketi, HTML belgesindeki bir öğenin stilini tanımlar. CSS kodları bu etiket içerisine yerleştirilir.",
            "'header', 'footer' ve 'nav' etiketleri, sayfa bölümlerini belirtmek için kullanılır. 'header', sayfa başlığını veya başlık kısmını belirtirken, 'footer' sayfa alt kısmını temsil eder ve 'nav' ise gezinme bağlantılarını içerir.",
            "'iframe' etiketi, başka bir web sayfasını içine gömmek için kullanılır.",
            "'input' etiketi, kullanıcıdan bilgi almak için kullanılır. Farklı türleri vardır, örneğin 'text', 'password', 'checkbox' gibi.",
            "'a' etiketi, bir bağlantıyı (linki) belirtmek için kullanılır.",
            "'textarea' etiketi, çok satırlı metin girişi için kullanılır.",
            "'img' etiketi, bir resmin sayfada görüntülenmesini sağlar. 'src' özniteliği, resmin URL'sini belirtir.",
        ];
        var hatalicevaplar = [
            // Soru 1
            "'HTML, yalnızca yazı tipi ve renkleri belirtmek için kullanılır.",
            "'HTML, yalnızca internet bağlantısı olmayan cihazlarda çalışır.",
            "'HTML, yalnızca web tarayıcılarında kullanılır.",
            // Soru 2
            "'HTML dosyaları, .css uzantısına sahiptir.",
            "'HTML dosyaları, .exe uzantısına sahiptir.",
            "'HTML dosyaları, .jpg uzantısına sahiptir.",
            // Soru 3
            "'HTML belgeleri, yalnızca metin içerir.",
            "'HTML belgeleri, yalnızca resimler içerir.",
            "'HTML belgeleri, yalnızca görsel içerikler içerir.",
            // Soru 4
            "'HTML'de başlık etiketi, yalnızca görsel bir işlevi vardır.",
            "'HTML'de başlık etiketi, yalnızca web sayfasının sonunda kullanılır.",
            "'HTML'de başlık etiketi, tarayıcı sekmesinde görüntülenen metni temsil etmez.",
            // Soru 5
            "'HTML'de 'div' ve 'span' etiketleri, yalnızca metin içeriği için kullanılır.",
            "'HTML'de 'div' ve 'span' etiketleri, yalnızca görsel içeriği için kullanılır.",
            "'HTML'de 'div' ve 'span' etiketleri, HTML belgesinin yapısını belirlemek için kullanılır.",
            // Soru 6
            "'href' ve 'src' etiketleri, yalnızca görsel içerik eklemek için kullanılır.",
            "'href' ve 'src' etiketleri, yalnızca metin içerik eklemek için kullanılır.",
            "'href' ve 'src' etiketleri, URL'leri belirtmek ve kaynakları göstermek için kullanılır.",
            // Soru 7
            "'HTML'de 'alt' etiketi, HTML belgesinin yapısını belirler.",
            "'HTML'de 'alt' etiketi, tarayıcı tarafından görüntülenen metni temsil eder.",
            "'HTML'de 'alt' etiketi, bir görselin alternatif metnini sağlamak için kullanılır.",
            // Soru 8
            "'HTML form elemanları, yalnızca metin içerir.",
            "'HTML form elemanları, yalnızca resimler içerir.",
            "'HTML form elemanları, kullanıcıdan bilgi almak için kullanılır.",
            // Soru 9
            "'HTML'de 'table' etiketi, yalnızca metin içeriği için kullanılır.",
            "'HTML'de 'table' etiketi, tablolar oluşturmak için kullanılır.",
            "'HTML'de 'table' etiketi, sadece görsel içeriği düzenlemek için kullanılır.",
            // Soru 10
            "'DOCTYPE', yalnızca HTML belgesinin yapısını belirler.",
            "'DOCTYPE', yalnızca web tarayıcılarında görüntülenir.",
            "'DOCTYPE', HTML belgesinin doğru biçimde yorumlanmasını sağlar ve tarayıcıya belgenin hangi HTML sürümüne uygun olduğunu bildirir.",
            // Soru 11
            "'HTML'de 'ul' ve 'ol' etiketleri, aynı işlevi yerine getirir.",
            "'HTML'de 'ul' ve 'ol' etiketleri, sırasız ve numaralandırılmış liste oluşturmak için kullanılır.",
            "'HTML'de 'ul' ve 'ol' etiketleri, yalnızca metin içeriği için kullanılır.",
            // Soru 12
            "'id' ve 'class' özellikleri, HTML belgesinin yapısını belirler.",
            "'id' ve 'class' özellikleri, yalnızca metin içeriği için kullanılır.",
            "'id' ve 'class' özellikleri, HTML öğelerini belirlemek ve stil uygulamak için kullanılır.",
            // Soru 13
            "'HTML'de 'meta' etiketi, yalnızca görsel içerik eklemek için kullanılır.",
            "'HTML'de 'meta' etiketi, HTML belgesinin yapısını belirler.",
            "'HTML'de 'meta' etiketi, belgenin meta verilerini sağlamak için kullanılır.",
            // Soru 14
            "'style' etiketi, HTML belgesinin yapısını belirler.",
            "'style' etiketi, yalnızca metin içeriği düzenler.",
            "'style' etiketi, HTML belgesine dahil edilen CSS kodlarını içerir.",
            // Soru 15
            "'header', 'footer' ve 'nav' etiketleri, yalnızca metin içeriği düzenler.",
            "'header', 'footer' ve 'nav' etiketleri, yalnızca görsel içeriği düzenler.",
            "'header', 'footer' ve 'nav' etiketleri, belirli bölümleri tanımlamak için kullanılır.",
            // Soru 16
            "'iframe' etiketi, yalnızca metin içeriği düzenlemek için kullanılır.",
            "'iframe' etiketi, başka bir HTML belgesini içerir ve gömülü içerik sağlar.",
            "'iframe' etiketi, yalnızca görsel içeriği düzenlemek için kullanılır.",
            // Soru 17
            "'input' etiketi, yalnızca metin içeriği düzenlemek için kullanılır.",
            "'input' etiketi, yalnızca resimler içerir.",
            "'input' etiketi, kullanıcıdan bilgi almak için kullanılır ve farklı türleri vardır.",
            // Soru 18
            "'a' etiketi, yalnızca metin içeriği düzenler.",
            "'a' etiketi, bir bağlantıyı belirtir ve kullanıcıyı başka bir URL'ye yönlendirir.",
            "'a' etiketi, yalnızca görsel içeriği düzenler.",
            // Soru 19
            "'textarea' etiketi, yalnızca metin içeriği düzenlemek için kullanılır.",
            "'textarea' etiketi, kullanıcının dosya yüklemesi için kullanılır.",
            "'textarea' etiketi, yalnızca görsel içeriği düzenlemek için kullanılır.",
            // Soru 20
            "'img' etiketi, yalnızca metin içeriği düzenler.",
            "'img' etiketi, bir resmi belirtir ve HTML sayfasına görsel içerik ekler.",
            "'img' etiketi, yalnızca görsel içeriği düzenler."
        ];
    } else if(inputvalue == java){
        var sorular = [
            "Java nedir ve hangi alanlarda kullanılır?",
            "Java'nın özellikleri nelerdir?",
            "Java programlama dilinin tarihçesi hakkında bilgi verir misiniz?",
            "Java'nın platform bağımsızlığı nasıl sağlanır?",
            "Java'da veri tipleri nelerdir ve bunların özellikleri nedir?",
            "Java'da nesne yönelimli programlama nedir ve nasıl kullanılır?",
            "Java'da bir sınıfın yapısı nasıldır?",
            "Java'da 'extends' ve 'implements' kelimeleri arasındaki fark nedir?",
            "Java'da 'interface' nedir ve nasıl kullanılır?",
            "Java'da 'try-catch' bloğu ne işe yarar ve nasıl kullanılır?",
            "Java'da 'static' ve 'final' anahtar kelimeleri ne işe yarar?",
            "Java'da 'thread' nedir ve nasıl oluşturulur?",
            "Java'da 'collection' ve 'generics' kavramları nedir?",
            "Java'da 'array' ve 'ArrayList' arasındaki fark nedir?",
            "Java'da 'inheritance' (miras alma) ve 'polymorphism' (çok biçimlilik) nasıl kullanılır?",
            "Java'da 'serialization' nedir ve ne işe yarar?",
            "Java'da 'reflection' ne işe yarar ve nasıl kullanılır?",
            "Java'da 'JVM' (Java Virtual Machine) nedir ve nasıl çalışır?",
            "Java'da 'Garbage Collection' (Çöp Toplama) nedir ve nasıl çalışır?",
            "Java'da 'Lambda Expressions' (Lambda İfadeleri) nasıl kullanılır?"
        ];
        var cevaplar = [
            "Java, Nesne Yönelimli Programlama (OOP) prensiplerine dayalı, geniş bir kullanıma sahip, platform bağımsız bir programlama dilidir. Özellikle büyük ölçekli yazılım projelerinde, web uygulamalarında, oyun geliştirmede ve mobil uygulama geliştirmede sıklıkla kullanılır.",
            "Java'nın özellikleri arasında platform bağımsızlık, güvenlik, taşınabilirlik, çoklu iş parçacığı desteği, dinamik bellek yönetimi, nesne yönelimli programlama (OOP), kolay anlaşılabilir syntax ve geniş kütüphane desteği yer alır.",
            "Java, 1990'ların başında James Gosling ve Sun Microsystems ekibi tarafından geliştirilmeye başlanmıştır. İlk olarak 'Oak' olarak adlandırılan dil, daha sonra 'Java' olarak yeniden adlandırılmıştır.",
            "Java'nın platform bağımsızlığı, Java'nın kaynak kodunun Java Derleyicisi tarafından Java Bytecode'a derlenmesi ve bu Bytecode'ın herhangi bir işletim sisteminde çalışabilen bir Java Sanal Makinesi (JVM) üzerinde çalıştırılabilmesi sayesinde sağlanır.",
            "Java'da temel veri tipleri arasında 'int', 'float', 'double', 'boolean', 'char' gibi primitive tipler ve 'String', 'Array', 'Class' gibi referans tipler bulunur. Primitive tipler bellekte değerlerini doğrudan saklarlar, referans tipler ise bellekte yer tutucu olarak bir adres saklarlar.",
            "Java'da nesne yönelimli programlama, verileri ve işlevleri birlikte gruplamak ve bunları birimler halinde düzenlemek için kullanılan bir programlama paradigmasıdır. Sınıflar ve nesneler aracılığıyla veri ve işlevsellik bir araya getirilir.",
            "Java'da bir sınıf, nesne yönelimli programlamada veri ve işlevleri bir araya getiren bir yapıdır. Bir sınıf içinde veri üyeleri (fields) ve metotlar (methods) yer alır.",
            "'extends' ve 'implements' kelimeleri, sınıfın başka bir sınıftan miras almasını veya bir arayüzü uygulamasını sağlar. 'extends' kullanılarak bir sınıf diğer bir sınıftan miras alınırken, 'implements' kullanılarak bir sınıf bir arayüzü uygular.",
            "'interface', Java'da bir türdür ve bir sınıfın belirli bir arayüzü uygulamasını sağlar. Bir arayüz, sınıflar arasında ortak bir davranışı tanımlar.",
            "'try-catch' bloğu, bir programın çalışması sırasında ortaya çıkabilecek hataları ele almak ve programın kontrolünü devam ettirmek için kullanılır. 'try' bloğu içinde olası bir hata oluşturabilecek kodlar yer alır ve 'catch' bloğu bu hataları yakalar ve işler.",
            "'static' anahtar kelimesi, bir sınıfa veya metoda özgü olmayan, sınıfa ait olan veya sınıfın örneklenmesi gerekmeden kullanılabilen özellikleri belirtmek için kullanılır. 'final' anahtar kelimesi ise bir değişkenin değerinin değiştirilemez olduğunu belirtmek için kullanılır.",
            "'Thread', Java'da çoklu iş parçacığı (multithreading) oluşturmak için kullanılan bir sınıftır. Çoklu iş parçacıkları, bir Java programının aynı anda birden fazla görevi gerçekleştirmesini sağlar.",
            "'Collection' Java'da bir grup nesneyi depolamak için kullanılan bir arayüzü temsil eder. 'Generics' ise Java 5 ile birlikte eklenen bir özelliktir ve koleksiyonlara tip güvenliği sağlar.",
            "'Array' ve 'ArrayList', Java'da birden çok öğeyi depolamak için kullanılan veri yapılarıdır. 'Array', sabit boyutlu bir veri koleksiyonunu temsil ederken, 'ArrayList', dinamik olarak boyutu ayarlanabilen bir liste sağlar.",
            "'Inheritance' (Miras alma), bir sınıfın başka bir sınıftan özelliklerini ve davranışlarını miras almasıdır. 'Polymorphism' (Çok biçimlilik), aynı isme sahip fakat farklı davranışları olan metotların farklı sınıflarda tanımlanabilmesidir.",
            "'Serialization', bir nesneyi dosyaya veya ağ üzerine yazmak için kullanılan bir süreçtir. Nesnelerin dizilmesi (serialization) ve geri dönüşümü (deserialization) yapılarak nesne durumu korunabilir.",
            "'Reflection', çalışma zamanında bir sınıfın veya nesnenin yapısını inceleme ve kullanma yeteneğidir. Java'da 'java.lang.reflect' paketi kullanılarak reflection işlemleri gerçekleştirilir.",
            "'JVM' (Java Virtual Machine), Java byte kodunu işletim sistemine özgü makine koduna çeviren ve çalıştıran bir yazılım ortamıdır. Java programları JVM üzerinde çalıştırılır.",
            "'Garbage Collection' (Çöp Toplama), Java'da bellek yönetimi için otomatik olarak kullanılan bir işlemdir. Java programı çalışırken, artık kullanılmayan nesneleri belirler ve bellekten kaldırır.",
            "'Lambda Expressions' (Lambda İfadeleri), Java 8 ile birlikte eklenen bir özelliktir. Bu ifadeler, işlevsel programlama tekniklerini destekler ve kodu daha kısa ve okunabilir hale getirir."
        ];
        var hatalicevaplar = [
            // Soru 1
            "'Java, yalnızca oyun geliştirme alanında kullanılır.",
            "'Java, yalnızca mobil uygulama geliştirme için kullanılır.",
            "'Java, yalnızca veritabanı yönetimi için kullanılır.",
            // Soru 2
            "'Java, statik tiplere sahip bir dildir.",
            "'Java, platform bağımsız bir dildir.",
            "'Java, sadece web tarayıcılarında çalışır.",
            // Soru 3
            "'Java, 1990'larda Microsoft tarafından geliştirilmiştir.",
            "'Java, 1980'lerde Oracle şirketi tarafından yayınlanmıştır.",
            "'Java, 2000'lerin başında popülerlik kazanmıştır.",
            // Soru 4
            "'Java, yalnızca Windows işletim sistemlerinde çalışır.",
            "'Java, farklı işletim sistemlerinde aynı kodun çalışmasını sağlayan bir sanal makine kullanır.",
            "'Java, yalnızca Linux işletim sisteminde uyumludur.",
            // Soru 5
            "'Java'da sadece 'string' ve 'number' veri tipleri bulunur.",
            "'Java'da veri tipleri, değişkenlerin türünü belirtmek için kullanılmaz.",
            "'Java'da 'boolean' veri tipi bulunmaz.",
            // Soru 6
            "'Java'da nesne yönelimli programlama, sadece fonksiyonlarla çalışmayı içerir.",
            "'Java'da nesne yönelimli programlama, nesneleri kullanmayı gerektirmez.",
            "'Java'da nesne yönelimli programlama, sınıfları ve nesneleri kullanarak programlama yaklaşımıdır.",
            // Soru 7
            "'Java'da sınıflar, yalnızca bir özellik içerir ve yöntemler kullanılmaz.",
            "'Java'da sınıflar, bir araya gelmiş veri ve işlevsellik içerir.",
            "'Java'da sınıflar, sadece bir yöntemi içerebilir.",
            // Soru 8
            "'Java'da 'extends', arayüzler arasında kalıtımı sağlar.",
            "'Java'da 'implements', bir sınıfın başka bir sınıftan kalıtım almasını sağlar.",
            "'Java'da 'extends', bir sınıfın birden fazla arayüzü uygulamasını sağlar.",
            // Soru 9
            "'Java'da 'interface', yalnızca soyut sınıflar için kullanılır.",
            "'Java'da 'interface', sınıflar arasında kalıtımı sağlar.",
            "'Java'da 'interface', metotları tanımlar ancak uygulamaz.",
            // Soru 10
            "'Java'da 'try-catch' bloğu, hata yakalamak için kullanılmaz.",
            "'Java'da 'try-catch' bloğu, yalnızca hataları gizler.",
            "'Java'da 'try-catch' bloğu, hataları yakalamak ve işlemek için kullanılır.",
            // Soru 11
            "'Java'da 'static', değişkenlerin değerlerini değiştirmek için kullanılır.",
            "'Java'da 'final', değişkenlerin daha sonra başka bir değer atanmasını sağlar.",
            "'Java'da 'static', bir sınıf düzeyinde değişken veya yöntemler için kullanılır.",
            // Soru 12
            "'Java'da 'thread', aynı anda birden fazla işlemi gerçekleştirmeyi sağlar.",
            "'Java'da 'thread', yalnızca ana program tarafından oluşturulabilir.",
            "'Java'da 'thread', sadece senkronize işlemleri gerçekleştirmek için kullanılır.",
            // Soru 13
            "'Java'da 'collection', verileri gruplamak için kullanılan bir veri yapısıdır.",
            "'Java'da 'generics', yalnızca belirli veri türlerini destekler.",
            "'Java'da 'collection', yalnızca sabit veri boyutlarını destekler.",
            // Soru 14
            "'Java'da 'array', dinamik boyutlara sahip veri yapılarıdır.",
            "'Java'da 'array', sadece tek boyutlu veri yapılarını destekler.",
            "'Java'da 'ArrayList', sabit boyutlara sahip veri yapılarıdır.",
            // Soru 15
            "'Java'da 'inheritance', bir sınıfın birden fazla sınıftan kalıtım almasını sağlar.",
            "'Java'da 'polymorphism', aynı isimli farklı metotların farklı işlevler yapmasını sağlar.",
            "'Java'da 'inheritance', yalnızca bir alt sınıfın üst sınıf özelliklerini almasını sağlar.",
            // Soru 16
            "'Java'da 'serialization', veri işleme işlevlerini gerçekleştirmek için kullanılır.",
            "'Java'da 'serialization', nesnelerin ağ üzerinden iletilmesini sağlar.",
            "'Java'da 'serialization', veri yapılarının sabit boyutlara dönüştürülmesini sağlar.",
            // Soru 17
            "'Java'da 'reflection', bir nesnenin sınıfını kontrol etmek için kullanılır.",
            "'Java'da 'reflection', yalnızca public alanlara erişimi sağlar.",
            "'Java'da 'reflection', nesnelerin özelliklerini dinamik olarak değiştirmeyi sağlar.",
            // Soru 18
            "'Java'da 'JVM', platform bağımsız kodun çalıştırılmasını sağlayan bir sanal makinedir.",
            "'Java'da 'JVM', yalnızca belirli bir işletim sisteminde çalışır.",
            "'Java'da 'JVM', yalnızca web tarayıcıları üzerinde çalışır.",
            // Soru 19
            "'Java'da 'Garbage Collection', bellek yönetimini optimize etmek için kullanılır.",
            "'Java'da 'Garbage Collection', bellek sızıntılarını önlemek için kullanılır.",
            "'Java'da 'Garbage Collection', yalnızca manuel olarak çalıştırılır.",
            // Soru 20
            "'Java'da 'Lambda Expressions', yalnızca sayısal işlemlerde kullanılır.",
            "'Java'da 'Lambda Expressions', işlevsel programlamada kullanılır ve kısa işlevler için kullanılır.",
            "'Java'da 'Lambda Expressions', yalnızca nesne yönelimli programlamada kullanılır."
        ];
    } else if(inputvalue == "python"){
        var sorular = [
            "Python nedir ve hangi alanlarda kullanılır?",
            "Python'da değişkenler nasıl tanımlanır?",
            "Python'da hangi veri tipleri bulunur ve bunlar nelerdir?",
            "Python'da 'if', 'elif' ve 'else' ifadeleri ne işe yarar?",
            "Python'da 'for' döngüsü nasıl kullanılır?",
            "Python'da 'while' döngüsü ne işe yarar?",
            "Python'da bir liste nasıl oluşturulur ve elemanlarına nasıl erişilir?",
            "Python'da bir sözlük (dictionary) nasıl oluşturulur ve kullanılır?",
            "Python'da fonksiyonlar nasıl tanımlanır ve kullanılır?",
            "Python'da bir dosyadan veri okumak ve yazmak için hangi fonksiyonlar kullanılır?",
            "Python'da 'try', 'except' ve 'finally' blokları ne işe yarar?",
            "Python'da modül nedir ve nasıl kullanılır?",
            "Python'da bir sınıf (class) nasıl tanımlanır?",
            "Python'da 'inheritance' (miras alma) nedir ve nasıl kullanılır?",
            "Python'da 'lambda' ifadeleri ne işe yarar?",
            "Python'da 'map' ve 'filter' fonksiyonları ne işe yarar?",
            "Python'da 'pip' nedir ve nasıl kullanılır?",
            "Python'da 'virtual environment' (sanal ortam) nedir ve neden kullanılır?",
            "Python'da 'list comprehension' nedir ve nasıl kullanılır?",
            "Python'da 'module' ve 'package' arasındaki fark nedir?"
        ];
        var cevaplar = [
            "Python, kullanımı kolay ve genel amaçlı bir programlama dilidir. Bilimsel hesaplamalardan web geliştirmeye kadar çeşitli alanlarda kullanılır.",
            "Python'da değişkenler, 'var', 'let' veya 'const' anahtar kelimeleriyle tanımlanır.",
            "Python'da temel veri tipleri arasında 'integer', 'float', 'string', 'boolean', 'list', 'tuple', 'dictionary' gibi tipler bulunur.",
            "'if', 'elif' ve 'else' ifadeleri, koşullu ifadeleri kontrol etmek için kullanılır. Bir koşulun doğru olup olmadığını kontrol eder ve buna göre farklı işlemler yapılmasını sağlar.",
            "'for' döngüsü, bir liste veya aralık üzerinde yineleme yapmak için kullanılır.",
            "'while' döngüsü, belirli bir koşul doğru olduğu sürece tekrarlanan bir işlem kümesini yürütmek için kullanılır.",
            "Bir liste, köşeli parantez içine alınan ve virgülle ayrılan öğelerden oluşan bir veri yapısıdır. Elemanlara indeks numarası ile erişilir.",
            "Bir sözlük (dictionary), anahtar-değer çiftleri içeren bir veri yapısıdır. Anahtarlar benzersiz olmalıdır ve değerlere anahtarlar aracılığıyla erişilir.",
            "Fonksiyonlar 'function' anahtar kelimesiyle tanımlanır ve çağrıldığında belirli bir işlemi gerçekleştirir. Parametreler alabilir ve bir değer döndürebilir.",
            "Dosyadan veri okumak için 'fs' modülü kullanılır ve veri yazmak için de 'fs' modülü veya 'writeFileSync' gibi fonksiyonlar kullanılır.",
            "'try', 'except' ve 'finally' blokları, hata yakalama ve işleme için kullanılır. 'try' bloğunda potansiyel hata oluşturabilecek kodlar yer alır ve 'except' bloğu hataları ele alır.",
            "Modüller, Python kodunu başka bir dosyadan içe aktarmak için kullanılır. Modüller, işlevleri, sınıfları ve değişkenleri içerebilir.",
            "Bir sınıf, nesneleri tanımlamak için kullanılan bir yapıdır. Oluşturulan nesneler, sınıfın özelliklerini ve metodlarını miras alır.",
            "Inheritance, bir sınıfın diğer bir sınıftan özelliklerini ve davranışlarını devralmasını sağlar.",
            "'Lambda' ifadeleri, küçük anonim fonksiyonlar oluşturmak için kullanılır.",
            "'map' ve 'filter' fonksiyonları, bir dizi veri üzerinde işlem yapmak için kullanılır. 'map', bir fonksiyonu veri üzerinde uygular ve sonuçları bir liste olarak döndürür; 'filter', bir koşula uyan öğeleri filtreler.",
            "'pip', Python için paket yöneticisidir. Üçüncü taraf paketlerini yüklemek ve yönetmek için kullanılır.",
            "'Virtual environment' (sanal ortam), Python projesinin bağımlılıklarını izole etmek için kullanılır. Farklı projelerde farklı paket sürümleri kullanmak için idealdir.",
            "'List comprehension', bir liste oluşturmanın kısa ve özlü bir yoludur. Bir döngüyü tek bir satırda ifade eder.",
            "'Module', Python dosyasıdır ve birçok fonksiyonu, sınıfı veya değişkeni içerebilir. 'Package' ise birden fazla modülü içeren bir klasördür."
            ];
        var hatalicevaplar = [
            // Soru 1
            "'Python, sadece bilgisayar bilimleri alanında kullanılır.",
            "'Python, sadece web tarayıcıları için geliştirilmiştir.",
            "'Python, yalnızca büyük ölçekli yazılım projelerinde kullanılır.",
            // Soru 2
            "'Değişken tanımlama için 'variable' anahtar kelimesi kullanılır.",
            "'Değişkenler, her zaman 'var' anahtar kelimesiyle tanımlanmalıdır.",
            "'Değişkenler, her zaman 'int', 'str' gibi tiplerle başlamalıdır.",
            // Soru 3
            "'Python'da sadece 'string' ve 'integer' veri tipleri bulunur.",
            "'Python'da sadece 'list' ve 'tuple' veri tipleri bulunur.",
            "'Python'da sadece 'float' ve 'boolean' veri tipleri bulunur.",
            // Soru 4
            "'if' ifadesi, koşulları kontrol etmek için kullanılmaz.",
            "'elif' ifadesi, yalnızca bir koşulu kontrol eder.",
            "'else' ifadesi, bir koşulun doğru olması durumunda çalışır.",
            // Soru 5
            "'for' döngüsü, yalnızca sabit bir sayıda tekrarlar.",
            "'for' döngüsü, her zaman bir koşulu kontrol eder.",
            "'for' döngüsü, her eleman için bir kez çalışır.",
            // Soru 6
            "'while' döngüsü, belirli bir koşul doğru olduğu sürece çalışır.",
            "'while' döngüsü, yalnızca bir kez çalışır.",
            "'while' döngüsü, yalnızca belirli bir sayıda tekrarlar.",
            // Soru 7
            "'Liste oluşturmak için 'list' anahtar kelimesi kullanılır.",
            "'Liste elemanlarına erişmek için sadece indeks numarası kullanılabilir.",
            "'Liste oluştururken, elemanlar köşeli parantez içine alınır.",
            // Soru 8
            "'Sözlük oluşturmak için 'dict' anahtar kelimesi kullanılır.",
            "'Sözlükler, her zaman string anahtarlarla tanımlanabilir.",
            "'Sözlükler, sadece sayısal anahtarlarla tanımlanabilir.",
            // Soru 9
            "'Fonksiyonlar, her zaman 'let' anahtar kelimesiyle tanımlanır.",
            "'Fonksiyonlar, sadece bir kez çağrılabilir ve tekrar kullanılamazlar.",
            "'Fonksiyonlar, sadece 'function' anahtar kelimesi ile tanımlanabilir.",
            // Soru 10
            "'Veri okumak için 'readData()' ve veri yazmak için 'writeData()' fonksiyonları kullanılır.",
            "'Dosyadan veri okumak için 'read()' fonksiyonu kullanılır.",
            "'Dosyaya veri yazmak için 'open()' fonksiyonu kullanılır.",
            // Soru 11
            "'try' bloğu, her zaman hata fırlatır.",
            "'except' bloğu, her zaman hata mesajını gösterir.",
            "'finally' bloğu, her zaman çalışır ve herhangi bir hata durumunda çalışmaz.",
            // Soru 12
            "'Modüller, sadece Python içinde tanımlanan özel fonksiyonlardır.",
            "'Modüller, yalnızca bir kez tanımlanabilir ve daha sonra değiştirilemez.",
            "'Modüller, yalnızca 'require' anahtar kelimesi ile çağrılabilir.",
            // Soru 13
            "'Sınıflar, yalnızca 'function' anahtar kelimesiyle tanımlanır.",
            "'Sınıflar, her zaman köşeli parantez içinde tanımlanır.",
            "'Sınıflar, sadece 'class' anahtar kelimesi ile tanımlanır.",
            // Soru 14
            "'Inheritance, yalnızca bir kez uygulanabilir.",
            "'Inheritance, yalnızca alt sınıfların üst sınıflarını miras almasını sağlar.",
            "'Inheritance, sadece alt sınıfların üst sınıflarından metotları miras almasını sağlar.",
            // Soru 15
            "'lambda' ifadeleri, yalnızca belirli bir sınıfta kullanılabilir.",
            "'lambda' ifadeleri, sadece tek bir parametre alabilir.",
            "'lambda' ifadeleri, küçük ve anonim fonksiyonlar oluşturmak için kullanılır.",
            // Soru 16
            "'map' fonksiyonu, dizi elemanlarını birleştirir.",
            "'filter' fonksiyonu, belirli bir koşula uyan dizi elemanlarını çıkarır.",
            "'map' fonksiyonu, dizi elemanlarını filtreler.",
            // Soru 17
            "'pip', yalnızca bir kez yüklenebilir ve daha sonra güncellenemez.",
            "'pip', yalnızca özel paketler için kullanılır.",
            "'pip', Python paketlerini yönetmek için kullanılan bir paket yöneticisidir.",
            // Soru 18
            "'Virtual environment', yalnızca birden fazla Python sürümüyle çalışan kullanıcılar için kullanılır.",
            "'Virtual environment', Python paketlerinin bir projeye özgü olarak izole edilmesini sağlar.",
            "'Virtual environment', yalnızca geliştirme aşamasında kullanılır ve gerçek projelerde gereksizdir.",
            // Soru 19
            "'List comprehension', yalnızca listeler için kullanılabilir.",
            "'List comprehension', sadece karmaşık koşullar içeren ifadelerde kullanılır.",
            "'List comprehension', listeleri döngü yapısından kurtararak daha hızlı ve okunabilir kod yazmayı sağlar.",
            // Soru 20
            "'Module', yalnızca bir dosya içinde tanımlanan Python kodlarıdır.",
            "'Package', yalnızca bir Python modülünü içeren bir klasördür.",
            "'Module', yalnızca bir kez tanımlanabilir ve daha sonra değiştirilemez."
        ];
    } else if(inputvalue == "c++"){
        var sorular = [
            "C++ nedir ve ne zaman ortaya çıkmıştır?",
            "C++'ın temel özellikleri nelerdir?",
            "C++ ile diğer programlama dilleri arasındaki temel farklar nelerdir?",
            "C++'da nesne yönelimli programlama nedir ve neden önemlidir?",
            "C++'da bir sınıf ve bir nesne arasındaki fark nedir?",
            "C++'da kullanılan temel veri tipleri nelerdir?",
            "C++'da döngüler nasıl kullanılır ve hangi türleri vardır?",
            "C++'da fonksiyonlar nasıl tanımlanır ve çağrılır?",
            "C++'da bir dizi nedir ve nasıl kullanılır?",
            "C++'da bellek yönetimi nasıl çalışır?",
            "C++'da hata ayıklama ve hata yakalama nasıl yapılır?",
            "C++'da dosya işlemleri nasıl yapılır?",
            "C++'da operatör aşırı yükleme (operator overloading) nedir ve nasıl kullanılır?",
            "C++'da kalıtım (inheritance) nedir ve nasıl kullanılır?",
            "C++'da çok biçimlilik (polymorphism) nasıl uygulanır?",
            "C++'da dinamik bellek yönetimi (dynamic memory management) nedir ve nasıl yapılır?",
            "C++'da referanslar (references) nasıl kullanılır ve neden önemlidir?",
            "C++'da isim alanları (namespaces) nedir ve nasıl kullanılır?"
        ];
        var cevaplar = [
            "C++ bir programlama dili ve 1980'lerde geliştirildi.",
            "Nesne yönelimli programlama, genel programlama, bellek yönetimi, çok biçimlilik gibi özelliklere sahiptir.",
            "C++ daha düşük seviyeli bir dilken, Python gibi diller daha yüksek seviyeli ve daha kolay anlaşılır.",
            "Nesne yönelimli programlama, veri ve işlevselliği bir araya getirerek kodun yeniden kullanılabilirliğini artırır.",
            "Bir sınıf, nesnelerin yapılarını ve davranışlarını tanımlayan bir taslaktır. Bir nesne ise bu sınıftan türetilen bir örnektir.",
            "int, float, double, char gibi temel veri tipleri kullanılır.",
            "for, while, do-while gibi döngüler kullanılır.",
            "Fonksiyonlar tanımlanırken dönüş tipi, adı ve parametreleri belirtilir. Çağrıldıklarında parametreler ile çağrılırlar.",
            "Dizi, aynı türden birden fazla veriyi saklamak için kullanılır. İndeksleme yaparak elemanlara erişilir.",
            "Bellek yönetimi, dinamik bellek tahsisi ve serbest bırakma gibi işlemleri içerir.",
            "Hata ayıklama için 'debugger' kullanılırken, hata yakalama için try-catch blokları kullanılır.",
            "Dosya işlemleri için fstream kütüphanesi kullanılır. Dosya açma, yazma, okuma ve kapatma işlemleri gerçekleştirilir.",
            "Operatör aşırı yükleme, bir operatörün farklı bağlamlarda farklı işlemler yapabilmesini sağlar.",
            "Kalıtım, bir sınıfın başka bir sınıftan özelliklerini ve davranışlarını miras almasıdır. Bu, kodun yeniden kullanılabilirliğini artırır.",
            "Çok biçimlilik, aynı isimle birden fazla şekilde davranış sergileyen nesnelerin kullanılmasını sağlar. Bu, dinamik bağlama ile gerçekleştirilir.",
            "Dinamik bellek yönetimi, program çalışırken bellek tahsis edilmesini ve serbest bırakılmasını içerir. 'new' ve 'delete' anahtar kelimeleri kullanılır. ",
            "Referanslar, bir değişkenin başka bir isimle erişilmesini sağlar. Bellek verimliliğini artırır ve işlevler arasında veri aktarımını hızlandırır.",
            "İsim alanları, aynı isme sahip farklı öğelerin çakışmasını önlemek için kullanılır. '::' operatörü ile kullanılır."
        ];
        var hatalicevaplar = [
            "C++ bir programlama dili ve 1990'ların sonlarında geliştirildi.",
            "C++ yalnızca prosedürel programlama özelliklerine sahiptir.",
            "Nesne yönelimli programlama, C++'ın en önemli özelliğidir.",
            "C++'ın temel özellikleri arasında dinamik bellek yönetimi yoktur.",
            "C++ sadece veri saklama ve işlem özelliklerine sahiptir.",
            "C++'ın temel özellikleri, sadece görsel programlamayı içerir.",
            "C++'ın diğer dillerden farkı, kodun sadece Windows işletim sistemlerinde çalışmasıdır.",
            "C++'ın diğer dillerden farkı, çok daha az kütüphane seçeneğine sahip olmasıdır.",
            "C++'ın diğer dillerden farkı, daha yavaş çalışmasıdır.",
            "Nesne yönelimli programlama, kodun daha az yeniden kullanılabilir olmasını sağlar.",
            "Nesne yönelimli programlama, yalnızca kodun daha karmaşık hale gelmesini sağlar.",
            "Nesne yönelimli programlama, kodun daha az modüler olmasını sağlar.",
            "Bir sınıf, yalnızca fonksiyonlar içeren bir yapıdır.",
            "Bir nesne, yalnızca veri saklayan bir yapıdır.",
            "Bir sınıf, bir programın çalıştırılabilir bir parçasıdır.",
            "C++'da kullanılan temel veri tipleri arasında boolean yoktur.",
            "C++'da kullanılan temel veri tipleri arasında string yoktur.",
            "C++'da kullanılan temel veri tipleri arasında pointer yoktur.",
            "C++'da sadece for döngüsü kullanılır.",
            "C++'da yalnızca while döngüsü kullanılır.", "C++'da yalnızca do-while döngüsü kullanılır.",
            "Fonksiyonlar sadece çağrıldıklarında tanımlanır.", "Fonksiyonlar çağrıldıklarında parametre alamazlar.",
            "Fonksiyonlar, yalnızca bir kez çağrılabilirler.",
            "Diziler, yalnızca aynı türden verileri saklamak için kullanılır.",
            "Diziler, sabit boyuta sahip olmak zorundadır.",
            "Diziler, sadece tek boyutlu olabilirler.",
            "C++'da bellek yönetimi, yalnızca otomatik ve statik bellek tahsisini içerir.",
            "C++'da bellek yönetimi, yalnızca derleme zamanında yapılır.",
            "C++'da bellek yönetimi, yalnızca otomatik garbage collection içerir.",
            "Hata ayıklama, yalnızca kodun derlenme aşamasında yapılır.",
            "Hata yakalama, yalnızca derleme zamanında gerçekleşir.",
            "Hata ayıklama, yalnızca manuel olarak yapılır ve otomatik araçlar kullanılmaz.",
            "C++'da dosya işlemleri için sadece fstream kütüphanesi kullanılır.",
            "Dosya işlemleri, yalnızca programın başında yapılabilir.",
            "Dosya işlemleri, yalnızca yazma işlemleri için kullanılır.",
            "Operatör aşırı yükleme, sadece matematiksel operatörler için kullanılabilir.",
            "Operatör aşırı yükleme, yalnızca C++'da değil diğer dillerde de mümkündür.",
            "Operatör aşırı yükleme, programın performansını olumsuz etkiler.",
            "Kalıtım, bir sınıfın başka bir sınıftan davranışlarını miras almasıdır.",
            "Kalıtım, C++'ın temel özelliği değildir.",
            "Kalıtım, yalnızca çoklu kalıtım durumlarında kullanılır.",
            "Çok biçimlilik, aynı sınıftan türetilen nesnelerin aynı davranışı sergilemesidir.",
            "Çok biçimlilik, yalnızca C++'da mümkündür.",
            "Çok biçimlilik, yalnızca derleme zamanında belirlenir.",
            "Dinamik bellek yönetimi, yalnızca C++'ın eski sürümlerinde kullanılırdı.",
            "Dinamik bellek yönetimi, yalnızca verimliliği azaltır ve hata olasılığını artırır.",
            "Dinamik bellek yönetimi, programın çalışma zamanında bellek ihtiyacını karşılamak için kullanılır.",
            "Referanslar, yalnızca okunabilir değerler için kullanılır.",
            "Referanslar, bellek verimliliğini artırmaz.",
            "Referanslar, başka bir değişkenin takma adıdır.",
            "İsim alanları, yalnızca C++ dilinde kullanılabilir.",
            "İsim alanları, yalnızca global değişkenler için kullanılır.",
            "İsim alanları, kodun daha okunabilir olmasını sağlamaz."
        ];
    } else if(inputvalue == "c#"){
        var sorular = [
            "C# nedir ve ne zaman ortaya çıkmıştır?",
            "C# ile diğer programlama dilleri arasındaki temel farklar nelerdir?",
            "C# ile nesne yönelimli programlama nasıl gerçekleştirilir?",
            "C# ile GUI (Graphical User Interface - Grafiksel Kullanıcı Arayüzü) geliştirmek için hangi araçlar kullanılır?",
            "C# dilindeki temel veri tipleri nelerdir ve nasıl kullanılırlar?",
            "C# dilinde döngülerin farklı türleri nelerdir?",
            "C# dilinde fonksiyonlar nasıl tanımlanır ve kullanılır?",
            "C# dilinde diziler nasıl oluşturulur ve işlenir?",
            "C# dilindeki koşullu ifadeler ve kontrol yapıları nelerdir?",
            "C# dilindeki Exception Handling (Hata Yönetimi) nasıl yapılır?",
            "C# dilinde hangi türde bellek yönetimi teknikleri kullanılır?",
            "C# dilinde çoklu iş parçacığı programlaması (multithreading) nasıl yapılır?",
            "C# dilindeki lambda ifadeleri ve LINQ (Language Integrated Query) nedir ve nasıl kullanılır?",
            "C# dilindeki Generic (Jenerik) yapılar ne işe yarar ve nasıl kullanılır?",
            "C# dilindeki Delegate ve Event yapıları nedir ve nasıl kullanılır?",
            "C# dilinde hangi türde veri yapıları ve koleksiyonlar bulunur?",
            "C# dilindeki Object-Oriented Programming (Nesne Yönelimli Programlama) prensipleri nelerdir?",
            "C# dilindeki miras (inheritance) ve arayüzler (interfaces) nasıl kullanılır?",
            "C# dilindeki dosya işlemleri nasıl yapılır?",
            "C# dilinde hangi türde debugging (hata ayıklama) araçları ve teknikler bulunur?"
        ];
        var cevaplar = [
            "C#, Microsoft tarafından geliştirilen bir programlama dili olup, 2000 yılında piyasaya sürülmüştür.",
            "C# ile diğer diller arasındaki fark, C#'ın platform bağımsız olmasıdır ve geniş bir kullanıcı tabanına sahip olmasıdır.",
            "Nesne yönelimli programlama, C# dilinde class ve object yapıları kullanılarak gerçekleştirilir.",
            "C# ile GUI geliştirmek için Visual Studio gibi entegre geliştirme ortamları (IDE'ler) kullanılır.",
            "C# dilinde int, float, double, bool, string gibi temel veri tipleri bulunur ve bunlar değişkenlerde kullanılır.",
            "C# dilinde for, while, do-while gibi döngü yapıları bulunur.",
            "Fonksiyonlar C# dilinde method olarak tanımlanır ve çağrılır. Parametreler alabilir ve geri dönüş değeri verebilirler.",
            "Diziler, C# dilinde [] operatörü ile tanımlanır ve elemanlarına erişmek için indisleri kullanılır.",
            "C# dilinde if, else-if, else gibi yapılarla koşullu ifadeler oluşturulur ve kontrol edilir.",
            "Hata yönetimi, C# dilinde try-catch blokları kullanılarak gerçekleştirilir.",
            "Bellek yönetimi, C# dilinde otomatik olarak garbage collection (çöp toplama) mekanizmasıyla yapılır.",
            "Çoklu iş parçacığı programlaması, C# dilinde Thread sınıfı ve async-await anahtar kelimeleriyle gerçekleştirilir.",
            "Lambda ifadeleri, C# dilinde kısa ve anonim fonksiyonlar oluşturmak için kullanılırken, LINQ ise sorguları nesne koleksiyonları üzerinde gerçekleştirmek için kullanılır.",
            "Generic yapılar, C# dilinde veri tiplerinden bağımsız olarak çalışan ve yeniden kullanılabilir yapılar oluşturmak için kullanılır.",
            "Delegate ve Event yapıları, C# dilinde olay tabanlı programlamada kullanılarak metodları işaret eder ve çağırır.",
            "C# dilinde List<T>, Dictionary<TKey, TValue>, Queue<T>, Stack<T> gibi veri yapıları ve koleksiyonlar bulunur.",
            "C# dilinde nesne yönelimli programlama prensipleri olan encapsulation, inheritance ve polymorphism kullanılır.",
            "Miras (inheritance) C# dilinde bir sınıfın başka bir sınıftan özelliklerini ve davranışlarını miras almasını sağlar, arayüzler (interfaces) ise sınıflar arasında birleşik bir sözleşme sağlar.",
            "Dosya işlemleri, C# dilinde System.IO namespacesi içindeki sınıflar ile gerçekleştirilir.",
            "Debugging araçları, C# dilinde Visual Studio gibi entegre geliştirme ortamları içinde bulunur ve hata ayıklama işlemleri için çeşitli teknikler sunar."
        ];
        var hatalicevaplar = [
            "C#, yalnızca web geliştirme için kullanılır.",
            "C#, sadece Microsoft tarafından geliştirilir.",
            "C#, 2000'lerin başlarında ortaya çıkmıştır.",
            "C# ile diğer diller arasındaki fark, C#'ın platform bağımsız olmasıdır.",
            "C# sadece gömülü sistemler için kullanılır.",
            "C# daha az güvenli bir dildir.",
            "Nesne yönelimli programlama, C#'ın temel özelliği değildir.",
            "Nesne yönelimli programlama, C#'ın en karmaşık özelliğidir.",
            "Nesne yönelimli programlama, C#'ın sadece belirli versiyonlarında bulunur.",
            "C# ile GUI geliştirmek için yalnızca web teknolojileri kullanılır.",
            "C# ile GUI geliştirmek için yalnızca belirli bir IDE (Integrated Development Environment - Entegre Geliştirme Ortamı) kullanılabilir.",
            "C# ile GUI geliştirmek için yalnızca terminal tabanlı araçlar kullanılır.",
            "C#'da string veri tipi bulunmaz.",
            "C#'da int veri tipi sadece ondalık sayıları temsil eder.",
            "C#'da bool veri tipi sadece 'true' değerini alabilir.",
            "C#'da sadece for döngüsü kullanılabilir.",
            "C#'da döngüler sadece sayılarla çalışabilir.",
            "C#'da döngülerin farklı türleri yalnızca belirli durumlarda kullanılabilir.",
            "Fonksiyonlar yalnızca bir kez çağrılabilir.",
            "Fonksiyonlar, yalnızca belirli bir sınıf içinde tanımlanabilir.",
            "Fonksiyonlar, yalnızca bir geri dönüş değeri alabilir.",
            "Diziler, C#'da sabit boyutludur.",
            "Diziler, yalnızca tek boyutlu olabilir.",
            "Diziler, C#'da birden fazla veri türünü saklayabilir.",
            "C#'da koşullu ifadeler yalnızca tek bir ifadeyi kontrol eder.",
            "C#'da koşullu ifadeler, yalnızca belirli durumlarda kullanılabilir.",
            "C#'da koşullu ifadelerin birden fazla durumu yoktur.",
            "Hata yönetimi, C#'da sadece try-catch blokları ile gerçekleştirilir.",
            "Hata yönetimi, C#'da yalnızca derleme sırasında gerçekleştirilir.",
            "Hata yönetimi, C#'da hiçbir zaman gerekli değildir.",
            "Bellek yönetimi, C#'da yalnızca derleme zamanında yapılır.",
            "Bellek yönetimi, C#'da sadece manuel olarak gerçekleştirilir.",
            "Bellek yönetimi, C#'da otomatik olarak gerçekleştirilir.",
            "Çoklu iş parçacığı programlaması, C#'da yalnızca belirli işletim sistemlerinde çalışır.",
            "Çoklu iş parçacığı programlaması, C#'da yalnızca belirli durumlarda gerekli değildir.",
            "Çoklu iş parçacığı programlaması, C#'da yalnızca çok az kullanılır.",
            "Lambda ifadeleri, C#'da yalnızca matematiksel hesaplamalar için kullanılır.",
            "Lambda ifadeleri, C#'da yalnızca metin işleme için kullanılır.",
            "LINQ, C#'da yalnızca belirli bir kütüphane içinde bulunur.",
            "Generic yapılar, C#'da sadece derleme zamanında belirlenir.",
            "Generic yapılar, C#'da sadece belirli veri tipleri ile kullanılabilir.",
            "Generic yapılar, C#'da hiçbir zaman gerekli değildir.",
            "Delegate ve Event yapıları, C#'da yalnızca belirli durumlarda kullanılabilir.",
            "Delegate ve Event yapıları, C#'da yalnızca görsel programlamada kullanılır.",
            "Delegate ve Event yapıları, C#'da hiçbir zaman gerekli değildir.",
            "C#'da yalnızca tek bir veri yapısı bulunur.",
            "C#'da yalnızca tek bir koleksiyon türü bulunur.",
            "C#'da veri yapıları ve koleksiyonlar yalnızca belirli durumlar için kullanılır.",
            "OOP prensipleri, C#'da hiçbir zaman gerekli değildir.",
            "OOP prensipleri, C#'da yalnızca büyük projelerde kullanılır.",
            "OOP prensipleri, C#'da yalnızca belirli durumlarda gerekli değildir.",
            "Miras ve arayüzler, C#'da yalnızca aynı dosya içinde tanımlanabilir.",
            "Miras ve arayüzler, C#'da yalnızca belirli durumlarda kullanılır.",
            "Miras ve arayüzler, C#'da yalnızca aynı proje içinde kullanılabilir.",
            "Dosya işlemleri, C#'da yalnızca belirli bir kütüphane içinde bulunur.",
            "Dosya işlemleri, C#'da yalnızca belirli bir platformda çalışır.",
            "Dosya işlemleri, C#'da hiçbir zaman gerekli değildir.",
            "Debugging araçları, C#'da yalnızca belirli bir IDE içinde bulunur.",
            "Debugging araçları, C#'da hiçbir zaman gerekli değildir.",
            "Debugging araçları, C#'da yalnızca belirli durumlarda kullanılır."
        ];
    }
    sikyap(sorular, cevaplar, hatalicevaplar, inputvalue);
}
//javascript için ayrı şekilde soru ekliyorum.
function script(inputvalue){
    document.body.removeAttribute("onkeypress", "tekrar(event)");
    var sorular = [
        "JavaScript nedir ve hangi alanlarda kullanılır?",
        "JavaScript'in temel özellikleri nelerdir?",
        "JavaScript programlama dilinin tarihçesi nedir?",
        "JavaScript'te değişken tanımlama nasıl yapılır?",
        "JavaScript'te hangi veri tipleri bulunur ve bunlar nelerdir?",
        "JavaScript'te 'if', 'else if' ve 'else' ifadeleri ne işe yarar?",
        "JavaScript'te 'for' ve 'while' döngüleri nasıl kullanılır?",
        "JavaScript'te bir dizi (array) nasıl oluşturulur ve elemanlarına nasıl erişilir?",
        "JavaScript'te bir nesne (object) nasıl oluşturulur?",
        "JavaScript'te fonksiyonlar nasıl tanımlanır ve kullanılır?",
        "JavaScript'te 'try', 'catch' ve 'finally' blokları ne işe yarar?",
        "JavaScript'te 'let', 'const' ve 'var' arasındaki fark nedir?",
        "JavaScript'te 'map' ve 'filter' fonksiyonları ne işe yarar?",
        "JavaScript'te 'fetch' API'si ne işe yarar?",
        "JavaScript'te 'async' ve 'await' anahtar kelimeleri ne işe yarar?",
        "JavaScript'te modüller (modules) nedir ve nasıl kullanılır?",
        "JavaScript'te 'arrow functions' (ok fonksiyonları) nasıl tanımlanır?",
        "JavaScript'te 'Promise' nedir ve nasıl kullanılır?",
        "JavaScript'te 'localStorage' ve 'sessionStorage' ne işe yarar?",
        "JavaScript'te 'DOM Manipülasyonu' nedir ve nasıl yapılır?"
    ];
    var cevaplar = [
        "JavaScript, web tarayıcılarında kullanılan ve web sayfalarını etkileşimli hale getirmek için kullanılan bir programlama dilidir. Ayrıca sunucu tarafında (Node.js gibi) da kullanılabilir.",
        "JavaScript'in temel özellikleri arasında dinamik tip sistemine sahip olması, nesne yönelimli programlama (OOP) desteği, hafifliği ve tarayıcıda çalışabilmesi yer alır.",
        "JavaScript, 1995 yılında Netscape Communications tarafından Brendan Eich tarafından geliştirilmeye başlanmıştır.",
        "JavaScript'te değişkenler 'var', 'let' ve 'const' anahtar kelimeleriyle tanımlanır.",
        "JavaScript'te temel veri tipleri arasında 'string', 'number', 'boolean', 'undefined', 'null' ve 'symbol' bulunur. Ayrıca 'object' ve 'function' gibi referans tipleri de vardır.",
        "'if', 'else if' ve 'else' ifadeleri, koşullu durumları kontrol etmek için kullanılır.",
        "'for' ve 'while' döngüleri, tekrar eden işlemleri gerçekleştirmek için kullanılır.",
        "JavaScript'te bir dizi, köşeli parantez içinde virgülle ayrılan öğelerden oluşan bir veri yapısıdır. Elemanlara indeks numarası ile erişilir.",
        "JavaScript'te bir nesne, anahtar-değer çiftleri içeren bir veri yapısıdır. Anahtarlar (property) ve değerler (value) içerir.",
        "JavaScript'te fonksiyonlar, 'function' anahtar kelimesiyle tanımlanır ve çağrıldığında belirli bir işlemi gerçekleştirir. Parametreler alabilir ve bir değer döndürebilir.",
        "'try', 'catch' ve 'finally' blokları, bir programın çalışması sırasında oluşabilecek hataları ele almak ve işlemek için kullanılır.",
        "'let', 'const' ve 'var' anahtar kelimeleri, değişken tanımlamak için kullanılır. 'let' ve 'const' blok kapsamına sahiptirken, 'var' global veya fonksiyon kapsamına sahiptir.",
        "'map' ve 'filter' fonksiyonları, bir dizi üzerinde işlem yapmak için kullanılır. 'map', bir dizi elemanı üzerinde bir fonksiyon uygular ve sonuçları yeni bir dizi olarak döndürür; 'filter', bir dizi elemanını belirli bir koşula göre filtreler.",
        "'fetch' API'si, ağ üzerinden HTTP istekleri yapmak için kullanılır. Özellikle web sayfalarında AJAX çağrıları yapmak için kullanılır.",
        "'async' ve 'await' anahtar kelimeleri, asenkron işlemleri daha okunabilir bir şekilde yazmak için kullanılır.",
        "Modüller, JavaScript kodunu organize etmek ve tekrar kullanılabilir parçalara ayırmak için kullanılır. Modüller, 'export' ve 'import' anahtar kelimeleriyle tanımlanır.",
        "'Arrow functions', kısa ve okunabilir fonksiyonlar oluşturmak için kullanılır. Klasik fonksiyon tanımlamalarından daha kısa bir sözdizimine sahiptir.",
        "'Promise', JavaScript'te asenkron işlemleri yönetmek için kullanılan bir yapıdır. Bir işlem tamamlandığında veya başarısız olduğunda bir değer döndürür.",
        "'localStorage' ve 'sessionStorage', tarayıcıda veri depolamak için kullanılan API'lerdir. 'localStorage' verileri kalıcı olarak saklar, 'sessionStorage' ise oturum sona erdiğinde silinir.",
        "'DOM Manipülasyonu', Document Object Model (Belge Nesne Modeli) üzerinde değişiklikler yapmayı ve etkileşimli web sayfaları oluşturmayı sağlayan tekniktir."
    ];
    var hatalicevaplar = [
        // Soru 1 - JavaScript nedir ve hangi alanlarda kullanılır?
        "JavaScript, yalnızca web tarayıcılarında kullanılır.",
        "JavaScript, yalnızca büyük ölçekli yazılım projelerinde kullanılır.",
        "JavaScript, yalnızca sunucu tarafında (backend) kullanılır.",
        // Soru 2 - JavaScript'in temel özellikleri nelerdir?
        "JavaScript, sadece statik tiplere sahip bir dildir.",
        "JavaScript, nesne yönelimli programlama (OOP) desteği sağlamaz.",
        "JavaScript, sadece Windows işletim sistemi üzerinde çalışabilir.",
        // Soru 3 - JavaScript programlama dilinin tarihçesi nedir?
        "JavaScript, 2000'li yıllarda Microsoft tarafından geliştirilmiştir.",
        "JavaScript, ilk olarak Oracle şirketi tarafından yayınlanmıştır.",
        "JavaScript, 1980'li yıllarda geliştirilmeye başlanmıştır.",
        // Soru 4 - JavaScript'te değişken tanımlama nasıl yapılır?
        "Değişken tanımlama için 'if' anahtar kelimesi kullanılır.",
        "Değişkenler, her zaman 'let' anahtar kelimesiyle tanımlanmalıdır.",
        "Değişkenler, her zaman 'string' tipinde tanımlanmalıdır.",
        // Soru 5 - JavaScript'te hangi veri tipleri bulunur ve bunlar nelerdir?
        "JavaScript'te sadece 'string' ve 'number' veri tipleri bulunur.",
        "JavaScript'te sadece 'object' ve 'function' veri tipleri bulunur.",
        "JavaScript'te sadece 'boolean' ve 'undefined' veri tipleri bulunur.",
        // Soru 6 - JavaScript'te 'if', 'else if' ve 'else' ifadeleri ne işe yarar?
        "'if' ifadesi, koşulları kontrol etmek için kullanılmaz.",
        "'else if' ifadesi, yalnızca bir koşulu kontrol eder.",
        "'else' ifadesi, bir koşulun doğru olması durumunda çalışır.",
        // Soru 7 - JavaScript'te 'for' ve 'while' döngüleri nasıl kullanılır?
        "'for' döngüsü, yalnızca sabit bir sayıda tekrarlar.",
        "'while' döngüsü, döngü koşulu doğru olduğu sürece çalışır.",
        "'for' döngüsü, her zaman bir koşulu kontrol eder.",
        // Soru 8 - JavaScript'te bir dizi (array) nasıl oluşturulur ve elemanlarına nasıl erişilir?
        "Dizi oluşturmak için 'dizi' anahtar kelimesi kullanılır.",
        "Dizi elemanlarına erişmek için sadece indeks numarası kullanılabilir.",
        "Dizi oluştururken, elemanlar köşeli parantez içine alınır.",
        // Soru 9 - JavaScript'te bir nesne (object) nasıl oluşturulur?
        "Nesne oluşturmak için 'nesne' anahtar kelimesi kullanılır.",
        "Nesneler, her zaman köşeli parantez içinde tanımlanır.",
        "Nesneler, sadece string anahtarlarla tanımlanabilir.",
        // Soru 10 - JavaScript'te fonksiyonlar nasıl tanımlanır ve kullanılır?
        "Fonksiyonlar, her zaman 'let' anahtar kelimesiyle tanımlanır.",
        "Fonksiyonlar, sadece bir kez çağrılabilir ve tekrar kullanılamazlar.",
        "Fonksiyonlar, sadece 'function' anahtar kelimesi ile tanımlanabilir.",
        // Soru 11 - JavaScript'te 'try', 'catch' ve 'finally' blokları ne işe yarar?
        "'try' bloğu, her zaman hata fırlatır.",
        "'catch' bloğu, her zaman hata mesajını gösterir.",
        "'finally' bloğu, her zaman çalışır ve herhangi bir hata durumunda çalışmaz.",
        // Soru 12 - JavaScript'te 'let', 'const' ve 'var' arasındaki fark nedir?
        "'let' anahtar kelimesi, değişkenlerin değerlerini değiştiremez.",
        "'const' anahtar kelimesi, değişkenlerin değerlerini daha sonra atama yapmadan değiştirilebilir.",
        "'var' anahtar kelimesi, blok kapsamı dışında erişilebilir.",
        // Soru 13 - JavaScript'te 'map' ve 'filter' fonksiyonları ne işe yarar?
        "'map' fonksiyonu, dizi elemanlarını birleştirir.",
        "'filter' fonksiyonu, belirli bir koşula uyan dizi elemanlarını çıkarır.",
        "'map' fonksiyonu, dizi elemanlarını filtreler.",
        // Soru 14 - JavaScript'te 'fetch' API'si ne işe yarar?
        "'fetch' API'si, sadece sunucu tarafında kullanılır.",
        "'fetch' API'si, asenkron işlemleri yönetmek için kullanılır.",
        "'fetch' API'si, yalnızca POST istekleri yapmak için kullanılır.",
        // Soru 15 - JavaScript'te 'async' ve 'await' anahtar kelimeleri ne işe yarar?
        "'async' anahtar kelimesi, kodun senkronize çalışmasını sağlar.",
        "'await' anahtar kelimesi, sadece 'async' fonksiyonları içinde kullanılabilir.",
        "'await' anahtar kelimesi, kodun devam etmeden önce bir işlemin tamamlanmasını bekler.",
        // Soru 16 - JavaScript'te modüller (modules) nedir ve nasıl kullanılır?
        "Modüller, JavaScript'te kullanılamaz.",
        "Modüller, sadece bir kez tanımlanabilir ve daha sonra değiştirilemez.",
        "Modüller, yalnızca 'require' anahtar kelimesi ile çağrılabilir.",
        // Soru 17 - JavaScript'te 'arrow functions' (ok fonksiyonları) nasıl tanımlanır?
        "Ok fonksiyonları, yalnızca 'function' anahtar kelimesiyle tanımlanır.",
        "Ok fonksiyonları, her zaman parantez içine alınan tek bir parametre alır.",
        "Ok fonksiyonları, 'function' anahtar kelimesi yerine '=>' operatörü kullanılarak tanımlanır.",
        // Soru 18 - JavaScript'te 'Promise' nedir ve nasıl kullanılır?
        "'Promise', yalnızca senkron işlemleri yönetmek için kullanılır.",
        "'Promise', yalnızca bir kez döndürülebilir ve daha sonra değiştirilemez.",
        "'Promise', asenkron işlemleri yönetmek için kullanılan bir yapıdır.",
        // Soru 19 - JavaScript'te 'localStorage' ve 'sessionStorage' ne işe yarar?
        "'localStorage' ve 'sessionStorage', yalnızca sunucu tarafında kullanılabilir.",
        "'localStorage' ve 'sessionStorage', yalnızca bir kez değer atandıktan sonra değiştirilebilir.",
        "'localStorage' ve 'sessionStorage', tarayıcıda veri depolamak için kullanılır.",
        // Soru 20 - JavaScript'te 'DOM Manipülasyonu' nedir ve nasıl yapılır?
        "DOM Manipülasyonu, yalnızca tarayıcılar tarafından gerçekleştirilebilir.",
        "DOM Manipülasyonu, JavaScript'te bir HTML elementinin özelliklerini değiştirmek için kullanılır.",
        "DOM Manipülasyonu, yalnızca statik HTML sayfalarında kullanılabilir."
    ];
    sikyap(sorular, cevaplar, hatalicevaplar, inputvalue);
}
let skor = 0;
var secilensorular = [];
function sikyap(sorular, cevaplar, hatalicevaplar, inputvalue){
    document.querySelector(".score").innerHTML=skor;
    document.querySelector(".score").style="animation: none";
    if(secilensorular.length == 20){
        alert("Tebrikler! Bütün soruları bildiniz. Sorularımız bu kadar. Eğer başka dillerde de çözmek isterseniz sayfayı yenileyip tekrardan çözmek istediğiniz dilin adını girebilirsiniz.");
    } else {
        var soru = document.createElement("h1");
        soru.classList.add("soru");
        document.querySelector("#sorualani").appendChild(soru);
        console.log(sorular);
        var rastgelesoru = sorular[Math.floor(Math.random() * sorular.length)];
        if(secilensorular.includes(sorular.indexOf(rastgelesoru))){
            console.log("yazdı");
        }
        while (secilensorular.includes(sorular.indexOf(rastgelesoru))){
            console.log(rastgelesoru + " yazıldı. Yeni soru çekiyorum.");
            rastgelesoru = sorular[Math.floor(Math.random() * sorular.length)];
            console.log(rastgelesoru + " yu çektim.");
        }
        secilensorular.push(sorular.indexOf(rastgelesoru));
        console.log(secilensorular);
        soru.textContent = rastgelesoru;
        var chooses = [];
        for (let i = 0; i < 4; i++){
            var choose = document.createElement("p");
            choose.setAttribute("class", "choose");
            document.querySelector("#sorualani").appendChild(choose);
            chooses.push(choose);
        }
        chooses[3].style="margin-bottom: 5%";
        document.querySelector("#sorualani").style="padding-bottom: 10em";
        var sorununidsi = sorular.indexOf(rastgelesoru);
        console.log(sorununidsi);
        var dogrucevap = cevaplar[sorununidsi];
        var dogrucevapsikki = chooses[Math.floor(Math.random() * chooses.length)];
        var secilensikkinidsi = chooses.indexOf(dogrucevapsikki);
        chooses.splice(secilensikkinidsi, 1);
        dogrucevapsikki.innerHTML = dogrucevap;
        dogrucevapsikki.addEventListener("click", ()=>{
            skor++;
            var gecmissec = [];
            document.querySelectorAll(".choose").forEach((choose)=>{
                choose.classList.replace("choose", "gecmischoose");
                gecmissec.push(choose);
                console.log(gecmissec);
            });
            var gecmissecsayi = gecmissec.length;
            console.log(gecmissecsayi);
            gecmissec[gecmissecsayi-1].style="margin-bottom: 20%";
            document.querySelector(".soru").classList.replace("soru", "gecmissoru");
            console.log(document.querySelectorAll(".gecmissoru"));
            sikyap(sorular, cevaplar, hatalicevaplar);
        });
        
        sorununidsi = sorununidsi*3;
        console.log(sorununidsi);
        chooses.forEach((chooses) =>{
            chooses.innerHTML = hatalicevaplar[sorununidsi];
            sorununidsi = sorununidsi + 1;
            console.log(sorununidsi);
            chooses.addEventListener("click", ()=>{
                chooses.style.color="red";
                var gercekcevap = document.createElement("p");
                gercekcevap.innerHTML= "Doğru cevap: " + dogrucevap;
                gercekcevap.setAttribute("id", "gercekcevap");
                document.querySelector("#sorualani").appendChild(gercekcevap);
                document.querySelector("#soru").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                var targetElement = document.getElementById("soru");
                var targetPosition = targetElement.getBoundingClientRect().top;
                var startPosition = window.pageYOffset;
                var distance = Math.abs(targetPosition - startPosition); // Absolute distance
//et the desired speed or duration (e.g., pixels per millisecond or total milliseconds)
                var speed = 3; // pixels per millisecond
                var duration = distance / speed; // Duration in milliseconds
//sag example:
                var targetDuration = duration;
                document.querySelector(".score").style="animation: score-shake .5s ease-in-out alternate; animation-iteration-count: 4";
                console.log("Duration:", targetDuration, "milliseconds");
                setTimeout(()=>{
                    var all = document.querySelectorAll(".gecmischoose");
                    console.log(all);
                    all.forEach((all) => {
                        all.remove();
                    });
                    var allnew = document.querySelectorAll(".choose");
                    console.log(allnew);
                    allnew.forEach((allnew) => {
                        allnew.remove();
                    });
                    if(document.querySelector(".gecmissoru")){
                        document.querySelectorAll(".gecmissoru").forEach((gecmissoru) => {
                            gecmissoru.remove();
                        });
                    } 
                    var yukseklik = document.querySelector("#ekran").style.height;
                    var yenidenbasla = document.createElement("button");
                    yenidenbasla.textContent = "Yeniden Başla (R)";
                    yenidenbasla.setAttribute("value", "Yeniden Başla (R)");
                    yenidenbasla.setAttribute("id", "yenidenbasla");
                    yenidenbasla.style="background: transparent; color: aliceblue; border: 1px solid white; padding: 10px;  border-radius: 4px; cursor: pointer; font-size: 20px; font-family: 'Protest Guerrilla', sans-serif; font-weight:     200; font-style: normal;";
                    yenidenbasla.addEventListener("click", ()=>{ 
                        if(document.querySelector(".choose")){
                            var all = document.querySelectorAll(".choose");
                            console.log(all);
                            all.forEach((all) => {
                                all.remove();
                            });
                        }
                        if(document.querySelector(".soru")){
                            document.querySelector(".soru").remove();
                        }
                        if(document.querySelector("#yenidenbasla")){
                            document.querySelector("#yenidenbasla").remove();
                        }
                        if(document.querySelector("#dildegistir")){
                            document.querySelector("#dildegistir").remove();
                        }
                        if(document.querySelector("#gercekcevap")){
                            document.querySelector("#gercekcevap").remove();
                        }
                        skor = 0;
                        secilensorular = [];
                        console.log(secilensorular);
                        var inputvalue = document.querySelector("#dil").value.toLowerCase();
                        console.log(inputvalue)
                        if(inputvalue == "javascript"){
                            inputvalue = "script";
                            script(inputvalue);
                        } else{
                           baslat(inputvalue);
                        }
                    });
                    var dildegistir = document.createElement("button");    
                    dildegistir.textContent = "Dili Değiştir (D)";
                    dildegistir.setAttribute("value", "Dili Değiştir");
                    dildegistir.setAttribute("id", "dildegistir");
                    dildegistir.style="margin-top: 1.5%; justify-content: space-between; margin-left: 7.5%; background: transparent; color: aliceblue; border: 1px solid white; padding: 10px;  border-radius: 4px; cursor: pointer; font-size: 20px; font-family: 'Protest Guerrilla', sans-serif; font-weight:     200; font-style: normal;";
                    dildegistir.addEventListener("click", ()=>{
                        if(document.querySelector(".choose")){
                            var all = document.querySelectorAll(".choose");
                            console.log(all);
                            all.forEach((all) => {
                                all.remove();
                            });
                        }
                        if(document.querySelector(".soru")){
                            document.querySelector(".soru").remove();
                        }
                        if(document.querySelector("#yenidenbasla")){
                            document.querySelector("#yenidenbasla").remove();
                        }
                        if(document.querySelector("#dildegistir")){
                            document.querySelector("#dildegistir").remove();
                        }
                        if(document.querySelector("#gercekcevap")){
                            document.querySelector("#gercekcevap").remove();
                        }
                        skor = 0;
                        secilensorular = [];
                        console.log(secilensorular);
                        var inputvalue = document.querySelector("#dil").value.toLowerCase();
                        console.log(inputvalue);
                        document.querySelector("#sonuc").value="";
                        enbas();
                    });
                document.body.setAttribute("onkeypress","tekrar(event)");
                document.querySelector("#sorualani").appendChild(yenidenbasla);
                document.querySelector("#sorualani").appendChild(dildegistir);
            }, duration);
            });
        });
        document.querySelector("#sorualani").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    }
    function tekrar(event){
        if(event.key.toLowerCase() === "r"){
            if(document.querySelector(".choose")){
                var all = document.querySelectorAll(".choose");
                console.log(all);
                all.forEach((all) => {
                    all.remove();
                });
            }
            if(document.querySelector(".soru")){
                document.querySelector(".soru").remove();
            }
            if(document.querySelector("#yenidenbasla")){
                document.querySelector("#yenidenbasla").remove();
            }
            if(document.querySelector("#dildegistir")){
                document.querySelector("#dildegistir").remove();
            }
            if(document.querySelector("#gercekcevap")){
                document.querySelector("#gercekcevap").remove();
            }
            skor = 0;
            secilensorular = [];
            console.log(secilensorular);
            var inputvalue = document.querySelector("#dil").value.toLowerCase();
            console.log(inputvalue)
            if(inputvalue == "javascript"){
                inputvalue = "script";
                script(inputvalue);
            } else{
                baslat(inputvalue);
            }
        } else if(event.key.toLowerCase() === "d"){
            if(document.querySelector(".choose")){
                var all = document.querySelectorAll(".choose");
                console.log(all);
                all.forEach((all) => {
                    all.remove();
                });
            }
            if(document.querySelector(".soru")){
                document.querySelector(".soru").remove();
            }
            if(document.querySelector("#yenidenbasla")){
                document.querySelector("#yenidenbasla").remove();
            }
            if(document.querySelector("#dildegistir")){
                document.querySelector("#dildegistir").remove();
            }
            if(document.querySelector("#gercekcevap")){
                document.querySelector("#gercekcevap").remove();
            }
            skor = 0;
            secilensorular = [];
            console.log(secilensorular);
            var inputvalue = document.querySelector("#dil").value.toLowerCase();
            console.log(inputvalue);
            document.querySelector("#sonuc").value="";
            setTimeout(()=>{
                enbas();
            }, 50);
        }
    }