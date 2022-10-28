function onOpen(){
  miMenu();
};

function miMenu() {
  var menu = SpreadsheetApp.getUi();
  menu.createMenu('YT Herramientas')

    .addItem('Obt. Datos','formGetDataChannel')
    .addItem('Obt Id Canal de un video','formGetIdChanel')

  .addToUi();
};

function prueba2(id_channel){
  SpreadsheetApp.getUi().alert(id_channel);
}

function formGetDataChannel(){

  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createTemplateFromFile('formObnData').evaluate()
      .setTitle('Obtener los datos de videos ')
  );

}
function formGetIdChanel(){

  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createTemplateFromFile('formObnId').evaluate()
      .setTitle('Obtener Id De Un canal')
  );

}

function include( nameHtml ){
  return HtmlService.createHtmlOutputFromFile( nameHtml ).getContent();
};

