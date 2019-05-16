import React, { Component } from 'react';
import NewsItemListing from '../presentation/NewsITemListing';

class News extends Component {
    render() {
        return  ( <div> 
           <h2> News Items </h2>
           <ul>
           <li><NewsItemListing id="1" title="Beyonce performs for two hours" teaser= "As we all know coachella is huge"/></li>    
               <li><NewsItemListing id="2" title="Beyonce uses whole college band" teaser= "As we all know coachella is huge"/></li>
           </ul>
            
             </div> )
    }
}

export default News