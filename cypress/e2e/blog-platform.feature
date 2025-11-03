# language: tr
Özellik: Blog Platformu - Tam Döngü İşlemi

  Senaryo: Kullanıcı kayıt olur, kategori seçer, yazı oluşturur, yorum yapar ve beğenir
    # Model 1: User - Kullanıcı kaydı
    Diyelim ki kayıt sayfasındayım
    Ve "İsim" alanına "Ahmet Yılmaz" yazarım
    Ve "Email" alanına "ahmet@example.com" yazarım
    Ve kayıt butonuna tıklarım
    O zaman "Kayıt başarılı" mesajı görmeliyim
    
    # Model 2: Category - Kategori görüntüleme
    Ve ana sayfaya giderim
    O zaman kategori listesini görmeliyim
    Ve "Teknoloji" kategorisi görünmelidir
    
    # Model 3: Post - Yazı oluşturma
    Ve yeni yazı butonuna tıklarım
    Ve yazı başlığı alanına "Test Driven Development Nedir?" yazarım
    Ve yazı içeriği alanına "TDD, yazılım geliştirmede önemli bir yaklaşımdır" yazarım
    Ve kategori dropdown'ından "Teknoloji" seçerim
    Ve yayınla butonuna tıklarım
    O zaman "Yazı başarıyla yayınlandı" mesajı görmeliyim
    Ve yazı listesinde "Test Driven Development Nedir?" görünmelidir
    
    # Post detay sayfasına git
    Ve "Test Driven Development Nedir?" yazısına tıklarım
    O zaman yazı detay sayfasını görmeliyim
    
    # Model 4: Comment - Yorum yapma
    Ve yorum alanına "Çok faydalı bir yazı, teşekkürler!" yazarım
    Ve yorum yap butonuna tıklarım
    O zaman "Yorum eklendi" mesajı görmeliyim
    Ve yorumlar bölümünde "Çok faydalı bir yazı, teşekkürler!" görünmelidir
    
    # Model 5: Like - Beğeni
    Ve beğen butonuna tıklarım
    O zaman beğeni sayısı "1" olmalıdır
    Ve "Beğen" butonu "Beğenildi" olarak değişmelidir