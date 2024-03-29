import styled from "styled-components";
import devices from "../../../Helpers/Devices";

import { RiLinksLine } from "react-icons/ri";
import { HiExternalLink } from "react-icons/hi";
import { BiShowAlt } from "react-icons/bi";

export const Container = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;


  @media ${devices.laptop} {
    gap: 1.5rem;
    &:hover {
      opacity: 0.9;
      cursor: pointer;
      #link-show {
        display: inline-block;
      }
    }
  }
`;

export const Holder = styled.div`
  width: 4.5rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${devices.laptop} {
    width: 6rem;
  }
`;

export const Link = styled.div`
  display: none;
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`;
export const LinkIcon = styled(RiLinksLine)`
  color: inherit;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  @media ${devices.laptop} {
    padding: 0.7rem 0;
  }
`;

export const CardTitleContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`;
export const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};

  @media ${devices.laptop} {
    font-size: 1.1rem;
  }
`;

export const CardSub = styled.h5`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.9;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media ${devices.laptop} {
    font-size: 0.9rem;
  }
`;

export const TextContainer = styled.p`
  font-size: 0.9rem;
  height: 1.5rem;
  font-weight: 400;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.7;
  color: ${(props) => props.theme.colors.text};
`;
