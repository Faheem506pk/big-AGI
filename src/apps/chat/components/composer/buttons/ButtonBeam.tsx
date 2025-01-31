import * as React from 'react';

import type { ColorPaletteProp, SxProps } from '@mui/joy/styles/types';
import { Box, Button, IconButton, Tooltip } from '@mui/joy';

import { ChatBeamIcon } from '~/common/components/icons/ChatBeamIcon';
import { KeyStroke } from '~/common/components/KeyStroke';
import { animationEnterBelow } from '~/common/util/animUtils';

const desktopLegend = (
  <Box sx={{ px: 1, py: 0.75, lineHeight: '1.5rem' }}>
    Combine the answers from multiple models
    <br />
    <KeyStroke combo="Ctrl + Enter" sx={{ mt: 0.5, mb: 0.25 }} />
  </Box>
);

const desktopLegendNoContent = <Box sx={{ px: 1, py: 0.75, lineHeight: '1.5rem' }}>
  <b>text to Beam</b><br />Enter the text to Beam, then press this</Box>;

const mobileSx: SxProps = {
  mr: { xs: 1, md: 2 },
};

const desktopSx: SxProps = {
  // '--Button-gap': '1rem',
  // backgroundColor: 'background.popup',
  // border: '1px solid',
  // borderColor: 'primary.outlinedBorder',
  // boxShadow: '0 4px 16px -4px rgb(var(--joy-palette-primary-mainChannel) / 10%)',
  animation: `${animationEnterBelow} 0.1s ease-out`,
  paddingInline:'0.5rem'
};

export const ButtonBeamMemo = React.memo(ButtonBeam);

function ButtonBeam(props: { isMobile?: boolean; color?: ColorPaletteProp; disabled?: boolean; hasContent?: boolean; onClick: () => void }) {
  return props.isMobile ? (
    <IconButton disabled={props.disabled} onClick={props.onClick} sx={mobileSx}>
      <ChatBeamIcon />
    </IconButton>
  ) : (
    <Tooltip disableInteractive arrow placement="top-start" title={props.hasContent ? desktopLegend : desktopLegendNoContent}>
      <Button
        variant="plain"
        color="neutral"
        disabled={props.disabled}
        onClick={props.onClick}
        // startDecorator={<ChatBeamIcon />} 
        sx={desktopSx}
      >
        <ChatBeamIcon />
        {/* Beam */}
      </Button>
    </Tooltip>
  );
}
