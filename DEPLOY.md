# VPS Deployment Instructions

## Static Build (Recommended for 512MB server)

The portfolio is now configured for static export. Total size: **1.1MB**

### Option 1: Upload Static Files

1. **Upload the `out/` folder to your VPS:**
```bash
# From your local machine
scp -r out/ user@your-vps-ip:/var/www/html/
```

2. **Install nginx on your VPS:**
```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

3. **Configure nginx:**
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;  # Replace with your domain or IP
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

4. **Enable the site:**
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Option 2: GitHub Actions Auto-Deploy

Create `.github/workflows/deploy.yml` in your repo:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-size: '18'
          cache: 'npm'

      - name: Install and Build
        run: |
          npm ci --legacy-peer-deps
          npm run build

      - name: Deploy to VPS
        uses: appleboy/scp-action@v0.1.4
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          source: "out/*"
          target: "/var/www/html/"
          strip_components: 1
```

### Memory Usage
- **Static files with nginx: ~5-10MB RAM**
- **Much more efficient than Node.js server (~50MB+)**

### Troubleshooting

If you still want to use Node.js server:
```bash
# Increase swap first
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Clone and install with limited resources
git clone https://github.com/sduccao/portrait.git
cd portrait
npm install --legacy-peer-deps --maxsockets 1
npm run build
NODE_OPTIONS="--max-old-space-size=256" npm start
```

## Files Ready for Upload

The `out/` directory contains:
- `index.html` - Main page
- `_next/` - Static assets (JS, CSS)
- `favicon.ico` - Icon
- `404.html` - Error page

Total size: 1.1MB - Perfect for a 512MB VPS!