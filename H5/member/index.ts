//console.log('Hello member');
//1. 不能动态更新 uuid 
//2.数据不严谨
//3.接口 声明数据类型 MembersEntity
interface MembersEntity {
    id: number;
    name: string;
    avatar: string;

}
const members: MembersEntity[] = [
    {
    id:1214,
    name:"guan",
    avatar:  'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    },
    {
        id:123,
        name: 'qiao',
        avatar: 'https://mirror-gold-cdn.xitu.io/16db0f60f3e7e817d6d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    },
    {
        id:234,
        name: 'xiao',
        avatar: 'https://mirror-gold-cdn.xitu.io/16b730872769bab7fa6?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    }
]

const tbody = document.querySelector('#member tbody');
//tbody.innerHTML = 
//从json 数组变成html数组 
    //console.log(
        tbody.innerHTML = members.map((member) => {
    return `
        <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>
              <img src="${member.avatar}">
            </td>

        </tr>
    `
}).join("")//数组拼接 join
