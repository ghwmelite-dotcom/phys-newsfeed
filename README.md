# Physician Contracts Hub

> AI-Powered Physician Contracts & Compensation Intelligence Platform

A modern, intelligent dashboard for tracking and analyzing physician contract trends, compensation data, and market insights. Built with React, TypeScript, and Tailwind CSS, this platform provides healthcare professionals with real-time intelligence on contract negotiations, compensation models, and industry trends.

![Physician Contracts Hub](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-blue)

## 🚀 Features

### 📊 **Dashboard Analytics**
- Real-time article tracking and statistics
- Weekly activity metrics
- Subscriber engagement monitoring
- Trending topic identification

### 🔍 **Intelligent Search & Filtering**
- Advanced keyword search across articles
- Tag-based filtering system
- Real-time search results
- Smart content categorization

### 📰 **Content Management**
- Automated article ingestion
- AI-powered content summarization
- Source tracking and verification
- Paywall detection and handling

### 📧 **Communication Tools**
- Weekly report generation
- Automated subscriber notifications
- Email campaign management
- Custom report scheduling

### 🏷️ **Smart Tagging System**
- Contract-related tags
- Compensation model categories
- Legal and regulatory tags
- Market trend classifications

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0 + TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.4.0
- **Build Tool**: Vite 5.0.8
- **Icons**: Lucide React
- **Deployment**: Cloudflare Workers AI

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/ghwmelite-dotcom/phys-newsfeed.git
cd phys-newsfeed

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Getting Started

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Usage

### Dashboard Overview
The main dashboard provides:
- **Total Articles**: Complete count of tracked articles
- **Weekly Activity**: New articles added this week
- **Active Subscribers**: Current subscriber count
- **Top Tags**: Most popular content categories

### Search & Discovery
1. **Keyword Search**: Enter terms like "RVU", "non-compete", "call pay"
2. **Tag Filtering**: Click on predefined tags to filter content
3. **Real-time Results**: Instant search results with highlighting

### Content Management
- **Ingest**: Manually trigger article ingestion
- **Send Weekly**: Generate and send weekly reports
- **Settings**: Configure platform preferences

## 🏗️ Project Structure

```
phys-newsfeed/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles
│   └── vite-env.d.ts    # Vite type definitions
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`from-blue-600 to-indigo-600`)
- **Success**: Green (`text-green-600`)
- **Warning**: Orange (`text-orange-600`)
- **Info**: Purple (`text-purple-600`)

### Typography
- **Headings**: Bold, gray-900
- **Body**: Regular, gray-700
- **Captions**: Medium, gray-500

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Gradient backgrounds, hover effects
- **Forms**: Clean inputs with focus states

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url_here
VITE_CLOUDFLARE_WORKER_URL=your_worker_url_here
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color schemes
- Extended spacing utilities
- Custom animations
- Responsive breakpoints

## 📊 Data Models

### Article Type
```typescript
type Article = {
  id: number;
  title: string;
  url: string;
  published_at: string;
  summary: string;
  tags: string;
  source_id: number;
  paywalled: number;
};
```

### Statistics Type
```typescript
type Stats = {
  totalArticles: number;
  thisWeek: number;
  activeSubscribers: number;
  topTag: string;
};
```

## 🚀 Deployment

### Cloudflare Workers
The platform is designed to work with Cloudflare Workers AI for:
- Article ingestion
- Content processing
- AI-powered summarization
- Email automation

### Build Process
```bash
# Build for production
npm run build

# Deploy to Cloudflare Workers
wrangler deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Contact: [ghwmelite-dotcom](https://github.com/ghwmelite-dotcom)

## 🔮 Roadmap

- [ ] Real-time API integration
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Machine learning insights
- [ ] Multi-language support
- [ ] Advanced reporting features

## 📈 Performance

- **Build Size**: Optimized with Vite
- **Runtime**: React 18 with concurrent features
- **Styling**: Tailwind CSS with purging
- **Icons**: Tree-shaken Lucide React icons

---

**Built with ❤️ for the healthcare community**

*Empowering physicians with intelligent contract and compensation insights*
