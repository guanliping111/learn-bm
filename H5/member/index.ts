//console.log('Hello member');
//1. 不能动态更新 uuid 
//2.数据不严谨
//3.接口 声明数据类型 MembersEntity
interface MembersEntity {
    id: number;
    name: string;
    avatar: string;
    tell: number;
    address: string;

}
const members: MembersEntity[] = [
    {
    avatar:  'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
    id:1214,
    name:"guan",
    tell:13094826678,
    address:"江西赣州"

},
    {      
    avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
    id:123,
    name: 'qiao',
    tell:15083765283,
    address:"江西南昌",
    },
    {  
    avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
    id:234,
    name: 'xiao',
    tell:17976433865,
    address:"湖北武汉"
    },
    {  
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        id:346,
        name: 'peng',
        tell:17976433865,
        address:"广东深圳"
        }
]

const form = document.forms.myform;
// console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const id = form.idInput.value;
    const name =form.nameInput.value;
    const avatar =form.avatarInput.value;
    const tellInput =parseInt(form.tellInput.value);
    const addressInput =form.addressInput.value;
    if (id.trim().length === 0) {
        alert('id 不能为空');
        return;
    }
    if (name.trim().length === 0) {
        alert('name 不能为空');
        return;
    }
    const ids = parseInt(id);
    members.push({
        id: ids,
        name: name,
        avatar: avatar,
        tell: tellInput,
        address: addressInput
    });
    console.log(members);
    render();
})


const tbody = document.querySelector('#member tbody');
//tbody.innerHTML = 
//从json 数组变成html数组 
    //console.log(
        tbody.innerHTML = members.map((member) => {
    return `
        <tr> <td>
              <img src="${member.avatar}">
            </td>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.tell}</td>
            <td>${member.address}</td>

        </tr>
    `
}).join("")//数组拼接 join
