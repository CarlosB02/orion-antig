import React, { useState, useEffect } from 'react';
import './News.css';
import { Plus } from 'lucide-react';

const News = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://eco.sapo.pt/eradar/feed');
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();

                // Take the first 3 items from the feed
                const recentNews = data.items.slice(0, 3).map(item => {
                    // Try to find image in enclosure, thumbnail, or regex match in description/content
                    let imageUrl = item.thumbnail || item.enclosure?.link;

                    if (!imageUrl && item.description) {
                        const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
                        if (imgMatch) {
                            imageUrl = imgMatch[1];
                        }
                    }

                    return {
                        title: item.title,
                        link: item.link,
                        image: imageUrl || null,
                        description: item.description
                            ? item.description.replace(/<[^>]+>/g, '').substring(0, 150) + '...'
                            : null
                    };
                });

                setNewsItems(recentNews);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError("Could not load latest news.");
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div className="news" style={{ color: 'white', textAlign: 'center' }}>Loading news...</div>;
    if (error) return <div className="news" style={{ color: 'white', textAlign: 'center' }}>{error}</div>;

    return (
        <section className="news" id="news">
            <h2 className="news-title">What's new</h2>
            <div className="news-grid">
                {newsItems.map((item, index) => (
                    <div className="news-item" key={index}>
                        {item.image && (
                            <div className="news-image-container">
                                <img src={item.image} alt={item.title} className="news-image" />
                            </div>
                        )}
                        <div className="news-content">
                            <h3>{item.title}</h3>
                        </div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Learn more <Plus size={14} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default News;
