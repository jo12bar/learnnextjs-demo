import Highlight from 'react-highlight';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

/**
 * Styles pulled straight out of the highlight.js solarized-light theme.
 */
const BaseStyledCodeTag = styled('code', {
  display: 'block',
  overflowX: 'auto',
  padding: '.5em',
  background: '#fdf6e3',
  color: '#657b83',
});

const CodeBlock = ({ language, literal, className, nodeKey }) => {
  if (language !== undefined){
    return (
      <Highlight
        className={`language-${language} ${className ? className : ''}`}
        key={nodeKey ? nodeKey : null}
      >
        {literal}
      </Highlight>
    );
  }
  else {
    return (
      <pre
        key={nodeKey ? nodeKey : null}
      >
        <BaseStyledCodeTag
          className={className ? className : ''}
        >
          {literal}
        </BaseStyledCodeTag>
      </pre>
    );
  }
};

CodeBlock.propTypes = {
  language: PropTypes.string,
  literal: PropTypes.string.isRequired,
  className: PropTypes.string,
  nodeKey: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default CodeBlock;
