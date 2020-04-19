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

const submit = document.querySelector('.submit'); 
submit.addEventListener('submit', function (event) { 

//function addItem(event) {
    event.preventDefault();
    //const input = document.querySelector('[type="text" ]').Value;
    const avatar = (document.getElementById('avatarInput') as HTMLInputElement).value;
    const id = (document.getElementById('idInput') as HTMLInputElement).value;
    const name= (document.getElementById('nameInput') as HTMLInputElement).value;
    const tell = (document.getElementById('tellInput') as HTMLInputElement).value;
    const address = (document.getElementById('addressInput') as HTMLInputElement).value;
    if (id.trim().length === 0) {
        alert('id 不能为空');
        return;
        }
        if (name.trim().length === 0) {
            alert('name 不能为空');
            return;
    }
    const ids = parseInt(id);
    const tells =parseInt(tell)
    members.push({
        avatar: avatar,
        id: ids,
        name: name,
        tell: tells,
        address: address
     });
        console.log(members);
    })

    const tbody = document.querySelector('#member tbody');
     //tbody.innerHTML = 
     //从json 数组变成html数组
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
//submit.addEventListener('submit',addItem);
  