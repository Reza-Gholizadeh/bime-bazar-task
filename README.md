# BIME-TASK

یه پروژه‌ی Next.js با استفاده از React، TypeScript، Tailwind CSS و ابزارهای مدرن دیگه برای ساخت یه اپلیکیشن وب.

---

## نصب و راه‌اندازی

برای نصب و راه‌اندازی پروژه، مراحل زیر رو دنبال کنید:

1. مخزن پروژه رو کلون کنید:

```bash
       git clone https://github.com/username/bime-task.git
```

2. وارد دایرکتوری پروژه بشید:

```bash
   cd bime-task
```

3. وابستگی‌ها رو نصب کنید:

```bash
    yarn install
```

## استفاده

برای اجرای پروژه، از دستورات زیر استفاده کنید:

1. اجرای اپلیکیشن در حالت توسعه:

```bash
yarn dev
```

## ساختار پروژه

ساختار پیشنهادی پروژه به این صورته (بر اساس استانداردهای Next.js و فایل‌های موجود):

```bash
BIME-TASK/
├── .next/              # خروجی ساخت Next.js
├── app/                # صفحات و مسیریابی Next.js
├── assets/             # فایل‌های استاتیک مثل تصاویر و فونت‌ها
├── components/         # کامپوننت‌های React
│   ├── common/         # کامپوننت‌های عمومی
│   ├── module/         # کامپوننت‌های ماژولار
│   ├── ui/             # کامپوننت‌های رابط کاربری
│   └── index.ts        # نقطه ورود برای export کامپوننت‌ها
├── constant/           # مقادیر ثابت پروژه
├── hooks/              # custom hooks
├── node_modules/       # وابستگی‌های نصب‌شده
├── styles/             # فایل‌های استایل (CSS و غیره)
├── .gitignore          # فایل‌های نادیده‌گرفته‌شده در Git
├── next-env.d.ts       # فایل اعلان TypeScript برای Next.js
├── next.config.ts      # تنظیمات Next.js
├── package.json        # تنظیمات و وابستگی‌های پروژه
├── README.md           # مستندات پروژه
├── tsconfig.json       # تنظیمات TypeScript
└── yarn.lock           # فایل قفل Yarn
```

## ویژگی‌های پروژه

```bash
Next.js:
TypeScript
Tailwind
ESLint:
React Hook Form + Zod: برای مدیریت و اعتبارسنجی فرم‌ها.
Framer Motion: برای انیمیشن‌های زیبا.
Tanstack React Query: برای مدیریت داده و fetching.
Yarn: مدیریت پکیج‌ها.
```
