function NewsItem({item}) {
    const websiteUrl = item.url
    const website = websiteUrl.split('https://').pop().split('/')[0]


    return (
        <a href={item.url} target="_blank" className="article">
            
            <div className="article__title-container">
            
                <div className="article-title">
                    <h2>{item.title}</h2>
                </div>
                <div className="article-description">
                    <p>{item.description}</p>
                </div>

            </div>

                <div className="article-image">
                    <img src={item.image} alt={item.title} />
                </div>
            
            <div className="article-div"></div>

                <div className="article-source">
                    <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,
                    URL&url=http://${website}&size=16`} alt={item.source.id} />
                    <span>{item.source.name}</span>
                </div>

            <div className="heading-line1"></div>
        </a>
    )
}

export default NewsItem
