let click = document.querySelector("#header" +
    " > div.header-inner.tac.with-job.cols5 > div.column.tac.hidden-field > ul " +
    " > li:nth-child(5) > a");

click.addEventListener("click", function () {
    alert("hel");
    click.href = clickHref;
});
const clickHref = click.href
//click.removeAttribute('href');
