import styled from "styled-components";

export const ContainerSectionList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderSectionList = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 2px solid #262626;
`;

export const ContentSectionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BaseTitleList = styled.h5`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #333333;
    color: #fff;
    border-radius: 45%;
    padding: 0.2rem 0.6rem;
    text-align: center;
    margin: 0 0 0 0.4rem;
  }
`;

export const TitleListCreated = styled(BaseTitleList)`
  color: #4ea8de;
`;
export const TitleListCompleted = styled(BaseTitleList)`
  color: #8284fa;
`;
