import React from "react";
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = styled.a`
    padding:.5rem;
    border-radius:.2rem;
    border:none;
    background-color:lime;
    color:white;
    text-decoration:none;
    &:hover{
        text-decoration:none;
    }
`
class PostQuotesLink extends React.Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
      super(props);
    }
    render(){
      return(
        <Link title="Post this quote on twitter" id="tweet-quote" href={this.props.link} target='_blank'><FontAwesomeIcon icon="fa-brands fa-twitter" /></Link>
      )
    }
  }

  export default PostQuotesLink