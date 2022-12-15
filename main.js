
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
        "공부해야지 규연아",
        // 카테고리 태그
        `#${category[2]}`,
        // 내용
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iusto voㅁㄴㅇㄴㅁㄴㅁㅇㅁㅁㄴㅇㄴㅇㄴㅁㅁㅇㄴㅁㄴㅇㄴㅁㄴㅇㅇㄴㅁㅇㄴㅇㄴluptate
        nesciunt. Deleniㄴㄴㄴㄴㄴㄴㄴㄴㄴtieveniet repudiandae, ratione obcaecati, error provident, nulla praesentium dignissimos doloribusmolestiasnatus quia et laboriosam unde voluptatibu.`,
        // 작성일자
        "2022-12-14"),
    new post(
        //게시물 이미지    
        "./imgs/img2.jpg",
        //게시물 명
        "안드로이드 기본세팅",
        // 카테고리 태그
        `#${category[2]}`,
        // 내용
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iusto voㅁㄴㅇㄴㅁㄴㅁㅇㅁㅁㄴㅇㄴㅇㄴㅁㅁㅇㄴㅁㄴㅇㄴㅁㄴㅇㅇㄴㅁㅇㄴㅇㄴluptate
        nesciunt. Deleniㄴㄴㄴㄴㄴㄴㄴㄴㄴtieveniet repudiandae, ratione obcaecati, error provident, nulla praesentium dignissimos doloribusmolestiasnatus quia et laboriosam unde voluptatibu.`,
        // 작성일자
        "2022-12-10"),
    new post(
        //게시물 이미지    
        "./imgs/img2.jpg",
        //게시물 명
        "안드로이드 공부 언제하냐",
        // 카테고리 태그
        `#${category[1]}`,
        // 내용
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iusto voㅁㄴㅇㄴㅁㄴㅁㅇㅁㅁㄴㅇㄴㅇㄴㅁㅁㅇㄴㅁㄴㅇㄴㅁㄴㅇㅇㄴㅁㅇㄴㅇㄴluptate
            nesciunt. Deleniㄴㄴㄴㄴㄴㄴㄴㄴㄴtieveniet repudiandae, ratione obcaecati, error provident, nulla praesentium dignissimos doloribusmolestiasnatus quia et laboriosam unde voluptatibu.`,
        // 작성일자
        "2022-12-12"),
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
}


//다음 슬라이드를 보여줄 때 사용하는 함수
function slideNext(idx, img, title, desc) {
    img.setAttribute("src", lists[idx].img);//게시물의 이미지 세팅
    title.innerText = lists[idx].title;
    desc.innerText = lists[idx].desc.length > 200 ? lists[idx].desc.substring(0, 200) + "..." : lists[idx].desc;
    tag.innerText = lists[idx].tag;
}

//postList.html에서 처리할 프로세스 
const processPostListHtml = (idx) => {
    var categoryTag = idx != undefined ? idx : 0;
    var dataList = idx == 0 ? totalList : idx == 1 ? androidList : codingList;
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
            <p>${lists[i].desc.length > 200 ? lists[i].desc.substring(0, 200) + "..." : lists[i].desc}</p>
            </div>
            `
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
    <h4 id="tag">${lists[index].tag}</h3>
    <img src = ${lists[index].img} id="postImg"/>
    <div class = "article-header">
    <p class="article-date">${lists[index].date}</p>
    <h1 class="article-title">${lists[index].title}</h1>
    </div>
    <div class = "article-body">
    <p>${lists[index].desc}</p>
    </div>
    `;
    mainSection.innerHTML = html;

}