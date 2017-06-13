import Link from 'next/link';
import { styled } from 'styletron-react';
import { fonts } from '../theme';

const BaseLink = styled('a', {
  fontFamily: fonts.default,
  textDecoration: 'none',
  color: 'blue',
  cursor: 'pointer',

  ':hover': {
    opacity: .6,
  },
});

const AnchorLink = (props) => (
  <Link {...props}>
    <BaseLink className={props.className}>{props.children}</BaseLink>
  </Link>
);

export default AnchorLink;
