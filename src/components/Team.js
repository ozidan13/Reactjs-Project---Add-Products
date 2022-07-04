import React, { Component } from 'react';
import Products from './Products'; 
import memberInfo from './memberInfo' 

class Team extends Component{
    constructor(){
        super()
        this.state = {
            memberInfo : memberInfo
        }
        this.mapping = this.mapping.bind(this)
    }

    mapping(x){
        const members = x.map( member => <Products
            key={member.id}
            img={member.img}
            name={member.name}
            type={member.type}
            price={member.price}
            productinfo={member.productinfo}
            website={member.website}
        />)
        return members
    }
    
    render(){
        return(
            <div className="row">
                <button className='btn btn-block' onClick={this.clickEvent}>اضافة منتج اخر</button>
                {this.mapping(this.state.memberInfo)}
            </div>
        );
    }
}

export default Team;