import React from 'react'
import {FaFacebookF,FaInstagram, FaTwitter} from 'react-icons/fa'
import './card.scss'

export default function CardItem({member}) {
    return (
        <div className="member-item-main" >
            <div className="member-avt">
                <img src={member.avatar} alt="" />
            </div>
            <div className="member-info">
                <div className="member-info-detail">
                    <p>{member.name}</p>
                    <p>-{member.nickname}-</p>
                </div>
            </div>
            <div className="member-social flex">
                <div className="member-social-icon">
                    <FaFacebookF className="icon"/>
                </div>
                <div className="member-social-icon">
                    <FaInstagram className="icon"/>
                </div>
                <div className="member-social-icon">
                    <FaTwitter className="icon"/>
                </div>
                
                
                
            </div>
        </div>  
    )
}

