import styled from "@emotion/styled";

export const PageButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  `;
  
  export const PageButton = styled.div<{ active?: boolean }>`
  padding: 10px;
  cursor: pointer;
  color: ${(props) => ((props.active ?? false) ? '#FFD600' : 'default')};
`;