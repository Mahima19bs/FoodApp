import {React,Component} from 'react';
class About extends Component{
   constructor(props){
      super(props);
      console.log("constructor call",this.props.name);
      this.state={
         count:0
      }
      console.log("state call",this.props.name,this.state.count);
   }
   componentDidMount(){
      console.log("component did mount",this.props.name);
   }
   componentWillUnmount(){
      console.log("component will unmount",this.props.name);
   }
   componentDidUpdate(){
      console.log("compnent did update",this.state.count,this.props.name);
   }
  render(){
   const {emp}=this.props;
   console.log("emp",emp);
   const {name}=this.props;
   console.log(name);
   return(
      <div>
         <h3>About Us</h3>
         <h6 className='text-decorator'>All the details of employees listed below:</h6>
         <div className='employee-details'>
            {
             emp.map((e)=>(
                  <div className='employee-contacts'>
                  <p>{e.name}</p>
                  <p>{e.age}</p>
                  <p>{e.contact}</p>
                  </div>
               ))
            }
         </div>
         {/* <div>
            {name}
         </div> */}
         <div>
            <h1>{this.state.count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
            </div>
      </div>
   )
  }
}
export default About;