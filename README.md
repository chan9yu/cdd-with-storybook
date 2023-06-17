# storybook + react

storybook + react

### 하양식 컴포넌트 개발 (Top -> Down)

1. 이미 만들어진 페이지 혹은 큰 단위부터 만들어 놓은 경우
1. 그것들을 하나하나 분리하여 계층을 구성한다.
1. 컴포넌트를 만들 때 "pnpm dev" 즉! 사용자가 보는 동일한 환경으로 개발한다.
   > 개발자가 아닌 정말 출시된 사용자를 위해 개발을 하며 컴포넌트를 분리

<br />

### 상양식 컴포넌트 개발 (Down -> Top)

1. 하나의 세트를 구성한다 => `사용될` 컴포넌트 + CSS 스타일링 + `사용될` 스토리
1. 사용될 컴포넌트를 내보내고 스토리에서 사용될 컴포넌트를 가져온다.
   > 컴포넌트(Component.tsx), 스토리(Component.stories.tsx)
1. 사용될 컴포넌트들을 Storybook이 무엇인지 모르게 만들어주는 것이 좋다.
1. 다른 개발자에게 내 컴포넌트