// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  const driversOver=drivers.filter(function (driver){
    return driver.revenue > revenue
  })
  
  return driversOver.map(function (driver){
    return driver.name
  })
}

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue > revenue
  })
}