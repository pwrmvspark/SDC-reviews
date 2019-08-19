const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'ec2-54-234-19-208.compute-1.amazonaws.com',
  database: 'reviews',
  password: 'docker',
  port: 5432,
  max: 40 // this might need to change for server efficiencyq
})

//ec2-52-90-105-154.compute-1.amazonaws.com
//use this for 'host' field above

const getReviewsById = (request, response) => {
  const id = parseInt(request.params.id)
  // console.log(request.params.id)
  pool.query('SELECT * FROM reviewsgiven WHERE listing_id = $1', [id], (error, results) => {
    // console.log('WAT', error, result);
    
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