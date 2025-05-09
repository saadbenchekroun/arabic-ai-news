# مدونة أخبار الذكاء الاصطناعي (Arabic AI News Blog)

![image](https://github.com/user-attachments/assets/6a6e101d-469d-4412-a44c-a2077d9dab4a)


## 📝 نبذة عن المشروع (Project Overview)

مدونة أخبار الذكاء الاصطناعي هي منصة إخبارية متخصصة باللغة العربية تهدف إلى تقديم أحدث الأخبار والتطورات في مجال الذكاء الاصطناعي. المشروع مصمم بواجهة سهلة الاستخدام تدعم اللغة العربية بشكل كامل (RTL) وتوفر تجربة مستخدم غنية ومتكاملة.

Arabic AI News Blog is a specialized Arabic-language news platform that aims to provide the latest news and developments in the field of artificial intelligence. The project is designed with an easy-to-use interface that fully supports Arabic language (RTL) and provides a rich and integrated user experience.
![image](https://github.com/user-attachments/assets/b5a0de69-18fd-48e3-863c-76af3c22693d)


## ✨ المميزات (Features)

- **تصميم RTL كامل**: واجهة مستخدم مصممة خصيصًا للغة العربية
- **تصميم متجاوب**: يعمل على جميع أحجام الشاشات (الجوال، اللوحي، سطح المكتب)
- **صفحات متعددة**: الرئيسية، المدونة، من نحن، استوديو إبداعي، خدمات
- **مقالات تفصيلية**: صفحات مقالات غنية بالمحتوى مع تنسيق متقدم
- **تصفية حسب الفئة**: تصفية المقالات حسب الفئات المختلفة
- **مقالات ذات صلة**: عرض المقالات المرتبطة بالمحتوى الحالي
- **مصادر تعليمية**: روابط لمصادر تعليمية مفيدة مصنفة حسب النوع
- **جدول المحتويات**: تنقل سهل داخل المقالات الطويلة
- **خطوط عربية محلية**: استخدام خط Tajawal العربي المحسن للقراءة

## 🛠️ التقنيات المستخدمة (Technologies Used)

- **Next.js 14**: إطار عمل React مع توجيه الصفحات وتحميل البيانات
- **React 18**: مكتبة واجهة المستخدم
- **TypeScript**: لغة برمجة آمنة النوع
- **Tailwind CSS**: إطار عمل CSS للتصميم السريع
- **shadcn/ui**: مكونات واجهة مستخدم قابلة للتخصيص
- **Lucide Icons**: مكتبة أيقونات متجاوبة وقابلة للتخصيص
- **خطوط Tajawal**: خطوط عربية محسنة للقراءة عبر الويب

## 🚀 التثبيت والإعداد (Installation & Setup)

### المتطلبات الأساسية (Prerequisites)

- Node.js (v18 أو أحدث)
- pnpm

### خطوات التثبيت (Installation Steps)

1. استنساخ المستودع (Clone the repository)

```bash
git clone https://github.com/saadbenchekroun/arabic-ai-news.git
cd arabic-ai-news-blog
```

2. تثبيت التبعيات (Install dependencies)

```bash
pnpm install
```

3. تشغيل خادم التطوير (Run the development server)

```bash
pnpm dev
```

4. افتح [http://localhost:3000](http://localhost:3000) في متصفحك لمشاهدة الموقع

## 📁 هيكل المشروع (Project Structure)

```bash
arabic-ai-news-blog/
├── app/                      # مجلد التطبيق الرئيسي (Next.js App Router)
│   ├── about/                # صفحة "من نحن"
│   ├── blog/                 # صفحة المدونة والمقالات
│   │   └── [slug]/           # صفحة المقال الديناميكية
│   ├── services/             # صفحة الخدمات
│   ├── studio/              # صفحة الاستوديو الإبداعي
│   ├── globals.css          # أنماط CSS العامة
│   └── layout.tsx           # تخطيط التطبيق الرئيسي
├── components/              # مكونات قابلة لإعادة الاستخدام
│   ├── ui/                  # مكونات واجهة المستخدم الأساسية (shadcn/ui)
│   ├── article-card.tsx     # مكون بطاقة المقال
│   ├── category-filter.tsx  # مكون تصفية الفئات
│   ├── featured-post.tsx    # مكون المقال المميز
│   ├── grid-posts.tsx       # مكون شبكة المقالات
│   ├── header.tsx           # مكون الرأس
│   ├── hero-section.tsx     # مكون قسم البطل
│   ├── learning-resources.tsx # مكون مصادر التعلم
│   ├── mobile-sidebar-menu.tsx # قائمة جانبية للجوال
│   ├── page-header.tsx      # مكون رأس الصفحة
│   ├── related-articles.tsx # مكون المقالات ذات الصلة
│   └── table-of-contents.tsx # مكون جدول المحتويات
├── public/                  # الملفات العامة
│   └── fonts/               # ملفات الخطوط
├── styles/                  # أنماط إضافية
├── next.config.js           # إعدادات Next.js
├── package.json             # تبعيات المشروع
├── tailwind.config.ts       # إعدادات Tailwind CSS
└── tsconfig.json            # إعدادات TypeScript
```

## 📄 الصفحات الرئيسية (Main Pages)

- **الرئيسية (/)**: تحويل إلى صفحة المدونة
- **المدونة (/blog)**: عرض جميع المقالات مع تصفية حسب الفئة
- **صفحة المقال (/blog/[slug])**: عرض مقال كامل مع مقالات ذات صلة ومصادر تعليمية
- **من نحن (/about)**: معلومات عن الفريق والمشروع
- **استوديو إبداعي (/studio)**: خدمات الاستوديو الإبداعي
- **خدمات (/services)**: الخدمات المقدمة مع التسعير

## 🎨 التخصيص (Customization)

### تغيير الألوان (Changing Colors)

يمكن تعديل نظام الألوان في ملف `tailwind.config.ts`:

```bash
// tailwind.config.ts
const config = {
  // ...
  theme: {
    extend: {
      colors: {
        // تعديل الألوان هنا
      }
    }
  }
}
```

### إضافة خطوط جديدة (Adding New Fonts)

1. أضف ملفات الخط إلى مجلد `public/fonts/`
2. عدّل ملف `globals.css` لإضافة تعريفات الخط الجديدة:

```bash
@font-face {
  font-family: "YourFont";
  src: url("/fonts/YourFont-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
```

## 🤝 المساهمة (Contributing)

نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

1. افتح issue لمناقشة التغيير الذي ترغب في إجرائه
2. قم بعمل fork للمستودع
3. أنشئ فرعًا جديدًا (`git checkout -b feature/amazing-feature`)
4. قم بإجراء تغييراتك وارتكابها (`git commit -m 'Add amazing feature'`)
5. ادفع إلى الفرع (`git push origin feature/amazing-feature`)
6. افتح طلب سحب (Pull Request)


## 📞 الاتصال (Contact)

لأي استفسارات أو اقتراحات، يرجى التواصل عبر البريد الإلكتروني: saadbenchekrun@gmail.com


---

صنع بـ ❤️ للمجتمع العربي | Made with ❤️ for the Arabic community
