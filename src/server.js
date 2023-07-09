
const app=require('./app');
const {sereverPort} =require('./secret');




app.listen(sereverPort, () => {
  console.log(`server is running at http://localhost:${sereverPort}`);
});
