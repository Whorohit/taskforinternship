const dict = {
    '2020-01-01': 4,
    '2020-01-02': 4,
    '2020-01-03': 6,
    '2020-01-04': 8,
    '2020-01-05': 2,
    '2020-01-06': -6,
    '2020-01-07': 2,
    '2020-01-08': -2

}
const fun = (dict) => {
    const list = ['sun', 'mon', 'tues', 'wed', 'thru', 'fri', 'sat']
    Dict = {}
    for (const key in dict) {
        let date = new Date(key)
        let day = date.getDay()
       if (Dict.hasOwnProperty(list[day])) {
         let k= Dict[list[day]]
        Dict[list[day]] = dict[key] +k
       }
       else{
        Dict[list[day]] = dict[key]
       }
        

    }
console.log(Dict)
}
fun(dict)