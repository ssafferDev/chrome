
let mentorBoardBtn
let come
let out
let outBtn
main()
function initView() {
    mentorBoardBtn = document.querySelector("#header" +
        " > div.header-inner.tac.with-job.cols5 > div.column.tac.hidden-field > ul " +
        " > li:nth-child(5) > a");

    mentorBoardBtn.input = "disabled"

    mentorBoardBtn.removeAttribute('href');


    come = document.querySelector("#wrap > div.container.main-container" +
        " > div.content > section.main-page.sec1" +
        " > div > div.col-md.n1 > div > div.btns > div.state.inRoomEnd")

    out = document.querySelector("#wrap > div.container.main-container >" +
        " div.content > section.main-page.sec1 > div > div.col-md.n1 > div > div.btns >" +
        " div.state2")
    out.style.display = "none"
}

function initListener() {
    mentorBoardBtn.addEventListener("click", function () {
        let a = confirm("진짜....???")
        if (a) {

        } else {

        }
    });

    outBtn.addEventListener("click", function () {
        let a = confirm("진짜....???")
        if (a) {
            out.style.display = "block"
            setInBtn()
        } else {

        }
    });
}
function setOutBtn() {
    outBtn = document.createElement('button')
    outBtn.type = "button"
    outBtn.id = "hiddenBtn"
    outBtn.value = "test"
    outBtn.textContent = "중도퇴실"
    outBtn.style.display = "block"
    outBtn.style.fontSize = "14px"
    outBtn.style.fontWeight = "600"
    outBtn.style.height = "100%"
    outBtn.style.lineHeight = "1.5"
    outBtn.style.paddingTop = "12px"
    outBtn.style.position = "relative"
    outBtn.style.verticalAlign = "middle"
    out.parentElement.append(outBtn)
    setInBtn()
}

function setInBtn() {
    come.style.webkitTextSizeAdjust= "none";
    come.style.fontWeight= "300";
    come.style.letterSpacing= "-.03em";
    come.style.color= "#24282b";
    come.style.lineHeight= "1.4";
    come.style.listStyle= "none";
    come.style.fontSize= "0";
    come.style.boxSizing= "border-box";
    come.style.display= "inline-block";
    come.style.height= "78px";
    come.style.marginLeft= "10px";
    come.style.textAlign= "center";
    come.style.verticalAlign= "top";
    come.style.webkitTransition= "all .2s ease-in-out";
    come.style.width= "78px";
    come.style.backgroundColor= "#8c99a8";
}
function main() {
    initView()
    setOutBtn()
    initListener()
}
