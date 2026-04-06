# Consulics - Production-Ready SaaS Platform

A scalable, secure SaaS platform for tax and trucking compliance services. Built with modern architecture following Silicon Valley standards.

## 🏗️ Architecture Overview

### Frontend Layer
- **Next.js 14** with App Router
- **Server Components** for optimal performance
- **Client Components** only when necessary
- **TypeScript** for type safety

### Backend Layer
- **Next.js API Routes** for serverless functions
- **Firebase Admin SDK** for server-side operations
- **Service Layer Pattern** for business logic
- **Middleware** for authentication and security

### Data Layer
- **Firestore** with structured collections
- **Repository Pattern** for data access
- **Zod Validation** for input sanitization

### Security
- **Server-side Authentication** with Firebase Admin
- **Role-based Access Control** (User/Admin)
- **API Middleware Guards**
- **Input Validation** and sanitization

## 🚀 Features

### Public Features
- Modern SaaS design with brand colors
- Responsive contact forms with API integration
- Professional animations and micro-interactions
- SEO optimized with metadata

### Admin Dashboard
- Protected admin panel (`/admin`)
- Service management (CRUD operations)
- Project portfolio management
- Lead management with email notifications
- Real-time statistics dashboard

### API Endpoints
- `/api/auth/*` - Authentication (register, login, session)
- `/api/services` - Service management
- `/api/projects` - Project showcase
- `/api/contact` - Contact form with email notifications
- `/api/admin/*` - Protected admin operations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **Email**: Nodemailer
- **Validation**: Zod
- **UI Components**: Custom component library
- **State Management**: React hooks + Context

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbdulRazaque110/Consulics.git
   cd Consulics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:
   - Firebase project configuration
   - Firebase Admin SDK credentials
   - Email service credentials

4. **Firebase Setup**
   - Create a Firebase project
   - Enable Authentication, Firestore, and Storage
   - Generate Admin SDK service account key
   - Configure Firestore security rules

5. **Run development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Vercel + Firebase

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Environment Variables**
   Add all environment variables from `.env.local` to Vercel project settings.

3. **Firebase Configuration**
   - Deploy Firestore rules and indexes
   - Configure Firebase Storage rules
   - Set up Firebase Admin SDK

4. **Build & Deploy**
   ```bash
   npm run build
   npx vercel --prod
   ```

### Production Checklist

- [ ] Environment variables configured
- [ ] Firebase Admin SDK set up
- [ ] Firestore collections initialized
- [ ] Email service configured
- [ ] Domain SSL certificate
- [ ] SEO metadata updated
- [ ] Performance optimized
- [ ] Security audit completed

## 📁 Project Structure

```
app/
├── (pages)/           # Public pages
├── admin/            # Admin dashboard
├── api/              # API routes
├── components/
│   ├── ui/           # Design system components
│   └── admin/        # Admin components
├── globals.css       # Global styles
└── layout.tsx        # Root layout

lib/
├── firebase.ts       # Client Firebase config
├── firebase-admin.ts # Server Firebase config
├── services/         # Business logic services
├── validation/       # Input validation schemas
└── utils.ts          # Utility functions

types/
└── index.ts          # TypeScript definitions
```

## 🔒 Security Features

- Server-side session validation
- API rate limiting concepts
- Input sanitization with Zod
- Firebase security rules
- Protected admin routes
- Secure environment variable usage

## 🎨 Design System

**Brand Colors:**
- Primary Blue: #1E3A70
- Growth Green: #4CAF50
- Neutral Background: #F5F7FA
- Dark Text: #111827

**Components:**
- Button variants (primary, secondary, growth, outline)
- Card system with shadows
- Form inputs with validation
- Professional typography scale
- Consistent spacing system

## 📈 Performance Optimizations

- Server-side rendering
- Image optimization
- Code splitting
- Lazy loading
- API response caching
- Optimized bundle size

## 🧪 Development

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

## 🤝 Contributing

1. Follow the established architecture patterns
2. Use TypeScript for all new code
3. Implement proper error handling
4. Add validation for API inputs
5. Update documentation

## 📄 License

This project is proprietary software for Consulics LLC.

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