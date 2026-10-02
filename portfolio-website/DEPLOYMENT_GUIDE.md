# Portfolio Website Deployment Guide

This comprehensive guide covers deploying the Next.js portfolio website to GitHub and AWS Amplify.

## Table of Contents

1. [GitHub Deployment](#github-deployment)
2. [AWS Amplify Deployment](#aws-amplify-deployment)
3. [Troubleshooting Common Issues](#troubleshooting-common-issues)
4. [CI/CD Considerations](#cicd-considerations)
5. [Environment Management](#environment-management)

---

## GitHub Deployment

### Prerequisites

- Git installed on your machine
- GitHub account
- Command line/terminal access

### Step 1: Repository Preparation

The repository has already been initialized and committed. To verify the current status:

```bash
cd portfolio-website
git status
```

You should see that your local branch is ahead of origin/main by 2 commits.

### Step 2: Create GitHub Repository

1. **Log in to GitHub** at https://github.com
2. **Create a new repository**:
   - Click the "+" icon in the top-right corner
   - Select "New repository"
   - Repository name: `portfolio-website` (or your preferred name)
   - Description: "Modern Next.js portfolio website with interactive components"
   - Visibility: Public or Private (as preferred)
   - **Important**: Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"

### Step 3: Push to GitHub

If you haven't already set up the remote repository, you can either:

**Option A: Update existing remote** (if you want to use a different repository):
```bash
cd portfolio-website
git remote set-url origin https://github.com/YOUR_USERNAME/portfolio-website.git
```

**Option B: Use existing remote** (current setup):
```bash
cd portfolio-website
git push origin main
```

If you encounter authentication issues, you may need to:
- Use a personal access token (recommended)
- Configure SSH keys
- Use GitHub CLI: `gh auth login`

### Step 4: Verify Deployment

1. Visit your GitHub repository
2. Verify all files are present
3. Check that the latest commits are visible
4. Review the repository structure

### Git Commands Summary

```bash
# Check current status
git status

# View commit history
git log --oneline

# View remote repository URL
git remote -v

# Push changes to GitHub
git push origin main

# Pull changes from GitHub
git pull origin main

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main
```

---

## AWS Amplify Deployment

### Prerequisites

- AWS Account with appropriate permissions
- GitHub repository with the portfolio website code
- Basic understanding of AWS services

### Step 1: AWS Account Setup

1. **Create AWS Account** (if you don't have one):
   - Visit https://aws.amazon.com
   - Click "Create an AWS Account"
   - Follow the registration process
   - Choose the Free Tier option for development

2. **Set up IAM Permissions**:
   - Log in to AWS Console
   - Navigate to IAM service
   - Ensure you have AdministratorAccess or appropriate Amplify permissions
   - Required permissions: `amplify:*`, `cloudfront:*`, `s3:*`, `iam:*`

### Step 2: Access AWS Amplify

1. **Navigate to Amplify Console**:
   - In AWS Console, search for "Amplify"
   - Click on "AWS Amplify" service
   - You'll be redirected to the Amplify Console

2. **Choose Deployment Method**:
   - Click "New app" → "Host web app"
   - Select "Git" as the source provider
   - Choose "GitHub" (you'll need to authorize AWS to access your GitHub)

### Step 3: Connect GitHub Repository

1. **Authorize GitHub Access**:
   - Click "Authorize AWS Amplify"
   - Log in to GitHub if prompted
   - Grant AWS Amplify access to your repositories
   - Select the repository: `portfolio-website` (or your repository name)
   - Select the branch: `main`

2. **Configure Build Settings**:
   - Amplify will auto-detect Next.js settings
   - Review the auto-detected configuration
   - Modify if necessary (see Build Settings below)

### Step 4: Configure Build Settings

Amplify will auto-generate build settings for Next.js. If you need to customize, create `amplify.yml` in your repository root:

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

**Alternative: Amplify Console Build Settings**

In the Amplify Console, under "Build settings", you can configure:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
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

### Step 5: Configure Environment Variables

In the Amplify Console, navigate to "Environment variables" and add:

**Required Variables:**
- `NODE_ENV`: `production`
- `NEXT_PUBLIC_SITE_URL`: `https://your-app-url.amplifyapp.com`

**Optional Variables:**
- `NEXT_PUBLIC_GA_ID`: Your Google Analytics ID
- `NEXT_PUBLIC_EMAIL`: Your contact email
- Any other environment-specific variables

### Step 6: Advanced Configuration

**Output Directory:**
- Set to: `.next` (for Next.js SSR)
- Or: `out` (if using static export)

**Build Command:**
- `npm run build`

**Start Command:**
- `npm start` (for SSR)
- Not needed for static export

**Node Version:**
- Set to: `18.x` or `20.x` (compatible with Next.js 15)

### Step 7: Domain Configuration

**Option A: Use Amplify Default Domain**
1. Amplify provides a free domain: `https://your-app-name.amplifyapp.com`
2. This is automatically configured during deployment

**Option B: Custom Domain**
1. In Amplify Console, go to "Domain management"
2. Click "Add domain"
3. Enter your custom domain (e.g., `yourname.com`)
4. Choose "Add subdomain" or "Add root domain"
5. Configure DNS records:
   - Add CNAME record in your domain registrar
   - Point to the Amplify-provided DNS target
6. Wait for SSL certificate provisioning (automatic)

### Step 8: Deploy

1. **Review all settings** before deploying
2. Click "Save and deploy"
3. Amplify will:
   - Clone your repository
   - Install dependencies
   - Build the application
   - Deploy to CloudFront + S3
4. Monitor the deployment progress in the console

### Step 9: Post-Deployment Verification

1. **Check Deployment Status**:
   - Verify deployment shows "Success" status
   - Review build logs for any errors

2. **Test the Application**:
   - Visit the provided URL
   - Test all functionality (navigation, forms, animations)
   - Check mobile responsiveness
   - Verify SEO elements (meta tags, sitemap)

3. **Monitor Performance**:
   - Check CloudFront metrics
   - Review Amplify console analytics
   - Test page load times

### Step 10: Continuous Deployment

Amplify automatically sets up CI/CD:
- Every push to the connected branch triggers a new deployment
- Pull requests can be previewed
- Rollback to previous deployments is available

---

## Troubleshooting Common Issues

### GitHub Issues

**Issue: Authentication Failed**
```bash
# Solution 1: Use Personal Access Token
# 1. Generate token at GitHub Settings → Developer settings → Personal access tokens
# 2. Use token as password when prompted
git push origin main

# Solution 2: Use GitHub CLI
gh auth login
git push origin main
```

**Issue: Remote Repository Not Found**
```bash
# Verify remote URL
git remote -v

# Update remote URL
git remote set-url origin https://github.com/YOUR_USERNAME/portfolio-website.git
```

**Issue: Push Rejected**
```bash
# Pull latest changes first
git pull origin main --rebase
git push origin main
```

### AWS Amplify Issues

**Issue: Build Failed - Dependency Installation**

**Error**: `npm install` fails during build

**Solutions**:
1. Check `package.json` for correct dependencies
2. Ensure Node version compatibility (use 18.x or 20.x)
3. Add pre-build command to clear cache:
   ```yaml
   phases:
     preBuild:
       commands:
         - rm -rf node_modules
         - npm ci
   ```

**Issue: Build Failed - TypeScript Errors**

**Error**: TypeScript compilation errors

**Solutions**:
1. Run `npm run build` locally to reproduce
2. Check `tsconfig.json` configuration
3. Ensure all type definitions are installed
4. Add `--no-emit` flag if needed in build script

**Issue: Build Failed - Next.js Configuration**

**Error**: Next.js build configuration issues

**Solutions**:
1. Review `next.config.js` for Amplify compatibility
2. Ensure `output` mode is appropriate (SSR vs static)
3. Check for environment-specific configurations
4. Verify all required environment variables are set

**Issue: Deployment Success - Blank Page**

**Error**: Site loads but shows blank page

**Solutions**:
1. Check browser console for JavaScript errors
2. Verify `next.config.js` has correct asset prefix
3. Ensure static files are properly configured
4. Check CloudFront distribution settings

**Issue: Routing Issues**

**Error**: 404 errors on page refresh

**Solutions**:
1. Ensure Amplify is configured for SSR (not static export)
2. Check `next.config.js` trailing slash settings
3. Verify middleware configuration
4. Review Amplify rewrite rules in console

**Issue: Environment Variables Not Working**

**Error**: Environment variables not accessible in app

**Solutions**:
1. Ensure variables start with `NEXT_PUBLIC_` for client-side access
2. Restart deployment after adding variables
3. Check variable names for typos
4. Use `process.env.VARIABLE_NAME` in code

**Issue: Slow Build Times**

**Solutions**:
1. Enable Amplify caching
2. Use `npm ci` instead of `npm install`
3. Optimize dependencies
4. Consider using Amplify build specs for caching

**Issue: SSL Certificate Issues**

**Error**: Certificate not provisioning

**Solutions**:
1. Verify DNS records are correctly configured
2. Wait up to 24 hours for DNS propagation
3. Check domain registrar settings
4. Ensure CNAME record points to correct target

### Performance Issues

**Issue: Slow Page Load**

**Solutions**:
1. Enable CloudFront caching
2. Optimize images (use Next.js Image component)
3. Implement code splitting
4. Minimize JavaScript bundle size
5. Enable compression in CloudFront

**Issue: High AWS Costs**

**Solutions**:
1. Monitor CloudFront data transfer
2. Set up billing alerts
3. Use Lambda@Edge for optimization
4. Consider static export for simple sites
5. Review Amplify pricing tier

---

## CI/CD Considerations

### Automated Testing

**Add Testing Pipeline:**

1. **Unit Tests**:
   ```yaml
   # amplify.yml
   phases:
     preBuild:
       commands:
         - npm ci
         - npm test
   ```

2. **E2E Tests**:
   ```yaml
   test:
     commands:
       - npm run test:e2e
   ```

### Deployment Strategies

**1. Blue-Green Deployment**:
- Use Amplify's branch-based deployments
- Create `staging` and `production` branches
- Test on staging before merging to production

**2. Feature Flags**:
- Implement feature flags using environment variables
- Roll out features gradually
- Quick rollback capability

**3. Rollback Strategy**:
- Amplify maintains deployment history
- One-click rollback to previous versions
- Keep recent deployments for quick recovery

### Monitoring and Alerts

**1. Amplify Console Monitoring**:
- Build success/failure notifications
- Deployment status emails
- Real-time log viewing

**2. AWS CloudWatch**:
- Set up metrics for CloudFront
- Configure error rate alarms
- Monitor response times

**3. External Monitoring**:
- Use services like UptimeRobot or Pingdom
- Set up Slack/email alerts for downtime
- Monitor API endpoints

### Security Best Practices

**1. Environment Variables**:
- Never commit secrets to Git
- Use AWS Secrets Manager for sensitive data
- Rotate API keys regularly

**2. Branch Protection**:
- Enable branch protection rules on GitHub
- Require pull request reviews
- Require status checks to pass

**3. Access Control**:
- Use IAM roles with least privilege
- Enable MFA for AWS accounts
- Regularly audit access permissions

---

## Environment Management

### Development Environment

**Local Development Setup:**
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Access at http://localhost:3000
```

**Development Environment Variables:**
Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=
```

### Staging Environment

**Setup:**
1. Create `staging` branch in GitHub
2. Connect to Amplify as separate app
3. Configure staging-specific environment variables
4. Use staging database/API endpoints

**Staging Environment Variables:**
```env
NODE_ENV=staging
NEXT_PUBLIC_SITE_URL=https://staging.your-app.amplifyapp.com
NEXT_PUBLIC_API_URL=https://staging-api.yourdomain.com
```

### Production Environment

**Setup:**
1. Use `main` branch for production
2. Configure production environment variables
3. Enable all optimizations
4. Set up monitoring and alerts

**Production Environment Variables:**
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-app.amplifyapp.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
```

### Environment-Specific Configurations

**Next.js Configuration:**
```javascript
// next.config.js
module.exports = {
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Add environment-specific optimizations
  compress: process.env.NODE_ENV === 'production',
  swcMinify: true,
}
```

**Build Scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export"
  }
}
```

### Database/API Configuration

**For API Integration:**
1. Store API keys in AWS Secrets Manager
2. Access via Lambda functions (server-side)
3. Never expose API keys in client-side code
4. Use environment variables for non-sensitive configs

**Example Lambda Function:**
```javascript
// Amplify function to access secrets
const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();

exports.handler = async (event) => {
  const secret = await secretsManager.getSecretValue({
    SecretId: 'portfolio-api-keys'
  }).promise();
  // Use secret in your logic
};
```

---

## Additional Resources

### Documentation Links

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [GitHub Documentation](https://docs.github.com/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)

### Helpful Commands

```bash
# Local development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Git operations
git log --oneline        # View commit history
git branch -a            # View all branches
git checkout -b <branch> # Create new branch
git merge <branch>       # Merge branch

# AWS CLI (if installed)
aws amplify list-apps    # List Amplify apps
aws amplify start-job    # Start deployment
aws amplify list-jobs    # View deployment status
```

### Support and Community

- GitHub Issues: Report bugs and request features
- AWS Forums: Get help from AWS community
- Stack Overflow: Search for specific issues
- Next.js Discord: Join the community chat

---

## Deployment Checklist

Before deploying to production, ensure:

- [ ] All code is committed to GitHub
- [ ] Local build succeeds (`npm run build`)
- [ ] All tests pass
- [ ] Environment variables are configured
- [ ] .gitignore is properly set up
- [ ] SEO metadata is complete
- [ ] Analytics tracking is configured
- [ ] Error monitoring is set up
- [ ] SSL certificate is configured
- [ ] Custom domain is set up (if applicable)
- [ ] Backup strategy is in place
- [ ] Team members have necessary access
- [ ] Documentation is up to date

---

## Conclusion

This guide provides a comprehensive approach to deploying your Next.js portfolio website to both GitHub and AWS Amplify. Following these steps will ensure a smooth deployment process with proper monitoring, security, and maintenance practices in place.

For questions or issues, refer to the troubleshooting section or consult the official documentation links provided above.
