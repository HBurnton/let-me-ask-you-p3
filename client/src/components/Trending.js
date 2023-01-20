import React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import RecommendIcon from '@mui/icons-material/Recommend';

export const Trending = ({ title, username, dateposted, views, avatarurl }) => {
  return (
        <Card variant="outlined" className='card-box' sx={{ width: 320 }}>
        <CardOverflow>
            <AspectRatio ratio="2">
                <img
                    src={avatarurl}
                    srcSet={avatarurl}
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <IconButton
            aria-label="Like minimal photography"
            size="lg"
            variant="solid"
            color="danger"
            sx={{
                position: 'absolute',
                zIndex: 2,
                borderRadius: '50%',
                right: '1rem',
                bottom: 0,
                transform: 'translateY(50%)',
            }}
            >
            <RecommendIcon />
            </IconButton>
        </CardOverflow>
        <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
            <Link href="#multiple-actions" overlay underline="none">
            {username}
            </Link>
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
            <Link href="#multiple-actions">{title}</Link>
        </Typography>
        <Divider inset="context" />
        <CardOverflow
            variant="soft"
            sx={{
            display: 'flex',
            gap: 1.5,
            py: 1.5,
            px: 'var(--Card-padding)',
            bgcolor: 'background.level1',
            }}
        >
            <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
            {views}k views
            </Typography>
            <Divider orientation="vertical" />
            <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
            {dateposted}
            </Typography>
        </CardOverflow>
        </Card>
        
    )
}
