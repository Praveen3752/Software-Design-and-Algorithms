
export class CurrencyView {
  private app: HTMLElement;
  private form: HTMLElement;
  constructor() {
    let body = this.getElement('body');
    body.setAttribute("style", "background:#000000a8");
    let h1tag = document.createElement('h1');
    h1tag.textContent = 'CURRENCY CONVERTOR';
    h1tag.setAttribute('style', "text-align:center;color:#5d8484");
    this.app = this.getElement('#root');
    this.app.setAttribute("style", "background:#3b3b3bc7");
    this.form = this.createElement('div');

    let section1 = document.createElement('fieldset');
    section1.setAttribute('style', 'margin:1.5%');
    let legend1 = document.createElement('legend');
    legend1.textContent = 'Rupees';
    section1.append(legend1, this.getFirstDiv('Rupees', 'rupeeConversion'), this.getSecondDiv('Euro', 'Rupees'), this.getThirdDiv('EuroToRupees', 'RupeesToEuro'));

    let section2 = document.createElement('fieldset');
    section2.setAttribute('style', 'margin:1.5%');
    let legend2 = document.createElement('legend');
    legend2.textContent = 'Dollar';
    section2.append(legend2, this.getFirstDiv('Dollar', 'dollarConversion'), this.getSecondDiv('Euro', 'Dollar'), this.getThirdDiv('EuroToDollar', 'DollarToEuro'));

    this.form.append(this.getButtons(), this.getRadioButtons(), section1, section2);

    this.app.append(this.form);
    this.app.before(h1tag);

    document.querySelectorAll(".fromCurrency").forEach(box =>
      box.addEventListener("change", (event) => this.changeToCurrencyValue(event))
    )

    document.querySelectorAll(".toCurrency").forEach(box =>
      box.addEventListener("change", (event) => this.toCurrencyValue(event))
    )

    document.querySelector("#inputData").addEventListener('click', (event) => {
      let fromFields = document.querySelectorAll(".fromCurrency");
      fromFields.forEach((ele) => {
        ele.setAttribute('type', 'text');
      });

      let toFields = document.querySelectorAll(".toCurrency");
      toFields.forEach((ele) => {
        ele.setAttribute('type', 'text');
      });
    });

    document.querySelector("#rangeData").addEventListener('click', (event) => {
      let fromFields = document.querySelectorAll(".fromCurrency");
      fromFields.forEach((ele) => {
        ele.setAttribute('type', 'range');
      });

      let toFields = document.querySelectorAll(".toCurrency");
      toFields.forEach((ele) => {
        ele.setAttribute('type', 'range');
      });
    });

    document.querySelectorAll('input[type="range"][class="fromCurrency"]').forEach(box =>
      box.addEventListener("change", (event) => console.log(event))
    )

  }

  changeToCurrencyValue(event) {
    let fromData = document.querySelectorAll(".fromCurrency");
    let toData = document.querySelectorAll(".toCurrency");
    let euroToRupeesData = fetch(`../rupeeConversion.json`, {}).then(response => response.json());
    let euroToDollarsData = fetch(`../dollarConversion.json`, {}).then(response => response.json());
    if (event.target.attributes[2].value == 'EuroToRupees') {
      euroToRupeesData.then(res => { event.target.nextSibling.value = event.target.value * res['Rupees'] });
    }
    else {
      euroToDollarsData.then(res => { event.target.nextSibling.value = event.target.value * res['Dollar'] });
    }
    if ((document.querySelector('input[name="mode"]:checked') as HTMLInputElement).value == 'ModeB') return;
    fromData.forEach((ele) => {
      ele.setAttribute('value', event.target.value);
    });

    euroToRupeesData.then(res => { toData[0].setAttribute('value', String(event.target.value * res['Rupees'])); });
    euroToDollarsData.then(res => { toData[1].setAttribute('value', String(event.target.value * res['Dollar'])); });

  }

