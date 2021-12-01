import styled from '@emotion/styled'

const Wrapper = styled.main`
  width:100%;

  max-width:1200px;

`

const FlexLayout = styled.section`
  display:flex;
  flex-wrap:wrap;
  margin:0 -20px;

`

const FlexItem = styled.div`
  width:23rem;
  height:23rem;
  padding:0 20px;
  border:2px solid pink;

  @media(max-width:767px){
    width:100%;
    margin-bottom:35px;
  }

`

export default function Home() {

  return (
  <>
  <Wrapper>
    <FlexLayout>

    <FlexItem></FlexItem>
    <FlexItem></FlexItem>
    </FlexLayout>
    </Wrapper>
    
  </>
  );
}
