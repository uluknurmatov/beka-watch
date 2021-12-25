export const JSON_API = " http://localhost:8000/watches";

export function countPrice(array) {
    return array.reduce((sum, elem) => {
        return sum + parseInt(elem.subPrice);
    }, 0);
}
