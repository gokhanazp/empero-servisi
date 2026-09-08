import type { BlogPost } from "@/lib/types";

export const posts: BlogPost[] = [
  {
    slug: "endustriyel-ocakta-alev-neden-sonuyor",
    title: "Endüstriyel Ocakta Alev Neden Sönüyor? Termokupl Meselesini Anlamak",
    metaTitle: "Endüstriyel Ocakta Alev Neden Sönüyor? | Termokupl Arızası",
    metaDescription:
      "Düğmeyi bırakınca sönen ocak neredeyse her zaman termokupl arızasıdır. Termokuplun ne işe yaradığını, neden yorulduğunu ve değişimden önce nelerin kontrol edilmesi gerektiğini anlattık.",
    excerpt:
      "Düğmeyi bırakınca alev sönüyorsa cihaz bozulmuş değil, tam tersine güvenlik sistemi çalışıyor demektir. Peki asıl sorun nerede?",
    date: "2026-02-11",
    readingMinutes: 6,
    category: "Ocak ve Gazlı Cihazlar",
    keywords: ["termokupl arızası", "ocak alevi sönüyor", "endüstriyel ocak tamiri", "pilot alevi tutmuyor"],
    body: [
      {
        heading: "Önce şunu netleştirelim: ocak bozulduğu için sönmüyor",
        body: [
          "Mutfaktan gelen çağrıların büyük kısmı aynı cümleyle başlıyor: \"Düğmeye basıyorum yanıyor, bırakınca sönüyor.\" Bu tarif duyulduğunda akla ilk gelen şey cihazın arızalandığı oluyor. Oysa tam tersi doğru: ocak, kendisine öğretilen güvenlik davranışını harfiyen uyguluyor.",
          "Gazlı endüstriyel cihazlarda ana gaz akışını açık tutan şey, elektronik bir kart ya da bir zamanlayıcı değil. Pilot alevinin ısısıyla üretilen çok küçük bir elektrik akımı. Bu akım kesildiği anda gaz valfi yay kuvvetiyle kapanıyor. Yani sistem, alevin var olduğunu sürekli kanıtlamak zorunda; kanıt kesilirse gaz kesiliyor. Mutfakta sönmüş bir brülörden gaz akmaya devam etmesinin ne demek olduğunu düşününce, bu tasarımın neden böyle olduğu anlaşılıyor.",
        ],
      },
      {
        heading: "Termokupl tam olarak ne yapıyor?",
        body: [
          "Termokupl, iki farklı metalin uç uca birleştirilmesiyle üretilen basit bir sensör. Birleşme noktası ısındığında, iki metal arasında çok küçük bir gerilim farkı oluşuyor. Bu, milivolt mertebesinde bir değer — tipik olarak 20 ile 30 milivolt arasında. Bu kadar küçük bir akım hiçbir şeyi çalıştırmaya yetmez, ama gaz valfinin içindeki minik bir elektromıknatısı çekili tutmaya yeter. Sistemin tamamı bu ayrıntı üzerine kurulu.",
          "Pilot alevi söndüğünde termokupl saniyeler içinde soğuyor, gerilim düşüyor, elektromıknatıs bırakıyor ve valf kapanıyor. Sağlıklı bir sistemde bu süre 30 ile 60 saniye arasında. Bu gecikme kasıtlı: ani bir hava akımıyla titreyen alevin cihazı gereksiz yere kapatmasını önlüyor.",
          "Termokuplun ömrü sonsuz değil. Ucu sürekli alev içinde kaldığı için metal zamanla yoruluyor, üzerinde oksit tabakası oluşuyor ve ürettiği gerilim düşüyor. 30 milivolt üreten bir termokupl 8 milivolta indiğinde valf artık çekili kalamıyor. Cihaz aynı cihaz, alev aynı alev — ama kanıt yeterince güçlü değil.",
        ],
      },
      {
        heading: "Termokuplu değiştirmeden önce bakılması gereken üç şey",
        body: [
          "Birincisi termokuplun ucundaki kirlilik. Pilot alevi sarı yanıyorsa ya da yakınında yağ buharı yoğunsa, termokuplun ucu isle kaplanabiliyor. İs bir yalıtkan gibi davranıp ısının metale geçmesini engelliyor. Ucun ince bir zımpara ya da tel fırçayla temizlenmesi, birçok vakada değişime gerek bırakmadan sorunu çözüyor.",
          "İkincisi pilot alevinin konumu ve boyu. Alev, termokuplun ucunu sarmalı; sadece yalaması yeterli değil. Pilot memesi kısmen tıkandığında alev küçülüyor ve termokuplun ucuna yeterince temas etmiyor. Bu durumda termokupl sağlam olsa bile yeterli gerilim üretemiyor. Pilot memesinin temizlenmesi, çoğu zaman yeni parçadan daha etkili bir müdahale.",
          "Üçüncüsü termokuplun valfe bağlandığı somun. Bu bağlantı elektriksel bir temas noktası ve gevşek ya da oksitlenmiş olduğunda devre direnci artıyor. Zaten milivolt seviyesinde çalışan bir sistemde bu direnç, sinyali kaybettirmeye yetiyor. Somunun sökülüp temas yüzeylerinin temizlenmesi ve elle sıkılıp çeyrek tur anahtarla tamamlanması standart bir işlem. Aşırı sıkmak ise bağlantıyı bozuyor.",
        ],
      },
      {
        heading: "Değişim gerektiğinde nelere dikkat etmeli",
        body: [
          "Termokupl seçerken iki şey önemli: uzunluk ve valf bağlantı tipi. Yanlış boy alındığında ya kablo gergin kalıyor ve zamanla kopuyor, ya da fazla kıvrılıp brülöre temas ediyor. Bağlantı tipinin uyumsuz olması ise en yaygın satın alma hatası; farklı üreticilerin valfleri farklı diş yapısı kullanabiliyor.",
          "Parça kalitesi burada gerçekten fark yaratıyor. Piyasadaki en ucuz termokupllar başlangıçta doğru gerilimi üretebiliyor, ama birkaç ay içinde değer kaybediyor ve aynı arıza geri geliyor. İkinci kez servis çağırmak, ilk seferde iyi parça almanın farkından her zaman daha pahalıya geliyor.",
          "Değişimden sonra mutlaka test edilmesi gereken şey, düğme bırakıldıktan sonraki bekleme süresi. Alev anında sönüyorsa bağlantı ya da konumlandırma sorunu var demektir. Sağlıklı bir kurulumda pilot alevi yakıldıktan sonra düğmenin 20-30 saniye basılı tutulması, bırakıldığında da alevin kalması bekleniyor.",
        ],
      },
      {
        heading: "Aynı arıza tekrar ediyorsa",
        body: [
          "Termokupl kısa aralıklarla iki üç kez değişiyorsa, sorun termokuplda değil. Böyle durumlarda gaz valfinin emniyet bobinine bakmak gerekiyor; bobinin sargısı yorulduğunda, sağlıklı bir termokuplun ürettiği gerilim bile onu tutmaya yetmiyor. Bu ayrımı yapmak için sahada milivolt ölçümü yapılması, yani termokuplun gerçekten kaç milivolt ürettiğinin ölçülmesi gerekiyor.",
          "Bir diğer ihtimal, pilot alevinin ortam koşulları nedeniyle sürekli etkilenmesi. Aspiratörün doğrudan pilotun üzerine çektiği, kapının açılmasıyla hava akımı oluşan ya da yanındaki kazandan sürekli buhar gelen konumlarda pilot alevi düzensiz yanıyor ve termokupl sürekli ısınıp soğuyor. Bu döngü, parçanın ömrünü belirgin biçimde kısaltıyor. Çözüm bazen cihazı değil, mutfağın hava akışını düzenlemekten geçiyor.",
        ],
      },
    ],
    faq: [
      {
        q: "Termokupl değişimi ne kadar sürer?",
        a: "Erişimi kolay bir ocakta 20-30 dakika. Fırınlı kombine cihazlarda panel sökülmesi gerektiğinde bir saati bulabiliyor.",
      },
      {
        q: "Termokuplu kendim değiştirebilir miyim?",
        a: "Teknik olarak zor bir iş değil, ancak gaz hattı üzerinde çalışmak gerektiriyor. Değişim sonrası kaçak testi yapılmazsa risk oluşur. Gaz bağlantısı üzerinde deneyiminiz yoksa yetkin birine yaptırmak doğru olur.",
      },
    ],
  },
  {
    slug: "sanayi-tipi-bulasik-makinesinde-kirec",
    title: "Sanayi Tipi Bulaşık Makinesinde Kireç: Neden Oluyor, Nasıl Bitiyor",
    metaTitle: "Sanayi Tipi Bulaşık Makinesinde Kireç Sorunu ve Kalıcı Çözümü",
    metaDescription:
      "Boiler rezistansının yanması, ıslak çıkan tabaklar ve beyaz lekeler çoğu zaman tek bir sebebe çıkıyor: su sertliği. Kirecin makineye ne yaptığını ve kalıcı çözümü anlattık.",
    excerpt:
      "Rezistans altı ayda bir yanıyorsa sorun rezistansta değil, suda. Sanayi tipi makinelerde kireç ekonomisi.",
    date: "2026-03-04",
    readingMinutes: 7,
    category: "Bulaşık Makinesi",
    keywords: ["bulaşık makinesi kireç", "boiler rezistansı yanması", "su sertliği", "sanayi tipi bulaşık makinesi bakımı"],
    body: [
      {
        heading: "Kireç neden bu kadar önemli",
        body: [
          "Sanayi tipi bir bulaşık makinesi, evdeki muadilinden çok daha fazla su geçiriyor. Bir vardiyada yüz çevrim yapan bir makine, her çevrimde durulama için temiz şebeke suyu alıyor. İstanbul'un birçok bölgesinde bu su, endüstriyel ekipman için kabul edilen sertlik sınırlarının üzerinde. Yani makine her gün, kendi içine sürekli kireç taşıyan bir su akıtıyor.",
          "Kireç suda çözünmüş halde bulunuyor ve ısıtıldığında çöküyor. Bu yüzden en yoğun biriktiği yer, suyun en çok ısındığı yer: boiler rezistansının yüzeyi. Burada oluşan kalker tabakası milimetrelerle ölçülüyor ama etkisi orantısız derecede büyük, çünkü kireç iyi bir ısı yalıtkanı.",
          "Rezistans ısıyı suya aktaramayınca ne oluyor? Kendi üzerinde biriktiriyor. Rezistansın yüzey sıcaklığı tasarım değerinin üzerine çıkıyor, direnç teli aşırı ısınıyor ve bir noktada kopuyor. Servise \"rezistans yandı\" diye gelen çağrıların çok büyük bölümü aslında bir su problemi. Rezistansı değiştirmek arızayı gideriyor ama sebebi ortadan kaldırmıyor; altı ay sonra aynı yerde buluşuyoruz.",
        ],
      },
      {
        heading: "Kirecin görünen belirtileri",
        body: [
          "İlk belirti genellikle tabaklardaki beyaz lekeler. Bunlar kirlilik değil, kuruyan suyun bıraktığı mineral tortusu. Parlatıcı dozajını artırarak bir süre gizlenebiliyor, ama sorun devam ediyor.",
          "İkinci belirti durulama sıcaklığının düşmesi. Sanayi tipi makinelerde durulama suyunun 82-85 derece civarında olması gerekiyor; hem hijyen hem de tabakların kendi ısısıyla kuruması için. Kireçlenmiş boiler bu sıcaklığa çıkamadığında tabaklar ıslak çıkıyor ve mutfak ekibi elle kurulamaya başlıyor. Bu, çoğu işletmede fark edilmeden kabullenilen bir kayıp.",
          "Üçüncü belirti çevrim süresinin uzaması. Makine boileri istenen sıcaklığa getiremediği için bir sonraki çevrimi başlatmakta gecikiyor. Vardiya boyunca birikince ciddi bir zaman kaybına dönüşüyor.",
          "Dördüncüsü de yıkama kollarındaki tıkanma. Kollardaki memelerin çapı zaten küçük; kireç birikince su, tabağa olması gereken açı ve basınçla çarpmıyor. Bulaşık temiz çıkmıyor diye deterjan dozajı artırılıyor, sorun deterjanla ilgili olmadığı için de çözülmüyor.",
        ],
      },
      {
        heading: "İki katmanlı çözüm",
        body: [
          "Birinci katman, suyun makineye girmeden yumuşatılması. Reçineli su yumuşatma cihazı, sudaki kalsiyum ve magnezyum iyonlarını sodyum ile değiştirerek sertliği düşürüyor. Makinenin kendi tuz haznesi olan modellerde ise tuz seviyesinin düzenli kontrolü aynı işi görüyor. Buradaki en yaygın hata, cihazın kurulduktan sonra unutulması: reçine rejenerasyon için tuza ihtiyaç duyuyor ve tuz bittiğinde cihaz sessizce devre dışı kalıyor. Hiçbir uyarı vermeden, makineye sert su geçmeye başlıyor.",
          "İkinci katman, düzenli kireç çözme bakımı. Yumuşatıcı ne kadar iyi çalışırsa çalışsın, zaman içinde bir miktar birikme oluyor. Bakımda uygun asidik çözücü makineye alınıp boiler ve tank içinde sirküle ediliyor, ardından rezistanslar sökülüp mekanik olarak temizleniyor ve yıkama-durulama kollarının içi açılıyor.",
          "Çözücü seçimi burada önemli. Aşırı agresif ya da yanlış oranda kullanılan asit, paslanmaz yüzeylerde ve conta malzemelerinde hasara yol açabiliyor. Doğru ürünün doğru sürede ve doğru sıcaklıkta çalıştırılması, işin kendisinden daha kritik.",
        ],
      },
      {
        heading: "Bakım aralığı nasıl belirlenir",
        body: [
          "Standart bir cevap yok; makinenin günlük çevrim sayısı ve bölgenizin su sertliği belirleyici. Kaba bir başlangıç noktası olarak, yoğun çalışan ve yumuşatıcısı olmayan bir makinede üç ay, yumuşatıcısı düzgün çalışan bir makinede altı ay diyebiliriz.",
          "Daha iyi yöntem, ilk bakımda boilerin ne durumda olduğuna bakıp aralığı ona göre ayarlamak. Üç ay sonunda boilerde kayda değer birikme yoksa aralık uzatılabiliyor; ciddi kalker varsa kısaltmak gerekiyor. Bu yaklaşım, hem gereksiz bakım masrafını hem de geç kalmanın maliyetini önlüyor.",
          "Su sertliğini ölçtürmek de tek seferlik ve ucuz bir işlem. Bölgenizin değerini bilmek, hem yumuşatıcı ihtiyacını hem bakım aralığını netleştiriyor. Servis sırasında bu ölçümü yapıp sonucu size söylüyoruz.",
        ],
      },
      {
        heading: "Rakamlarla bakınca",
        body: [
          "Kireç meselesi teknik bir konu gibi görünse de aslında bir maliyet hesabı. Kireçlenmiş bir boiler, aynı suyu aynı sıcaklığa çıkarmak için belirgin biçimde daha fazla elektrik harcıyor. Buna rezistansın erken ölmesi, ıslak tabakları elle kurulamak için harcanan personel zamanı ve makine duruşları ekleniyor.",
          "Bunların yanında düzenli bakımın bedeli genellikle küçük kalıyor. Yıllık bakım ve yumuşatıcı bakımının toplamı, çoğu işletmede tek bir boiler rezistansı değişiminin ve ona eşlik eden bir günlük duruşun altında kalıyor. Kireç, önlenebilir olduğu için de en can sıkıcı arıza sebeplerinden biri.",
        ],
      },
    ],
    faq: [
      {
        q: "Makinenin tuzu bitince ne oluyor?",
        a: "Yumuşatıcı reçinesi rejenerasyon yapamıyor ve doygunlaşıyor. Bu noktadan sonra makineye sert su geçmeye başlıyor, ama makine bir uyarı vermiyor. Tuz seviyesini haftalık kontrol listesine almak en pratik çözüm.",
      },
      {
        q: "Sirke veya limon tuzu ile kireç çözebilir miyim?",
        a: "Hafif birikmelerde yüzeysel etki eder, ancak sanayi tipi bir boilerdeki kalker tabakası için yeterli değil. Ayrıca yanlış oran ve süre, contalarda ve paslanmaz yüzeylerde hasara yol açabiliyor. Profesyonel kireç çözücüyle yapılan bakım hem daha etkili hem daha güvenli.",
      },
    ],
  },
  {
    slug: "fritozde-yag-omru-ve-sicaklik-kontrolu",
    title: "Fritözde Yağ Ömrünü Neyin Belirlediği: Sıcaklık, Kırıntı ve Termostat",
    metaTitle: "Fritözde Yağ Ne Zaman Değişmeli? Yağ Ömrünü Uzatmanın Yolları",
    metaDescription:
      "Fritöz yağının erken kararmasının arkasında genellikle sapmış bir termostat ya da süzülmeyen kırıntılar var. Yağ ömrünü uzatan ve maliyeti düşüren pratik yöntemler.",
    excerpt:
      "Yağ beklediğinizden hızlı kararıyorsa, önce yağı değil termostatı sorgulayın. Fritözde maliyet nerede kaçıyor?",
    date: "2026-04-18",
    readingMinutes: 6,
    category: "Fritöz",
    keywords: ["fritöz yağı ne zaman değişir", "fritöz termostat ayarı", "kızartma yağı ömrü", "fritöz bakımı"],
    body: [
      {
        heading: "Yağ neden bozulur",
        body: [
          "Kızartma yağı üç şeyle bozuluyor: sıcaklık, oksijen ve içine giren organik madde. Bunların üçü de fritözün doğasında var, dolayısıyla yağın bozulması engellenemez — sadece yavaşlatılabilir. Mutfak açısından soru şu: aynı yağla kaç vardiya çalışabiliyorsunuz ve bu sayı neden düşüyor?",
          "Sıcaklık burada baskın faktör. Yağın bozulma hızı sıcaklıkla doğrusal değil, çok daha keskin artıyor. 175 derecede çalışan bir fritözle 195 derecede çalışan bir fritöz arasındaki fark, yağ ömründe orantısız biçimde büyük. Bu yüzden termostatın gerçekte kaç derece tuttuğu, yağ maliyetini doğrudan belirliyor.",
          "İşin can sıkıcı tarafı, sapmış bir termostatın fark edilmemesi. Ayar düğmesi 180'i gösteriyorsa herkes 180 varsayıyor. Oysa prob ucunda biriken karbon tabakası, termostatın yağın gerçek sıcaklığını okumasını engelliyor ve cihaz gerçekte 200 dereceye kadar çıkabiliyor. Ürün de yanıyor, yağ da hızla kararıyor.",
        ],
      },
      {
        heading: "Sıcaklığı doğrulamanın basit yolu",
        body: [
          "Bunu ölçmek zor değil. Bağımsız bir daldırma termometresiyle, cihaz set sıcaklığına ulaşıp kestikten sonra yağın gerçek sıcaklığını ölçmek yeterli. Sepetin bulunduğu bölgeden, kazanın dibine ve kenarına değmeden ölçüm alınmalı.",
          "10 dereceye kadar sapma normal karşılanabilir. Bunun üzerindeki farklar termostat probunun temizlenmesini ya da termostatın değişmesini gerektiriyor. Serviste bu ölçümü rutin olarak yapıyoruz ve sonucu size söylüyoruz — çünkü çoğu işletme fritözünün kaç derecede çalıştığını hiç ölçtürmemiş oluyor.",
          "Aynı ölçüm iki hazneli fritözlerde ayrı ayrı yapılmalı. İki haznenin farklı sıcaklıklarda çalışması çok yaygın ve ürün kalitesindeki tutarsızlığın açıklaması genellikle burada saklı.",
        ],
      },
      {
        heading: "Kırıntılar: en ucuz iyileştirme",
        body: [
          "Yağın içinde kalan ekmek kırıntısı, un ve panelenin döküntüsü sürekli kızarıyor ve yanıyor. Yanan bu parçacıklar yağa acı bir tat veriyor, rengini koyulaştırıyor ve serbest yağ asidi oranını yükselterek bozulmayı hızlandırıyor. Yani yağın ömrünü yağın kendisi değil, içindeki katılar bitiriyor.",
          "Çözüm çok basit ve masrafsız: yağı günlük süzmek. Çoğu mutfakta bu iş haftada bir yapılıyor. Günlük yapıldığında yağ değişim aralığının belirgin biçimde uzadığını, cihazlarda karbon birikiminin azaldığını sahada net şekilde görüyoruz.",
          "Süzme işleminin ne zaman yapıldığı da önemli. Yağ tamamen soğuduğunda süzmek zorlaşıyor, çok sıcakken süzmek ise güvenlik riski. Servis bittikten sonra, yağ hâlâ akışkan ama elle çalışılabilir sıcaklığa indiğinde en uygun an.",
        ],
      },
      {
        heading: "Rezistans üzerindeki karbon",
        body: [
          "Elektrikli fritözlerde rezistans doğrudan yağın içinde ve yüzeyine zamanla sert bir karbon tabakası yapışıyor. Bu tabaka iki iş birden yapıyor: ısının yağa geçişini yavaşlatıyor ve kendisi sürekli kavrulduğu için yağa bozulma ürünleri salıyor.",
          "Karbon tabakası, rezistans ömrünün de en büyük düşmanı. Isıyı aktaramayan rezistans kendi üzerinde ısınıyor ve bir noktada kopuyor. Periyodik bakımda rezistansın sökülüp karbondan arındırılması hem yağ kalitesine hem parça ömrüne doğrudan etki ediyor.",
          "Temizlik sırasında rezistansın üzerindeki karbonun metal aletle kazınmaması gerekiyor; çizilen yüzey daha hızlı karbon tutuyor. Uygun çözücüde bekletip yumuşak fırçayla almak doğru yöntem.",
        ],
      },
      {
        heading: "Küçük alışkanlıklar, ölçülebilir sonuç",
        body: [
          "Servis dışı saatlerde fritözü açık bırakmamak, listedeki en etkili maddelerden biri. Boşta 180 derecede bekleyen yağ, kızartma yapılmasa bile bozulmaya devam ediyor. Yoğun olmayan saatlerde cihazı bekleme sıcaklığına almak ya da kapatmak hem yağ hem enerji tasarrufu sağlıyor.",
          "Kapasitenin üzerinde ürün atmamak da önemli. Sepet fazla doldurulduğunda yağ sıcaklığı aniden düşüyor, cihaz bunu telafi etmek için tam güçle ısıtıyor ve yağ termal olarak daha çok zorlanıyor. Ürün de yağ emiyor, çıtır olmuyor.",
          "Son olarak, yağ ekleme alışkanlığı. Eksilen yağın üzerine taze yağ eklemek, eski yağın ömrünü uzatmıyor; sadece toplam kaliteyi ortalıyor. Belirli bir noktadan sonra kısmi ekleme yerine tam değişim yapmak, hem ürün kalitesi hem cihaz sağlığı açısından doğru olan.",
        ],
      },
    ],
    faq: [
      {
        q: "Yağın değişme zamanı geldiğini nasıl anlarım?",
        a: "Renk koyulaşması tek başına güvenilir bir gösterge değil. Yağın kolay köpürmesi, dumanlanma sıcaklığının düşmesi ve ürüne acımsı tat geçmesi daha güçlü işaretler. Yoğun kullanan işletmelerde polar madde ölçüm cihazı kullanmak en objektif yöntem.",
      },
      {
        q: "Fritözün termostatı kaç yılda bir değişmeli?",
        a: "Sabit bir süre yok; ölçüme bakılır. Yılda bir kez bağımsız termometreyle sapma kontrolü yapıp, 10 dereceyi geçen farklarda müdahale etmek doğru yaklaşım.",
      },
    ],
  },
  {
    slug: "endustriyel-mutfakta-periyodik-bakim-takvimi",
    title: "Endüstriyel Mutfakta Periyodik Bakım Takvimi: Neyi Ne Zaman",
    metaTitle: "Endüstriyel Mutfak Periyodik Bakım Takvimi | Aylık ve Yıllık Liste",
    metaDescription:
      "Ocak, fritöz, fırın, bulaşık makinesi ve soğutucular için günlük, aylık, üç aylık ve yıllık bakım listesi. Arıza duruşlarını azaltan pratik bir takvim.",
    excerpt:
      "Arızaların çoğu bir günde oluşmuyor. Cihaz cihaz, dönem dönem neye bakılması gerektiğini bir takvime döktük.",
    date: "2026-05-22",
    readingMinutes: 8,
    category: "Bakım",
    keywords: ["endüstriyel mutfak bakımı", "periyodik bakım listesi", "mutfak ekipmanı bakım takvimi", "önleyici bakım"],
    body: [
      {
        heading: "Neden takvim gerekiyor",
        body: [
          "Endüstriyel mutfakta arızaların büyük bölümü ani değil, birikimli. Brülör delikleri yavaş yavaş tıkanıyor, kondenser kanatçıkları yavaş yavaş doluyor, conta yavaş yavaş sertleşiyor. Değişim yavaş olduğu için mutfak ekibi ona alışıyor ve bir problem olarak algılamıyor. Bir gün cihaz durduğunda ise \"birden bozuldu\" deniyor; oysa aylardır bozuluyordu.",
          "Takvimin işi tam olarak bu alışmayı kırmak. Belirli aralıklarla, belirli maddelere bakmak — arıza olsun olmasın. Aşağıdaki liste, sahada gerçekten işe yaradığını gördüğümüz maddelerden oluşuyor; teorik bir kontrol listesi değil.",
        ],
      },
      {
        heading: "Günlük — mutfak ekibinin yapabileceği",
        body: [
          "Fritözlerde yağın süzülmesi ve sepet altındaki kırıntıların alınması. Bu tek madde, yağ ömrü ve rezistans sağlığı açısından listenin en getirili kalemi.",
          "Bulaşık makinesinde tank suyunun boşaltılması, filtrelerin çıkarılıp temizlenmesi ve makinenin kapağı aralık bırakılarak havalandırılması. Kapalı bırakılan bir makinede sabaha kadar bekleyen nem, hem koku hem tortu yapıyor.",
          "Soğutucularda kapıların tam kapandığının gözle kontrolü ve iç sıcaklığın not edilmesi. Günlük bir sıcaklık kaydı tutmak, dalgalanmaları erken yakalamanın en kolay yolu.",
          "Ocak ve yer ocaklarında taşan yemeğin cihaz soğuduktan sonra temizlenmesi. Kuruyup kabuk bağlamış bir kalıntıyı çıkarmak, taze halini silmekten kat kat zor.",
        ],
      },
      {
        heading: "Aylık — yarım saatlik bir tur",
        body: [
          "Tüm gazlı cihazlarda alev karakterinin gözle kontrolü. Alevler mavi ve düzgün mü, sarı uçlar var mı, halkanın bir bölümünde eksik yanma var mı? Bu tur bir mutfak şefinin birkaç dakikada yapabileceği ama nadiren yapılan bir kontrol.",
          "Soğutucu kapı contalarının kâğıt testi. Kapıya bir kâğıt sıkıştırıp çekiyorsunuz; direnç hissetmediğiniz nokta bir kaçak demek. Aynı test fırın kapıları için de geçerli.",
          "Bulaşık makinesinde yıkama kollarının sökülüp deliklerinin kontrol edilmesi ve deterjan/parlatıcı dozaj hortumlarının gözle incelenmesi. Yassılaşmış bir hortum kimyasal çekmiyor.",
          "Tüm cihazların elektrik kablolarının ve fişlerinin gözle kontrolü. Mutfak zemininde su ve yağ olduğu için kablo yalıtımındaki bir hasar hızla tehlikeye dönüşüyor.",
        ],
      },
      {
        heading: "Üç aylık — teknik servis işi",
        body: [
          "Ocak ve yer ocaklarında brülör başlıklarının sökülüp çözücüde bekletilmesi, enjektörlerin basınçlı havayla açılması, pilot memesinin temizlenmesi ve tüm gaz bağlantılarının kaçak testinden geçirilmesi.",
          "Fritözlerde rezistans karbon temizliği, termostat kalibrasyon kontrolü ve tahliye vanası conta kontrolü.",
          "Bulaşık makinesinde kireç çözme işlemi, boiler rezistansının kontrolü ve su yumuşatıcısının reçine/tuz durumunun gözden geçirilmesi.",
          "Soğutucularda kondenser kanatçıklarının temizlenmesi, drenaj tavası ve tahliye hortumunun açılması, sistem basınçlarının manifold ile ölçülmesi ve kontrol ünitesi parametrelerinin gözden geçirilmesi.",
          "Fırınlarda fan pervanesinin yağdan arındırılması, kapı contası ve menteşe kontrolü, buhar hattının kireç çözümü.",
        ],
      },
      {
        heading: "Yıllık — atlanınca pahalıya patlayanlar",
        body: [
          "Tüm cihazların elektrik panosunda klemens sıkılığının kontrolü. Isınıp soğuma döngüsü vidaları gevşetiyor, gevşek klemens ısınıyor ve kablo yalıtımını eritebiliyor. Yılda bir tork kontrolü, pano yangınlarının çoğunu baştan engelliyor.",
          "Esnek gaz hortumlarının son kullanma tarihi kontrolü. Bu hortumların üzerinde tarih yazıyor ve mutfaklarda tarihi geçmiş hortumlara çok sık rastlıyoruz. Değişimi ucuz, ihmali pahalı.",
          "Termostat ve kontrol ünitelerinin bağımsız termometreyle kalibrasyon kontrolü. Fırının 200'e ayarlıyken 180 tutması, tarif tutturamamaktan enerji israfına kadar birçok şeyin sessiz sebebi.",
          "Davlumbaz ve baca sisteminin temizliği. Cihaz bakımının parçası sayılmıyor ama biriken yağ hem yangın riski hem de mutfak havasının yağ yükünü artırarak diğer cihazların — özellikle soğutucuların — ömrünü kısaltıyor.",
        ],
      },
      {
        heading: "Kayıt tutmak",
        body: [
          "Bakımın kendisi kadar önemli olan şey, ne yapıldığının yazılı kalması. Hangi cihaza ne zaman ne yapıldığını bilmek, tekrarlayan arızaları görmeyi ve hangi cihazın artık ekonomik ömrünü doldurduğunu anlamayı sağlıyor.",
          "Basit bir tablo yeterli: cihaz adı, tarih, yapılan işlem, değişen parça, teknisyen notu. Bakım anlaşmalı çalıştığımız işletmelerde bu kaydı biz tutuyor ve her ziyarette güncelliyoruz. Üç yıl sonra bir cihaza yeniden yatırım yapıp yapmama kararı verirken, bu kayıt en değerli veri oluyor.",
        ],
      },
    ],
    faq: [
      {
        q: "Bakım anlaşması yaptırmak zorunlu mu?",
        a: "Zorunlu değil, ama yoğun çalışan mutfaklarda arıza çağrılarını gözle görülür biçimde azaltıyor. Anlaşma yapmadan da periyodik bakım hizmeti alabilirsiniz; fark, önceliklendirme ve sabit fiyatlandırma oluyor.",
      },
      {
        q: "Bakım sırasında mutfağı kapatmam gerekir mi?",
        a: "Genellikle hayır. Bakımları cihaz cihaz, mutfağın sakin saatlerine bölerek yapıyoruz. Sadece kireç çözme gibi bir çevrimi tamamlaması gereken işlemlerde ilgili cihaz birkaç saat devre dışı kalıyor.",
      },
    ],
  },
  {
    slug: "sogutucu-dolap-neden-sogutmuyor",
    title: "Soğutucu Dolabınız Neden Soğutmuyor? Servis Çağırmadan Önce 6 Kontrol",
    metaTitle: "Soğutucu Dolap Neden Soğutmuyor? 6 Adımlık Kontrol Listesi",
    metaDescription:
      "Endüstriyel soğutucu dolapta soğutma kaybının sebebi çoğu zaman gaz değil. Servis çağırmadan önce kendiniz kontrol edebileceğiniz altı madde ve nedenleri.",
    excerpt:
      "\"Gazı bitmiş\" en sık yapılan yanlış teşhis. Soğutma kaybının gerçek sebepleri ve kendiniz bakabileceğiniz noktalar.",
    date: "2026-06-30",
    readingMinutes: 7,
    category: "Soğutma",
    keywords: ["buzdolabı soğutmuyor", "endüstriyel soğutucu arızası", "kondenser temizliği", "defrost arızası"],
    body: [
      {
        heading: "Gaz kaçağı düşündüğünüzden nadir",
        body: [
          "Soğutma arızalarında en çok duyduğumuz cümle \"herhalde gazı bitmiştir\". Oysa soğutma devresi kapalı bir sistem; gaz kendiliğinden azalmaz. Azalıyorsa bir yerden kaçıyordur ve o kaçak bulunmadan yapılan dolum en fazla birkaç hafta iş görür.",
          "Sahada gördüğümüz gerçek dağılım çok farklı. Soğutma kaybı çağrılarının büyük kısmı kondenser kirliliği, kapı contası kaçağı ve defrost arızasından çıkıyor. Bunların üçü de gaz doldurmaktan çok daha ucuz ve üçü de göz kararı fark edilebilir. Aşağıdaki altı maddeyi servis çağırmadan önce kendiniz kontrol edebilirsiniz.",
        ],
      },
      {
        heading: "1. Kondenserin durumu",
        body: [
          "Dolabın arka ya da alt kısmındaki kondenser, sistemin ısıyı dışarı attığı yer. Kanatçıkların arası toz, un ve yağla dolduğunda ısı atılamıyor, basınç yükseliyor ve kompresör çalışmasına rağmen kabin soğumuyor.",
          "Mutfak ortamında bu tıkanma çok hızlı oluyor; havada sürekli yağ buharı var ve toz bu yağa yapışıyor. Kondenseri gözle kontrol edin: kanatçıkların arası görünüyor mu, yoksa gri bir keçe tabakasıyla mı kapanmış? İkincisiyse temizlik gerekiyor.",
          "Temizliği fırça ve elektrik süpürgesiyle yapabilirsiniz. Cihazın fişini çekmeyi ve kanatçıkları ezmemeye dikkat etmeyi unutmayın. Ezilen kanatçık, hava geçişini kalıcı olarak azaltıyor.",
        ],
      },
      {
        heading: "2. Kapı contası ve kâğıt testi",
        body: [
          "Kapının farklı noktalarına bir kâğıt parçası sıkıştırıp kapıyı kapatın, sonra kâğıdı çekin. Her noktada belirgin bir direnç hissetmelisiniz. Kâğıdın kolayca çıktığı yerlerde conta iş görmüyor demektir.",
          "Contayı test etmeden önce temizlemek de faydalı; üzerinde biriken yağ ve kir, mıknatısın yüzeye tam oturmasını engelleyebiliyor. Bazen sadece contanın silinmesi sızdırmayı bitiriyor.",
          "Contası kaçıran bir dolap, içine sürekli sıcak ve nemli hava aldığı için hem soğutamıyor hem de evaporatörde aşırı karlanma yapıyor. Yani tek bir arızalı conta, iki ayrı belirtiye yol açıyor.",
        ],
      },
      {
        heading: "3. Evaporatörde buzlanma",
        body: [
          "Dolabın iç arka panelini ya da fan bölgesini kontrol edin. Kalın bir buz tabakası varsa hava geçemiyor ve kabin soğumuyor demektir. Bu durumda dolabı kapatıp buzun çözülmesi bir günlüğüne sorunu gideriyor, ama sebebi ortadan kaldırmıyor.",
          "Asıl bakılması gereken defrost sistemi. Defrost rezistansı yanmışsa ya da zaman rölesi çalışmıyorsa buz her seferinde geri geliyor. Bunu şuradan anlayabilirsiniz: çözdürdükten sonra iki üç gün içinde tekrar buzlanıyorsa defrost devrede değil demektir.",
        ],
      },
      {
        heading: "4. Havalandırma boşluğu ve yerleşim",
        body: [
          "Dolabın arkasında ve yanlarında hava dolaşımı için boşluk olması gerekiyor. Duvara dayanmış, iki yanı başka cihazlarla sıkışmış bir dolap ısıyı atamıyor. Mutfak düzeni sıkışık olduğunda bu kural en sık ihlal edilen kural.",
          "Bir de komşuluk meselesi var: soğutucunun fırın, fritöz ya da ocak yanına konması, cihazın ömrü boyunca zorlanması demek. Bazen en etkili müdahale, dolabı yarım metre kaydırmak oluyor. Yeni mutfak kuruyorsanız bunu baştan planlamak, sonradan yaşanacak birçok arızayı önlüyor.",
        ],
      },
      {
        heading: "5. Drenaj tahliyesi",
        body: [
          "Dolabın içinde su birikiyorsa drenaj tahliyesi tıkalı demektir. Küçük görünen bu sorun ihmal edildiğinde ciddileşiyor: biriken su kabin tabanında donuyor, zamanla kabin izolasyonuna sızıyor ve ıslanan izolasyon geri dönüşü olmayan bir soğutma kaybı yaratıyor.",
          "Tahliye deliğini yumuşak bir tel ya da sıcak suyla açmayı deneyebilirsiniz. Drenaj tavasının da düzenli boşaltılıp temizlenmesi gerekiyor; içinde biriken kalıntı hem koku hem tıkanma kaynağı.",
        ],
      },
      {
        heading: "6. Kompresörün çalışma düzeni",
        body: [
          "Dolabı bir süre dinleyin. Kompresör hiç durmuyor mu, yoksa hiç çalışmıyor mu? İkisi de arıza belirtisi ama farklı sebeplere işaret ediyor.",
          "Hiç durmayan kompresör genellikle yukarıdaki maddelerden birinin sonucu: kirli kondenser, kaçıran conta ya da azalmış gaz. Sürekli çalışma iyi bir şey değil; hem elektrik tüketimini katlıyor hem kompresörün ömrünü hızla tüketiyor.",
          "Hiç çalışmayan kompresörde ise ilk bakılacak yer start rölesi ve termik koruma. Bunlar kompresörden çok daha ucuz parçalar ve arızalandıklarında kompresör çalışmıyor. \"Kompresör gitmiş\" teşhisi konmadan önce bu ikisinin ölçülmesi gerekiyor — aradaki maliyet farkı çok büyük.",
          "Bu altı maddeyi kontrol ettiğinizde sorun devam ediyorsa, sıra basınç ölçümü ve kaçak aramasına geliyor. Bu aşama manifold ve dedektör gerektirdiği için teknik servis işi. Ama kontrol listesini yapmış olarak aramanız, teşhisi hızlandırıyor ve gereksiz işlem yapılmasını engelliyor.",
        ],
      },
    ],
    faq: [
      {
        q: "Dolabın soğutmadığını fark ettim, ürünlerimi ne yapmalıyım?",
        a: "Ürünleri hemen başka bir soğutucuya aktarın ve kapıyı gereksiz açmayın. Kapalı bir dolap, çalışmasa bile bir süre iç sıcaklığını koruyabilir; sürekli açılan bir dolap ise hızla ısınır.",
      },
      {
        q: "Kondenser temizliğini kendim yapabilir miyim?",
        a: "Yapabilirsiniz. Fişi çekin, fırça ve elektrik süpürgesiyle kanatçık aralarını temizleyin, kanatçıkları ezmemeye dikkat edin. Yağ tabakası sertleşmişse uygun bir çözücü gerekiyor; bu aşamada servis çağırmak daha doğru olur.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export const postSlugs = posts.map((p) => p.slug);
