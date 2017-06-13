import { fonts } from '../theme';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

const baseHeadingStyles = {
  fontFamily: fonts.default,
};

const StyledH1 = styled('h1', {
  ...baseHeadingStyles,
});

const StyledH2 = styled('h2', {
  ...baseHeadingStyles,
});

const StyledH3 = styled('h3', {
  ...baseHeadingStyles,
  margin: 0,
  padding: 0,
  textTransform: 'uppercase',
});

const StyledH4 = styled('h4', {
  ...baseHeadingStyles,
});

const StyledH5 = styled('h5', {
  ...baseHeadingStyles,
});

const StyledH6 = styled('h6', {
  ...baseHeadingStyles,
});

const Heading = (props) => {
  switch (props.level) {
    case 1: return <StyledH1 {...props} />;
    case 2: return <StyledH2 {...props} />;
    case 3: return <StyledH3 {...props} />;
    case 4: return <StyledH4 {...props} />;
    case 5: return <StyledH5 {...props} />;
    case 6: return <StyledH6 {...props} />;
    default: return <span {...props} />;
  }
};

Heading.propTypes = {
  level: PropTypes.number.isRequired,
};

export default Heading;
