import React from "react"
import PostQuotesLink from "./PostQuoteLink"
import "../styles/QuoteMachine.css"


const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "Life is what happens when you're busy making other plans."
]
  
const authors = [
    "Nelson Mandela", "Walt Disney", "Eleanor Roosevelt", "John Lennon"
]

const container_styles = {
    position: "relative",
    height:"100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

  
class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: ''
        };
        this.updateQuote = this.updateQuote.bind(this);
    }
    updateQuote() {
        let i = Math.floor(Math.random() * (3 - 0) + 0);
        this.setState(state => ({
            quote: quotes[i],
            author: authors[i]
        }));
    }

    componentDidMount(){
        this.updateQuote();
    }

    render() {
        let tweet_link = "https://twitter.com/intent/tweet="+this.state.quote;
        // let tweet_icone = "fab fa-twitter";
        
        return (
            <div style={container_styles}>
                <div id="quote-box">
                    <div className="text-container">
                        <p id="text">{this.state.quote}</p>
                    </div>
    
                    <div className="author-container">
                        <p id="author">{this.state.author}</p>
                    </div>
    
                    <div className="btn-container">
                        <PostQuotesLink link={tweet_link}  />
                        <button onClick={this.updateQuote} className="btn-action" id="new-quote">New Quote</button>
                    </div>
    
            </div>
            </div>
        );
    }
}
  
  export default QuoteMachine