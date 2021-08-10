import React from 'react'
import CardItem from '../Card/CardItem'
import './team.scss'

export default function TheTeam() {

    const members = [
        {
            name: "Nguyễn Bá Đông",
            nickname: "Ngáo",
            avatar: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/125562670_1273921896300167_3356570656127877967_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=i4FRF5Otg8oAX9e6xPb&_nc_ht=scontent-xsp1-3.xx&oh=3c5486b159b1503e6912271a5c963aa7&oe=60EF182C"
        },
        {
            name: "Minh Phương Đỗ",
            nickname: "Min",
            avatar: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/176826326_1116961348791760_1208504168411381082_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=EQtxbvkIHWsAX9Iewi0&_nc_ht=scontent-xsp1-1.xx&oh=9088bf4a05fee7818b82dfaab8f83d77&oe=60EE5DD0"
        },
        {
            name: "Nguyễn Mai Phương",
            nickname: "Phương Sapphire",
            avatar: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/134643032_872857433465135_3845820817044722656_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=syq9VlybCD0AX_RVSB2&_nc_ht=scontent-xsp1-3.xx&oh=b87389e8da9bba588bae59340546c3d7&oe=60EE9122"
        },
    ]

    return (
        <div className="TheTeam">
            <div className="the-team-container">
                <div className="slogan">
                    <span>Slogan: </span>
                    <span>Có phúc cùng hưởng có mương cùng tắm</span>
                </div>
                <div className="team-members">
                    <div className="team-members-title">Team Members</div>
                    <div className="team-members-img">
                        <div className="member-item">
                            {members.map((item, index) => {
                                return (
                                    <CardItem key={index} member={item}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

