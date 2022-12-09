// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// const obj = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
//
// class User {
//     constructor(id, name, username, email, address, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }
// }
//
// class Address{
//
//     constructor(street, suite, city, zipcode, geo) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = geo;
//     }
// }
//
// class Geo{
//
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
//
// class Company{
//
//     constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
//
// let user = new User(1,'Leanne Graham','Bret','Sincere@april.biz',
//     new Address('Kulas Light','Apt. 556','Gwenborough','92998-3874',
//         new Geo('-37.3159','81.1496')),'1-770-736-8031 x56442','hildegard.org',
//         new Company('Romaguera-Crona','Multi-layered client-server neural-net',
//             'harness real-time e-markets'));
// console.log(user);

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".

// let div = document.createElement('div');
// div.innerText = 'Hello';
// div.setAttribute('id','text');
//
// let button = document.createElement('button');
// button.innerText = 'Click';
//
// document.body.append(div,button);
//
// button.addEventListener('click',() => {
//     div.style.display = 'none';
// })

// button.onclick = function () {
//     text_id.classList.toggle('text_hidden')
// }

const userCard = (id) => {
    let balance = 100;
    let transactionLimit = 100;
    const historyLog = [];
    const key = id;

    const createMessage = (operationType, credits) => ({operationType, credits, operationTime: new Date()});

    const getCardOptions = () => ({balance, historyLog, transactionLimit, key});

    const putCredits = (money) => {
        balance += money;
        historyLog.push(createMessage('putCredits', money));
    }

    const takeCredits = (money) => {
        if (balance - money >= 0) {
            balance -= money;
            historyLog.push(createMessage('takeCredits', money))
        } else {
            historyLog.push(createMessage('takeCreditsError'));
            console.error('not enough money');
        }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits
    }

}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length === 3) {
            console.error('limit error');
            return;
        }
        this.cards.push(userCard(this.cards.length + 1));
    }

    getCardById(id) {
        const card = this.cards[id - 1];
        if (!card) {
            console.error('not present id');
            return;
        }
        return card;
    }
}

const user = new UserAccount('Vasya');

user.addCard();
user.addCard();
// user.addCard();
// user.addCard();
// user.addCard();

const card1 = user.getCardById(1);
const card2 = user.getCardById(2);

card1.putCredits(200);
console.log(card1.getCardOptions());

console.log('-------------------------------------------------');

// card2.takeCredits(20);
// console.log(card2.getCardOptions());
card2.takeCredits(120);
console.log(card2.getCardOptions());










