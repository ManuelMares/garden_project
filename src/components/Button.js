import React, {Component} from 'react';
import { Link } from "react-router-dom";

export class Button extends Component{
    render(){
        return(  
            <Link to={this.props.route} key={this.props.keyA} className='bg-lime-900 hover:bg-lime-600 text-white flex-auto grow-0 rounded lg font-bold px-8 py-2 '>
                {this.props.message}
            </Link>
        )
    }
}