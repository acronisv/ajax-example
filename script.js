function getData(pageNumber, callback){
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`, {
        success: callback
    })
}