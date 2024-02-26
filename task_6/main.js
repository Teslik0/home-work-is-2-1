// Вариант 14

 let IsPalindrome = num => {
    let strNum = num.toString();
    let len = strNum.length;
    
    for (let i = 0; i < len / 2; i++) {
        if (strNum[i] !== strNum[len - 1 - i]) {
            return false;
        }
    }
    
    return true;
};

// Пример использования
console.log(IsPalindrome(12321)); // Выведет true
console.log(IsPalindrome(12348)); // Выведет false

