function solution(phone_number) {
    let replaceStar = phone_number.substring(0,phone_number.length-4).replace(/[0-9]/g,'*')
    let remain = phone_number.substring(phone_number.length-4,phone_number.length)
    let result = replaceStar+remain
    return result
}