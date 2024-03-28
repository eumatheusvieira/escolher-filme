function escolhaFilme() {
  const input = document.querySelector("#escolha").value;
  const carros1 = document.querySelector("#carros1");
  const carros2 = document.querySelector("#carros2");
  const carros3 = document.querySelector("#carros3");
  console.log(input);
  switch (input) {
    case "1":
      escolhido.innerHTML = "VOCÊ ESCOLHEU CARROS 1!";
      escolhido.classList.remove("erro");
      carros1.classList.add("active");
      carros2.classList.remove("active");
      carros3.classList.remove("active");
      break;
    case "2":
      escolhido.innerHTML = "VOCÊ ESCOLHEU CARROS 2!";
      escolhido.classList.remove("erro");
      carros2.classList.add("active");
      carros3.classList.remove("active");
      carros1.classList.remove("active");
      break;
    case "3":
      escolhido.innerHTML = "VOCÊ ESCOLHEU CARROS 3!";
      escolhido.classList.remove("erro");
      carros3.classList.add("active");
      carros1.classList.remove("active");
      carros2.classList.remove("active");
      break;
    case "11":
        escolhido.innerHTML = "A SAH É PERFEITA!";
    default:
      alert("OPÇÃO INVÁLIDA, TENTE NOVAMENTE!");
      break
  }
  return false;
}
