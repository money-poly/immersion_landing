import "../App.css";

const IcColWidget = (props) => {
  return (
    <div className="flex flex-col whitespace-pre-line mx-8">
      <div className="flex justify-center w-[263px] h-[263px] rounded-full bg-[#395540]">
        <img
          className="w-[123px]"
          src={`ic/ic_${props.icName}.svg`}
          alt="아이콘"
        />
      </div>
      <h5 className="mt-[50px] mb-[30px] text-[24px] font-medium text-center">
        {props.title}
      </h5>
      <h5 className="text-[24px] font-light text-center">
        {props.description}
      </h5>
    </div>
  );
};

const CircleColWidget = (props) => {
  return (
    <div className="relative flex flex-col items-center mx-[26px]">
      <div className="relative w-[688px] h-[647px] mt-[235px] px-[56px] pt-[87px] rounded-[10px] bg-[#385541] drop-shadow-[0_4px_30px_rgba(0,0,0,0.25)] flex flex-col justify-center text-[26px] font-light text-white">
        <div className="flex flex-row my-[16px]">
          <h5 className="w-[36px] h-[36px] text-[24px] font-medium align-middle bg-white rounded-full mr-[64px] text-[#385541] ">
            1
          </h5>
          {props.des1}
        </div>
        <div className="flex flex-row my-[16px]">
          <h5 className="w-[36px] h-[36px] text-[24px] font-medium align-middle bg-white rounded-full mr-[64px] text-[#385541] ">
            2
          </h5>
          {props.des2}
        </div>
        <div className="flex flex-row my-[16px]">
          <h5 className="w-[36px] h-[36px] text-[24px] font-medium align-middle bg-white rounded-full mr-[64px] text-[#385541] ">
            3
          </h5>
          {props.des3}
        </div>
        <div className="flex flex-row my-[16px]">
          <h5 className="w-[36px] h-[36px] text-[24px] font-medium align-middle bg-white rounded-full mr-[64px] text-[#385541] ">
            4
          </h5>
          {props.des4}
        </div>
        <div className="flex flex-row my-[16px]">
          <h5 className="w-[36px] h-[36px] text-[24px] font-medium align-middle bg-white rounded-full mr-[64px] text-[#385541] ">
            5
          </h5>
          {props.des5}
        </div>
      </div>
      <img
        className="absolute w-[322px] border-[#FCFCFC] border-[15px] rounded-full bg-[#FCFCFC] drop-shadow-[0_4px_40px_rgba(0,0,0,0.25)] overflow-x-hidden"
        src={`img/${props.img}.png`}
      />
    </div>
  );
};

const CircleRowWidget = (props) => {
  return (
    <div className="relative flex flex-row items-center drop-shadow-[0_4px_35px_rgba(0,0,0,0.15)] my-[50px]">
      <div className="absolute w-[216px] h-[216px] z-10 bg-white rounded-full flex justify-center items-center">
        <img className="w-[152px]" src={`img/${props.img}.png`} />
      </div>
      <div className="relative w-[665px] h-[152px] ml-[142px] pl-[142px] bg-[#F5F5F5] rounded-[10px] flex justify-start items-center">
        {props.desc}
      </div>
    </div>
  );
};

const IcMoreWidget = (props) => {
  return (
    <div className="drop-shadow-[0_4px_45px_rgba(0,0,0,0.25)] mx-[40px]">
      <div className="w-[343px] h-[364px] bg-white rounded-t-[10px] flex justify-center items-center">
        <img src={`ic/${props.img}.svg`} />
      </div>
      <div className="w-[343px] h-[132px] flex justify-center items-center bg-[#385541] rounded-b-[10px]">
        {props.desc}
      </div>
    </div>
  );
};

