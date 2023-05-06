import styled from 'styled-components'
import media from '@/styles/custom-styled-media-query'
import { _util } from '@/util/styled-util'

export const StyledBlogs = styled.section`
  ul.grid {
    display: grid;
    align-items: stretch;
    row-gap: 50px;
    margin-top: 30px;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
    `}
  }
`

export const StyledPostCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme.color.sbg};
  ${_util.shadow}

  &:hover {
    figure {
      transform: scale(1.1, 1.1);
    }
  }

  figure {
    transition: 0.3s;
  }

  ul.text {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    padding: 12px 16px;
    height: 100%;

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 16px;
    }

    aside {
      font-size: 14px;
      color: ${({ theme }) => theme.color.subText};
    }

    li.time {
      margin-top: auto;
    }

    time {
      font-size: 14px;
    }
  }

  a:after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    z-index: 1;
  }
`
