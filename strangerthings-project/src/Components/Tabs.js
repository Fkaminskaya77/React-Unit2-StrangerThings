import { useState } from 'react';
import './Tabs.css'


//Creating Tabs for the UI and using state
//mapping through API data through Tabs and returning array
//passing in quotes as a prop from Parent(App.js) to child Tabs

function Tabs ({quotes}) {
 const [toggleState, setToggleState] = useState(1)

const toggleTab = (index) => {
    setToggleState(index);
}

 return(

     <div className="container">

         <div className='nav-tabs'>

          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                 onClick={() => toggleTab(1)}>Quote 1</button>

          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                 onClick={() => toggleTab(2)}>Quote 2</button>

          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                 onClick={() => toggleTab(3)}>Quote 3</button>

          <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                 onClick={() => toggleTab(4)}>Quote 4</button>
         
          <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(5)}>Quote 5</button>
    
    
     </div>
     
     <div className="content-tabs">
                {quotes.map((quote, index) => (
                 <div key={index} className="content-tabs">
                 
                 <div className={toggleState === index + 1 ? "content  active-content" : "content"}>
                            <p>{quote.quote}</p>
                            <p>Character : {quote.author}</p>
                     </div>
                 </div>
             ))}

         </div>
  </div>

        
    );
        
}
export default Tabs;