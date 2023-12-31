import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import devices from "../../../../Helpers/Devices";
import { useSelector } from "react-redux";

const HeaderContainer = ({ children }) => {
  const showHeader = useSelector((state) => state.UI.headerShow);

  const BoxTransition = useTransition(showHeader, {
    from: { y: -100 },
    enter: { y: 0 },
    leave: {  y: -100},
    config: {
      duration: 300,
    },
  });

  return BoxTransition((style, item) =>
    item ? <Box style={style}>{children}</Box> : ""
  );
};

export default HeaderContainer;

const Box = styled(animated.div)`
  position: fixed;
  height: 4rem;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.colors.background.header};
  z-index:15;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;

  box-shadow:rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,0px 3px 5px rgba(0, 0, 0, 0.04) ;

  /* border-bottom: solid 1px #0f141f; */
    @media ${devices.tablet} {
    height: 4.5rem;
    padding: 0rem 2rem;
  }

  @media ${devices.laptop} {
    height: 5rem;
    padding: 0rem 3rem;
  }
`;
