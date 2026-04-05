# Consulics - Tax & Trucking Services Platform

A modern, full-featured web platform for tax filing and trucking compliance services. Built with Next.js, React, TypeScript, and Firebase.

## 📋 Features

### Public Pages
- **Homepage** - Hero section with service overview and call-to-action
- **Tax Services** - Individual, small business, self-employed, and additional services
- **Trucking Services** - Company setup, IFTA, IRP, and compliance services
- **Industries** - Specialized solutions for salaried employees, drivers, and businesses
- **Pricing** - Transparent pricing plans with feature comparisons
- **Resources/Blog** - Guides, articles, and downloadable resources
- **About** - Company mission, team, and why choose us
- **Contact** - Contact form and consultation scheduling

### Service Management
- **Start Service Forms** - Multi-step forms for service requests
  - File My Taxes
  - Start Trucking Company
  - File IFTA
  - Register IRP
- **Document Upload** - Secure file upload with category organization
- **Form Validation** - Real-time validation and error feedback

### Client Portal
- **User Authentication** - Register and login
- **Account Management** - View and edit profile information
- **Invoice Management** - View invoices, payment status tracking
- **Payment Processing** - Credit/debit card payments
- **Dashboard** - Quick stats and overview

### Additional Features
- **AI Chatbot** - 24/7 customer support with quick answers
- **Responsive Design** - Mobile-friendly on all devices
- **SEO Optimized** - Optimized for search engines
- **Smooth Animations** - Framer Motion animations throughout
- **Modern UI** - Tailwind CSS styling

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Forms**: React Hook Form
- **UI Components**: React Icons
- **Notifications**: React Hot Toast
- **State Management**: Zustand

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Firebase account and project

### Setup Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd Consulics
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure Firebase**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Copy your Firebase config from project settings
   - Create `.env.local` file from `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   - Fill in your Firebase credentials in `.env.local`

4. **Start development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
consulics/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── FileUpload.tsx
│   │   └── Chatbot.tsx
│   ├── (pages)/             # Page routes
│   │   ├── contact/
│   │   ├── login/
│   │   ├── register/
│   │   ├── portal/
│   │   ├── pricing/
│   │   ├── about/
│   │   ├── resources/
│   │   ├── industries/
│   │   └── start-service/
│   ├── api/                 # API routes (future)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── firebase.ts          # Firebase configuration
├── utils/                   # Utility functions
├── types/                   # TypeScript types
├── public/                  # Static assets
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel project settings
3. Deploy (automatic on git push to main)

### Deploy to Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Similar build configuration as Netlify
- **Docker**: See `Dockerfile` (if included)

## 🔐 Environment Variables

See `.env.example` for required variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## 📱 Pages Overview

### Public Pages
- `/` - Homepage
- `/contact` - Contact and consultation
- `/pricing` - Pricing plans
- `/about` - About company
- `/resources` - Blog and guides
- `/industries` - Industries served

### Service Pages
- `/start-service` - Multi-step service request forms
  - File My Taxes
  - Start Trucking Company
  - IFTA Filing
  - IRP Registration

### Authentication
- `/register` - Create new account
- `/login` - Sign in to account

### Client Portal
- `/portal` - Dashboard with invoices and payments (protected)

## 🔄 Future Enhancements

- [ ] Email notifications
- [ ] SMS reminders
- [ ] Payment gateway integration (Stripe)
- [ ] Document storage and retrieval
- [ ] Automated email responses
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Mobile app
- [ ] Real-time notifications
- [ ] AI-powered tax recommendations

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 📞 Support

- Email: support@consulics.com
- Phone: (555) 123-4567
- Website: https://consulics.com

## 🙏 Acknowledgments

- Designed with modern UX/UI best practices
- Built with production-ready security standards
- Optimized for performance and accessibility