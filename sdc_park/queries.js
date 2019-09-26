const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'ec2-54-234-19-208.compute-1.amazonaws.com',
  database: 'reviews',
  password: 'docker',
  port: 5432,
  max: 200
})

const getReviewsById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM reviewsgiven WHERE listing_id = $1', [id], (error, results) => {
    if (error) {
      console.log(error + ' please review this error')
      return response.send(500)
    }
    response.status(200).json(results)
  })
}

module.exports = {
  getReviewsById
}