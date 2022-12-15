
const today = new Date().toISOString().split("T")[0];
const category = ["전체", "안드로이드 개발", "코딩테스트 공부"];
//게시물 클래스
class post {
    constructor(img = "./imgs/defaultImg.jpg", title = "", tag = "", desc = "", date = today) {
        this.img = img
        this.title = title;
        this.tag = tag;
        this.desc = desc;
        this.date = date;
    }
}
//전체 게시물 목록
var lists = [
    new post(
        //게시물 이미지  -> undefined 시에는 기본이미지가 들어간다.
        undefined,
        //게시물 명
        "백준 문제 풀이- 1271번",
        // 카테고리 태그
        `#${category[2]}`,
        // 내용
        `원래는 연세대 신입생 문제 2번을 풀으려고 했으나,, 

갑자기 이 문제가 눈에 들어와서 먼저 풀고, 그 다음에 2번을 포스팅 할까 합니다.

문제는 매우 심플합니다(Input을 보기 전까지는요,,,,)

<h3>문제</h3>        갑부 최백준 조교는 동전을 최소로 바꾸는데 성공했으나 김재홍 조교가 그 돈을 발견해서 최백준 조교에게 그 돈을 나누자고 따진다.
        
        그 사실이 전 우주로 알려지자 우주에 있던 많은 생명체들이 자신들에게 돈을 분배해 달라고 당장 달려오기 시작했다.

        프로토스 중앙 우주 정부의 정책인,‘모든 지적 생명체는 동등하다’라는 규칙에 입각해서 돈을 똑같이 분배하고자 한다. 

        한 생명체에게 얼마씩 돈을 줄 수 있는가?

        또, 생명체들에게 동일하게 분배한 후 남는 돈은 얼마인가?
        
        
<h3>문제 출처 </h3>
        <a href= "https://www.acmicpc.net/problem/1271">https://www.acmicpc.net/problem/1271</a>
    
        
        <h3>Input</h3>
        
        첫째 줄에는 최백준 조교가 가진 돈 n과 돈을 받으러 온 생명체의 수 m이 주어진다. 
        
        (1 ≤ m ≤ n ≤ 101000, m과 n은 10진수 정수)  ->  ^^,, 중요한 포인트  
        
        
        <h3>Output</h3>
        
        첫째 줄에 생명체 하나에게 돌아가는 돈의 양을 출력한다. 그리고 두 번째 줄에는 1원씩 분배할 수 없는 남는 돈을 출력한다.
    
        
        <h3>사용 언어 </h3>
        JAVA 

        <h3>풀이 전략</h3>
        
        1. 두 수(m,n)를 입력 받아야 한다. 그런데 입력 값이 평소 생각하던  정수형인 int(약 -109  ≤ int ≤ 약 109 )와
        
        long(약 -1018 ≤ long ≤ 약 1018)의 범위를 훌쩍 넘어버리는 큰 수임을 주목해야한다. 
        
        => 큰 수를 처리 할 수 있는 무언가가 필요 (자바에서는 큰 수를 다룰 수 있는, BigInteger 객체를 제공함을 알게 되었고 코드에서도 이를 사용한다.)
        

        2. 하나에게 돌아가는 돈의 양은  나눗셈으로, 1원씩 분배할 수 없는 남는 돈은  나머지를 이용하여 계산한다.
        
        +) BigInteger 객체에 대하여..
        
        - 자바API에서 제공하는 객체로서, 다른 자료형과 다르게 무한대 범위의 숫자를 다룰 수 있는 것이 특징이다.
        
        <h3>주요 메소드</h3>
        
        add(Biginteger val)        // 더하기
        
        subtract(Biginteger val)  // 빼기
        
        mutiply(Biginteger val)   // 곱하기 
        
        divide(Biginteger val)    // 나누기
        
        equals(Object x)           // 값이 같은지 비교
        
        등이 있다.
        
        <h3>참고 블로그</h3>
        <a href= "https://itellyhood.tistory.com/63">https://itellyhood.tistory.com/63</a> `,
        // 작성일자
        "2022-12-10"),
    new post(
        //게시물 이미지    
        "./imgs/img2.jpg",
        //게시물 명
        "백준 문제풀이 21866번",
        // 카테고리 태그
        `#${category[2]}`,
        // 내용
        `Baekjoon Online Judge에서 발견한 

2021 연세대학교 신입생 프로그래밍 경진대회 Open 문제를 이번에 풀어보고자 하였다. 

먼저 오늘은 첫 번째 문제를 다뤄보려고 한다.


<h3>문제</h3>        연세대학교 컴퓨터과학과 프로그래밍 경진대회는 2015년부터 지금까지 총 6번 진행되었다.

        지금까지 진행했던 대회의 수상자는 대부분 고학번 학생들이었다. 

        이러한 이유로 국렬이는 신입생들에게 알고리즘 문제 풀이에 대한 동기를 부여하기 위해 2021 연세대학교 신입생 프로그래밍 경진대회를 열게 되었다.

        국렬이는 가능한 많은 사람들이 대회에 많이 참여하는 것을 원하기 때문에, 대회에 참가한 학생들 중 수상자를 제외한 나머지 사람들에게 추첨을 통해서 
        커피를 나누어주려고 한다. 대회에 신청만 하고 참여하지 않는 학생들이 커피를 받는 상황을 막기 위해 총점이 일정 점수 이상인 학생들만을 대상으로 추첨을 하려고 한다.

        2021 연세대학교 신입생 프로그래밍 경진대회는 총 9문제로 구성되어 있으며, 
        각 문제 당 최대 점수는 100점, 100점, 200점, 200점, 300점, 300점, 400점, 400점, 500점이다. 

        만약 받은 점수의 합계가 100점 이상이라면 추첨 대상자가 된다.

        몇몇 참가자들이 상금을 받기 위해서 자신들의 점수를 조작하는 상황이 발생했다. 

        만약 어떤 학생이 각 문제에서 받은 점수 중, 
        그 문제의 최대 점수를 넘어가는 것이 한 개라도 있다면 그 학생을 해커로 간주하려고 한다. 해커로 간주된 학생에게는 커피를 무조건 나눠줄 예정이다.

        어떤 학생이 각 문제에서 얻은 점수가 주어졌을 때, 해당 학생이 추첨 대상자인지, 추첨 대상자가 아닌지, 혹은 해커인지를 구분해보자.

        
<h3>문제 출처 </h3>
        <a href= "https://www.acmicpc.net/problem/21866">https://www.acmicpc.net/problem/21866</a>

<h3>Input</h3>
        첫 번째 줄에 9개의 정수가 주어진다. 각 정수는 

        0이상 1000 이하의 정수다.  // 이 부분은 신경쓰지 않아도 괜찮다. 사용자가 입력하는 값이기 때문이다.

        각 정수는 해당 학생이 각 문제에서 얻은 점수를 의미한다.


<h3>Output</h3>
        커피 추첨 대상자가 아니라면 none을 출력하고, 해커라면 hacker를 출력한다. 그 외의 경우에는 draw를 출력한다.

​
<h3>사용 언어 </h3>
        JAVA 

<h3>풀이 전략</h3>

        1.  숫자를 입력받는 Scanner 혹은 BufferedReader 제공

        2. 사용자가 입력한 점수들과 최대 점수를 비교하여, 만약 최대 점수보다 입력한 점수의 값이 클 경우, hacker임을 표시하여야 함. 

        3. 점수 비교를 위해, 최대 점수를 기록한 배열이 사전 제공되어야 함.

        4. 입력한 점수를 누적하여 100점 이상이면 draw를, 100점에 미달되는 경우엔 none을 출력하여야 한다. 

​

<h3>실제로 제출한 코드</h3>

        1) 처음에 제출한 코드

<div style = "background-color: black; width:max-content ;padding-left:10px;padding-right:10px;margin-left:70px">
        <code style = "color:white">
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		int sum = 0;
		int cnt = 0;
		int Max[] = { 100, 100, 200, 200, 300, 300, 400, 400, 500 };
		Scanner scan = new Scanner(System.in);
		for (int i = 0; i < Max.length; i++) {
			int score = scan.nextInt();
			if (score > Max[i]) {
				cnt += 1;
			}
			sum += score;
		}
		if (cnt != 0) {
			System.out.println("hacker");
		} else if (sum >= 100) {
			System.out.println("draw");
		} else {
			System.out.println("none");
		}
	}

}
        </code>
</div>
<h3 style="font-weight: bold; color:red">       문제발생</h3>
        처음 제출한 코드는 cnt를 이용하여 최대 점수를 초과한 경우를 카운트하였고, sum을 이용하여 점수 합을 계산하였다. 
        하지만 시간이 생각외로 많이 걸렸고, 단축할 수 있는 방안이 없나, 기존 코드의 문제점을 다시 파악하였다. 
        
<h3 style="font-weight: bold; color:red">       문제점</h3>
        1. 문제에서 hacker판단 기준은 한번이라도 최대 점수보다 큰 점수가 입력될 경우 였는데, cnt는 최대점수를 초과한 점수가 입력될 때마다 증가되는 연산이 추가됨.
        2. hacker로 판단되면 그대로 끝내어도 괜찮지만, 위 코드에서는 sum이 계속해서 누적됨.

        <h3 style="font-weight: bold; color:blue">       문제 수정</h3>
        hacker로 판단되는 순간이 한번이라도 발견(if 분기문 이용)될 경우 ,hacker출력 후 메소드가 종료되도록 설정.

​

        2) 수정 후 최종 제출한 코드
        <div style = "background-color: black; width:max-content ;padding-left:10px;padding-right:10px;margin-left:70px">
        <code style = "color:white">
import java.util.Scanner;

public class Main { // 백준에서 자바로 답안 제출시에는 Main클래스로 제출해야 컴파일에러가 생기지 않는다고 한다.
	public static void main(String[] args) {
		int sum = 0;// 사용자의 총점을 저장하는 변수
		int Max[] = { 100, 100, 200, 200, 300, 300, 400, 400, 500 }; //각 문제별 최대 점수를 기록
		Scanner scan = new Scanner(System.in);
		for (int i = 0; i < Max.length; i++) {//문제의 갯수만큼 사용자에게 점수 입력을 받음
			int score = scan.nextInt();// 사용자가 입력한 점수
			if (score > Max[i]) {// 만약 입력한 점수가 해당 문제의 최대 점수보다 클 경우
				System.out.println("hacker");//hacker출력 
				return; //메소드 종료
			}
			sum += score; // 사용자의 점수를 누적
		}
		System.out.println(sum>=100 ? "draw":"none"); // 삼항 연산자를 이용하여,
                                                      //누적된 점수의 합이 100이상일 경우 draw를,
                                                      // 그렇지 않을 경우 none을 출력 
	}
}
</code>
</div>
        `,
        // 작성일자
        "2022-12-12"),
    new post(
        //게시물 이미지    
        "./imgs/androidImg.jpg",
        //게시물 명
        "안드로이드 LiveData와 친해지기",
        // 카테고리 태그
        `#${category[1]}`,
        // 내용
        `<h3>참고 사이트</h3>
        <a href="https://developer.android.com/topic/libraries/architecture/livedata">https://developer.android.com/topic/libraries/architecture/livedata</a>
        <h3>LiveData란?</h3>
        `,
        // 작성일자
        "2022-12-10"),
]
//시간 순으로 정렬한다.
lists.sort((a, b) => { return new Date(a.date) - new Date(b.date) });


