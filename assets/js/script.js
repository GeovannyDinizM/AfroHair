function tranca(){
    var trancas = document.querySelector('main #servicos #opcoes label:nth-of-type(1)');
    trancas.style.color = 'var(--color)';
    trancas.style.borderBottom = '5px solid var(--color)';

    var areaTranca = document.querySelector('main #servicos #areaServicos #tranca');
    areaTranca.classList.remove("disable");
    areaTranca.classList.add("enable");

    var sobrancelha = document.querySelector('main #servicos #opcoes label:nth-of-type(2)');
    sobrancelha.style.color = 'black';
    sobrancelha.style.borderBottom = '5px solid black';

    var areaSobrancelha = document.querySelector('main #servicos #areaServicos #sobrancelha');
    areaSobrancelha.classList.remove("enable");
    areaSobrancelha.classList.add("disable");
}

function sobrancelha(){
    var sobrancelha = document.querySelector('main #servicos #opcoes label:nth-of-type(2)');
    sobrancelha.style.color = 'var(--color)';
    sobrancelha.style.borderBottom = '5px solid var(--color)';

    var areaSobrancelha = document.querySelector('main #servicos #areaServicos #sobrancelha');
    areaSobrancelha.classList.remove("disable");
    areaSobrancelha.classList.add("enable");

    var trancas = document.querySelector('main #servicos #opcoes label:nth-of-type(1)');
    trancas.style.color = 'black';
    trancas.style.borderBottom = '5px solid black';

    var areaTranca = document.querySelector('main #servicos #areaServicos #tranca');
    areaTranca.classList.remove("enable");
    areaTranca.classList.add("disable");
}


const menuItems = document.querySelectorAll('a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
};

function mascaraTelefone(event) {
    let tecla = event.key;
    let telefone = event.target.value.replace(/\D+/g, "");

    if (/^[0-9]$/i.test(tecla)) {
        telefone = telefone + tecla;
        let tamanho = telefone.length;

        if (tamanho >= 12) {
            return false;
        }
        
        if (tamanho > 10) {
            telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (tamanho > 5) {
            telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (tamanho > 2) {
            telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            telefone = telefone.replace(/^(\d*)/, "($1");
        }

        event.target.value = telefone;
    }

    if (!["Backspace", "Delete"].includes(tecla)) {
        return false;
    }
};