const $All = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
let tip = 0;

const radioButtons = $All('input[name="tip"]');
for (const radioButton of radioButtons) {
  radioButton.addEventListener("change", showSelected);
}

function showSelected(e) {
  // console.log(e);
  if (this.checked) {
    // console.log(this.value);
    // document.querySelector('#output').innerText = `You selected ${this.value}`;
    tip = this.value;
    // console.log(this.value);

    valorTotalPorPessoa.textContent = valorContaPorPessoa(
      valorDaConta.value,
      tip,
      numeroDePessoas.value
    );

    valorTipPorPessoa.textContent = calculaTipPotPessoa(
      valorDaConta.value,
      tip,
      numeroDePessoas.value
    );
  }
}

let valorTipPorPessoa = $("#valorTipPorPessoa");
let valorTotalPorPessoa = $("#valorTotalPorPessoa");

let valorDaConta = $("#valorDaConta");
valorDaConta.addEventListener("input", function () {
  valorTotalPorPessoa.textContent = valorContaPorPessoa(
    valorDaConta.value,
    tip,
    numeroDePessoas.value
  );
  valorTipPorPessoa.textContent = calculaTipPotPessoa(
    valorDaConta.value,
    tip,
    numeroDePessoas.value
  );
});

let numeroDePessoas = $("#numeroPessoas");
numeroDePessoas.addEventListener("input", function () {
  valorTipPorPessoa.textContent = calculaTipPotPessoa(
    valorDaConta.value,
    tip,
    numeroDePessoas.value
  );
  valorTotalPorPessoa.textContent = valorContaPorPessoa(
    valorDaConta.value,
    tip,
    numeroDePessoas.value
  );
});

function valorContaPorPessoa(valorConta, valorTip, totalPessoas) {
  let vC = parseFloat(valorConta);
  let vT = parseFloat(valorTip);
  let tP = parseFloat(totalPessoas);

  var totalPorPessoa = (vC + vC * (vT / 100)) / tP;

  if (isNaN(totalPorPessoa)) {
    return "$ 00.00";
  } else {
    return ('$ ' + totalPorPessoa.toFixed(2));
  }
}

function calculaTipPotPessoa(valorConta, valorTip, totalPessoas) {
  let vC = parseFloat(valorConta);
  let vT = parseFloat(valorTip);
  let tP = parseFloat(totalPessoas);

  var tipPorPessoa = (vC * (vT / 100)) / tP;

  if (isNaN(tipPorPessoa)) {
    return "$ 0.00";
  } else {
    return ('$ ' + tipPorPessoa.toFixed(2));
  }
}

let bnt = $('#bntReset');
bnt.addEventListener('click', function (e) { 
  console.log('deu bom');
  $('input[name="tip"]:checked').checked = false;
  valorTipPorPessoa.textContent = '$ 0.00';
  valorTotalPorPessoa.textContent = '$ 00.00'
  valorDaConta.value = '';
  numeroDePessoas.value = '';
});