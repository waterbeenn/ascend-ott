import appstore from '../img/common-layout/footer-iPhone.png';
import playstore from '../img/common-layout/footer-android.png';
import { BsTelephone } from 'react-icons/bs';

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <h2 className="footer-logo">Ascend</h2>
                    <ul>
                        <li>대표이사 | 김어센</li>
                        <li>사업장주소 | 서울특별시 서초구 서초대로77길 41 대동2빌딩 9층</li>
                        <li>사업자 등록번호 안내 | 123-45-67890</li>
                        <li>통신판매업 신고 | 2025-서울강남-00000호</li>
                        <li>개인정보보호책임자 | 김이젠</li>
                        <li>이메일주소 | support@acsend.com </li>
                    </ul>

                    <div className="app-icons">
                        <img src={appstore} alt="Appstore" />
                        <img src={playstore} alt="playstore" />
                    </div>
                </div>
                <div className="footer-right">
                    <div className="menus">
                        <div className="footer-menu">
                            <h3>회사소개</h3>
                            <ul>
                                <li>스토리</li>
                                <li>피드백</li>
                                <li>집에서의 생활</li>
                                <li>입점·제휴 문의</li>
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h3>고객지원</h3>
                            <ul>
                                <li>쇼핑하기</li>
                                <li>배송조회</li>
                                <li>교환환불</li>
                                <li>구독 환불정책</li>
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h3>약관·법적고지</h3>
                            <ul>
                                <li>이용약관</li>
                                <li>관리방침</li>
                                <li>청소년보호방침</li>
                                <li>개인정보처리방침</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <div className="top">
                            <h3>고객센터</h3>
                            <div className="tel">
                                <BsTelephone className="icon-phone" />
                                <p className="phone">1234-5678</p>
                            </div>
                            <p className="contact-time">주중 오전 9시 - 오후 6시</p>
                        </div>
                        <div className="mid">
                            <ul>
                                <li>
                                    <p>1:1문의하기</p>
                                </li>
                                <li>
                                    <p>자주 묻는 질문</p>
                                </li>
                            </ul>
                        </div>
                        <div className="copy">© 어센드. All rights reserved</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
