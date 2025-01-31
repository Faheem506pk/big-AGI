import * as React from 'react';

import type { ColorPaletteProp } from '@mui/joy/styles/types';

import type { ChatExecuteMode } from './execute-mode.types';


interface ModeDescription {
  // menu data
  label: string;
  description: string | React.JSX.Element;
  canAttach?: boolean;
  highlight?: boolean;
  shortcut?: string;
  hideOnDesktop?: boolean;
  requiresTTI?: boolean;
  // button data
  sendColor: ColorPaletteProp;
  sendText: string;
}


export const ExecuteModeItems: { [key in ChatExecuteMode]: ModeDescription } = {
  'generate-content': {
    label: 'Chat',
    description: 'Persona replies',
    canAttach: true,
    sendColor: 'neutral',
    sendText: 'Chat',
  },
  'beam-content': {
    label: 'Beam', // Best of, Auto-Prime, Top Pick, Select Best
    description: 'Combine multiple models', // Smarter: combine...
    shortcut: 'Ctrl + Enter',
    canAttach: true,
    hideOnDesktop: true,
    sendColor: 'neutral',
    sendText: 'Beam',
  },
  'append-user': {
    label: 'Write',
    description: 'Append a message',
    shortcut: 'Alt + Enter',
    canAttach: true,
    sendColor: 'neutral',
    sendText: 'Write',
  },
  'generate-image': {
    label: 'Draw',
    description: 'AI Image Generation',
    requiresTTI: true,
    sendColor: 'warning',
    sendText: 'Draw',
  },
  'react-content': {
    label: 'Reason + Act', //  · α
    description: 'Answer questions in multiple steps',
    sendColor: 'success',
    sendText: 'ReAct',
  },
};
