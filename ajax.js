class AjaxHivas{
    constructor(){}
    getAjax(fajlnev, myCallback) {
        console.log(fajlnev);
        const termekek = [];
        $.ajax({
            url: fajlnev,
            success: function(result) {
                result.forEach((element) => {
                    termekek.push(element);
                });
    
                myCallback(termekek);
            },
        });
    }
    postAjax(fajlnev, adat) {
        const termekek = [];
        $.ajax({
            url: fajlnev,
            type:"POST",
            data:adat,
            success: function(result) {
                result.forEach((element) => {
                    termekek.push(element);
                });
    
                myCallback(termekek);
            },
        });
    }
    putAjax(fajlnev,id) {
        const termekek = [];
        $.ajax({
            url: fajlnev+"/"+id,
            type:"PUT",
            success: function(result) {
                result.forEach((element) => {
                    termekek.push(element);
                });
    
                myCallback(termekek);
            },
        });
    }
    deleteAjax(fajlnev,id) {
        const termekek = [];
        $.ajax({
            url: fajlnev+"/"+id,
            type:"DELETE",
            success: function(result) {
                result.forEach((element) => {
                    termekek.push(element);
                });
    
                myCallback(termekek);
            },
        });
    }

}
