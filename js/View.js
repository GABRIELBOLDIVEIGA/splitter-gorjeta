class View {
  constructor(){
    let tip = [5, 10, 15, 20, 25, 30];
    this.group = document.querySelector("#group");
    this.group.innerHTML = this.template(tip);
  }

  template(tip) {
  return `
  <section class="sec-botoes">
    <ul class="ul-gorjeta">
      <p class="rotolo tituloBotoes">Selecione Gorjeta %</p>
      ${tip.map((tip) => {
        return `
        <li>
          <input type="radio" id="a${tip}" name="tip" value="${tip}"/>
          <label for="a${tip}">${tip}%</label>
        </li>
        `;
      }).join('')}
    </ul>
  </section>
  `;
  }  
}




