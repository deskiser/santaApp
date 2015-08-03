import "../css/style.css"
import React from 'react'

 var draws = JSON.parse(localStorage.getItem('draws') || "[]");

var DrawName = React.createClass({
  updateState: function(event){
        //Create an empty object to use a dynamic key base on the event targets name
        var e = {};
        //Insert the value into the object
        e[event.target.name] = event.target.value;
        
        //inser the object into the setState
        this.setState(e);
    },		
  render: function() {
    return (
    			
    			<form method="post" onSubmit={this.handleSubmit} >
                <input type="text" name="user" placeholder="Add Name" onChange={this.updateState} />
                {' '}
                <button type ="submit" className="btn-xs btn-success" >
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> </button>
            </form> 
    );
  },
  handleSubmit: function(event){
        event.preventDefault();
            //Values come from "this.state.[name]" updated in the "updateState" function
          
          //create the new draw name to object.
          var draws = {
            'draw': this.state.draw,
            'user': this.state.user,
            'created' : new Date().getTime()
          };
          
          //push the object into array
          draws.push(draw);
          
          //reload the comments list
         React.render(<MyApp draws={draws} />,$("#content").get(0));  //
         
         //stringify the array then store comments array in localStorage
         localStorage.setItem('draws', JSON.stringify(comments));
      }
  
});

var AddedName = React.createClass({
        render: function() {
          var dateTime = new Date(this.props.draw.created).toLocaleString(); // changes the date format
          
          // returns the li created from the comment object
          return(
                  <li>
                    <span>{this.props.draw}</span> <span>{dateTime}</span>
                    <p>{this.props.draw.draw}</p>
                  </li>
                );
        }
     })

var MyApp = React.createClass({
      render: function(){
        var items = []
        //Loop thorough name object array, push into items array
        this.props.draws.forEach(function(draw){
            items.push(<AddedName draw={draw} />); //calling CommentItem Class   comment property passes current comment object 
        });
        return (
          <div>
            <DrawName />
            <ul>
               //Insert the created items from the array
              {items}
              
            </ul>
          </div>
        );
      }


    })
window.onload = function() {
  React.render(<DrawName {...props} />, document.getElementById('container'))
}
