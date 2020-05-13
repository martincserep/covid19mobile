import React from 'react';
import rssParser from 'react-native-rss-parser';

class RssList extends React.Component {
    constructor() {
        super();
        const allNews = [];
        fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
          allNews.push(rss.title);
      
        });
    }
    render(){
        return(
            {allNews}
        )
    }

}

export default RssList;