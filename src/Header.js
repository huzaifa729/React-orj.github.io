import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
// import { Link } from 'react-router-dom'

 function Header() {
    return (
  
            <div className="header">
                <div className="imj">
               <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt=""/>
                <span className="ops">React</span>   
                </div>

                <div className="nav">
                    <div className="ul">
                  <li className="ol"> Docs</li> 
                     <li className="ol">Tutorial</li>
                        <li className="ol">Blog</li>
                        <li className="ol">Community</li>
                 </div>
                </div>

                <div className="Form">
             <SearchIcon className="icon"/>
             <input className="text" type="text" placeholder="Search"/>
            </div>

            <div className="avi">
                <span className="pok">v17.0.2</span>

                <div className="dil">
                <TranslateIcon className="oi"/><span className="pok"> Language</span>
                </div>
              
              <div className="ner">
              <span className="pok">Github<svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-19vhmgv"><path fill="currentColor" d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "></path><polygon fill="currentColor" points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "></polygon></svg></span>
              </div>
                
            </div>
      
            </div>


        
    )
}
export default Header