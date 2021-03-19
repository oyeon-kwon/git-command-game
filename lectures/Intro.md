# slide_2) 버전 관리 시스템의 필요성

최종.jpg 진짜 최종.jpg…. 버전관리로 인해서 고통받는 디자이너, 대학원생들의 모습 이미지 첨부
[규하님이 제공해주신 짤](https://img.jjang0u.com/data3/chalkadak/160/202006/02/159110225319745.gif)
[진짜 최종 짤](https://www.google.com/url?sa=i&url=https%3A%2F%2Fdvdprime.com%2Fg2%2Fbbs%2Fboard.php%3Fbo_table%3Dcomm%26wr_id%3D22300045&psig=AOvVaw2Swx3DHoTtI4pqbOmPK_7O&ust=1616128248223000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDew4SBue8CFQAAAAAdAAAAABAD)

# script_2)
최종. 진짜 최종 이런 짤들 많이들 보셨죠? 디자이너들이 보통 이런걸로 많이들 고통받고 계신데요.
여러분들은 작업하던 파일을 편집 전 상태로 되돌리고 싶을 때 어떻게 하고 있나요?
가장 간단한 방법은 편집하기 전에 파일을 미리 복사해두는 것입니다. 파일과 폴더명 뒤에 편집한 날짜를 붙여주는 방식이죠. 하지만 파일을 편집할 때마다 매번 손수 복사하는 일은 번거롭기도 하고 실수할 가능성도 많을거예요.

# slide_3) 버전 관리 시스템의 필요성
여러 사람들이 작업하는 이미지 삽입 -> 버전 관리!

# script_3)
만약 여러 사람이 같은 파일로 동시에 작업하거나, 이전 상태로 다시 되돌려야 할 경우가 생긴다면 어디부터 손대야할 지 감을 잡기 힘들 겁니다. 버전관리를 할 수 있다면, 손쉽게 이전 상태로 돌아갈 수 있습니다.

# slide_4) 버전 관리를 사용하는 이유
1. 파일이 변경되면 변경 이력을 저장할 수 있다.
2. 이전 버전으로 돌아갈 수 있다.
3. 어떤 변경 사항이 발생했는지 알아보기 쉽다.
4. 협업하기에 좋다.
5. 백업용

# script_4)
 버전 관리라는 것 자체가 각 버전 별로 변경된 이력들을 저장하는 작업이라고 할 수 있습니다.
 두 번째로 다시 이전 버전으로 되돌아가야 하는 상황이 발생할 경우 이전의 변경 이력들이 기록되어 있으니 되돌아가는 것이 가능하겠죠? 그리고 변경 사항을 저장할 때는 어떤 사항이 변경되었는지 코멘트를 꼭 작성을 해야하는데요. 그렇기 때문에 누가 어떤 파일을 추가, 수정, 삭제했는지도 확인이 가능하다는 점도 중요한 장점입니다.
  Git으로 관리되는 파일은 Github, GitLab, Bitbucket 등 의 여러가지 원격 저장소를 이용해서 백업과 협업을 할 수 있습니다.


# slide_5) 가장 강력하고 대중적인 버전 관리 시스템 : Git
<img width="573" alt="스크린샷 2021-03-12 오후 6 45 19" src="https://user-images.githubusercontent.com/61301574/110922526-20c95b00-8363-11eb-9b55-922f11af40ec.png">

# script_5)
Git 이란 개발자의 코드를 효율적으로 관리하기 위해서 개발된 ‘분산형 버전 관리 시스템’ 입니다.
버전 관리 시스템의 기본적인 모습은 이 그림과 같습니다.

이 그림 처럼 하나하나 날짜별로 어떤 파일이 어떻게 바뀌었는지 확인이 가능합니다. 이렇게 특정 시점에 생성된 백업 복사본을 스냅샷이라고 하는데요. 이렇게 하나 하나 스냅샷을 만들어 주는 작업을 커밋이라고 합니다.

커밋이라는 기능을 통해서 변경사항에 대한 스냅샷이 만들어지고 이전의 기록들에 대한 추적이 가능하다면 회사에서 협업을 할 때 굉장히 유용하겠죠?

# slide_6) 가장 강력하고 대중적인 버전 관리 시스템 : Git
<img width="557" alt="스크린샷 2021-03-12 오후 6 45 43" src="https://user-images.githubusercontent.com/61301574/110922553-27f06900-8363-11eb-8bed-59904232299f.png">

# script_6)
이렇게 어떤 부분이 어떻게 바뀌었는지 한눈에 확인할 수 있어요. 꼭 코드가 아니더라도 텍스트 파일도 이렇게 변경 사항을 하이라이트로 확인할 수 있다는 것이 정말 편리하죠?

Git에서는 소스 코드가 변경된 이력을 쉽게 확인할 수 있고, 특정 시점에 저장된 버전과 비교하거나 특정 시점으로 되돌아갈 수도 있습니다.

# slide_7) Git과 GitHub
Git
소스 코드 기록을 관리하고 추적할 수 있는 버전 관리 시스템입니다.
Github
Git Repository를 관리할 수있는 클라우드 기반 서비스입니다.

깃 폴더 + 여러 사람 공유 + 협업하는 다이어그램 만들기

# script_7)
Git을 통해서 버전관리를 할 수 있다는 것은 알겠는데 그렇다면 github은 무엇일까요?
두 가지를 비교해보자면 
Git은 소스 코드 기록을 관리하고 추적할 수 있는 버전 관리 시스템입니다.
Github은 Git Repository를 관리할 수 있는 클라우드 기반 서비스입니다.

즉 Github을 통해서 Git으로 버전 관리하는 폴더에 대해서 여러 사람들이 공유하고 접근할 수 있는 것이죠. 한 마디로 개발자들의 SNS입니다.
Github에서 Code Review 등을 통해 협업이 가능하고, 수많은 오픈소스 프로젝트들이 GitHub로부터 호스팅되고 있어서, 누구든 자유롭게 기여할 수 있습니다.

# slide_8) Git과 Github
Github: social platform for git users
react의 Github 스크린샷 혹은 웹 브라우저로 보여주기

# script_8)
MS는 2018년에 무려 8천억원으로 github을 인수했습니다. 대체 github가 어떤 서비스를 제공하길래 세계 최대의 다국적 소프트웨어 업체가 거금을 들여 인수했을까요?
유명 오픈소스 라이브러리들 공식 문서의 귀퉁이에 문어 모양 아이콘이나 Github이라는 링크가 있는 것을 보신 적이 있나요? 이게 바로 오픈 소스의 소스 코드를 깃헙에 공유한 링크인데요.
ex. React 같은 경우에도 이렇게 오픈 소스로 공유가 되어 있고 여기에 contribute을 할 수 있어요. 1500여명의 contributors 가 있다는 것이 보이죠.
그리고 어떤 수정사항이 있는지 커밋 기록을 통해서 확인할 수 있고 변경된 코드도 볼 수 있습니다. 

# slide_9) Git Repository
Repository: 저장소. 말 그대로 파일이나 폴더를 저장해 두는 곳
Remote Repository: 원격 온라인 서버 상의 저장소, 여러 사람이 함께 공유 가능
Local Repository: 내 컴퓨터의 저장소, 내 개인 전용 저장소

도식화해서 표현

# script_9)
내가 작업하는 소스 코드 폴더가 버전 관리를 받게 하기 위해서는 내 폴더를 Git의 관리 아래에 두어야 하는데요. Git의 관리 아래에 있는 폴더를 Git repository 라고 합니다. Git repository 는 Remote Repository와 Local Repository 두 종류의 저장소를 제공합니다. 작업을 할 때는 Local Repository에서 작업하닥 내 작업한 코드를 공유하려면 Remote Repository에 업로드해 여러 사람이 함께 공유할 수 있습니다. 다른 사람이 Remote Repository에 올려 놓은 소스 코드를 내 Local Repository 로 가지고 올 수도 있습니다. 

# slide_10) Case study. React 프로젝트에 contributor가 되고 싶어요!
<img width="549" alt="스크린샷 2021-03-12 오후 6 46 04" src="https://user-images.githubusercontent.com/61301574/110922601-39397580-8363-11eb-8166-88d8b326e85d.png">

# script_10)
 페이스북에서 제공하는 React 라는 라이브러리가 있는데요. React 프로젝트는 온라인 상에 올라와있는 오픈소스입니다. 즉 Remote Repository에 소스코드가 올라와 있다는 것이죠. React 프로젝트에 contribute을 하기 위해서는 먼저 React 원격 저장소를 내 원격 저장소로 가지고 오는 작업이 필요합니다. 그 과정을 Fork 라고 합니다.

 이제 포크를 하고나면 나의 원격 저장소에 React 코드를 옮겨온 상태입니다. 이 코드를 수정하기 위해서는 내 컴퓨터로 가져오는 작업이 또 필요할텐데요. 그 과정을 clone 이라고 합니다. 원격 저장소에 있는 코드를 clone 해서 내 컴퓨터로 가지고 올 수 있어요.

# slide_11)Case study. React 프로젝트에 contributor가 되고 싶어요!

<img width="566" alt="스크린샷 2021-03-12 오후 6 46 26" src="https://user-images.githubusercontent.com/61301574/110922625-4191b080-8363-11eb-8e44-51b91a671096.png">

# script_11)
내 컴퓨터에서 React 소스코드 변경 작업을 완료했습니다. 그렇다면 이 변경된 내용을 원격 저장소에 반대로 올려주는 작업이 필요하겠죠? 이 과정을 push 라고 합니다. Local Repository에 기록해 놓은 커밋 기록을 Remote Repository로 업로드할 수 있습니다.  GitHub에는 pull request라는 기능이 있어서 내가 제안한 코드 변경사항에 대해 반영 여부를 요청할 수 있습니다.


# slide_12) Case study. React 프로젝트에 contributor가 되고 싶어요!
<img width="574" alt="스크린샷 2021-03-12 오후 6 46 35" src="https://user-images.githubusercontent.com/61301574/110922649-46566480-8363-11eb-8dd2-ecd7b4f625a6.png">

# script_12)
Local Repository에서 변경된 사항을 Remote Repository 에 업로드 하기 위해서는 Push를 사용했었죠? 그런데 반대 상황도 발생할거예요. Remote Repository에서 뭔가 변경되었을 때 로컬로 가져오는 작업도 가능합니다. 

# slide_13) amazing GIT

# script_13)
Github을 통해서 우리도 직접 페이스북 라이브러리의 소스 코드에 기여를 할 수 있다니 정말 신기하죠? 

전세계 개발자들 대다수는 Git을 사용하고 있어요. 그리고 상당수의 기업들에서 IT개발자들을 채용할 때 개인 Github 계정을 요청하기도 합니다.

작업한 프로젝트들을 내 Github 계정에 올려 놓으면 개발자 구직을 할 때 포트폴리오로도 활용할 수가 있겠죠?