  toCurrencyValue(event) {
    console.log(event);
    let fromData = document.querySelectorAll(".fromCurrency");
    let toData = document.querySelectorAll(".toCurrency");
    let euroToRupeesData = fetch(`../rupeeConversion.json`, {}).then(response => response.json());
    let euroToDollarsData = fetch(`../dollarConversion.json`, {}).then(response => response.json());
    if (event.target.attributes[2].value == 'RupeesToEuro') {
      euroToRupeesData.then(res => { event.target.previousSibling.value = event.target.value * res['euro'] });
    }
    else {
      euroToDollarsData.then(res => { event.target.previousSibling.value = event.target.value * res['euro'] });
    }
    if ((document.querySelector('input[name="mode"]:checked') as HTMLInputElement).value == 'ModeB') return;
    toData.forEach((ele) => {
      ele.setAttribute('value', event.target.value);
    });

    euroToRupeesData.then(res => { fromData[0].setAttribute('value', String(event.target.value * res['euro'])); });
    euroToDollarsData.then(res => { fromData[1].setAttribute('value', String(event.target.value * res['euro'])); });
  }

  getButtons() {
    let inputButton = document.createElement('button');
    inputButton.textContent = 'Input Fields';
    inputButton.setAttribute('id', 'inputData');
    let rangeButton = document.createElement('button');
    rangeButton.textContent = 'Range';
    rangeButton.setAttribute('id', 'rangeData');
    let divElement = document.createElement('div');
    divElement.setAttribute("style", "display:flex;justify-content:space-evenly;align-items:center;padding:3%");
    divElement.append(inputButton, rangeButton);
    return divElement;
  }

  getRadioButtons() {
    let radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('name', 'mode');
    radio1.setAttribute('value', 'ModeA');
    radio1.setAttribute('checked', 'true');
    let label1 = document.createElement('label');
    label1.textContent = 'Mode A';

    let radio2 = document.createElement('input');
    radio2.setAttribute('type', 'radio');
    radio2.setAttribute('name', 'mode');
    radio2.setAttribute('value', 'ModeB');
    let label2 = document.createElement('label');
    label2.textContent = 'Mode B';

    let divElement = document.createElement('div');
    divElement.setAttribute("style", "display:flex;justify-content:space-evenly;align-items:center;padding:3%");
    divElement.append(radio1, label1, radio2, label2);
    return divElement;
  }

  getFirstDiv(currency, url) {
    let spanElement1 = document.createElement('span');
    spanElement1.textContent = '1 Euro is ';
    let spanElement2 = document.createElement('span');
    spanElement2.textContent = currency;
    let inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('data-value', currency);
    let divElement = document.createElement('div');
    divElement.setAttribute("style", "display:flex;justify-content:space-evenly;align-items:center;padding:3%");
    fetch(`../${url}.json`, {}).then(response => response.json()).then(res => { inputField.value = res[currency] });
    divElement.append(spanElement1, inputField, spanElement2);
    return divElement;
  }

  getSecondDiv(from, to) {
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'secondDiv');
    let spanElement1 = document.createElement('span');
    spanElement1.textContent = from;
    spanElement1.setAttribute('style', 'width:50%;margin:0 2%');
    let spanElement2 = document.createElement('span');
    spanElement2.textContent = to;
    spanElement2.setAttribute('style', 'width:50%;margin:0 2%');
    divElement.setAttribute("style", "display:flex;justify-content:space-evenly;align-items:center;padding:2%");
    divElement.append(spanElement1, spanElement2);
    return divElement;
  }

  getThirdDiv(dataProp1, dataProp2) {
    let divElement = document.createElement('div');
    let inputField1 = document.createElement('input');
    inputField1.setAttribute('class', 'fromCurrency');
    inputField1.setAttribute('type', 'text');
    inputField1.setAttribute('data-value', dataProp1);
    let inputField2 = document.createElement('input');
    inputField2.setAttribute('class', 'toCurrency');
    inputField2.setAttribute('type', 'text');
    inputField2.setAttribute('data-value', dataProp2);
    divElement.setAttribute("style", "display:flex;justify-content:space-evenly;align-items:center;");
    divElement.append(inputField1, inputField2);
    return divElement;
  }

  createElement(tag: string, className?: string) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector: string): HTMLElement {
    return document.querySelector(selector);
  }

}
