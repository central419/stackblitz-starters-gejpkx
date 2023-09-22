import styled from '@emotion/styled';

export const Text = styled.div<{ columns?: number; size?: number }>(
  ({ columns = 1 }) =>
    columns > 1
      ? {
          columns: columns,
          gap: '4vw',
        }
      : {},
  ({ size = 2 }) => ({
    fontSize: `${size}vw`,
    lineHeight: `${size * 1.6}vw`,
  }),
  {
    fontFamily: 'C_Caladea',
    overflow: 'hidden',
    color: '#0b0503',

    '& > *': {
      breakInside: 'avoid-column',
      boxSizing: 'border-box',
    },
    '&& > * + *': {
      marginTop: '2vw',
    },
    '& ul, & ol, & p': {
      margin: 0,
    },
    '& * + ul': {
      paddingLeft: '1.5vw',
    },
    '& * + ol': {
      paddingLeft: '1.5vw',
    },

    '& img': {
      display: 'inline-flex',
      width: 'fill-available',
    },

    '& hr': {
      borderTop: '0 none',
      borderLeft: '0 none',
      borderRight: '0 none',
      height: 0,
      margin: 0,
      borderBottom: '1px solid silver',
    },

    '& h2, & h3, & h4, & h5, & h6': {
      margin: 0,
      padding: 0,
      fontFamily: 'C_Trebuchet',
    },

    '& h1': {
      margin: 0,
      padding: 0,
      fontFamily: 'C_Copperplate_Gothic',
      fontSize: '3vw',
    },
    '& h2': {
      fontSize: '2vw',
      fontFamily: 'inherit',
    },
    '& h3': {
      fontFamily: 'inherit',
      textDecoration: 'underline',
    },
  }
);
