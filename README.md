# SalesAI Mobile - Android App

## كيفية بناء الـ APK

### الطريقة 1: باستخدام GitHub (الأسهل)

1. أنشئ حساب على GitHub.com
2. أنشئ مستودع جديد باسم `SalesAI-Mobile`
3. ارفع جميع الملفات
4. اذهب إلى تبويب "Actions"
5. اضغط "Build Android APK"
6. انتظر البناء (5-10 دقائق)
7. حمّل الـ APK من تبويب "Artifacts"

### الطريقة 2: باستخدام VS Code

1. ثبّت Node.js من https://nodejs.org
2. افتح Terminal في مجلد المشروع
3. شغّل:

```bash
npm install
npx cap add android
npx cap sync android
npx cap open android
```

4. سيفتح Android Studio
5. اضغط Run أو Build APK

## المتطلبات

- Node.js 18 أو أعلى
- Android Studio (للبناء المحلي)
- حساب GitHub (للبناء عبر الإنترنت)

## الإعداد

1. عدّل الرابط في `capacitor.config.ts`
2. ضع رابط تطبيقك بدلاً من `http://192.168.10.50:5000`

## ملاحظات

- الـ APK يحتاج إنترنت للاتصال بالخادم
- يمكن تثبيته على أي جهاز Android
- لا يحتاج Google Play Store

## للمساعدة

rafifnisr2@gmail.com
