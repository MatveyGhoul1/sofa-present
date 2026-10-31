const secretDiv = document.querySelectorAll('.secret')

function next_page(first_id, second_id) {
    const first_cont = document.querySelector(`#${first_id}`);
    const second_cont = document.querySelector(`#${second_id}`);
    first_cont.classList.add('hidden')
    second_cont.classList.remove('hidden')

}
function second_check(n, answer) {
    const second_button = document.querySelector(`#${n} .second_next`)
    const second_input = document.querySelector(`#${n} div input`)
    let second_text = document.querySelector(`#${n} .second_false`)
    console.log("Функция прошла")
    if (second_input.value == 'sofa_my_love-18-03-2009') {
        secretDiv.forEach(el => el.classList.remove('secret'));
        console.log('Ключ прошел')
    }

    if (second_input.value.toLowerCase() == answer | n == 'page_6') {
        second_text.classList.add('hidden')
        console.log("Условие прошло")
        second_button.classList.remove('hidden')
        second_text = document.querySelector(`#${n} .second_true`)
    }
    second_text.classList.remove('hidden')
}