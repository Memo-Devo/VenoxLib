const books = [
  { 
    id: "alqadimoon", 
    title: "القادمون", 
    author: "أحمد خالد مصطفى", 
    pdf: "books/alqadimoon.pdf", 
    cover: "books/القادمون-صورة.webp", 
    description: "رواية شهيرة" 
  },
  { 
    id: "amarita", 
    title: "أماريتا", 
    author: "عمرو عبد الحميد", 
    pdf: "books/amarita.pdf", 
    cover: "books/اماريتا-صورة.webp", 
    description: "رواية خيالية" 
  },
  { 
    id: "amwaj-akama", 
    title: "أمواج أكما", 
    author: "عمرو عبد الحميد", 
    pdf: "books/amwaj-akama.pdf", 
    cover: "books/امواج أكما-صورة.jpg", 
    description: "رواية خيالية" 
  },
  { 
    id: "arses", 
    title: "أرسس", 
    author: "احمد ال حمدان", 
    pdf: "books/arses.pdf", 
    cover: "books/ارسس-صورة.jpg", 
    description: "رواية مشهورة" 
  },
  { 
    id: "bidaya-nihaya", 
    title: "البداية والنهاية", 
    author: "ابن كثير", 
    pdf: "books/bidaya-nihaya.pdf", 
    cover: "books/البداية و النهاية-صورة.jpg", 
    description: "كتاب تاريخي ضخم" 
  },
  { 
    id: "daqat-shamo", 
    title: "دقات الشامو", 
    author: "عمرو عبد الحميد", 
    pdf: "books/daqat-shamo.pdf", 
    cover: "books/دقات الشامو-صورة.jpg", 
    description: "الجزء الثاني من قواعد جارتين" 
  },
  { 
    id: "earth-zykola", 
    title: "أرض زيكولا", 
    author: "عمرو عبد الحميد", 
    pdf: "books/earth-zykola.pdf", 
    cover: "books/ارض زيكولا-صورة.jpg", 
    description: "رواية عربية مشهورة" 
  },
  { 
    id: "futuh-sham", 
    title: "فتوح الشام", 
    author: "الواقدي", 
    pdf: "books/futuh-sham.pdf", 
    cover: "books/فتوح الشام-صورة.webp", 
    description: "كتاب تاريخي" 
  },
  { 
    id: "muqadima-ibn-khaldun", 
    title: "مقدمة ابن خلدون", 
    author: "ابن خلدون", 
    pdf: "books/muqadima-ibn-khaldun.pdf", 
    cover: "books/مقدمة ابن خلدون-صورة.jpg", 
    description: "أشهر كتاب في علم الاجتماع" 
  },
  { 
    id: "ottoman", 
    title: "تاريخ الدولة العلية العثمانية", 
    author: "محمد فريد بك", 
    pdf: "books/ottoman.pdf", 
    cover: "books/تاريخ الدولة العلية العثمانية-صورة.webp", 
    description: "مرجع تاريخي" 
  },
  { 
    id: "qawaed-jareteen", 
    title: "قواعد جارتين", 
    author: "عمرو عبد الحميد", 
    pdf: "books/qawaed-jareteen.pdf", 
    cover: "books/قواعد جارتين-صورة.jpg", 
    description: "رواية خيالية" 
  },
  { 
    id: "sahih-bukhari", 
    title: "صحيح البخاري", 
    author: "الإمام البخاري", 
    pdf: "books/sahih-bukhari.pdf", 
    cover: "books/صحيح البخاري-صورة.jpeg", 
    description: "أشهر كتب الحديث" 
  },
  { 
    id: "sahih-muslim", 
    title: "صحيح مسلم", 
    author: "الإمام مسلم", 
    pdf: "books/sahih-muslim.pdf", 
    cover: "books/صحيح مسلم-صورة.webp", 
    description: "أحد أهم كتب الحديث الشريف" 
  },
  { 
    id: "almoqtabs", 
    title: "المقتبس في أخبار بلد الأندلس", 
    author: "ابن حيان", 
    pdf: "books/almoqtabs.pdf", 
    cover: "books/المقتبس في أخبار بلد الأندلس-صورة.webp", 
    description: "كتاب تاريخي عن الأندلس" 
  },
  { 
    id: "tirmidhi-1", 
    title: "سنن الترمذي 1", 
    author: "الإمام الترمذي", 
    pdf: "books/tirmidhi-1.pdf", 
    cover: "books/سنن الترمذي-صورة.webp", 
    description: "كتاب حديث" 
  },
  { 
    id: "tirmidhi-2", 
    title: "سنن الترمذي 2", 
    author: "الإمام الترمذي", 
    pdf: "books/tirmidhi-2.pdf", 
    cover: "books/سنن الترمذي-صورة.webp", 
    description: "كتاب حديث" 
  },
  { 
    id: "tirmidhi-3", 
    title: "سنن الترمذي 3", 
    author: "الإمام الترمذي", 
    pdf: "books/tirmidhi-3.pdf", 
    cover: "books/سنن الترمذي-صورة.webp", 
    description: "كتاب حديث" 
  },
  { 
    id: "tirmidhi-4", 
    title: "سنن الترمذي 4", 
    author: "الإمام الترمذي", 
    pdf: "books/tirmidhi-4.pdf", 
    cover: "books/سنن الترمذي-صورة.webp", 
    description: "كتاب حديث" 
  },
  { 
    id: "tirmidhi-5", 
    title: "سنن الترمذي 5", 
    author: "الإمام الترمذي", 
    pdf: "books/tirmidhi-5.pdf", 
    cover: "books/سنن الترمذي-صورة.webp", 
    description: "كتاب حديث" 
  },
  { 
    id: "tirmidhi-7", 
    title: "سنن الترمذي 7", 
    author: "الإمام الترمذي", 
    pdf: "books/tirmidhi-7.pdf", 
    cover: "books/سنن الترمذي-صورة.webp", 
    description: "كتاب حديث" 
  },
  { 
    id: "tirmidhi-9", 
    title: "سنن الترمذي 9", 
    author: "الإمام الترمذي", 
    pdf: "books/tirmidhi-9.pdf", 
    cover: "books/سنن الترمذي-صورة.webp", 
    description: "كتاب حديث" 
  },
  { 
    id: "tirmidhi-11", 
    title: "سنن الترمذي 11", 
    author: "الإمام الترمذي", 
    pdf: "books/tirmidhi-11.pdf", 
    cover: "books/سنن الترمذي-صورة.webp", 
    description: "كتاب حديث" 
  },

  {
    id: "daa",
    title: "الداء والدواء",
    author: "ابن القيم",
    pdf: "books/الداء والدواء.pdf",
    cover: "books/الداء و الدواء.webp",
    description: "كتاب يتناول فيه ابن القيم الجوانب النفسية والروحية للداء والدواء، ويقدم نصائح قيمة للشفاء والعلاج."
  },

  {
    id: "halacot",
    title: "الهلكوت",
    author: "أحمد خالد مصطفى",
    pdf: "books/الهلكوت.pdf",
    cover: "books/الهلكوت-صورة.jpg",
    description: "رواية خيالية تأخذ القارئ في رحلة عبر عوالم مدهشة، حيث تتداخل الأحداث والشخصيات في إطار من الغموض والتشويق."
  },

  {
    id: "basera",
    title: "بصيرا",
    author: "أحمد بن ماجد",
    pdf: "books/بصيرا.pdf",
    cover: "books/بصيرا-صورة.jpg",
    description: "رواية تاريخية تسرد قصة ملهمة عن الشجاعة والإيمان، مستوحاة من حياة البحار العربي أحمد بن ماجد."
  },

  {
    id: "bet-khalti",
    title: "بيت خالتي",
    author: "أحمد خيري العمري",
    pdf: "books/بيت خالتي.pdf",
    cover: "books/بيت خالتي-صورة.jpg",
    description: "رواية تجمع بين الحكايات العائلية والتاريخية، حيث تستعرض حياة فتاة تعيش مع خالتها في بيت مليء بالأسرار والتحديات."
  },

  {
    id: "bithanos",
    title: "بيثانوس",
    author: "محمد سيد",
    pdf: "books/بيثانوس.pdf",
    cover: "books/بيثانوس-صورة.webp",
    description: "رواية خيالية تأخذ القارئ في مغامرة مثيرة عبر عوالم غامضة، حيث يكتشف البطل أسرارًا قد تغير مجرى حياته."
  },

  {
    id: "khawf",
    title: "خوف",
    author: "أسامة مسلم",
    pdf: "books/خوف.pdf",
    cover: "books/خوف-صورة.webp",
    description: "رواية نفسية تستكشف مشاعر الخوف والقلق، وتقدم رؤية عميقة حول كيفية التعامل مع هذه المشاعر في الحياة اليومية."
  },

  {
    id: "khawf2",
    title: "خوف 2",
    author: "أسامة مسلم",
    pdf: "books/خوف 2.pdf",
    cover: "books/خوف 2-صورة.png",
    description: "رواية نفسية تستكشف مشاعر الخوف والقلق، وتقدم رؤية عميقة حول كيفية التعامل مع هذه المشاعر في الحياة اليومية."
  },

  {
    id: "khawf3",
    title: "خوف 3",
    author: "أسامة مسلم",
    pdf: "books/خوف 3.pdf",
    cover: "books/خوف 3-صورة.png",
    description: "رواية نفسية تستكشف مشاعر الخوف والقلق، وتقدم رؤية عميقة حول كيفية التعامل مع هذه المشاعر في الحياة اليومية."
  },

  {
    id: "dar-emian",
    title: "دار العميان",
    author: "محمد الليثي",
    pdf: "books/دار العميان.pdf",
    cover: "books/دار العميان-صورة.webp",
    description: "رواية مشوقة تدور أحداثها في دار للأيتام، حيث يواجه الأطفال تحديات الحياة ويكتشفون معاني الصداقة والأمل."
  },

  {
    id: "rabeea-andalos",
    title: "ربيع الأندلس",
    author: "محمود ماهر",
    pdf: "books/ربيع الأندلس.pdf",
    cover: "books/ربيع الأندلس.jpg",
    description: "رواية تاريخية تأخذنا في رحلة عبر الأندلس، حيث تتشابك الأحداث والشخصيات في إطار من الإثارة والتشويق."
  },

  {
    id: "mashooq",
    title: "المعشوق",
    author: "أحمد  بيست",
    pdf: "books/المعشوق.pdf",
    cover: "books/المعشوق-صورة.webp",
    description: "رواية رومانسية تأخذنا في رحلة عبر مشاعر الحب والفقد، حيث يواجه البطل تحديات كبيرة في سبيل تحقيق سعادته."
  },

  {
    id: "oma-dobamin",
    title: "أمة الدوبامين",
    author: "انا ليمبيكس",  
    pdf: "books/أمة الدوبامين.pdf",
    cover: "books/أمة الدوبامين-صورة.jpg",
    description: "كتاب يتناول تأثير التكنولوجيا ووسائل التواصل الاجتماعي على حياتنا اليومية، وكيف أصبحت مصدرًا رئيسيًا للسعادة والإدمان في العصر الحديث."
  },

  {
    id: "serah-bin-tiameia",
    title: "سيرة ابن تيمية",
    author: "صائب عبدالحميد",
    pdf: "books/سيرة ابن تيمية.pdf",
    cover: "books/سيرة ابن تيمية-صورة.jpg",
    description: "كتاب يتناول حياة وأفكار العالم الإسلامي ابن تيمية، ويستعرض تأثيره الكبير على الفكر الإسلامي عبر العصور."
  },

  {
    id: "saheb-aldel-altaweel",
    title: "صاحب الظل الطويل",
    author: "جيني ويبستر",
    pdf: "books/صاحب الظل الطويل.pdf",
    cover: "books/صاحب الظل الطويل-صورة.webp",
    description: "رواية تاريخية تأخذنا في رحلة عبر الزمن، حيث تتشابك الأحداث والشخصيات في إطار من الإثارة والتشويق."
  },

  {
    id: "fan-reqat-aloqol",
    title: "فن قراءة العقول",
    author: "هينريك فيكسيوس",
    pdf: "books/فن قراءة العقول.pdf",
    cover: "books/فن القراءة العقول-صورة.jpg",
    description: "كتاب يقدم تقنيات وأساليب لفهم وتحليل سلوك الآخرين، وكيفية استخدام هذه المهارات في الحياة اليومية والمهنية."
  },

  {
    id: "fan-la-mobala",
    title: "فن اللامبالاة",
    author: "مارك مانسون",
    pdf: "books/فن اللامبالاة.pdf",
    cover: "books/فن اللامبالاة-صورة.png",
    description: "كتاب يتناول مفهوم اللامبالاة وكيفية تطبيقه في الحياة اليومية لتحقيق السعادة والنجاح."
  },

  {
    id: "ketab-alelm",
    title: "كتاب العلم",
    author: "بن عثيمين",
    pdf: "books/كتاب العلم.pdf",
    cover: "books/كتاب العلم-صورة.jpg",
    description: "كتاب يستعرض أهم المفاهيم العلمية بطريقة مبسطة، ويهدف إلى تعزيز الثقافة العلمية لدى القارئ."
  },

  {
    id: "mohat-belmarda",
    title: "محاط بالمرضى النفسيين",
    author: "توماس إريكسون",
    pdf: "books/محاط بالمرضى النفسيين.pdf",
    cover: "books/محاط بالمرضى النفسيين-صورة.jpg",
    description: "كتاب يتناول كيفية التعامل مع المرضى النفسيين وفهم احتياجاتهم، ويقدم نصائح عملية للمساعدة والدعم."
  }
];

function displayBooks(books) {
  const container = document.getElementById('books-container');
  container.innerHTML = '';
  books.forEach(book => {
      const card = document.createElement('div');
      card.classList.add('book-card');
      card.innerHTML = `
          <img src="${book.cover}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <a href="book.html?id=${book.id}" class="details-btn">تفاصيل</a>
      `;
      container.appendChild(card);
  });
}

// البحث
document.querySelector('.search-box').addEventListener('input', e => {
    const term = e.target.value.toLowerCase();
    const filtered = books.filter(book => 
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
    );
    displayBooks(filtered);
});

// عرض الكتب عند البداية
displayBooks(books);

// MODAL
const modal = document.getElementById('welcome-modal');
const acceptBtn = document.getElementById('accept-btn');

acceptBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
