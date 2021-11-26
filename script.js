$(function () {
  const kosar = new Kosar()
  const ajaxHivas = new AjaxHivas();
  let apivegpont="http://localhost:3000/termekek";
  ajaxHivas.getAjax(apivegpont,termekLista);


  function termekLista(termekek) {
    const szuloElem = $('.termekek')
    const sablonElem = $('.sablon .termek')
    szuloElem.empty();
    sablonElem.show();

    termekek.forEach(function (elem) {
      let node = sablonElem.clone().appendTo(szuloElem)
      const obj = new TermekAruhaz(node, elem)
    })
    sablonElem.hide() //sablonelem elrejtése.

    $(window).on('termekKosarba', (event) => {
      kosar.setKosar(event.detail)
    })
  }
  $(".Minden").on("click", function(){
    let Url = apivegpont + "?kategoria2=Minden";
    ajaxHivas.getAjax(Url,termekLista);
  })
  $(".Hegyek").on("click", function(){
    let Url = apivegpont + "?kategoria=Hegyek";
    ajaxHivas.getAjax(Url,termekLista);
  })
  $(".Epuletek").on("click", function(){
    let Url = apivegpont + "?kategoria=Epuletek";
    ajaxHivas.getAjax(Url,termekLista);
  })
  $(".Egyeb").on("click", function(){
    let Url = apivegpont + "?kategoria=Egyeb";
    ajaxHivas.getAjax(Url,termekLista);
  })
  $(".RendezAr").on("click", function(){
    let Url = apivegpont + "?_sort=ar&_order=desc";
    ajaxHivas.getAjax(Url,termekLista);
  })
})
