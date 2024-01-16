let idadePessoa: number = 18;

if (idadePessoa >= 0 && idadePessoa <= 19) {
  console.log("Sua faixa etária te classifica como uma pessoa jovem");
} else if (idadePessoa > 19 && idadePessoa <= 59) {
  console.log("Sua faixa etária te classifica como uma pessoa adulta");
} else {
  console.log(
    "Sua faixa etária te classifica como uma pessoa na fase sênior da vida"
  );
}
