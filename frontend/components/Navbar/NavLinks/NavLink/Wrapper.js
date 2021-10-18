import styled from 'styled-components';

const Wrapper = styled.div`
    width: 64px;
    text-align: center;

    a {
        display: flex;
        flex-direction: column;
    }
    .navbarLink {
        color: #000;
        transition: color 0.2s ease;
    }

    svg {
        max-width: 30px;
        margin: auto;
    }
    svg.stroke {
        stroke: #000;
        transition: stroke 0.2s ease;
    }
    svg.fill {
        fill: #000;
        transition: fill 0.2s ease;
    }

    &:hover {
        svg.stroke {
            stroke: #f56;
            transition: stroke 0.3s ease;
        }
        svg.fill{
            fill: #f56;
            transition: fill 0.3s ease;
        }
    }

    &:hover .navbarLink {
        color: #f56;
        transition: color 0.3s ease;
    }
`
export default Wrapper