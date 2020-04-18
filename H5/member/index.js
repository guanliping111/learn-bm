var members = [
    {
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        id: 1214,
        name: "guan",
        tell: 13094826678,
        address: "江西赣州"
    },
    {
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        id: 123,
        name: 'qiao',
        tell: 15083765283,
        address: "江西南昌"
    },
    {
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        id: 234,
        name: 'xiao',
        tell: 17976433865,
        address: "湖北武汉"
    },
    {
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        id: 346,
        name: 'peng',
        tell: 17976433865,
        address: "广东深圳"
    }
];
var form = document.forms.myform;
// console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var id = form.idInput.value;
    var name = form.nameInput.value;
    var avatar = form.avatarInput.value;
    var tellInput = parseInt(form.tellInput.value);
    var addressInput = form.addressInput.value;
    if (id.trim().length === 0) {
        alert('id 不能为空');
        return;
    }
    if (name.trim().length === 0) {
        alert('name 不能为空');
        return;
    }
    var ids = parseInt(id);
    members.push({
        id: ids,
        name: name,
        avatar: avatar,
        tell: tellInput,
        address: addressInput
    });
    console.log(members);
    render();
});
var tbody = document.querySelector('#member tbody');
//tbody.innerHTML = 
//从json 数组变成html数组 
//console.log(
tbody.innerHTML = members.map(function (member) {
    return "\n        <tr> <td>\n              <img src=\"" + member.avatar + "\">\n            </td>\n            <td>" + member.id + "</td>\n            <td>" + member.name + "</td>\n            <td>" + member.tell + "</td>\n            <td>" + member.address + "</td>\n\n        </tr>\n    ";
}).join(""); //数组拼接 join