//게시물 정리용 배열
var totalList = []; //전체 게시물
var androidList = []; //안드로이드 개발 게시물
var codingList = []; //코딩테스트 공부 게시물



//다 로딩된 이후
window.onload = () => {
    const params = window.location.search;
    let url = document.documentURI.split("/")[3].replace(params, ""); //현재 문서 위치
    if (url == "index.html") { //index.html인 경우
        processIndexHtml();
    }
    else if (url == "postList.html") {//postList.html인 경우
        processPostListHtml(new URLSearchParams(params).get("idx"));
    }
    else if (url == "postDetail.html") {//postDetail.html인 경우 -> 파라미터로 idx값을 전달받음
        processPostDetailHtml(new URLSearchParams(params).get("idx")); //인자값으로 배열의 인덱스 값을 받음. -> 이 인덱스 값을 이용하여, lists배열에서 값을 찾아 화면에 출력한다.
    }
}

//index.html에서 동작하는 js코드
const processIndexHtml = (url) => {
    var idx = 0;//현재 게시물 인덱스
    var btnLeft = document.getElementById("btnLeft");
    var btnRight = document.getElementById("btnRight");
    var img = document.getElementById("postImg");
    var title = document.getElementById("title");
    var desc = document.getElementById("desc");
    var mv = document.getElementById("mv2Post");
    var circles = [];

    //동그라미 버튼에 값을 할당
    for (let i = 0; i < lists.length; i++) {
        if (i > 5) break;
        let e = document.createElement("div");
        e.setAttribute("id", `circle${i}`);
        e.style.display = "inline-block"
        e.style.borderRadius = "50px";
        e.style.border = "1px solid black"
        e.style.width = "10px"
        e.style.margin = "10px"
        e.style.height = "10px"
        e.style.backgroundColor = "white";
        e.addEventListener('click', () => {
            circles[idx].style.backgroundColor = "white";
            idx = i;
            circles[idx].style.backgroundColor = "black";
            slideNext(idx, img, title, desc);
        })
        document.getElementsByClassName("circles")[0].append(e);
        circles.push(e);
    }

    //해당 게시물을 보여주는 루틴 구성
    mv.addEventListener('click', () => {
        var list = window.location.href.split("/")
        list.pop();
        location.replace(`${list.join("/")}/postDetail.html?idx=${idx}`);
    })
    // 값 세팅 
    circles[idx].style.backgroundColor = "black";
    slideNext(idx, img, title, desc);


    //왼쪽 버튼을 누르는 경우
    btnLeft.addEventListener('click', () => {
        circles[idx].style.backgroundColor = "white";
        idx -= 1;
        if (idx < 0) idx = lists.length - 1;
        slideNext(idx, img, title, desc);
        circles[idx].style.backgroundColor = "black";
    })
    //오른쪽 버튼을 누르는 경우
    btnRight.addEventListener('click', () => {
        circles[idx].style.backgroundColor = "white";
        idx += 1;
        if (idx >= lists.length || idx >= 5 || idx < 0) idx = 0;
        slideNext(idx, img, title, desc);
        circles[idx].style.backgroundColor = "black";
    })
    setInterval(()=>{
        circles[idx].style.backgroundColor = "white";
        idx += 1;
        if (idx >= lists.length || idx >= 5 || idx < 0) idx = 0;
        slideNext(idx, img, title, desc);
        circles[idx].style.backgroundColor = "black";
    },3000);
}


