let pageNumber = document.getElementById('page-number')

function onGetData(data) {
    data.forEach(element => {
        let container = document.createElement('img')
        container.src = element.thumbnail
        document.querySelector('.content').appendChild(container)
    });
}

document.querySelector('.btn-ajax').addEventListener('click', function(){
    getData(pageNumber.value, onGetData)
})




