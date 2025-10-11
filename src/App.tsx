import { useState, useEffect } from 'react';
import { Search, Mail, RefreshCcw, Settings, Newspaper, Calendar, Tag, TrendingUp, Users, FileText, ExternalLink, Filter, Download, Bell } from 'lucide-react';

// Prefix with underscore to indicate intentionally unused (for future use)

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

type Stats = {
  totalArticles: number;
  thisWeek: number;
  activeSubscribers: number;
  topTag: string;
};

export default function App() {
  // Removed unused state variables - add back when implementing tabs feature
  // const [activeTab, setActiveTab] = useState<'articles' | 'subscribers' | 'sources'>('articles');
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalArticles: 0,
    thisWeek: 0,
    activeSubscribers: 0,
    topTag: 'Contract'
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const availableTags = ['Contract', 'Compensation', 'Non-Compete', 'RVU', 'Call Pay', 'Signing Bonus', 'Benefits', 'Legal', 'Market Trends'];

  useEffect(() => {
    fetchArticles();
    generateMockStats();
  }, []);

  const generateMockStats = () => {
    setStats({
      totalArticles: 247,
      thisWeek: 18,
      activeSubscribers: 156,
      topTag: 'Compensation'
    });
  };

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const mockArticles: Article[] = [
        {
          id: 1,
          title: 'Hospital Systems Increase RVU-Based Compensation Models by 15%',
          url: 'https://example.com/rvu-compensation-2025',
          published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          summary: '• Major health systems are shifting toward RVU-based models\n• Average increase of 15% in RVU rates across specialties\n• Primary care physicians seeing largest gains\n• Expected to impact 2025-2026 contract negotiations',
          tags: 'RVU, Compensation, Market Trends',
          source_id: 1,
          paywalled: 0
        },
        {
          id: 2,
          title: 'FTC Issues New Guidelines on Non-Compete Clauses for Physicians',
          url: 'https://example.com/ftc-noncompete-update',
          published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          summary: '• FTC proposes ban on non-compete agreements nationwide\n• Significant implications for physician contracts\n• Healthcare industry seeks exemptions\n• Implementation timeline uncertain pending legal challenges',
          tags: 'Non-Compete, Legal, Contract',
          source_id: 2,
          paywalled: 0
        },
        {
          id: 3,
          title: 'Average Signing Bonuses Reach Record Highs in Competitive Markets',
          url: 'https://example.com/signing-bonus-trends',
          published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          summary: '• Signing bonuses up 22% year-over-year\n• Orthopedic surgeons commanding $100K+ bonuses\n• Rural areas offering additional incentives\n• Student loan repayment becoming standard benefit',
          tags: 'Signing Bonus, Compensation, Market Trends',
          source_id: 1,
          paywalled: 0
        },
        {
          id: 4,
          title: 'Call Pay Structures Evolve: Hybrid Models Gain Traction',
          url: 'https://example.com/call-pay-evolution',
          published_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
          summary: '• Hospitals experimenting with tiered call pay systems\n• Base rate plus per-encounter fees becoming popular\n• Emergency medicine leading innovation\n• Work-life balance considerations driving changes',
          tags: 'Call Pay, Compensation, Contract',
          source_id: 3,
          paywalled: 0
        },
        {
          id: 5,
          title: 'Benefits Packages Expand Beyond Traditional Health Insurance',
          url: 'https://example.com/physician-benefits-2025',
          published_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
          summary: '• Mental health support and wellness programs standard\n• Childcare assistance emerging as key benefit\n• Flexible scheduling options in demand\n• Financial planning services increasingly common',
          tags: 'Benefits, Compensation, Market Trends',
          source_id: 2,
          paywalled: 0
        }
      ];
      
      let filtered = mockArticles;
      if (query) {
        filtered = filtered.filter(a => 
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.summary.toLowerCase().includes(query.toLowerCase()) ||
          a.tags.toLowerCase().includes(query.toLowerCase())
        );
      }
      if (selectedTag) {
        filtered = filtered.filter(a => a.tags.includes(selectedTag));
      }
      
      setArticles(filtered);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
    setLoading(false);
  };

  const runIngest = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      showNotif('Ingestion complete! 12 new articles added.');
      await fetchArticles();
    } catch (error) {
      showNotif('Ingestion failed. Please try again.');
    }
    setLoading(false);
  };

  const sendReport = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      showNotif(`Weekly report sent to ${stats.activeSubscribers} subscribers!`);
    } catch (error) {
      showNotif('Failed to send report. Please try again.');
    }
    setLoading(false);
  };

  const showNotif = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
  };

  const handleSearch = () => {
    fetchArticles();
  };

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
    setTimeout(fetchArticles, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-[slideIn_0.3s_ease-out]">
          <div className="bg-white border border-green-200 shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3 max-w-md">
            <Bell className="text-green-600" size={20} />
            <p className="text-sm font-medium text-gray-800">{notificationMessage}</p>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2.5 rounded-xl shadow-lg">
                <Newspaper className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Physician Contracts Hub</h1>
                <p className="text-xs text-gray-500">AI-Powered Compensation Intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={runIngest}
                disabled={loading}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCcw size={16} className={loading ? 'animate-spin' : ''} />
                Ingest
              </button>
              <button 
                onClick={sendReport}
                disabled={loading}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail size={16} />
                Send Weekly
              </button>
              <button className="px-4 py-2.5 rounded-xl border-2 border-gray-300 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-all">
                <Settings size={16} />
                Settings
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <FileText className="text-blue-600" size={24} />
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Total</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">{stats.totalArticles}</div>
            <div className="text-sm text-gray-500 mt-1">Articles Tracked</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="text-green-600" size={24} />
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">+{stats.thisWeek}</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">{stats.thisWeek}</div>
            <div className="text-sm text-gray-500 mt-1">This Week</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <Users className="text-purple-600" size={24} />
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Active</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">{stats.activeSubscribers}</div>
            <div className="text-sm text-gray-500 mt-1">Subscribers</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <Tag className="text-orange-600" size={24} />
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Top</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.topTag}</div>
            <div className="text-sm text-gray-500 mt-1">Most Popular Tag</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border-2 border-gray-200 focus-within:border-blue-500 transition-colors">
              <Search size={20} className="text-gray-400" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSearch()}
                placeholder="Search by keywords: RVU, non-compete, call pay, compensation..."
                className="flex-1 bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Search
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <Filter size={16} className="text-gray-400" />
            <span className="text-sm font-medium text-gray-600 mr-2">Filter by tag:</span>
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagFilter(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTag && (
              <button
                onClick={() => { setSelectedTag(''); fetchArticles(); }}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-all"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {loading && (
            <div className="text-center py-12">
              <RefreshCcw className="animate-spin text-blue-600 mx-auto mb-4" size={32} />
              <p className="text-gray-500 font-medium">Loading articles...</p>
            </div>
          )}

          {!loading && articles.length === 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <Newspaper className="text-gray-300 mx-auto mb-4" size={48} />
              <p className="text-gray-500 font-medium">No articles found</p>
              <p className="text-sm text-gray-400 mt-2">Try adjusting your search or filters</p>
            </div>
          )}

          {!loading && articles.map(article => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-xl transition-all hover:scale-[1.01] group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-gray-400" />
                    <time className="text-xs font-medium text-gray-500">
                      {new Date(article.published_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </time>
                  </div>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group-hover:text-blue-600 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      {article.title}
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </a>

                  {article.tags && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.split(',').map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  {article.summary && (
                    <div className="prose prose-sm max-w-none">
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {article.summary}
                      </p>
                    </div>
                  )}
                </div>

                <button className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Download size={18} className="text-gray-400" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-8 mt-12 border-t border-gray-200">
        <div className="text-center text-sm text-gray-500">
          <p>Powered by Cloudflare Workers AI - Built with React + Tailwind CSS</p>
          <p className="mt-1">Tracking {stats.totalArticles} articles across physician compensation and contracts</p>
        </div>
      </footer>
    </div>
  );
}