1. node.js 설치 및 환경 변수 설정

https://nodejs.org/en/



2. electon 및 electron-builder 설치

```shell
npm install electron -g
npm install electron-builder -g
```

설치된 electron 버전 확인을 cmd 창에 아래와 같이 진행한다.

```shell
> electron --version
v15.3.0
```



3. package.json 작성

위에서 설치한 electron 버전 명시가 필요하다. 아니면 빌드시 `non of the possible electron modules are installed ` 에러가 발생한다.



4. main.js 작성



5. 프로젝트 폴더 내에서 빌드 명령어 입력

```shell
electron-builder
```

뒤에 옵션을 붙이지 않으면 디폴트로 window exe 파일이 빌드되었다.

mac os 용이 필요한 경우 `electrong builder build -m` 을 하면 되는데, 윈도우에서는 빌드할 수 없다는 에러 메세지가 뜬다.





\+ node webkit을 사용하는 경우

webkit 설치 (로컬 다운로드 및 환경변수 설정 필요)

https://cyberx.tistory.com/62

main에 index.html

node webkit을 사용하는 경우