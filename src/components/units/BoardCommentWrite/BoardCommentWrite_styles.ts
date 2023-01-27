import styled from '@emotion/styled';

export const WriteComment = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-bottom: 40px;
`;

export const CommetLabel = styled.div`
  display: flex;
  gap: 10px;
  justify-items: center;
  margin-bottom: 44px;
  align-items: center;
  h4 {
    font-weight: 500;
  }
`;
export const CommnetWriteHead = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  border: 1px solid #bdbdbd;
  height: 52px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  &::placeholder {
    color: #bdbdbd;
  }
`;

export const RateStars = styled.div`
  display: flex;
  gap: 4px;
`;

export const CommetWriteBox = styled.textarea`
  border: 1px solid #bdbdbd;
  width: 100%;
  height: 161px;
  padding: 20px;
  font-weight: 500;
  font-size: 16px;
  text-align: start;
  resize: none;
  &::placeholder {
    color: #bdbdbd;
  }
  border-bottom: 0px;
`;

export const CommentSubmitBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-top: 1px solid #f2f2f2;
  padding-left: 20px;
`;

export const CommentLength = styled.h4`
  font-weight: 400;
  color: #bdbdbd;
`;

export const CommentSubmitButton = styled.button<{ valid: boolean }>`
  height: 52px;
  cursor: ${(props) => (props.valid ? 'pointer' : 'default')};
  background-color: #000;
  color: ${(props) => (props.valid ? '#ffffff' : 'gray')};
  width: 91px;
`;

export const CommentSubmitBoxRightside = styled.div`
  display: flex;
  gap:20px;
  align-items: center;
`