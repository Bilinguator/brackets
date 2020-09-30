module.exports = function check(str, bracketsConfig) {
    //Создаём строку с набором скобок
    let brackets = '';
    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig[i].length; j++) {
            brackets += bracketsConfig[i][j];
        }
    }
  
    //Создаём пустой стек
    let stack = [];

    //Перебираем всю строку str
    for(let i; i < str.length; i++) {

        //Берём символ
        let ch = str[i];

        //Берём индекс символа
        let index = brackets.indexOf(ch);

        //Если закрывающая скобка и стек пуст
        if (index % 2 !== 0 && stack.length === 0) {
            return false;
        }
        
        //Если закрывающая скобка и стек не пуст
        else if (index % 2 !== 0 && stack.length !== 0) {

            //Если последний символ в стеке равен открывающей скобке — удалить последний элемент стека
            if (stack[stack.length - 1] === brackets[index - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }

        //Если открывающая скобка
        else if (index % 2 === 0) {

            //Проверить одинаковые ли скобки
            if (ch === brackets[index + 1]) {

                //Если в стеке есть такая скобка
                if (stack[stack.length - 1] === ch) {
                    //то удалить из стека
                    stack.pop();
                } else {
                    //иначе прибавить к стеку
                    stack.push(ch);
                }
            }

            //Если скобка открывающаяся и скобки не одинаковые
            else {
                stack.push(ch);
            }
        }
    }

    //Проверяем, пуст ли стек
    if (stack.length !== 0)
        return false;
    else
        return true;

}
