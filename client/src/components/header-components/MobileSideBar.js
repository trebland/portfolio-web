import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ProfilePhoto from '../../images/headshot.jpg';
import { Email } from '@material-ui/icons';

const imageStyles = {
    coverStyle: {
      // Left-Image
      maxWidth: '100%',
      maxHeight: '80vh'
    },
    profile: {
      width: '50%',
      borderRadius: '50%',
      padding: '20px'
    }
}

const textStyles = {
    descriptionTitle: {
      color: 'white', 
      fontSize: 28, 
      marginBottom: '20px'
    },
    descriptionContent: {
      color: 'white', 
      fontSize: 20, 
      textAlign: 'left', 
      width: '100%', 
      marginBottom: '20px'
    },
    profileTitle: {
      color: 'white', 
      fontSize: 28, 
    },
    profileSubTitle: {
      color: 'white', 
      fontSize: 20, 
    },
    navigationTitle: {
      color: 'white', 
      fontSize: 20, 
      marginBottom: '20px'
    },
    email: {
      color: 'white',
      fontSize: 16, 
      textAlign: 'left'
    }
}

const iconStyles = {
    email: {
        color: 'white',
        fontSize: 100,
    }
}


const options = [
    'About',
    'Full Stack',
    'Mobile Apps'
  ];
  
  const ITEM_HEIGHT = 48;


function MobileSideBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="top-menu" >
            <Grid container direction="row" justify="flex-start" alignItems="center">
                <Grid container item direction="row" justify="center" alignItems="center" xs>
                    <img style={imageStyles.profile} src={ProfilePhoto} alt="Placeholder Text" />
                </Grid>
                <Grid style={{paddingRight: '20px'}} container item direction="row" justify="flex-end" alignItems="center" xs>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MenuIcon style={{color: 'white', fontSize: 50}} />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                        }}
                    >
                        {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}
                        </MenuItem>
                        ))}
                    </Menu>
                </Grid>
{/*                     
                <Grid container item direction="row" justify="center" alignItems="flex-start" xs>
                    <Email style={iconStyles.email} />
                </Grid> */}
            </Grid>
        </div>
    )
}

export default MobileSideBar;