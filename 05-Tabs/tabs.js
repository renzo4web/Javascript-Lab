const btns = document.querySelectorAll('.tabs button');
const panels = document.querySelectorAll('[role=\'tabpanel\']');

function handleClick(e) {

    const {id} = e.currentTarget;

    panels.forEach(panel => panel.hidden = true);
    btns.forEach(btn => btn.setAttribute('aria-selected', "false"));
    let panel = document.querySelector(`[aria-labelledby=${id}]`);
    panel.hidden = false;
    e.currentTarget.setAttribute("aria-selected", true);
}

btns.forEach(btn => {
    btn.addEventListener('click', handleClick);
    btn.addEventListener('focus', handleClick);
});


