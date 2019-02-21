/**
* Transferir propriedade
* @param {ativos.Movimento} movimento - movimento a ser processado
* @transaction
*/
async function novaMovimentacao(movimento) {
  
  // FAZER A TRANSFERENCIA  
  movimento.ativo.proprietario = movimento.participante;
  
  const carteiraAtual = await getAssetRegistry('ativos.Ativo');
  const movEvent = getFactory().newEvent('ativos', 'Movimentacao');
  movEvent.ativo = movimento.ativo;

  await carteiraAtual.update(movimento.ativo);
  emit(movEvent);
}
