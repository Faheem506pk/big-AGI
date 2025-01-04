import * as React from 'react';

import type { SxProps } from '@mui/joy/styles/types';
import { Box, IconButton, Typography } from '@mui/joy';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


export const OptimaDrawerHeader = (props: {
  title: string,
  onClose: () => void,
  sx?: SxProps,
  children?: React.ReactNode,
}) =>{
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        minHeight: 'var(--AGI-Nav-width)',
        px: 1,
        backgroundColor: 'background.popup',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...props.sx,
      }}
    >
      <Typography level="title-lg" sx={{ fontWeight: 'bold', marginLeft: '12px' }}>
        {props.title}
      </Typography>
      <Box>
        {isHovered && (
          <IconButton aria-label="Close Drawer" size="sm" onClick={props.onClose}>
            <CloseRoundedIcon />
          </IconButton>
        )}
        {props.children}
      </Box>
    </Box>
  );
};