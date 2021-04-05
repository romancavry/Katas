// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

// Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)





// До разработки систем T9 (предиктивный ввод текста) метод ввода слов назывался «многократное нажатие» и включал многократное нажатие кнопки для циклического перебора возможных значений.

// Например, чтобы ввести букву «R», вы должны нажать кнопку 7 три раза (так как отображение на экране текущего символа циклически проходит через P-> Q-> R-> S-> 7). Символ «заблокирован», как только пользователь нажимает другую клавишу или делает паузу на короткий период времени (таким образом, дополнительных нажатий кнопок не требуется, помимо того, что необходимо для каждой буквы индивидуально). Клавиша нуля обрабатывает пробелы: одно нажатие клавиши дает пробел, а два нажатия - ноль.

// Чтобы отправить сообщение «ГДЕ ВЫ ХОТИТЕ 2 ВСТРЕЧИТЬСЯ L8R», подростку нужно будет нажать 47 кнопок. Не зря они сокращены.

// Для этого задания напишите модуль, который может рассчитать количество нажатий кнопок, необходимых для любой фразы. В этом упражнении знаки препинания можно игнорировать. Точно так же вы можете предположить, что телефон не различает символы верхнего и нижнего регистра (но вы должны разрешить вашему модулю принимать ввод в любом из них для удобства).

// Подсказка: хотя на жесткое кодирование количества нажатий клавиш для всех 26 букв вручную не потребуется слишком много времени, старайтесь этого не делать! (Представьте, что вы работаете у производителя телефонов, который может тестировать разные раскладки клавиатуры, и вы хотите быстро протестировать новые.)

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------

function presses(phrase) {
    let result = 0;
    phrase = phrase.toUpperCase();

    let letters = {'A': 1, 'B': 2, 'C': 3, 'D': 1, 'E': 2, 'F': 3, 'G': 1, 'H': 2, 'I': 3, 'J': 1, 'K': 2, 'L': 3, 'M': 1, 'N': 2, 'O': 3, 'P': 1, 'Q': 2, 'R': 3, 'S': 4, 'T': 1, 'U': 2, 'V': 3, 'W': 1, 'X': 2, 'Y': 3, 'Z': 4, ' ': 1, '0': 2, '1': 1, '2': 4, '3': 4, '4': 4, '5': 4, '6': 4, '7': 5, '8': 4, '9': 5}

    for (let i = 0; i < phrase.length; i++) {
        result += letters[phrase[i]];
    }

    return result;
}

console.log(presses("LOL")) // 9
console.log(presses("HOW R U")) // 13