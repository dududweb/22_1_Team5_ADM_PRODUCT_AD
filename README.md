# 응급코딩과 5팀
## 프로젝트 소개

### 커머스 어드민 상품등록 페이지

## 프로젝트 시연
![설로인](https://user-images.githubusercontent.com/91524565/156869371-b466c71b-81a8-4a2a-86a5-0d4b780bed99.gif)


<br/><br/>
## 배포 링크
<a href="https://fervent-dubinsky-3779cf.netlify.app/">배포 링크</a> 


<br/><br/>
## 개발 인원 및 기간

### 개발기간: 2022/1/27~2021/1/29

### 개발 인원: 프론트 4명

김재호, 김태영, 원소연, 황주영
<br/><br/>

## 적용 기술 및 협업 툴 

### 적용 기술

- Front-End: React.js, Styled-Component, React Router, Material ui - DatePicker
- Common: netlify

### 소통 툴

- Git, Github, Slack, <a href="https://www.notion.so/2-65fbc9c4e43e47a6a95df386f1a61402">Notion</a> 
 
<br/><br/>
## 역할
  
- [`김재호`] &nbsp; Frontend • 노출 및 판매기간 설정 / 상품 소개 이미지 , 구매자 추천 이미지
    - Radio 속성을 이용해 레이아웃 및 세팅
    - 클릭한 항목마다 Value 값을 State 에 저장
    - 공통 컴포넌트 바탕화면 중 background에 props를 내려서 사용해 레이아웃 구현
    - 공통 컴포넌트 저장하기 버튼 및 삭제버튼 제작


- [`김태영`] &nbsp; Frontend • 상품 기본 정보 등록란
    - 카테고리 데이터를 전달받아 리스팅 및 checkbox 선택 시 해당 카테고리를 선택 리스트 생성
    - 필터 태그 데이터를 전달받아 input value의 글자에 근접한 데이터 제공 및 태그 선택 시 리스트 생성
    - 상품명 입력시 상품코드 생성
    - 상품 소개 value를 state에 저장
    - 이미지 첨부 공통 컴포넌트로 작성
      - 이미지 첨부 시 다중선택 및 단일 선택하도록 로직 작성
      - 파일 선택 후 이미지 재첨부하면 기존 이미지는 제거
      - 첨부한 이미지 파일명 노출 및 삭제 기능
    - 초기세팅


- [`원소연`] &nbsp; Frontend • 상품 옵션
    - 공통 Template 컴포넌트, 상품 옵션 등록 레이아웃 구현
    - 공통 컴포넌트에 props를 내려받아 컴포넌트 재사용
    - 옵션 세트 생성 여부에 따른 등록 폼 조건부렌더링 구현
    - 옵션 추가 버튼 클릭 시 옵션 항목 추가 기능 구현
    - 할인율 toFixed() 사용하여 소수점 노출 제한
    - 상품 옵션 내용 input 값 배열에 저장


- [`황주영`] &nbsp; Frontend • 상품 정보공시
    - 공통컴포넌트에 props를 내려주어 (상품배송정보, 혜택정보, 기타설정) 레이아웃 구현. 
    - Toggle버튼 레이아웃 및 세팅
    - 상품정보공시 인풋 값 배열 저장
    - 추가항목 추가, 삭제 기능 구현

   
<br/><br/>
## 설치 및 시작하는 법
- 파일 클론 받기
- git clone https://github.com/Moro-yong/22_1_Team5_ADM_PRODUCT_AD.git
- npm install
- npm start 
</br>






