import React from "react";



 class searchInput extends React.Component{
constructor(props){
    super(props)
this.state={entry:""}

}
    onInputChange(event){
console.log(event.target.value)
    }
formSubmit= (event)=>{
        event.preventDefault()
    //   console.log(this.state.entry)
    this.props.onSubmitForm(this.state.entry)
    }
    render(){
        return(
            <div className="ui segment">
            <form onSubmit={this.formSubmit} className="ui form" >
            <div className="field">
            <div className="ui massive icon input">
            <input type="text" placeholder="search..........." onChange={(event)=>this.setState({entry:event.target.value})}
                value={this.state.entry}
            />
            <i className="search icon"></i>

            </div>

            </div>
        </form>
        </div>
            
        )
    }

}

export default searchInput;