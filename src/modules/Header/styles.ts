// Header Styles
import styled from 'styled-components'
import { media } from '@/styles/media'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: var(--shadow-md);

  ${media.sm} {
    padding: 1rem 0;
  }

  ${media.lg} {
    padding: 1.25rem 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export { Header, Wrapper }
