# Deployment Guide for Consulics

This guide provides step-by-step instructions for deploying the Consulics website to various platforms.

## Prerequisites

- Next.js application built and tested locally
- Environment variables configured (.env.local)
- Git repository initialized and pushed to GitHub (recommended)

## Option 1: Vercel (Recommended - Easiest)

Vercel is the official hosting platform for Next.js and provides the smoothest deployment experience.

### Steps:

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub

2. **Import Project**
   - Click "New Project"
   - Connect your GitHub repository
   - Select the Consulics repository

3. **Configure Settings**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Add Environment Variables**
   - Go to Settings > Environment Variables
   - Add all variables from `.env.example`:
     - `NEXT_PUBLIC_FIREBASE_API_KEY`
     - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
     - etc.

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will go live automatically

### Auto-Deployment
- Every push to `main` branch automatically deploys
- Pull requests get preview deployments
- Rollback to previous versions anytime

## Option 2: Netlify

Netlify offers a straightforward deployment process with good Next.js support.

### Steps:

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub and select repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 (or higher)

3. **Add Environment Variables**
   - Go to Settings > Build & Deploy > Environment
   - Add all required environment variables

4. **Deploy**
   - Netlify automatically builds and deploys
   - Your site will have a URL like `consulics-xxx.netlify.app`

5. **Custom Domain** (Optional)
   - Go to Domain management
   - Add your custom domain
   - Update DNS settings

## Option 3: AWS Amplify

AWS Amplify provides enterprise-level hosting with advanced features.

### Steps:

1. **Create Amplify App**
   - Go to AWS Amplify Console
   - Click "Create app"
   - Connect GitHub repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   - Add in App settings > Environment variables
   - Include all variables from `.env.example`

4. **Deploy**
   - Amplify builds and deploys
   - Auto-deploys on git push

## Option 4: Docker & Container Platforms

### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NEXT_PUBLIC_FIREBASE_API_KEY=${NEXT_PUBLIC_FIREBASE_API_KEY}
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}
# Add other environment variables

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Deploy to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create consulics-app

# Set environment variables
heroku config:set NEXT_PUBLIC_FIREBASE_API_KEY=xxx

# Deploy
git push heroku main
```

### Deploy to Google Cloud Run

```bash
# Set up Cloud SDK
gcloud init

# Build and push to Container Registry
gcloud builds submit --tag gcr.io/PROJECT_ID/consulics

# Deploy to Cloud Run
gcloud run deploy consulics \
  --image gcr.io/PROJECT_ID/consulics \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Option 5: Self-Hosted (VPS)

For full control, host on your own server.

### Prerequisites
- VPS with Ubuntu 20.04+ or similar
- Node.js 18+ and npm installed
- PM2 or similar process manager

### Steps:

1. **SSH to Server**
```bash
ssh user@your-server-ip
```

2. **Clone Repository**
```bash
git clone your-repo-url
cd Consulics
```

3. **Install Dependencies**
```bash
npm install
```

4. **Create .env.production**
```bash
cp .env.example .env.production
# Edit with production values
nano .env.production
```

5. **Build**
```bash
npm run build
```

6. **Install PM2**
```bash
npm install -g pm2
```

7. **Start Application**
```bash
pm2 start npm --name "consulics" -- start
pm2 startup
pm2 save
```

8. **Set up Nginx Reverse Proxy**
```nginx
server {
    listen 80;
    server_name consulics.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

9. **SSL Certificate (Let's Encrypt)**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d consulics.com
```

## Post-Deployment Checklist

- [ ] Environment variables configured correctly
- [ ] Firebase project created and linked
- [ ] Custom domain configured
- [ ] SSL certificate installed
- [ ] Database/Firestore initialized
- [ ] Analytics tracking added
- [ ] Email notifications configured
- [ ] Backup strategy in place
- [ ] Monitoring and logging set up
- [ ] Error tracking (Sentry) configured
- [ ] Performance monitoring enabled
- [ ] Security headers configured

## Environment Variables Needed

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Optional - Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# Optional - Email/SendGrid
SENDGRID_API_KEY=

# Optional - Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
```

## Monitoring & Maintenance

### Set up Error Tracking
- [Sentry.io](https://sentry.io) - Error tracking
- [LogRocket](https://logrocket.com) - Session replay
- [New Relic](https://newrelic.com) - APM

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up uptime monitoring
- Enable CDN for static assets

### Regular Maintenance
- Update dependencies monthly
- Monitor security vulnerabilities
- Back up database regularly
- Review error logs
- Optimize database queries
- Clear old logs and sessions

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall
- Check for missing environment variables

### Pages Not Loading
- Verify environment variables are set
- Check Firebase configuration
- Review browser console for errors
- Check server logs

### Slow Performance
- Check database query performance
- Enable CDN for static files
- Optimize images
- Review database indexes

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review error logs and stack traces
3. Test locally first
4. Open GitHub issue with details
