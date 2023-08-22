import styled from 'styled-components';
import { MdOutlineDarkMode } from "react-icons/md";

const Sun = styled(MdOutlineDarkMode)`
  background-color: ${props => props.bg === "black" ? "black" : "white"};
`;