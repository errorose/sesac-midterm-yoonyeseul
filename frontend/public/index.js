const resultBox = document.querySelector('#resultBox');

async function getTodos(){
    console.log('btn click');

    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log('response >> ', response);

        const imgUrl = response.data.message; 
        const apiTodo = `<input type="checkbox" value="${data}"/>`
        resultBox.innerHTML = apiTodo;
    }catch(error){
        console.error(error);
        resultBox.textContent = '알 수 없는 오류...'
        resultBox.style.color = 'red'
    }
}