//다음 슬라이드를 보여줄 때 사용하는 함수
function slideNext(idx, img, title, desc) {
    img.setAttribute("src", lists[idx].img);//게시물의 이미지 세팅
    title.innerText = lists[idx].title;
    desc.innerText = lists[idx].desc.length > 100 ? lists[idx].desc.substring(0, 100) + "..." : lists[idx].desc;
    tag.innerText = lists[idx].tag;
}

//postList.html에서 처리할 프로세스 
const processPostListHtml = (idx) => {
    var categoryTag = idx != null ? idx : 0;
  
    var categorys = document.getElementById("categorys").getElementsByTagName("li");
    var mainSection = document.getElementById("main-section");

    //전체 리스트가 비어있는 경우 각 리스트(전체, 안드로이드, 코딩테스트)에 값을 저장한다.
    if (totalList.length == 0) {
        for (let i = 0; i < lists.length; i++) {
            let article = document.createElement("article");
            article.innerHTML = `
            <div class = "article-header">
            <h1 class="article-title">${lists[i].title}</h1>
            <p class="article-date">작성일 : ${lists[i].date}</p>
            </div>
            <div class = "article-body">
            <img src = ${lists[i].img} id="postImg"/>
            <p id="desc"></p>
            </div>
            `
            let desc = article.querySelector("#desc");
            desc.innerText = lists[i].desc.length > 100 ? lists[i].desc.substring(0, 100) + "..." : lists[i].desc;
            article.addEventListener('click', () => {
                var list = window.location.href.split("/")
                list.pop();
                location.replace(`${list.join("/")}/postDetail.html?idx=${i}`);
            });
            switch (lists[i].tag) {
                case "#안드로이드 개발":
                    androidList.push(article);
                    break;
                case "#코딩테스트 공부":
                    codingList.push(article);
                    break;
                default:
                    break;
            }
            totalList.push(article);
        }
    }
    var dataList = categoryTag == 0 ? totalList : categoryTag == 1 ? androidList : codingList;
    mainSection.innerHTML = `<h2 id="category">${category[categoryTag]} (${dataList.length})</h2> `;
    for (let i = 0; i < dataList.length; i++) {
        mainSection.append(dataList[i]);
    }

    //현재 보여지는 게시물 목록을 선택된 카테고리로 업데이트
    for (let i = 0; i < categorys.length; i++) {
        var list = i == 0 ? totalList : i == 1 ? androidList : codingList;
        categorys[i].innerText += ` (${(list.length)})`;
        categorys[i].addEventListener('click', () => {
            var list = i == 0 ? totalList : i == 1 ? androidList : codingList;
            mainSection.innerHTML = `<h2 id="category">${category[i]} (${list.length})</h2> `;
            categorys[categoryTag].style.fontWeight = "lighter";
            categoryTag = i;
            categorys[categoryTag].style.fontWeight = "bold";
            for (let t = 0; t < list.length; t++) {
                mainSection.append(list[t]);
            }
        });
    }
    categorys[categoryTag].style.fontWeight = "bold"; //카테고리 aside에서 현재 선택된 카테고리를 굵은 글씨로 표시한다.
}

