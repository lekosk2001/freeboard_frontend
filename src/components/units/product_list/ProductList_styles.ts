import styled from "@emotion/styled";


export const ListsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
`;

export const ListHeader = styled.div`
align-items: center;
    width: 100%;
    display: flex;    
    justify-content: space-between;
`;

export const Tabs = styled.div`
    display: flex;
    gap: 20px;
`;

export const Tab = styled.h3<{active:string}>`
cursor: pointer;
color: ${(props)=>props.active===props.id ? "#000" : "#4F4F4F"};
font-weight: ${(props)=>props.active===props.id?"700":"500"} ;
`

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

export const NoImages = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F2F2F2;
    background-color: #4f4f4f; 
`

export const List = styled.li`
    padding: 0px 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    border-bottom: 1px solid #BDBDBD;
    transition: 0.1s all ease ;
    overflow: hidden;
    &:hover{
        background-color: #F2F2F2;
    }
`;


export const ListContents = styled.div`
    display: flex;
    gap:40px;
`;


export const ThumbnailBox = styled.span`
    display: flex;
    align-items: center;
    width: 160px;
    height: 160px;
`;


export const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ItemInfo = styled.span`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ItemInfoBottom = styled.div`
    display: flex;
    gap: 20px;
`


export const ItemSeller = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`


export const PickedCount = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`


export const Price = styled.h2`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
`;


export const ItemName = styled.h2`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    font-weight: 500;
    margin-bottom: 4px;
`;

export const ItemRemarks = styled.h4`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #4F4F4F;
    font-weight: 500;
    margin-bottom: 8px;
`;

export const ItemTags = styled.div`
    display: flex;
    gap: 10px;
    color: #4F4F4F;
    font-weight: 500;
    margin-bottom: 30px;
`;

export const Tag = styled.p`
    color: #BDBDBD;
`;