function WebMain() {
  return (
    <div className="App overflow-x-hidden whitespace-nowrap">
      <div id="page1" className="relative">
        <img className="relative min-w-[1920px]" src="img/bg_img.png" />
        <div className="absolute top-0 left-0 ml-[12%] mt-[12%] text-left text-white font-medium">
          <h1 className="text-[78px] whitespace-nowrap">밤 7시만 되면</h1>
          <h1 className="text-[78px] whitespace-nowrap">풀리는 마감 상품,</h1>
          <h1 className="text-[78px] whitespace-nowrap">이렇게 저렴하다고?</h1>
          <button className="w-[344px] h-[72px] mt-[80px] bg-white rounded-[10px] text-[36px] font-medium text-[#395540]">
            <span className="font-bold">광생 </span>알아보기
          </button>
        </div>
      </div>

      <div
        id="page2"
        className="flex flex-row justify-center items-center h-[884px] p-20 bg-[#f1f1f1]"
      >
        <img
          className="w-[826px] h-fit"
          src="img/p2_img.png"
          alt="말풍선 이미지"
        />

        <div className="w-40"></div>

        <div className="text-left font-light whitespace-nowrap">
          <h3 id="p2_title" className="text-[64px]">
            다들
            <br />
            <span className="font-normal">이런 경험</span>
            <br />
            있지 않으세요?
          </h3>

          <div className="h-[60px]"></div>

          <h5 id="p2_description" className="text-[28px]">
            저희 <span className="font-medium">'광생'</span>은 이러한 불편함을
            <br />
            <span className="font-medium">줄여드리기 위해</span> 태어났어요!
          </h5>
        </div>
      </div>

      <div
        id="page3"
        className="flex flex-row justify-center items-center h-[884px] p-20"
      >
        <div className="text-left font-light">
          <h3 id="p3_title" className="text-[58px]">
            잠깐, <span className="font-medium">광생</span>이 무슨 뜻이죠?
          </h3>
          <div className="h-[34px]"></div>
          <h5 id="p3_description" className="text-[28px]">
            악어와 악어새가 공생하듯,{" "}
            <span className="font-medium">마감 할인 음식을 공유</span>함으로써
            <br />
            고객과 점주간의{" "}
            <span className="font-medium">공생을 도모하자는 뜻</span>이
            담겨있어요!
          </h5>
        </div>

        <div className="w-40"></div>

        <img className="w-[649px]" src="img/p3_img.png" alt="광생 아이콘" />
      </div>

      <div id="page4" className="flex flex-col justify-center h-[3200px]">
        <div className="relative h-[952px] bg-gradient-to-b from-[#96C0A021]">
          <div className="top-0 z-10">
            <h4 className="text-[42px] font-light mt-[124px] mb-[45px]">
              📌짠테크족이 알려주는{" "}
              <span className="font-medium">광생 100% 활용법</span>
            </h4>
            <h5 className="text-[28px] font-light">
              <span className="font-medium">마감상품</span>을{" "}
              <span className="font-medium">저렴하게</span> 구매하고 싶어요!
            </h5>

            <div>
              <div className="relative flex flex-row items-center justify-center">
                <div className="top-[20px]">
                  <img
                    className="relative w-[661px] mr-[210px]"
                    src="img/p4_img_1.png"
                    alt="앱내화면"
                  />
                  <img
                    className="absolute w-[661px] top-[700px] ml-[210px]"
                    src="img/p4_img_2.png"
                    alt="앱내화면"
                  />
                  <div className="absolute top-[220px] ml-[500px] flex flex-col text-[24px] font-light">
                    <h5 className="font-medium text-left">
                      '지도'탭에서 마감 상품을 할인하고 있는
                      <br />
                      마트, 음식점을 확인해요.
                    </h5>

                    <div className="mt-[45px]">
                      <div className="flex flex-row">
                        <h5 className="mr-[8px]">👉</h5>
                        <h5 className="text-left">
                          반경 3km 이내에서 마감 상품을
                          <br />
                          할인하는 곳을 보실 수 있어요.
                        </h5>
                      </div>

                      <div className="flex flex-row mt-[30px]">
                        <h5 className="mr-[8px]">👉</h5>
                        <h5 className="text-left">
                          해당 게시물로 이동하면 현황을
                          <br />
                          파악할 수도 있답니다!
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[1020px] ml-[20px] flex flex-col text-[24px] font-light">
                    <h5 className="font-medium text-left">
                      해당 가게에 '픽업주문'을 신청해요.
                    </h5>

                    <div className="mt-[45px]">
                      <div className="flex flex-row">
                        <h5 className="mr-[8px]">👉</h5>
                        <h5 className="text-left">
                          픽업 준비가 완료되면
                          <br />
                          푸시알림을 보내드려요.
                        </h5>
                      </div>

                      <div className="flex flex-row mt-[30px]">
                        <h5 className="mr-[8px]">👉</h5>
                        <h5 className="text-left">
                          결제 수단 (만나서 카드결제/앱 결제)
                          <br />
                          선택이 가능해요!
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="page5" className="flex flex-col items-center">
        <h4 className="text-[28px] font-light">
          <span className="font-medium">이웃들과 </span>서비스를{" "}
          <span className="font-medium">공유</span>하고 싶어요!
        </h4>

        <div className="flex flex-row mt-[120px] mb-[140px]">
          <img
            className="w-[434px] mr-[39px] ml-[39px]"
            src="img/p5_img_1.png"
            alt="앱내화면"
          />
          <img
            className="w-[434px] mr-[39px] ml-[39px]"
            src="img/p5_img_2.png"
            alt="앱내화면"
          />
        </div>

        <div className="flex flex-row justify-evenly w-full px-24">
          <IcColWidget
            icName="cart"
            title={`게시판 내\n‘공동구매’ 카테고리`}
            description={`대량 음식을 공동구매하여\n식비를 절약할 수 있어요.`}
          />
          <IcColWidget
            icName="love"
            title={`게시판 내\n‘음식나눔’ 카테고리`}
            description={`소량으로 구매하기 어려운\n음식을 공유할 수 있어요.`}
          />
          <IcColWidget
            icName="temp"
            title={`호스트의\n광생 온도를 확인해요.`}
            description={`음식을 공유하려는 분의\n신뢰도를 확인할 수 있어요.`}
          />
        </div>
      </div>

      <div id="page6" className="mt-[287px] flex flex-col items-center">
        <h3 className="text-[58px] font-light text-center">
          악어새와 악어는
          <br />
          <span className="font-medium">어떻게 공생</span>하나요?
        </h3>

        <div className="flex flex-row mt-[100px]">
          <CircleColWidget
            img="p6_img_1"
            des1={
              <h5 className="text-start font-light">
                저렴한 가격의{" "}
                <span className="font-medium">
                  할인 상품을 1초만에
                  <br />
                  확인
                </span>
                할 수 있어요.
              </h5>
            }
            des2={
              <h5 className="text-start font-light">
                소량으로 구매하기 힘든{" "}
                <span className="font-medium">
                  음식을
                  <br />
                  이웃과 공유
                </span>
                할 수 있어요.
              </h5>
            }
            des3={
              <h5 className="text-start font-light">
                때마다 달라지는{" "}
                <span className="font-medium">
                  마트 할인상품을 실시간으로 <br />
                  확인
                </span>
                할 수 있어요.
              </h5>
            }
            des4={
              <h5 className="text-start font-light">
                가까운 거리에 있는{" "}
                <span className="font-medium">
                  식당이나 마트에서
                  <br />
                  저렴한 음식
                </span>
                을 구매할 수 있어요.
              </h5>
            }
            des5={
              <h5 className="text-start font-light">
                끼니를 거르고 싶을 정도로 피곤한{" "}
                <span className="font-medium">
                  저녁 시간대,
                  <br />
                  보다 싸고 편하게 식사를 해결
                </span>
                할 수 있어요.
              </h5>
            }
          />
          <CircleColWidget
            img="p6_img_2"
            des1={
              <h5 className="text-start font-light">
                유통기한{" "}
                <span className="font-medium">마감이 임박한 음식을 상품화</span>
                하여
                <br />
                <span className="font-medium">마진을 늘릴 수 있어요.</span>
              </h5>
            }
            des2={
              <h5 className="text-start font-light">
                픽업 주문 시{" "}
                <span className="font-medium">요청시간을 설정</span>할 수 있어서
                <br />
                <span className="font-medium">여유롭게 준비</span>할 수 있어요.
              </h5>
            }
            des3={
              <h5 className="text-start font-light">
                또 다른 판매창구를 관리해야한다는
                <br />
                <span className="font-medium">
                  심리적 부담감을 줄일 수 있어요.
                </span>
              </h5>
            }
            des4={
              <h5 className="text-start font-light">
                <span className="font-medium">환경친화적 이미지</span>와 좋은{" "}
                <span className="font-medium">혜택의 제공</span>으로
                <br />
                <span className="font-medium">고객 유입률</span>을 늘릴 수
                있어요.
              </h5>
            }
            des5={
              <h5 className="text-start font-light">
                음식물 쓰레기를 줄임으로써{" "}
                <span className="font-medium">
                  지역사회를
                  <br />
                  건강하게{" "}
                </span>
                만들 수 있어요!
              </h5>
            }
          />
        </div>
      </div>

      <div id="page7" className="flex flex-col items-center mt-[363px]">
        <h3 className="text-[58px] font-light text-center mb-[134px]">
          <span className="font-medium">지구</span>와
          <span className="font-medium">지갑</span>을 지키는
          <span className="font-medium">광생</span>
        </h3>

        <CircleRowWidget
          img="p7_img_1"
          desc={
            <h6 className="text-start font-light text-[24px]">
              <span className="font-medium">
                '당신은 방금 지구를 지켰어요'{" "}
              </span>
              환경을 생각하는
              <br />
              행동을 실천하고 싶은 당신
            </h6>
          }
        />
        <CircleRowWidget
          img="p7_img_2"
          desc={
            <h6 className="text-start font-light text-[24px]">
              짠테크(짜다+재태크)시대에{" "}
              <span className="font-medium">'마감할인상품'</span>
              <br />
              서비스를 이용해 <span className="font-medium">절약</span>하고자
              하는 당신
            </h6>
          }
        />
        <CircleRowWidget
          img="p7_img_3"
          desc={
            <h6 className="text-start font-light text-[24px]">
              혼밥러, 자취생 <span className="font-medium">'음식 공유'</span>
              로 고민없이
              <br />
              식사하고자 하는 당신
            </h6>
          }
        />
      </div>

      <div
        id="page8"
        className="flex flex-col items-center mt-[234px] mb-[300px]"
      >
        <h4 className="text-[36px] font-light mb-[108px]">
          + 더 나아갈 <span className="font-medium">광생</span>
        </h4>
        <div className="flex flex-row">
          <IcMoreWidget
            img="ic_docx"
            desc={
              <h6 className="text-[24px] font-light text-white">
                홈페이지를 통한<span className="font-medium">1초 가입</span>
              </h6>
            }
          />
          <IcMoreWidget
            img="ic_plant"
            desc={
              <h6 className="text-[24px] font-light text-white">
                광생을 통해
                <br />
                <span className="font-medium">나만의 다마고치</span>를 키워봐요!
              </h6>
            }
          />
          <IcMoreWidget
            img="ic_truck"
            desc={
              <h6 className="text-[24px] font-light text-white">
                <span className="font-medium">로봇 라이더가 배달</span>해주는
                <br />
                마감 음식 서비스
              </h6>
            }
          />
        </div>
      </div>

      <footer className="h-[260px] bg-gray-900 text-white text-start px-[20%] py-[20px] flex flex-row justify-between items-center whitespace-nowrap">
        <div>
          <h5 className="text-[20px] font-bold my-[10px]">광생</h5>
          <h6 className="text-[16px] text-gray-300">
            사업자 등록번호: 0000-00-00000 | 대표: ㅇㅇㅇ
          </h6>
          <h6 className="text-[16px] text-gray-300">
            호스팅 서비스: 광생 | 통신판매업 신고번호: 000-0000-00000
            사업자정보확인
          </h6>
          <h6 className="text-[16px] text-gray-300">
            주소: 서울특별시 노원구 광운로 20 광운대학교 새빛관
          </h6>
          <h6 className="text-[16px] text-gray-300">
            고객센터: 서울특별시 노원구 광운로 20 광운대학교 새빛관
          </h6>
        </div>
        <div className="text-end">
          <h6 className="text-[16px] text-gray-300">서비스 이용약관</h6>
          <h6 className="text-[16px] text-gray-300">개인정보 처리방침</h6>
        </div>
      </footer>
    </div>
  );
}

export default WebMain;