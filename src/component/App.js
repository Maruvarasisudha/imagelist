import React from "react";
import SearchInput from "./searchInput";
import ImageList from "./ImageList";
import axios from "axios";


 class App extends React.Component{
    constructor(props){

        super(props)
        this.state={image:[]}
        this.onSubmitForm=this.onSubmitForm.bind(this)
    }

    async onSubmitForm(entry){
     const response=  await axios.get(`https://pixabay.com/api/?key=42933669-66d3aa763dc7e71a05b8e316b&q=${entry}&image_type=photo&pretty=true`)
        console.log(response.data.hits)
        this.setState({image:response.data.hits})
    }

render(){
    return(<div className="ui container" style={{margin:"30px"}}><SearchInput  onSubmitForm={this.onSubmitForm}   />
    {/* <h3 style={{color:"green"}}>We have {this.state.image.length} Wonderfull images.</h3> */}
    <ImageList list={this.state.image}/>
    </div>)

}
};



export default App;