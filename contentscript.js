
let mentorBoardBtn
let come
let out
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
        } else {

        }
    });
}
function setOutBtn() {
    const outBtn = document.createElement('button')
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
}
function main() {
    initView()
    initListener()
    setOutBtn()
}
