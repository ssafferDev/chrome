let mentorBoardBtn = document.querySelector("#header" +
    " > div.header-inner.tac.with-job.cols5 > div.column.tac.hidden-field > ul " +
    " > li:nth-child(5) > a");
const mentorBoardBtnHref = mentorBoardBtn.href
mentorBoardBtn.input = "disabled"

mentorBoardBtn.removeAttribute('href');


const come = document.querySelector("#wrap > div.container.main-container" +
    " > div.content > section.main-page.sec1" +
    " > div > div.col-md.n1 > div > div.btns > div.state.inRoomEnd")

const out = document.querySelector("#wrap > div.container.main-container >" +
    " div.content > section.main-page.sec1 > div > div.col-md.n1 > div > div.btns >" +
    " div.state2")
out.style.display = "none"


const outBtn = document.createElement('button')
outBtn.type = "button"
outBtn.id = "hiddenBtn"
outBtn.value = "test"
outBtn.textContent = "중도퇴실"
outBtn.style.display = "block"
outBtn.style.fontSize= "14px"
outBtn.style.fontWeight= "600"
outBtn.style.height= "100%"
outBtn.style.lineHeight= "1.5"
outBtn.style.paddingTop= "12px"
outBtn.style.position= "relative"
outBtn.style.verticalAlign= "middle"
out.parentElement.append(outBtn)

mentorBoardBtn.addEventListener("click", function () {
    let a = confirm("진짜....???")
    if (a) {
        this.href = mentorBoardBtnHref
    }
    else {

    }
});

outBtn.addEventListener("click", function () {
    let a = confirm("진짜....???")
    if (a) {
        out.style.display = "block"
    }
    else {

    }
});
//mentorBoardBtn.style.visibility = "hidden"
