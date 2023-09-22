


let Work31 = () => {

//   Первое задание
  const positive = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555]

  let arr = positive.filter(item => {
    if(item > 0) {return (item) }
  })
  
  let arr1 = arr.map(item => {
    return (
     <p>{item}</p> 
    )
  })

  return (
    <div>
      {arr1}
    </div>
  )





//   Второе задание
  const messages = [
    {message: 'hello', error: true},  
    {message: 'javascript', error: false},  
    {message: 'expovisiov', error: true},  
    {message: 'react', error: true},  
    {message: 'angular', error: false}, 
    {message: 'es6', error: false}, 
  ];

  let arr = messages.filter(item => {
    if(item.error === false) {return item}
  })

  console.log(arr);





    // Третье Задание
    // Есть следующий массив:

    const words= ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];
    // Используя метод .map создай новый массив, где слова короче пяти символов заменены на звездочку.

    let arr = words.map(item =>{
      if(item.length < 5) { return item = '*'}
    })

    console.log(arr);





    //Четвертое Задание
    //  Измени следующие функцию на стрелочные

    let half = (number => {
      return number / 2
    })

    let sendMessage = (message => {
      return message = 'Hello'
    })

    let concatWords = (first, second) => {
      return first + second
    }

    let showConsole = () => {
      console.log('Экспо');
    }

    console.log(concatWords);
    console.log(showConsole);
    console.log(half);
    console.log(sendMessage);





    // Пятое задание
  // Измени следующие функции из стрелочных в обычные

     function justText() {
      'Expo'
     };

     function logging(text) {
      console.log(text);
    } 

     function add(x,y)  {
      const z = 3;
      return z * x * y;
    }
    
    function onlyPositive(number){
      if(number < 0) {
        return false;
      }
    
      return true;
    }


return (

)





}