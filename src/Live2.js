
import React from 'react'
import './Live2.css'
import Text from 'react-text';
function Live2() {
    return (
        <div className="nui">
        <div className="dan">
          <h2 className="lo">An Applicaton</h2>
          <p className="pio">
          Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.
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
  <span className="names">TodoApp</span>
  <span className="keyword">extends</span>
  <span className="names">React.Component</span>
  <span className="func"> <Text>&#x0007B;</Text> </span>

  <div className="downn">
  <span className="ke">constructor</span>
  <span className="func">(</span>
  <span className="white">props</span>
  <span className="func">)</span>
  <span className="func"><Text>&#x0007B;</Text> </span>
  </div>

  <div className="hill">
  <span className="keyword">super</span> 
  <span className="func">(</span>
  <span className="white">props</span>
  <span className="func">);</span>
  </div>

  <div className="hy">
  <span className="keyword">this</span> 
  <span className="func">.</span>  
  <span className="white">md</span>
  <span className="white"> = </span>
  <span className="keyword">new</span> 
  <span className="names">Remarkable</span>
  <span className="func">();</span>
  </div>

  <div className="hy">
  <span className="keyword">this</span> 
  <span className="func">.</span>  
  <span className="white">md</span>
  <span className="white"> = </span>
  <span className="keyword">this</span> 
  <span className="func">.</span> 
  <span className="white">handlechange</span>
  <span className="func">.</span> 
  <span className="ke">blind</span> 
  <span className="func">(</span>
  <span className="keyword">this</span>
  <span className="func">);</span>
  </div>

  <div className="hy">
  <span className="keyword">this</span> 
  <span className="func">.</span>  
  <span className="white">state</span> 
  <span className="white"> = </span> 
  <span className="func"><Text>&#x0007B;</Text> </span>
  <span className="white">value</span>
  <span className="func">:</span>  
  <span className="func"> 'hello,</span> 
  <span className="func"> **world**!'</span> 
  <span className="func"><Text>&#x0007D;;</Text></span> 
  </div>
  <span className="func"><Text>&#x0007D;</Text></span> 

  <div className="downn">
  <span className="ke">handleChange</span>
  <span className="func">(</span>
  <span className="white">e</span>
  <span className="func">)</span>
  <span className="func"><Text>&#x0007B;</Text> </span>
  </div>

  <div className="hy">
  <span className="keyword">this</span>  
  <span className="func">.</span>
  <span className="ke">setState</span>
  <span className="func">(</span>
<span className="func"><Text>&#x0007B;</Text> </span>
<span className="white">value</span>
<span className="func">:</span>
<span className="white">e</span>
<span className="func">.</span>
<span className="white">target</span>
<span className="func">.</span>
<span className="white">value</span>
<span className="func"><Text>&#x0007D;</Text></span> 
<span className="func">)</span>
  </div>
  <span className="func"><Text>&#x0007D;</Text></span> 

  <div className="downn">
  <span className="ke">getRawMarkup</span>
  <span className="func">(</span>
  <span className="func">)</span>
  <span className="func"><Text>&#x0007B;</Text> </span> 
  </div>

  <div className="hy">
  <span className="keyword">return</span> 
  <span className="func"><Text>&#x0007B;</Text></span> 
  <span className="white"> __html</span>
  <span className="func">:</span>
  <span className="keyword">this</span> 
  <span className="func">.</span>
  <span className="white">md</span>
  <span className="func">.</span>
  <span className="ke">render</span>
  <span className="func">(</span>
  <span className="keyword">this</span>
  <span className="func">.</span>
  <span className="white">state</span>
  <span className="func">.</span>
  <span className="white">value</span>
  <span className="func">)</span>
  <span className="func"><Text>&#x0007D;;</Text></span> 
  </div>
  <span className="func"><Text>&#x0007D;</Text></span>

  <div className="downn">
  <span className="ke">render</span>
  <span className="func">(</span>
  <span className="func">)</span>
  <span className="func"><Text>&#x0007B;</Text> </span> 
  </div>

  <div className="hy">
  <span className="keyword">return</span>
  <span className="func">(</span>
  </div>

  <div className="ly">
  <span className="func"><Text>&#x0003C;</Text></span>
       <span className="tag">div</span>
       <span className="keyword">className</span>
       <span className="func">= "MarkdownEditor"</span>
       <span className="func"><Text>&#x0003E;</Text></span>
  </div>

  <div className="ly">
  <span className="func"><Text>&#x0003C;</Text></span>
       <span className="tag">h3</span>
       <span className="func"><Text>&#x0003E;</Text></span>
       <span className="white">Input</span>
       <span className="func"><Text>&#x0003C;</Text></span>
        <span className="func">/</span>
       <span className="tag">h3</span>
       <span className="func"><Text>&#x0003E;</Text></span>
  </div>

  <div className="ly">
  <span className="func"><Text>&#x0003C;</Text></span>
       <span className="tag">label</span>
       <span className="keyword">htmlfor</span>
       <span className="func">= "MarkdownEditor"</span>
       <span className="func"><Text>&#x0003E;</Text></span> 
    </div>

    <div className="ly">
    <span className="white">Enter some markdown</span>
    </div>

    <div className="ly">
    <span className="func"><Text>&#x0003C;</Text></span>
       <span className="tag">label</span>  
       <span className="func"><Text>&#x0003E;</Text></span> 
    </div>

    <div className="ly">
    <span className="func"><Text>&#x0003C;</Text></span>
       <span className="tag">textarea</span>
    </div>

    <div className="ly">
    <span className="keyword">id</span> 
    <span className="func">= "MarkdownEditor"</span>
    </div>

    <div className="ly">
    <span className="keyword">onChange</span> 
    <span className="func">=</span>
    <span className="func"><Text>&#x0007B;</Text></span> 
    <span className="keyword">this</span> 
    <span className="func">.</span>
    <span className="tag">handleChange</span>
    <span className="func"><Text>&#x0007D;</Text></span>
    </div>

    <div className="ly">
    <span className="keyword">defaultvalue</span> 
    <span className="func">=</span>
    <span className="func"><Text>&#x0007B;</Text></span> 
    <span className="keyword">this</span> 
    <span className="func">.</span>
    <span className="tag">state</span>
    <span className="func">.</span>
    <span className="tag">value</span>
    <span className="func"><Text>&#x0007D;</Text></span>
    </div>
    
    <div className="hy">
    <span className="func">/</span>
    <span className="func"><Text>&#x0003E;</Text></span> 
    </div>

    <div className="ly">
    <span className="func"><Text>&#x0003C;</Text></span>
    <span className="tag">h3</span>
    <span className="func"><Text>&#x0003E;</Text></span>
       <span className="white">Output</span>
       
       <span className="func"><Text>&#x0003C;</Text></span>
       <span className="func">/</span>
    <span className="tag">h3</span>
    <span className="func"><Text>&#x0003E;</Text></span>
    </div>

    <div className="ly">
    <span className="func"><Text>&#x0003C;</Text></span>
       <span className="tag">div</span>
    </div>

    <div className="ly">
        <span className="keyword">className</span>
        <span className="func">="content"</span>
    </div>

    <div className="ly">
        <span className="keyword">dangerouslySetInnerHTML</span>
        <span className="func">=</span>
        <span className="func"><Text>&#x0007B;</Text></span> 
        <span className="keyword">this</span>
        <span className="func">.</span>
        <span className="ke">getRawMarkup</span>
        <span className="func">()</span>
        <span className="func"><Text>&#x0007D;</Text></span>
    </div>
    <div className="hy">
    <span className="func">/</span>
    <span className="func"><Text>&#x0003E;</Text></span> 
    </div>

    <span className="func"><Text>&#x0003C;</Text></span>
    <span className="func">/</span>
       <span className="tag">div</span>
       <span className="func"><Text>&#x0003E;</Text></span> 

       <div className="ly">
       <span className="func"><Text>&#x0007D;;</Text> </span> 
       </div>
       <div className="hy">
       <span className="func"><Text>&#x0007D;</Text> </span> 
       </div>
       <div className="downn">
       <span className="func"><Text>&#x0007D;</Text> </span> 
       </div>

       <div className="i">
           <span className="white">ReactDOM.</span>
           <span className="ke">render</span>
           <span className="func"><Text>&#x00028;</Text></span> 
           </div>

           <div className="ly">
           <span className="func"><Text>&#x0003C;</Text></span>
    <span className="tag">MarkdownEditor</span>
    <span className="func">/</span>
    <span className="func"><Text>&#x0003E;</Text></span>
           </div>

           <div className="din">
           <span className="white">document.</span>
           <span className="ke">getElementById</span>
           <span className="func">('markdown-example')</span>
         
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
          <div className="dark">
            <h2 className="o">Input</h2>
            <label className="lab">Enter some markdown</label>
            <textarea id="markdown-content">Hello, **world**!</textarea>
          </div>
          <div className="light">
          <h2 className="o">Output</h2>
            <span className="pin">Hello,</span>
            <span className="pan"><b>world!</b></span>
          </div>
        </div>
   </div>
 

    )
}

export default Live2
