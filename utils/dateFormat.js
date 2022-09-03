const date = new Date();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September']

const year = date.getFullYear()
console.log('year:', year);

let month = date.getMonth();
function getMonthName(month) {
    for (let i = 0; i < months.length; i++) {
        if (month == [i]) {
            console.log('matched');
        }
        const newMonth = months[i]
        console.log(newMonth);
    }
}

getMonthName(month);

const day = date.getDate();
console.log('day:', day);

const hour = date.getHours();
console.log('hour:', hour);


const formattedDate = ``;