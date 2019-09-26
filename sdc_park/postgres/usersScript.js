//postgres pwrmvs$ psql -h ec2-52-90-105-154.compute-1.amazonaws.com -p 5432 -U postgres -W docker -d reviews -c "\copy users FROM /Users/pwrmvs/SDC-reviews/sdc_park/postgres/users2.csv CSV HEADER;"
const faker = require('faker')
const { appendFileSync } = require('fs')

const inputRow = (start, end) => {
  let csvStr = ''
  for (let i = start; i < end; i++) {
    csvStr += `\n${i},${faker.name.findName()},${'https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg'}`
  }
  return csvStr
}

const appendCSV = (m) => {
  for (let i = 0; i < m; i++) {
    users = inputRow(i * 1000, i * 1000 + 1000)
    appendFileSync(__dirname + '/users.csv', users)
  }
}

appendCSV(1)
