import React, { Component } from 'react';
import Products from './Products'; 
import memberInfo from './memberInfo' 

class Team extends Component{
    constructor(){
        super()
        this.state = {
            memberInfo : memberInfo,
            members : [],
            counter : 0
        }
        this.clickEvent = this.clickEvent.bind(this)
    }

    clickEvent(){
        if(this.state.counter < this.state.memberInfo.length){
            this.state.members.push(this.state.memberInfo[this.state.counter]);
                this.setState(function(preState){
                    return {counter : preState.counter + 1}
                });
                console.log(this.state.members);
                this.newMembers = this.state.members.map(member => {
                return <Products 
                            key={member.id}
                            img={member.img}
                            name={member.name}
                            type={member.type}
                            price={member.price}
                            productinfo={member.productinfo}
                            website={member.website} />
                })
        }
    }

    
    render(){
        return(
            <div className="row">
                <button className='btn btn-lg btn-block' onClick={this.clickEvent}>اضافة منتج</button>
                {this.newMembers} 
            </div>
        );
    }
}

export default Team;