export interface TickerSentiment {
    // Define properties if you need them
  }
  
  export interface NewsItem {
    title: string;
    url: string;
    time_published: string;
    authors: string[];
    summary: string;
    banner_image: string;
    source: string;
    category_within_source: string;
    source_domain: string;
    topics: string[];
    overall_sentiment_score: number;
    overall_sentiment_label: string;
    ticker_sentiment: TickerSentiment[];
  }
  
  export interface NewsApiResponse {
    items: string;
    sentiment_score_definition: string;
    relevance_score_definition: string;
    feed: NewsItem[];
  }
  