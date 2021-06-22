# typescript setting template

- npx create-react-app "생성할앱이름" --template typescript

# 깊은 복사와 얕은 복사

- {},[] 의 복사시 얕은복사(참조) 와 깊은복사(참조 끊음) 이 존재한다 Like a pointer in C
- JSON.parse(JSON.stringify("OBJECT")); 가 있긴한데 속도가 넘 느려서 쓰면안됨
- splice()는 1차깊이의 깊은 복사가 가능함, but 배열안에 오브젝트가 존재한다던지 더 깊은 단계의 obj가 있다면 얕은 복사가됨(조건부 깊은복사)

# component의 module화

# modal 기능의 예시
