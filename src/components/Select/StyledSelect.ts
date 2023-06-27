import styled from 'styled-components';
import {StyledFieldBox} from "../FieldBox/StyledFieldBox";

export const StyledSelect = styled(StyledFieldBox)`
  .darkSelect {
    background-color: #555;
    color: #fff;
    border: none;
    padding: 9px;
    width: 100%;
    border-radius: 4px;
    transition: .1s;

    &:hover {
      background-color: #777;
    }
  }
`