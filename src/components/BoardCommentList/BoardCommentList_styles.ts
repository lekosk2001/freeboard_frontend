import styled from '@emotion/styled';

export const CommentsList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CommetLabel = styled.div`
  display: flex;
  gap: 14px;
  justify-items: center;
  h4 {
    font-weight: 500;
  }
  margin-bottom: 44px;
`;

export const CommentBox = styled.div`
  width: inherit;
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  gap: 16px;
  padding-bottom: 20px;
`;

export const CommentWriterIcon = styled.div`
  width: 40px;
`;

export const CommentHead = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  justify-content: space-between;
`;

export const CommentHeadLeftside = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const CommentButtons = styled.div`
  display: flex;
  gap: 16px;
`;

export const CommentButton = styled.button`
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 0px;
  background-color: inherit;
`;

export const CommentBody = styled.h4`
  font-weight: 400;
  color: #4f4f4f;
`;

export const CommentWriter = styled.h4`
  font-weight: 500;
`;

export const CommentFooter = styled.p`
  color: #bdbdbd;
`;

export const Space = styled.div<{ hight: number }>`
  display: flex;
  width: inherit;
  height: ${(props) => props.hight}px;
`;

export const CommentContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
