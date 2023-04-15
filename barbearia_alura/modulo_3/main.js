/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: madmax42 <madmax42@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/04/14 17:32:29 by madmax42          #+#    #+#             */
/*   Updated: 2023/04/14 18:07:17 by madmax42         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const form = document.querySelector('#myForm');
const submitButton = document.querySelector('.js-submit');

// adicione um evento de envio ao formulário
form.addEventListener('submit', function(event) {
  // evite o envio padrão do formulário
  event.preventDefault();

  // atualize a cor do botão
  submitButton.style.backgroundColor = 'blue';
});
