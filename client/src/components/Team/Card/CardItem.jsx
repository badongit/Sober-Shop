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


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import { CardActions } from '@material-ui/core';
// import {FaFacebookF,FaInstagram, FaTwitter} from 'react-icons/fa'

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 300,
//   },

//   media: {
//       height: 300
//   }
// });

// export default function MediaCard({member}) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>

//         <CardMedia
//             className={classes.media}
//             image={member.avatar}
//         />
//         <CardActions className="member-social">
//             <FaFacebookF/>
//             <FaInstagram/>
//             <FaTwitter/>
//         </CardActions>

//         <CardContent className="member-info">
//           <Typography gutterBottom variant="h5" component="h2">
//             {member.name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {member.nickname}
//           </Typography>
//         </CardContent>

//       </CardActionArea>
//     </Card>
//   );
// }
