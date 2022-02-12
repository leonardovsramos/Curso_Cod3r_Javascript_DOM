/* Para acessar um elemento da dom pelo id utilizamos
 * document.getElementById("id")
 * Passamos apenas o nome do id sem #
 *
 * document.getElementById("id").classList.add("class")
 * Adiciona uma classe ao elemento document.getElementById("id")
 * 
 * document.getElementById("id").classList.remove("class")
 * Remove uma classe do elemento document.getElementById("id")
 * 
 * document.getElementsByTagName("div")
 * Passamos apenas o nome da tag e será retornado todas as divs HTML
 * Atenção - retorna um HTMLCOllection
 * 
 * Podemos transformar um HTMLCollection para array através de Array.from()
 * com o array em mãos podemos acessar as tags normalmente,
 * assim como fizemos com o getElementById("id")
 * 
 * Podemos transformar um HTMLCollection para array através do operador spread
 * com o array em mãos podemos acessar as tags normalmente,
 * como fizemos com o getElementById("id")
 * 
 * document.getElementByClassName("class")
 * 
 */