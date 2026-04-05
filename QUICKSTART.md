# Quick Start Guide - Consulics

Get your Consulics website up and running in 5 simple steps!

## Step 1: Install Dependencies (3-5 minutes)

```bash
cd /workspaces/Consulics
npm install
```

## Step 2: Set Up Firebase (15 minutes)

1. Go to [firebase.google.com](https://firebase.google.com)
2. Click "Create a project"
3. Enter project name: "Consulics"
4. Enable Google Analytics (optional)
5. Create project
6. Go to Project Settings (gear icon)
7. Copy these values:
   - API Key
   - Auth Domain
   - Project ID
   - Storage Bucket
   - Messaging Sender ID
   - App ID

## Step 3: Configure Environment Variables (2 minutes)

```bash
# Copy the example file
cp .env.example .env.local

# Open the file and paste your Firebase credentials
nano .env.local
```

Add these values from step 2:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

## Step 4: Start Development Server (Instant)

```bash
npm run dev
```

You'll see:
```
> consulics@1.0.0 dev
> next dev

▲ Next.js 14.0.0
- Local:        http://localhost:3000
```

## Step 5: Open in Browser

Visit **http://localhost:3000** 🎉

---

## What You Get

### Public Pages
- ✅ Homepage with hero section
- ✅ Service pages (Tax & Trucking)
- ✅ Pricing page
- ✅ About page
- ✅ Contact page
- ✅ Resources/Blog page
- ✅ Industries page

### Features
- ✅ Service request forms with file uploads
- ✅ User authentication (Register/Login)
- ✅ Client portal with invoices
- ✅ AI Chatbot (24/7 support)
- ✅ Responsive design
- ✅ Payment interface

### Demo Credentials
You can test the portal with any email/password:
- Email: `test@example.com`
- Password: `password123`

(In production, use real Firebase authentication)

---

## Customization Quick Tips

### Change Company Name
Edit: `app/components/Navbar.tsx`
```jsx
<Link href="/" className="text-2xl font-bold">
  Your Company Name  {/* Change this */}
</Link>
```

### Change Colors
Edit: `tailwind.config.js`
```js
primary: { 500: '#0ea5e9' }, // Change this color
accent: { 500: '#f97316' },  // And this one
```

### Update Contact Info
Edit: `app/(pages)/contact/page.tsx`
```jsx
<p className="text-gray-600 mb-4">(555) 123-4567</p>
{/* Change this phone number */}
```

### Add Your Logo
1. Place image in `public/` folder
2. Update `app/components/Navbar.tsx`:
```jsx
<Image src="/logo.png" alt="Consulics" width={40} height={40} />
```

---

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## Project Structure

```
consulics/
├── app/
│   ├── components/        # Reusable UI components
│   ├── (pages)/          # Page routes
│   ├── api/              # API routes (future)
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── lib/
│   └── firebase.ts       # Firebase setup
├── utils/
│   └── helpers.ts        # Utility functions
├── types/
│   └── index.ts          # TypeScript types
├── public/               # Static files
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process using port 3000
lsof -i :3000
kill -9 <PID>

# Or use a different port
npm run dev -- -p 3001
```

### Firebase Errors

1. Check `.env.local` has correct values
2. Enable Firestore in Firebase console
3. Enable Storage in Firebase console
4. Check security rules allow reads/writes

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Try building again
npm run build
```

---

## Next: Deploy Your Site

Once you're happy with local testing:

### Option A: Vercel (Easiest)
```bash
npm i -g vercel
vercel
# Follow prompts, add environment variables
```

### Option B: Deploy with Git
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploys on git push

### Option C: Other Platforms
See `DEPLOYMENT.md` for Netlify, AWS, Docker, etc.

---

## Get Help

- 📖 **Documentation**: See `README.md` and `DEPLOYMENT.md`
- 🤖 **Chatbot**: Use the on-site chatbot for testing
- 💻 **Code**: All commented and TypeScript typed
- 🔗 **Framework Docs**:
  - Next.js: https://nextjs.org
  - Firebase: https://firebase.google.com/docs
  - Tailwind: https://tailwindcss.com

---

## You're All Set! 🚀

Your Consulics website is ready. Start with:

```bash
npm run dev
```

Then open **http://localhost:3000**

Enjoy building! 💪
