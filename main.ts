// Declaração de uma variável 'idadePessoa' do tipo number com valor 18.
let idadePessoa: number = 18;

// Verifica se a idade está na faixa de 0 a 19 anos.
if (idadePessoa >= 0 && idadePessoa <= 19) {
  console.log("Sua faixa etária te classifica como uma pessoa jovem");
}
// Se a idade não está na faixa de 0 a 19, verifica se está na faixa de 20 a 59 anos.
else if (idadePessoa > 19 && idadePessoa <= 59) {
  console.log("Sua faixa etária te classifica como uma pessoa adulta");
}
// Se a idade não está em nenhuma das faixas anteriores, considera como fase sênior.
else {
  console.log(
    "Sua faixa etária te classifica como uma pessoa na fase sênior da vida"
  );
}
