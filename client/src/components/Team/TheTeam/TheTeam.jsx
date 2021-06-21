import React from 'react'
import CardItem from '../Card/CardItem'
import './team.scss'

export default function TheTeam() {

    const members = [
        {
            name: "Nguyễn Bá Đông",
            nickname: "Ngáo",
            avatar: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/125562670_1273921896300167_3356570656127877967_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=T191OkFdaIQAX-oBx5x&_nc_ht=scontent-hkt1-1.xx&oh=dac6da315d44c87f94c2c582cee4096d&oe=60D9576C"
        },
        {
            name: "Minh Phương Đỗ",
            nickname: "Min",
            avatar: "https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/176826326_1116961348791760_1208504168411381082_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=edfoKtifXj8AX_TWhpj&_nc_ht=scontent-hkt1-2.xx&oh=4b3a8205a147dfa996f8dc48d54f932b&oe=60CEB9D0"
        },
        {
            name: "Nguyễn Mai Phương",
            nickname: "Phương Sapphire",
            avatar: "https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/134643032_872857433465135_3845820817044722656_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HXcZYWxx1joAX-NSfkU&_nc_ht=scontent-hkt1-2.xx&oh=df151d57afbced8f85242ce9ea7f5794&oe=60D8D062"
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

