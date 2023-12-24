import React from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const Right_bar = () => {
  const avatars = [
    {alt: 'Remy Sharp', src: 'https://material-ui.com/static/images/avatar/1.jpg'},
    {alt: 'Travis Howard', src: 'https://material-ui.com/static/images/avatar/2.jpg'},
    {alt: 'Cindy Baker', src: 'https://material-ui.com/static/images/avatar/3.jpg'},
    {alt: 'Agnes Walker', src: ''}, // Assuming the source URL is missing
    {alt: 'Trevor Henderson', src: 'https://material-ui.com/static/images/avatar/6.jpg'},
    {alt: 'Trevor Henderson', src: 'https://material-ui.com/static/images/avatar/7.jpg'},
    {alt: 'Trevor Henderson', src: 'https://material-ui.com/static/images/avatar/8.jpg'},
    {alt: 'Trevor Henderson', src: 'https://material-ui.com/static/images/avatar/7.jpg'},
    {alt: 'Trevor Henderson', src: 'https://material-ui.com/static/images/avatar/8.jpg'},
  ];

  const latestPhotos = [
    {src: 'https://material-ui.com/static/images/image-list/breakfast.jpg'},
    {src: 'https://material-ui.com/static/images/image-list/burgers.jpg'},
    {src: 'https://material-ui.com/static/images/image-list/camera.jpg'},
  ];

  return (
    <Box flex={2} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          {avatars.map(item => (
            <Avatar alt={item.alt} src={item.src} />
          ))}
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {latestPhotos.map(photo => (
            <ImageListItem>
              <img src={photo.src} alt='' />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='https://material-ui.com/static/images/avatar/3.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{display: 'inline'}}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{display: 'inline'}}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
        </List>
      </Box>
    </Box>
  );
};

export default Right_bar;
