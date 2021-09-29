import React, { Component } from 'react'


import './Live.css'
import Text from 'react-text';
  

 
  function  Live () { 
      return (
                 
        <div className="nui">
             <div className="dan">
               <h2 className="lo">A Simple Component</h2>
               <p className="pio">
               React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.
               </p>

               <p className="pio">
               <b>JSX is optional and not required to use React.</b> Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.
               </p>
             </div> 

             <div className="uiop">
               <div className="bit">
                 <div className="grt">LIVE JSX EDITOR</div>
                  <div className="label">
                    <input type="checkbox" checked/>
                    <label>JSX?</label>
                  </div>
               </div>
               <div class="bert">
  <div class="dut"  spellcheck="false" contenteditable="true">
     <div className="bt">
       <span className="keyword">class</span>
       <span className="names">HelloMessage</span>
       <span className="keyword">extends</span>
       <span className="names">React.Component</span>
       <span className="func"> <Text>&#x0007B;</Text> </span>
       <div className="downn">
       <span className="ke">render</span>
       <span className="func">() </span>
       <span className="func"><Text>&#x0007B;</Text> </span>
       </div>
       <span className="keyword">return</span>
       <span className="func"><Text>&#x00028;</Text></span>

       <div className="u">
       <span className="func"><Text>&#x0003C;</Text></span>
       <span className="tag">div</span>
       <span className="func"><Text>&#x0003E;</Text></span>
       </div>

        <div className="l">
          <span className="white">Hello</span>
          <span className="func"><Text>&#x0007B;</Text></span>
          <span className="keyword">this</span>
          <span className="func">.</span>
          <span className="white">props</span>
          <span className="func">.</span>
          <span className="white">name</span>
          <span className="func"><Text>&#x0007D;</Text></span>
        </div>

        <div className="u">
       <span className="func"><Text>&#x0003C;</Text></span>
       <span className="func"><Text>/</Text></span>
       <span className="tag">div</span>
       <span className="func"><Text>&#x0003E;</Text></span>
       </div>

       <div className="by">
       <span className="func"><Text>&#x00029;;</Text></span> 
       </div>

       <div className="be">
       <span className="func"><Text>&#x0007D;</Text></span> 
       </div>

       <div className="bs">
       <span className="func"><Text>&#x0007D;</Text></span> 
       </div>
       
           <div className="i">
           <span className="white">ReactDOM.</span>
           <span className="ke">render</span>
           <span className="func"><Text>&#x00028;</Text></span> 
           </div>
       
         <div className="nike">
         <span className="func"><Text>&#x0003C;</Text></span> 
         <span className="tag">HelloMessage</span>
         <span className="keyword">name</span>
         <span className="func">=</span> 
         <span className="func">"Taylor" </span> 
         <span className="func">/</span> 
         <span className="func"><Text>&#x0003E;</Text></span>
         </div>
   
           <div className="din">
           <span className="white">document.</span>
           <span className="ke">getElementById</span>
           <span className="func">('hello-example')</span>
         
           </div>
           <span className="func"><Text>&#x00029;;</Text></span> 
       </div>
  </div>
</div>
             </div>

             <div className="bil">
               <div className="hu">
                 <p className="pik">RESULT</p>
               </div>
               <p className="darr">Hello Taylor</p>
             </div>
        </div>

        
);

      
    }
    
  



export default Live


