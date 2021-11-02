import { Container, FaqPageWrap, FaqTopSection, FaqTopTitle, FaqSearch, FaqSearchWrap, FaqTopProfile, FaqTopProfileImg, ProfileUserName, FaqTopConts, SnbWrap, SnbList, SnbListActive, FaqContsWrap, FaqContsInner, FaqListWrap, FaqLlist, FaqListNum, FaqListTitle, FaqFooter, FaqFooterMenuWrap, FaqFooterMenu, MenuIco, MenuBtnWrap, FaqFooterMenuWrapActive, MenuBtnWrapActive } from '../../../styles/faq'

export default function FaqPage(){

    return(
        
        <Container>
            <FaqPageWrap>
                <FaqTopSection>
                    <FaqSearchWrap>
                        <FaqSearch></FaqSearch>                    
                    </FaqSearchWrap>
                    <FaqTopConts>
                    <FaqTopTitle>마이</FaqTopTitle>
                    <FaqTopProfile>
                        <FaqTopProfileImg></FaqTopProfileImg>
                        <ProfileUserName>임정아</ProfileUserName>
                    </FaqTopProfile>
                    </FaqTopConts>
                    <SnbWrap>
                        <SnbList><a href="">공지사항</a></SnbList>
                        <SnbList><a href="">이벤트</a></SnbList>
                        <SnbListActive><a href="">FAQ</a></SnbListActive>
                        <SnbList><a href="">Q&A</a></SnbList>
                    </SnbWrap>
                </FaqTopSection>
                <FaqContsWrap>
                    <FaqContsInner>
                        <FaqListWrap>
                            <FaqLlist>
                                <FaqListNum>Q.01</FaqListNum>
                                <FaqListTitle>리뷰 작성은 어떻게 하나요?</FaqListTitle>
                            </FaqLlist>
                            
                            <FaqLlist>
                                <FaqListNum>Q.02</FaqListNum>
                                <FaqListTitle>리뷰 수정/삭제는 어떻게 하나요?</FaqListTitle>
                            </FaqLlist>

                            <FaqLlist>
                                <FaqListNum>Q.03</FaqListNum>
                                <FaqListTitle>아이디/비밀번호를 잊어버렸어요.</FaqListTitle>
                            </FaqLlist>

                            <FaqLlist>
                                <FaqListNum>Q.04</FaqListNum>
                                <FaqListTitle>회원탈퇴를 하고싶어요.</FaqListTitle>
                            </FaqLlist>

                            <FaqLlist>
                                <FaqListNum>Q.05</FaqListNum>
                                <FaqListTitle>출발지 설정은 어떻게 하나요?</FaqListTitle>
                            </FaqLlist>

                            <FaqLlist>
                                <FaqListNum>Q.06</FaqListNum>
                                <FaqListTitle>비밀번호를 변경하고 싶어요.</FaqListTitle>
                            </FaqLlist>

                        </FaqListWrap>
                    </FaqContsInner>
                </FaqContsWrap>
                <FaqFooter>
                    <FaqFooterMenuWrap>
                        <FaqFooterMenu>
                            <MenuBtnWrap>
                                <MenuIco><img src="/images/ico-home.png" /></MenuIco>
                                <figcaption>
                                    홈
                                </figcaption>
                            </MenuBtnWrap>
                        </FaqFooterMenu>
                        <FaqFooterMenu>
                            <MenuBtnWrap>
                                <MenuIco><img src="/images/ico-location.png" /></MenuIco>
                                <figcaption>
                                    잇츠로드
                                </figcaption>
                            </MenuBtnWrap>
                        </FaqFooterMenu>
                        <FaqFooterMenu>
                            <MenuBtnWrap>
                                <MenuIco><img src="/images/ico-like.png" /></MenuIco>
                                <figcaption>
                                    마이찜
                                </figcaption>
                            </MenuBtnWrap>
                        </FaqFooterMenu>
                        <FaqFooterMenu>
                            <MenuBtnWrapActive>
                                <MenuIco><img src="/images/ico-mypage.png" /></MenuIco>
                                <figcaption>
                                    마이
                                </figcaption>
                            </MenuBtnWrapActive>
                        </FaqFooterMenu>
                    </FaqFooterMenuWrap>
                </FaqFooter>
            </FaqPageWrap>
        </Container>


    )

}