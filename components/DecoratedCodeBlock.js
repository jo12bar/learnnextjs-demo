import CodeBlock from './CodeBlock';
import { padding, margin, position, borderRadius } from 'polished';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { fonts } from '../theme';

const StyledDecoratedCodeBlock = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',

  ...margin('1em', null),
  ...padding('2.75em', '.75em', '.25em'),

  backgroundColor: '#fdf6e3',

  border: '2px solid #eee8d5',
  borderRadius: '.5em',
});

const StyledDecoratedCodeBlockHeader = styled('div', {
  boxSizing: 'border-box',
  ...position('absolute', '0', '0', null, '0'),

  ...padding('.5em', '1em'),
  height: '3em',

  lineHeight: '2em',

  backgroundColor: '#fdf6e3',

  borderBottom: '2px solid #eee8d5',
  ...borderRadius('top', '.5em'),

  fontFamily: fonts.default,
  fontSize: '1em',
  fontWeight: 700,
  color: '#93a1a1',
  textTransform: 'uppercase',
});

const DecoratedCodeBlock = (props) => (
  <StyledDecoratedCodeBlock className={props.className}>
    <StyledDecoratedCodeBlockHeader>
      {props.language || 'code'}
    </StyledDecoratedCodeBlockHeader>
    <CodeBlock {...props} className='' />
  </StyledDecoratedCodeBlock>
);

DecoratedCodeBlock.propTypes = {
  language: PropTypes.string,
  literal: PropTypes.string.isRequired,
  className: PropTypes.string,
  nodeKey: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default DecoratedCodeBlock;
