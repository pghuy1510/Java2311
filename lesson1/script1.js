// console.log(document.getElementsByClassName('paragha'))
// // console.log(document.getElementsByTagName('p'))

// console.log(document.querySelectorAll('#heading.paragha'));

// document.getElementById('title').innerText = '<h1 style ="font-size: 80px">New text</h1>';

// let $subTitle = document.createElement('h2');
// // $subTitle.setAttribute('id', 'h2');
// // $subTitle.innerHTML = 'xin chao';
// // document.body.appendChild($sub
// const listTag = document.getElementsByClassName('favorite-list-item');
// for(let tag of listTag){
//     tag.innerHTML = 'I love this thing';
//     tag.style.color = 'red';
// }

// let text = prompt('nhap doan text');
// let $subTitle = document.createElement('li');
// $subTitle.innerText = text;
// document.getElementById('favorite-list').appendChild($subTitle);
// $subTitle.setAttribute('favorite-list', 'gia tri thuoc tinh');
// function sayHello(){
//     alert('hello');
// }
// document.getElementById

document.getElementById('url').onchange = function () {
    const url = document.getElementById('url').value;

    document.getElementById('image').setAttribute('src', url);
}

document.getElementById('width').onchange = function(){
    const width = document.getElementById('width').value;
    document.getElementById('image').setAttribute('width', width);
}
document.getElementById('height').onchange = function () {
    const height = document.getElementById('height').value;

    document.getElementById('image').setAttribute('height', height);
};
document.getElementById('radius').onchange = function(){
    const radius = document.getElementById('radius').value;
    document.getElementById('image').setAttribute('radius', radius);
    document.getElementById('image').style.borderRadius = radius + 'px';
}