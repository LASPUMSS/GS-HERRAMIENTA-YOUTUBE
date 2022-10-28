function onOpen(){
  miMenu();
};

function miMenu(){
  var menu = SpreadsheetApp.getUi();
  menu.createMenu('YT Herramientas')

    .addItem('Obt. Datos Videos Canal','formGetDataChannel')
    .addItem('Obt. Datos Lista De Videos','formGetDataListVdo')
    .addItem('Obt Id Canal de un video','formGetIdChanel')

  .addToUi();
};

function formGetDataChannel(){

  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createTemplateFromFile('formObnDataChannel').evaluate()
      .setTitle('Obtener los datos de videos ')
  );

};

function formGetDataListVdo(){

  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createTemplateFromFile('formObnDataListVdo').evaluate()
      .setTitle('Obtener los datos de una lista')
  );

};

function formGetIdChanel(){

  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createTemplateFromFile('formObnIdChannel').evaluate()
      .setTitle('Obtener Id De Un canal')
  );

};

function include( nameHtml ){
  return HtmlService.createHtmlOutputFromFile( nameHtml ).getContent();
};

