import styled from "@emotion/styled";


export const ListsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
`;
export const ListHeader = styled.div`
width: 100%;
    display: flex;    
    justify-content: space-between;
`;
export const Tabs = styled.div`
    display: flex;
    gap: 20px;
`;

export const Tab = styled.h3`
`;

export const SearchBox = styled.div`
    gap: 10px;
    height: 52px;
    display: flex;
`;


export const ListBox = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid #BDBDBD;
`;


export const List = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
height: 200px;
border-bottom: 1px solid #BDBDBD;
`;


export const ListContents = styled.div`
    display: flex;
    gap:40px;
`;


export const ThumbnailBox = styled.span`
width: 160px;
height: 160px;
`;


export const Thumbnail = styled.img`
`;


export const ItemInfo = styled.span`
`;



export const Price = styled.h2`
`;


export const ItemName = styled.h2`
font-weight: 500;
margin-bottom: 4px;
`;


export const ItemRemarks = styled.h4`
color: #4F4F4F;
font-weight: 500;

margin-bottom: 8px;
`;



export const ItemTags = styled.div`
color: #4F4F4F;
font-weight: 500;
margin-bottom: 8px;
`;



export const Tag = styled.p`
color: #BDBDBD;
`;







