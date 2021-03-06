import Head from "next/head";
export default function PaymentPage() {
  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: "마우스",
        amount: 1000,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", // 모바일 결제 후 리다이렉트 될 주소
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
        } else {
          // 결제실패
        }
      }
    );
  }
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제금액 : <input type="text" />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
