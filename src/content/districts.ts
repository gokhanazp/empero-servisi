import type { District } from "@/lib/types";

/**
 * İlçe sayfaları. Her ilçenin metni kendine özgüdür; kopyala-yapıştır
 * "doorway page" üretmemek için semt, sanayi bölgesi ve mutfak profili
 * bilgileri ayrı ayrı yazılmıştır.
 */
const tumIlceler: District[] = [
  {
    slug: "kadikoy-empero-servisi",
    name: "Kadıköy",
    side: "Anadolu",
    intro: [
      "Kadıköy, İstanbul'un metrekare başına en çok mutfak barındıran ilçelerinden biri. Moda ve Bahariye hattındaki küçük ölçekli restoranlardan Kozyatağı ve Fikirtepe tarafındaki büyük işletme mutfaklarına kadar çok farklı ölçekte cihaz görüyoruz.",
      "Bölgedeki eski binalarda gaz hattı çapının cihaz kapasitesine yetmemesi sık karşılaştığımız bir durum. Özellikle Moda ve Yeldeğirmeni'ndeki dönüştürülmüş dükkânlarda, ocak zayıf yanıyor diye çağrıldığımız birçok yerde sorun cihazda değil hattaki basınçta çıkıyor. Bu yüzden Kadıköy'de servise gittiğimizde basınç ölçümünü rutin olarak yapıyoruz.",
    ],
    areas: ["Moda", "Bahariye", "Caferağa", "Yeldeğirmeni", "Kozyatağı", "Göztepe", "Fikirtepe", "Acıbadem", "Bostancı", "Suadiye"],
    note: "Yoğun kafe ve küçük restoran dokusu; kompakt tezgah üstü cihazlarda servis talebi yüksek.",
  },
  {
    slug: "umraniye-empero-servisi",
    name: "Ümraniye",
    side: "Anadolu",
    intro: [
      "Ümraniye, hem büyük iş merkezi yemekhaneleri hem de sanayi bölgesindeki toplu yemek mutfaklarıyla ağır kapasite çalışan cihazların yoğunlaştığı bir ilçe. Burada gördüğümüz cihazlar günde on iki saatin üzerinde çalışıyor ve arıza tablosu da buna göre şekilleniyor.",
      "Toplu yemek mutfaklarında en sık çağrıldığımız cihaz yer ocağı ve büyük hacimli bulaşık makinesi oluyor. Yüz kişilik kazanların altında sürekli çalışan ocakların brülör halkaları hızla tıkanıyor; makinelerde ise su sertliği kaynaklı boiler kireçlenmesi sabit bir problem. Bu profildeki mutfaklara üç aylık bakım programı öneriyoruz.",
    ],
    areas: ["Atakent", "Çakmak", "Ihlamurkuyu", "Yamanevler", "Tepeüstü", "Dudullu", "Esenşehir", "Site"],
    note: "Toplu yemek ve fabrika mutfakları ağırlıkta; yüksek kapasiteli cihazlarda bakım anlaşması en verimli çözüm.",
  },
  {
    slug: "atasehir-empero-servisi",
    name: "Ataşehir",
    side: "Anadolu",
    intro: [
      "Ataşehir'de plaza katlarındaki şirket mutfakları, alışveriş merkezi içindeki zincir şubeler ve Batı Ataşehir'deki restoran hattı birbirinden çok farklı üç profil oluşturuyor. Zincir şubelerde cihaz parkı standart olduğu için parça öngörüsü yapmak kolay; bağımsız restoranlarda ise her mutfak kendine özgü.",
      "Plaza ve AVM içindeki mutfaklarda servis saatinin yönetim izinlerine takılması sık yaşanan bir durum. Bu bölgede çalışırken kapanış sonrası ya da sabah erken saat randevularını normal karşılıyoruz; işletmenin kapalı olduğu saatte müdahale etmek çoğu zaman herkes için daha kolay oluyor.",
    ],
    areas: ["Batı Ataşehir", "Barbaros", "Küçükbakkalköy", "İçerenköy", "Örnek", "Ferhatpaşa", "Yenisahra"],
    note: "Zincir şube ve plaza mutfağı yoğunluğu; kapanış sonrası servis talepleri yaygın.",
  },
  {
    slug: "uskudar-empero-servisi",
    name: "Üsküdar",
    side: "Anadolu",
    intro: [
      "Üsküdar'daki mutfak dokusu sahil hattı ve iç mahalleler olarak ikiye ayrılıyor. Sahilde balık restoranları ve kahvaltı salonları, iç tarafta ise esnaf lokantaları ve pastaneler ağırlıkta. İki grubun cihaz ihtiyacı da farklı: sahilde ızgara ve fritöz, iç mahallelerde fırın ve yer ocağı öne çıkıyor.",
      "İlçenin tarihi dokusu nedeniyle birçok işletme dar sokaklarda ve alt katlarda faaliyet gösteriyor. Cihaz taşımanın zor olduğu bu adreslerde işi yerinde bitirmeye özellikle önem veriyoruz; parçayı araçta bulundurmak burada başka her yerden daha kritik.",
    ],
    areas: ["Kuzguncuk", "Beylerbeyi", "Çengelköy", "Altunizade", "Bulgurlu", "Ünalan", "Kısıklı", "Salacak"],
    note: "Sahil restoranları ve esnaf lokantaları karışık; yerinde tamir kabiliyeti burada belirleyici.",
  },
  {
    slug: "maltepe-empero-servisi",
    name: "Maltepe",
    side: "Anadolu",
    intro: [
      "Maltepe sahil hattındaki kafe ve restoran zinciri, ilçenin servis talebinin büyük kısmını oluşturuyor. Deniz kenarındaki işletmelerde nemli ve tuzlu hava, paslanmaz gövdelerde ve özellikle elektrik panolarındaki klemenslerde beklenenden hızlı yıpranma yaratıyor.",
      "Bu bölgede yaptığımız bakımlarda pano içi kontrolüne ayrı bir başlık açıyoruz. Nem alan panolarda oksitlenen klemensler, temas direnci yaratıp ısınmaya ve zaman içinde kablo hasarına yol açıyor. Yılda bir yapılan tork ve oksit kontrolü, bu bölgede diğer ilçelerden daha çok geri dönen bir işlem.",
    ],
    areas: ["Bağlarbaşı", "Cevizli", "Küçükyalı", "Altayçeşme", "Zümrütevler", "İdealtepe", "Gülsuyu"],
    note: "Sahil hattı kafe yoğunluğu; nem kaynaklı pano ve gövde korozyonu bölgeye özgü bir konu.",
  },
  {
    slug: "kartal-empero-servisi",
    name: "Kartal",
    side: "Anadolu",
    intro: [
      "Kartal'da hem sahil bandındaki restoranlar hem de iç kesimdeki toplu yemek üretim tesisleri servis verdiğimiz alanlar. Üretim tesislerinde cihazlar vardiyalı çalıştığı için arıza duruşunun maliyeti çok yüksek; bu tip yerlerle çoğunlukla yıllık bakım anlaşmasıyla çalışıyoruz.",
      "Kartal ve çevresinde kentsel dönüşümle yenilenen binalarda gaz tesisatı da yenilendiği için basınç kaynaklı sorunlar daha az. Buna karşılık yeni açılan mutfaklarda cihaz yerleşimi sıkışık planlandığı için soğutucuların havalandırma boşluğu yetersiz kalıyor ve kondenser kaynaklı arızalar erken başlıyor.",
    ],
    areas: ["Yakacık", "Soğanlık", "Esentepe", "Cevizli", "Uğur Mumcu", "Orhantepe", "Hürriyet"],
    note: "Toplu yemek üretim tesisleri ve sahil restoranları; vardiyalı çalışan cihazlarda duruş maliyeti yüksek.",
  },
  {
    slug: "pendik-empero-servisi",
    name: "Pendik",
    side: "Anadolu",
    intro: [
      "Pendik, organize sanayi alanları, havalimanı çevresindeki otel mutfakları ve sahildeki restoranlarla geniş bir servis alanı oluşturuyor. Otel mutfaklarında cihaz parkı büyük ve çeşitli; tek bir ziyarette birden fazla cihaza bakmamız gereken adresler burada sık.",
      "Otel ve büyük tesis mutfaklarında servis planlamasını farklı yapıyoruz: tek bir arıza için gitmek yerine, gidildiğinde tüm cihazların hızlı kontrolünü de yapıp risk taşıyan noktaları raporluyoruz. Bu yaklaşım, aynı hafta içinde ikinci bir çağrı açılmasını çoğu zaman engelliyor.",
    ],
    areas: ["Kaynarca", "Batı", "Doğu", "Velibaba", "Kurtköy", "Çamçeşme", "Yenişehir", "Güzelyalı"],
    note: "Otel ve sanayi mutfakları; çok cihazlı adreslerde toplu kontrol yaklaşımı uyguluyoruz.",
  },
  {
    slug: "sancaktepe-empero-servisi",
    name: "Sancaktepe",
    side: "Anadolu",
    intro: [
      "Sancaktepe'de fabrika yemekhaneleri ve catering üretim mutfakları öne çıkıyor. Bu tip mutfaklarda cihazlar kısa bir zaman aralığında çok yüksek kapasiteyle çalışıyor: sabah üç saatte yüzlerce kişilik üretim yapılıp öğleden sonra dinleniyor.",
      "Bu çalışma biçimi cihazlarda farklı bir yıpranma yaratıyor. Sürekli ısınıp soğuyan fırın ve kazanlarda genleşme kaynaklı conta ve kaynak yorulmaları, sürekli çalışan mutfaklara göre daha erken ortaya çıkıyor. Bakım listemizi bu bölgede conta ve bağlantı kontrolü ağırlıklı kuruyoruz.",
    ],
    areas: ["Sarıgazi", "Samandıra", "Abdurrahmangazi", "Yenidoğan", "Emek", "Osmangazi"],
    note: "Catering ve fabrika yemekhaneleri; yoğun-durgun döngüsü conta ve kaynak yorulmasını hızlandırıyor.",
  },
  {
    slug: "tuzla-empero-servisi",
    name: "Tuzla",
    side: "Anadolu",
    intro: [
      "Tuzla'da tersane ve organize sanayi bölgesindeki personel yemekhaneleri, servis verdiğimiz mutfakların çoğunluğunu oluşturuyor. Bu mutfaklar genellikle sabit menüyle ve yüksek adetle çalıştığı için cihazlar tek düze ama ağır bir yük altında.",
      "Deniz kenarına yakın konumun getirdiği nemli hava, burada da paslanmaz yüzeylerde ve elektrik aksamında yıpranmayı hızlandırıyor. Soğutucu kondenserlerinde tuzlu nem ve toz birleşince kanatçıklar beklenenden hızlı tıkanıyor; bu bölgede kondenser temizlik aralığını daha sık tutmayı öneriyoruz.",
    ],
    areas: ["Aydınlı", "Orhanlı", "İçmeler", "Postane", "Şifa", "Cami", "Anadolu"],
    note: "Tersane ve OSB yemekhaneleri; tuzlu nem nedeniyle kondenser ve pano bakımı öne çıkıyor.",
  },
  {
    slug: "cekmekoy-empero-servisi",
    name: "Çekmeköy",
    side: "Anadolu",
    intro: [
      "Çekmeköy'de son yıllarda açılan yeni yerleşimlerle birlikte restoran, kahvaltı salonu ve pastane sayısı hızla arttı. Yeni açılan işletmelerde cihazlar genç, ama kurulum sonrası ilk ayar eksiklikleri sık görülüyor.",
      "Yeni kurulan mutfaklarda en yaygın karşılaştığımız durum, cihazın gaz tipine göre ayarlanmadan devreye alınmış olması. Doğalgaz hattına LPG enjektörüyle bağlanmış ocaklar, ilk günden itibaren yanlış alev karakteriyle çalışıyor. Devreye alma kontrolü, burada tamirden daha çok ihtiyaç duyulan hizmet oluyor.",
    ],
    areas: ["Taşdelen", "Alemdağ", "Ömerli", "Mimar Sinan", "Merkez", "Soğukpınar"],
    note: "Yeni açılan işletme yoğunluğu; devreye alma ve ilk ayar hizmeti öne çıkıyor.",
  },
  {
    slug: "sultanbeyli-empero-servisi",
    name: "Sultanbeyli",
    side: "Anadolu",
    intro: [
      "Sultanbeyli'de esnaf lokantaları, pideci ve fırınlar mutfak dokusunun büyük kısmını oluşturuyor. Bu işletmelerde cihazlar uzun yıllar kullanılıyor ve tamir edilerek çalıştırılmaya devam ediliyor; yenileme yerine onarım tercih ediliyor.",
      "Bu profilde en önemli konu parça bulunabilirliği. Yaşı ilerlemiş cihazlarda orijinal parça tedariki zorlaşabiliyor; muadil çözümlerin hangisinin güvenli, hangisinin kısa ömürlü olduğunu bilmek burada işin merkezinde. Uygun muadil bulunamadığında bunu açıkça söylüyor, ara çözüm önermiyoruz.",
    ],
    areas: ["Abdurrahmangazi", "Mehmet Akif", "Fatih", "Turgut Reis", "Hasanpaşa", "Battalgazi"],
    note: "Esnaf lokantası ve fırın ağırlıklı; yaşlı cihazlarda parça tedariki belirleyici.",
  },
  {
    slug: "beykoz-empero-servisi",
    name: "Beykoz",
    side: "Anadolu",
    intro: [
      "Beykoz'da boğaz hattındaki balık restoranları ve Kavacık çevresindeki iş merkezi mutfakları iki ayrı servis profili oluşturuyor. Boğaz hattındaki işletmelerde sezon yoğunluğu belirgin: yaz aylarında kapasite katlanıyor, kışın düşüyor.",
      "Sezonluk çalışan mutfaklarda cihazların uzun süre kullanılmadan beklemesi kendi başına bir arıza sebebi. Soğutucularda uzun duruş sonrası kompresör start problemleri, gazlı cihazlarda ise valf millerinin sertleşmesi tipik. Sezon öncesi devreye alma bakımı, bu bölgede en çok talep edilen hizmetimiz.",
    ],
    areas: ["Kavacık", "Paşabahçe", "Anadolu Hisarı", "Çubuklu", "Acarkent", "Rüzgarlıbahçe"],
    note: "Sezonluk çalışan boğaz restoranları; sezon öncesi devreye alma bakımı kritik.",
  },
  {
    slug: "besiktas-empero-servisi",
    name: "Beşiktaş",
    side: "Avrupa",
    intro: [
      "Beşiktaş'ta çarşı içindeki yoğun restoran dokusu, Bebek ve Ortaköy hattındaki üst segment işletmeler ve Levent tarafındaki plaza mutfakları bir arada bulunuyor. Servis talebinin karakteri de buna göre değişiyor.",
      "Çarşı içindeki işletmelerin en büyük kısıtı alan. Cihazlar birbirine bitişik yerleştirildiği için soğutucular fırın ve ocak ısısına maruz kalıyor, kondenserler yeterli hava alamıyor. Bu bölgede soğutma arızalarının önemli bölümü cihazın kendisinden değil, yerleşiminden kaynaklanıyor ve bunu söylemek bazen en faydalı müdahale oluyor.",
    ],
    areas: ["Çarşı", "Bebek", "Ortaköy", "Etiler", "Levent", "Arnavutköy", "Akatlar", "Balmumcu"],
    note: "Dar mutfak alanları; soğutucu yerleşimi ve havalandırma boşluğu tekrarlayan bir sorun.",
  },
  {
    slug: "sisli-empero-servisi",
    name: "Şişli",
    side: "Avrupa",
    intro: [
      "Şişli, otel mutfakları, iş merkezi yemekhaneleri ve Nişantaşı hattındaki restoranlarla İstanbul'un en yoğun ticari mutfak bölgelerinden biri. Otel mutfaklarında cihaz parkı geniş ve çoğu 24 saat esasına göre çalışıyor.",
      "24 saat çalışan mutfaklarda planlı bakım penceresi bulmak başlı başına bir mesele. Bu bölgede bakımları cihaz cihaz, mutfağın en sakin saatlerine bölerek yapıyoruz. Tüm cihazları bir günde durdurmak yerine haftaya yayılmış bir program, hem işletmeyi hem bizi rahatlatıyor.",
    ],
    areas: ["Nişantaşı", "Mecidiyeköy", "Bomonti", "Fulya", "Esentepe", "Kurtuluş", "Feriköy", "Gülbağ"],
    note: "Otel ve 24 saat çalışan mutfaklar; bakım programının saat saat planlanması gerekiyor.",
  },
  {
    slug: "beyoglu-empero-servisi",
    name: "Beyoğlu",
    side: "Avrupa",
    intro: [
      "Beyoğlu'nda İstiklal ve çevresindeki meyhaneler, Karaköy'deki yeni nesil restoranlar ve Galata çevresindeki kafeler yoğun bir mutfak ağı oluşturuyor. İşletmelerin çoğu tarihi binalarda ve alt katlarda bulunuyor.",
      "Tarihi binalarda en sık karşılaştığımız kısıt elektrik ve gaz altyapısı. Sigorta kapasitesinin cihaz gücüne yetmemesi, bulaşık makinesi ve fritöz gibi yüksek çekişli cihazların aynı anda çalıştırılamamasına yol açıyor. Servise gittiğimizde arızanın cihazda mı besleme tarafında mı olduğunu ayırt etmek burada rutin bir adım.",
    ],
    areas: ["Karaköy", "Galata", "Cihangir", "Asmalımescit", "Tarlabaşı", "Kasımpaşa", "Tophane"],
    note: "Tarihi bina altyapısı; besleme kapasitesi kaynaklı arızalar cihaz arızasıyla karışıyor.",
  },
  {
    slug: "fatih-empero-servisi",
    name: "Fatih",
    side: "Avrupa",
    intro: [
      "Fatih, esnaf lokantası, kebapçı, pideci ve otel mutfağı yoğunluğuyla İstanbul'un en köklü ticari mutfak bölgelerinden. Bölgedeki işletmelerin çoğu uzun yıllardır aynı yerde çalışıyor ve cihazları da o kadar eski.",
      "Yaşı ilerlemiş cihazlarda karar verme süreci farklı işliyor: tamir maliyeti mi, yenileme mi sorusu neredeyse her serviste gündeme geliyor. Bu bölgede cihazın kalan ömrünü dürüstçe değerlendirip söylemeye özen gösteriyoruz. Tamiri mantıklı olmayan bir cihaza parça takmak kısa vadede iş gibi görünse de kimsenin işine yaramıyor.",
    ],
    areas: ["Aksaray", "Laleli", "Çapa", "Fındıkzade", "Karagümrük", "Balat", "Sultanahmet", "Eminönü"],
    note: "Köklü esnaf işletmeleri; yaşlı cihazlarda tamir–yenileme karşılaştırması sık gündemde.",
  },
  {
    slug: "bakirkoy-empero-servisi",
    name: "Bakırköy",
    side: "Avrupa",
    intro: [
      "Bakırköy'de çarşı içi restoranlar, Ataköy hattındaki oteller ve AVM içindeki zincir şubeler bir arada. Zincir şubelerde cihaz parkı standart olduğu için arıza geçmişi tutmak ve parça öngörüsü yapmak mümkün oluyor.",
      "AVM içindeki mutfaklarda servis, yönetim izinleri ve yük asansörü saatleriyle sınırlı. Bu bölgede çalışırken randevu saatini AVM işletme kurallarına göre planlıyoruz; parçayı ve takımı tek seferde içeri almak, ikinci kez izin sürecine girmemek için önemli.",
    ],
    areas: ["Ataköy", "Yeşilköy", "Yeşilyurt", "Florya", "Şirinevler", "Zeytinlik", "Osmaniye", "Kartaltepe"],
    note: "AVM ve otel mutfakları; servis planı işletme izin saatlerine göre kuruluyor.",
  },
  {
    slug: "bahcelievler-empero-servisi",
    name: "Bahçelievler",
    side: "Avrupa",
    intro: [
      "Bahçelievler'de esnaf lokantaları, tatlıcılar ve pastaneler yoğun. Pastane mutfaklarında konveksiyonlu fırın ve buhar fonksiyonu ön planda; ürün kalitesi doğrudan fırının ısı dağılımına bağlı olduğu için arıza toleransı düşük.",
      "Buhar fonksiyonunu yoğun kullanan pastanelerde su tarafının düzenlenmesi, cihaz tamirinden daha kalıcı bir çözüm oluyor. Su yumuşatıcısı olmayan mutfaklarda buhar enjeksiyon memesi birkaç ayda bir tıkanıyor. Bu bölgede önce su tarafını konuşup sonra cihaza dokunmayı öneriyoruz.",
    ],
    areas: ["Şirinevler", "Yenibosna", "Soğanlı", "Kocasinan", "Siyavuşpaşa", "Cumhuriyet", "Zafer"],
    note: "Pastane ve tatlıcı yoğunluğu; fırın buhar hattı ve su sertliği öncelikli konu.",
  },
  {
    slug: "basaksehir-empero-servisi",
    name: "Başakşehir",
    side: "Avrupa",
    intro: [
      "Başakşehir, İkitelli OSB ve çevresindeki toplu yemek mutfaklarıyla ağır kapasiteli cihazların yoğunlaştığı bir bölge. Ayrıca yeni yerleşim alanlarındaki restoran ve kafe sayısı hızla artıyor.",
      "OSB mutfaklarında cihazlar genellikle tek vardiyada çok yüksek kapasiteyle çalışıyor ve arıza anında yedek çözüm bulunmuyor. Bu tip işletmelerle kritik yedek parçaların işletme deposunda bulundurulması üzerine çalışıyoruz; termokupl, dozaj hortumu, kapı switch'i gibi ucuz ama duruş yaratan parçaların stokta olması ciddi zaman kazandırıyor.",
    ],
    areas: ["İkitelli OSB", "Kayaşehir", "Başak", "Ziya Gökalp", "Bahçeşehir", "Güvercintepe"],
    note: "OSB toplu yemek mutfakları; kritik yedek parça stoğu duruş süresini kısaltıyor.",
  },
  {
    slug: "kucukcekmece-empero-servisi",
    name: "Küçükçekmece",
    side: "Avrupa",
    intro: [
      "Küçükçekmece'de esnaf lokantaları, düğün salonu mutfakları ve catering işletmeleri yoğun. Düğün salonu mutfakları sezonluk ve çok yüksek kapasiteli çalıştığı için kendine özgü bir bakım ihtiyacı oluşturuyor.",
      "Salon mutfaklarında cihazlar sezon dışında haftalarca beklediği için, sezon başında ilk çalıştırmada arıza çıkma ihtimali yüksek. Sezon açılışından önce yapılan devreye alma bakımı — gaz kaçak testi, soğutucu start kontrolü, valf yağlama — düğün gecesi ortasında yaşanacak bir duruşu baştan engelliyor.",
    ],
    areas: ["Sefaköy", "Halkalı", "Kanarya", "Cennet", "Atakent", "Söğütlüçeşme", "İnönü"],
    note: "Düğün salonu ve catering mutfakları; sezon öncesi devreye alma bakımı belirleyici.",
  },
  {
    slug: "esenyurt-empero-servisi",
    name: "Esenyurt",
    side: "Avrupa",
    intro: [
      "Esenyurt, hızla büyüyen nüfusuyla birlikte restoran, fırın ve toplu yemek mutfağı sayısının en çok arttığı ilçelerden. Yeni açılan işletmelerde cihaz kurulumu ve devreye alma hizmeti, tamir kadar talep görüyor.",
      "Bu bölgede sık gördüğümüz bir durum, cihazların ikinci el alınıp gaz tipine göre ayarlanmadan kurulması. İkinci el bir ocak ya da fritöz, önceki kullanıcının gaz tipine ayarlı gelebiliyor. Devreye alma sırasında enjektör kontrolü yapılmadığında cihaz baştan yanlış çalışıyor ve arıza kaçınılmaz oluyor.",
    ],
    areas: ["Doğan Araslı", "Fatih", "Yenikent", "Talatpaşa", "Merkez", "Balıkyolu", "Namık Kemal"],
    note: "Yeni ve ikinci el cihaz kurulumu yoğun; enjektör ve gaz tipi kontrolü kritik.",
  },
  {
    slug: "beylikduzu-empero-servisi",
    name: "Beylikdüzü",
    side: "Avrupa",
    intro: [
      "Beylikdüzü'nde yeni yerleşim alanlarındaki restoran ve kafe dokusu ile sanayi bölgesindeki personel yemekhaneleri servis alanımızı oluşturuyor. Cihaz parkı genel olarak yeni; bu da arıza profilini değiştiriyor.",
      "Yeni cihazlarda mekanik arıza az, buna karşılık kullanım hatası ve ayar kaynaklı problemler daha çok. Fritöz sıcaklığının yanlış ayarlanması, bulaşık makinesine yanlış kimyasal konması, soğutucu parametrelerinin fabrika ayarında bırakılması gibi konular. Bu tip çağrılarda parça değiştirmeden, kullanım eğitimiyle çözüm sağladığımız oluyor.",
    ],
    areas: ["Cumhuriyet", "Gürpınar", "Yakuplu", "Barış", "Adnan Kahveci", "Marmara", "Sahil"],
    note: "Yeni cihaz parkı; arızalar daha çok ayar ve kullanım kaynaklı.",
  },
  {
    slug: "zeytinburnu-empero-servisi",
    name: "Zeytinburnu",
    side: "Avrupa",
    intro: [
      "Zeytinburnu'nda tekstil atölyelerinin personel mutfakları, esnaf lokantaları ve otel mutfakları bir arada. Personel mutfaklarında cihazlar günün belirli saatlerinde yoğun, geri kalan zamanda boş çalışıyor.",
      "Boşta ya da düşük yükte uzun süre çalıştırılan cihazlar, özellikle fritözlerde beklenmedik bir yıpranma yaratıyor. Yağın gereksiz yere saatlerce sıcak tutulması hem yağ ömrünü kısaltıyor hem rezistans üzerinde karbon birikimini hızlandırıyor. Bu bölgede en çok verdiğimiz tavsiye, servis dışı saatlerde cihazın kapatılması.",
    ],
    areas: ["Merkezefendi", "Seyitnizam", "Telsiz", "Kazlıçeşme", "Veliefendi", "Nuripaşa", "Beştelsiz"],
    note: "Personel mutfakları; boşta çalıştırma kaynaklı fritöz yıpranması yaygın.",
  },
  {
    slug: "sariyer-empero-servisi",
    name: "Sarıyer",
    side: "Avrupa",
    intro: [
      "Sarıyer'de boğaz hattındaki balık restoranları, Maslak çevresindeki plaza mutfakları ve Kilyos tarafındaki sezonluk işletmeler farklı üç profil oluşturuyor. Balık restoranlarında ızgara ve fritöz, plaza mutfaklarında ise bulaşık makinesi ve konveksiyonlu fırın öne çıkıyor.",
      "Kilyos ve çevresindeki sezonluk işletmelerde kışın kapalı kalan cihazların bahar açılışında hazır olması gerekiyor. Uzun duruş sonrası özellikle soğutucularda kompresör start problemleri ve gazlı cihazlarda valf sertleşmesi görüyoruz. Sezon öncesi kontrol, açılış gününde yaşanacak sürprizleri büyük ölçüde engelliyor.",
    ],
    areas: ["Maslak", "Tarabya", "Yeniköy", "İstinye", "Emirgan", "Kilyos", "Bahçeköy", "Ayazağa"],
    note: "Sezonluk sahil işletmeleri ve plaza mutfakları; sezon öncesi kontrol talebi yüksek.",
  },
  {
    slug: "kagithane-empero-servisi",
    name: "Kağıthane",
    side: "Avrupa",
    intro: [
      "Kağıthane, son yıllarda artan ofis binalarıyla birlikte iş merkezi yemekhanelerinin yoğunlaştığı bir ilçeye dönüştü. Bunun yanında bölgedeki köklü esnaf lokantaları da servis verdiğimiz adresler arasında.",
      "Ofis yemekhanelerinde cihazlar hafta içi beş gün, günde birkaç saat yoğun çalışıyor; hafta sonu tamamen duruyor. Bu düzensiz kullanım özellikle bulaşık makinelerinde tortu ve kireç birikimini artırıyor, çünkü makine hafta sonu boyunca içindeki suyla bekliyor. Hafta sonu öncesi tank boşaltma alışkanlığı, bu bölgede en çok önerdiğimiz basit tedbir.",
    ],
    areas: ["Seyrantepe", "Çağlayan", "Gültepe", "Sanayi", "Hamidiye", "Nurtepe", "Merkez"],
    note: "Ofis yemekhaneleri; hafta sonu duruşu makine içi tortu birikimini artırıyor.",
  },
  {
    slug: "bagcilar-empero-servisi",
    name: "Bağcılar",
    side: "Avrupa",
    intro: [
      "Bağcılar'da sanayi sitelerindeki personel yemekhaneleri, fırınlar ve esnaf lokantaları yoğun. Fırınlarda cihazlar günün büyük bölümünde kesintisiz çalışıyor ve bu, kapı contası ile fan motorunda hızlı yıpranma anlamına geliyor.",
      "Sürekli çalışan fırınlarda en çok değiştirdiğimiz parça kapı contası. Contası yıpranmış bir fırın, ayarlandığı sıcaklığı tutmakta zorlandığı için rezistanslar sürekli devrede kalıyor; enerji tüketimi artıyor ve rezistans ömrü kısalıyor. Yılda bir conta kontrolü, bu bölgede en çok geri dönen bakım kalemi.",
    ],
    areas: ["Güneşli", "Kirazlı", "Mahmutbey", "Yıldıztepe", "Demirkapı", "Barbaros", "Fevzi Çakmak"],
    note: "Sürekli çalışan fırınlar; kapı contası ve fan motoru bakımı öne çıkıyor.",
  },
  {
    slug: "gaziosmanpasa-empero-servisi",
    name: "Gaziosmanpaşa",
    side: "Avrupa",
    intro: [
      "Gaziosmanpaşa'da esnaf lokantaları, kebapçılar ve düğün salonu mutfakları servis verdiğimiz ana gruplar. Kebap ve ızgara ağırlıklı mutfaklarda ortam yağ buharı bakımından çok yoğun ve bu, diğer cihazları da etkiliyor.",
      "Yağlı hava en çok soğutuculara zarar veriyor. Kondenser kanatçıklarına yapışan yağ tabakası tozu da tutunca, ısı atımı ciddi biçimde düşüyor ve kompresör sürekli çalışmak zorunda kalıyor. Bu profildeki mutfaklarda kondenser temizlik aralığını üç ay yerine iki aya çekmeyi öneriyoruz.",
    ],
    areas: ["Karayolları", "Yenidoğan", "Küçükköy", "Sarıgöl", "Merkez", "Karlıtepe", "Hürriyet"],
    note: "Izgara ve kebap mutfakları; yağlı ortam havası soğutucu kondenserlerini hızlı tıkıyor.",
  },
];

/**
 * ÖNCELİK: Avrupa Yakası.
 * Tüm listelerde (ana sayfa, footer, hizmet sayfası kenar sütunu, bölgeler
 * sayfası) önce Avrupa yakası ilçeleri görünür. Önceliği değiştirmek için
 * aşağıdaki sıralamayı ters çevirmeniz yeterli.
 */
export const districts: District[] = [
  ...tumIlceler.filter((d) => d.side === "Avrupa"),
  ...tumIlceler.filter((d) => d.side === "Anadolu"),
];

/** Öncelikli yaka — footer ve kısa listelerde bu kullanılıyor */
export const oncelikliYaka: District["side"] = "Avrupa";

export const avrupaIlceleri = districts.filter((d) => d.side === "Avrupa");
export const anadoluIlceleri = districts.filter((d) => d.side === "Anadolu");

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}

export const districtSlugs = districts.map((d) => d.slug);
