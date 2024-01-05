import React from 'react'
const layout = (page, bg) => {
  const backGround = page.props.className
  const backGroundImg = {
    Invitation: "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png",
    Invitation1: "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png",
    invitationCbox: "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png",
    inviteMember: "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png"
  } 
  return (
    <>
      <div className="layout row">
        <div className='col-12 col-md-7 p-0'>
          {page}
        </div>
        <div className={`layout-right d-none d-md-block col-md-5 ${backGround}-right`} style={{backgroundImage: `url(${backGroundImg[backGround]})`}}></div>
      </div>
    </>
  )
}

export default layout