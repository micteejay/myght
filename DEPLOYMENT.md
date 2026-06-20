# Deployment Guide

## Overview

This repository uses cPanel Git Version Control for automated deployments to production. The deployment process is configured through the `.cpanel.yml` file and is triggered automatically when changes are pushed to the `main` branch.

## How Deployment Works

### Automatic Deployment (Push)
When you push changes to the `main` branch on GitHub:
1. cPanel's post-receive hook is triggered
2. The `.cpanel.yml` file is executed automatically
3. Your application is built and deployed to production

### Manual Deployment (Pull)
If auto-deployment doesn't occur:
1. Go to cPanel → Files → Git Version Control
2. Select your repository (myght)
3. Click "Update from Remote" to fetch latest changes
4. Click "Deploy HEAD Commit" to manually trigger deployment

## Deployment Process

The deployment script performs the following steps in order:

1. **Backup Current Production** - Creates a timestamped backup
2. **Install Dependencies** - Runs `npm install`
3. **Build Application** - Runs `npm run build`
4. **Clear Old Files** - Removes old production files
5. **Deploy New Files** - Copies built files to production
6. **Record Deployment** - Creates `deployment-status.txt` with timestamp
7. **Cleanup** - Removes backup (if deployment succeeded)

## Error Handling & Rollback

If any step fails (dependencies, build, etc.):
- The deployment automatically stops
- The production directory is restored from the backup
- No changes are applied

## Environment Setup

### Create .env.production

Before deployment, create a `.env.production` file in your local repository root:

```bash
cp .env.example .env.production
# Edit .env.production with your production values
```

**Important:** Never commit `.env.production` to GitHub. It's listed in `.gitignore`.

## Verifying Deployment

### Check Deployment Status
```bash
curl https://yourdomain.com/deployment-status.txt
```

This will show when the last deployment occurred.

### Check cPanel Logs
1. Go to cPanel → Metrics → Error Log
2. Look for deployment-related errors

## Troubleshooting

### Deployment Failed
1. Check cPanel error logs
2. Verify `.env.production` exists and is correct
3. Run `npm run build` locally to ensure no build errors
4. Check that all dependencies are properly listed in `package.json`

### Restore from Backup
If something went wrong in production:
1. Go to cPanel → File Manager
2. Navigate to `/home/dwwfoeqh/public_html/`
3. Look for `.backup-*` directories
4. Copy files from the backup to restore

### Manual Build Test
```bash
git clone https://github.com/micteejay/myght.git
cd myght
npm install
npm run build
# Check if build/ directory was created successfully
```

## Repository Structure

```
myght/
├── src/              # Source code
├── build/            # Built files (created by npm run build)
├── package.json      # Dependencies and build scripts
├── .cpanel.yml       # Deployment configuration
├── .env.example      # Environment variables template
├── .gitignore        # Files to ignore in git
└── DEPLOYMENT.md     # This file
```

## Best Practices

1. **Always test locally first**
   ```bash
   npm install
   npm run build
   ```

2. **Use descriptive commit messages**
   ```bash
   git commit -m "Fix: Update user authentication flow"
   ```

3. **Push to a branch, create PR, then merge to main**
   - This prevents accidental deployments
   - Allows for code review before deployment

4. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

5. **Monitor deployment status**
   - Check `deployment-status.txt` after each push
   - Review cPanel error logs regularly

## Support

For issues with:
- **Deployment**: Check cPanel Git Version Control interface
- **Build errors**: Review local `npm run build` output
- **cPanel setup**: Contact your hosting provider
- **GitHub**: Visit https://github.com/micteejay/myght/issues

## Additional Resources

- [cPanel Git Documentation](https://docs.cpanel.net/cpanel/version-control/git-version-control/)
- [npm Documentation](https://docs.npmjs.com/)
- [GitHub Documentation](https://docs.github.com/)