//postDetail.html에서 처리할 프로세스 
const processPostDetailHtml = (index) => {

    // aside 부분 초기화
    var categorys = document.getElementById("categorys").getElementsByTagName("li");
    var cat = category.findIndex(e => e == lists[index].tag.replace("#", ""));

    //전체 리스트가 비어있는 경우 각 리스트(전체, 안드로이드, 코딩테스트)에 값을 저장한다.
    if (totalList.length == 0) {
        for (let i = 0; i < lists.length; i++) {
            switch (lists[i].tag) {
                case "#안드로이드 개발":
                    androidList.push(i);
                    break;
                case "#코딩테스트 공부":
                    codingList.push(i);
                    break;
                default:
                    break;
            }
            totalList.push(i);
        }
    }
    //현재 보여지는 게시물 목록을 선택된 카테고리로 업데이트
    for (let i = 0; i < categorys.length; i++) {
        var list = i == 0 ? totalList : i == 1 ? androidList : codingList;
        categorys[i].innerText += ` (${(list.length)})`;
        categorys[i].addEventListener('click', () => {
            var list = window.location.href.split("/")
            list.pop();
            location.replace(`${list.join("/")}/postList.html?idx=${i}`);
        });
    }
    categorys[cat].style.fontWeight = "bold"; //카테고리 aside에서 현재 선택된 카테고리를 굵은 글씨로 표시한다.

    //게시물을 화면에 출력
    var mainSection = document.getElementById("main-section");
    const html = `
    <h4 id="tag">${lists[index].tag}</h4>
    <img src = ${lists[index].img} id="postImg"/>
    <div class = "article-header">
    <p class="article-date">${lists[index].date}</p>
    <h1 class="article-title">${lists[index].title}</h1>
    </div>
    <hr>
    <br>
    <div class = "article-body">
    <pre>${lists[index].desc}</pre>
    </div>
    `;
    mainSection.innerHTML = html;

}