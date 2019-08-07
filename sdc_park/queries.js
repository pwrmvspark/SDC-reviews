const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'ec2-52-90-105-154.compute-1.amazonaws.com',
  database: 'reviews',
  password: 'docker',
  port: 5432,
  max: 40
})

//ec2-52-90-105-154.compute-1.amazonaws.com
//use this for 'host' field above

const getReviewsById = (request, response) => {
  const id = parseInt(request.params.id)
  // console.log(request.params.id)
  pool.query('SELECT * FROM reviewsgiven WHERE listing_id = $1', [id], (error, results) => {
    if (error) {
      console.log(error + ' this is your error dummy')
      return response.send(500)
    }
    response.status(200).json(results)
  })
}

module.exports = {
  getReviewsById
}