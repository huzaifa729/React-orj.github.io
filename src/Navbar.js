import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div>
        <div className="muim">
            <div className="center">
              <div className="name">React</div>
              <div className="write">A JavaScript library for building user interfaces</div>
            
                <div className="fin">
                    <div className="button">
                        <button className="btn">Get Started</button>
                    </div>

                    <div className="dik">
                        <div className="tal">Take the Tutorial</div>
                    </div>
                </div>
            
            </div>
        </div>


           <div className="down">
               <div className="pix">
               <h1 className="tit">Declarative</h1>
                   <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                   <p>Declarative views make your code more predictable and easier to debug.</p>
               </div>

               <div className="pix">
               <h1 className="tit">Component-Based</h1>
                   <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
                   <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
               </div>

               <div className="pix">
               <h1 className="tit">Learn Once, Write Anywhere</h1>
                   <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                   <p>React can also render on the server using Node and power mobile apps using React Native.</p>
               </div>
           </div>

        </div>
    )
}

export default Navbar