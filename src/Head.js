import image from './klipartz.com (2).png'

function Head(){
    
return (
<div class="head">
      <div class="nav" >
        <h3>Where in the world?</h3>
        <div class="darkMode" onClick={()=>{document.body.classList.toggle('dark-theme')}}>
           <img className='darkImage' src={image} />
          <h5>Dark Mode</h5>
        </div>
      </div>
</div>
)}

export default Head