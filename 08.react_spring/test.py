<!DOCTYPE html>
<html>
  <head>
    <title>Floor Plan</title>
    <style>
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .floor-plan {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        grid-gap: 10px;
        font-size: 16px;
        text-align: center;
      }
      .room {
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .details {
        width: 300px;
        border: 1px solid black;
        padding: 10px;
        font-size: 14px;
      }
      .arrow {
        margin-top: 10px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div>
        <div class="floor-plan">
          <div class="room">원칙</div>
          <div class="room">수인자</div>
          <div class="room"></div>
          <div class="room"></div>
          <div class="room">산</div>
          <div class="room"></div>
          <div class="room"></div>
          <div class="room">가정비</div>
          <div class="room"></div>
        </div>
        <div class="arrow">↓ 물 도대로 분석할 여행지 추천</div>
        <div class="details">
          <p>여행지</p>
          <p>
            설명 : 그렇에도 지름길 피하게 되지를<br />
            살피고 있다.
          </p>
          <p>김창기</p>
          <p>이 여행지와 맞는 음악</p>
          <p>가수 : 제목</p>
          <p>동유리기기</p>
          <p>속소보기</p>
        </div>
      </div>
    </div>
  </body>
</html>
