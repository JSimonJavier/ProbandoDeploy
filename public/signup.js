// registro 
const objectToSend = { name: "", lastName: "", email:"", password: ""}
 function validateInputs(){
    let validated = true
    const inputs = document.querySelectorAll('input')
    for(let i=0 ; i< inputs.length ; i++){
        if(inputs[i].value.length === 0) {
            swal("Failed", "Fill out all fields","error") 
            validated = false
        }
        if(inputs[i].value.length > 0 && inputs[i].value.length <4){
            inputs[i].classList.add('border-2')
            inputs[i].classList.add('border-rose-600')
            const p = inputs[i].parentElement.children[2]
            p.textContent='Your answer is too short'
            p.classList.add('text-center')
            p.classList.add('text-rose-600')
            validated = false
        }
    }
    return validated
    }
    

 
function getInputValues(){
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input)=> objectToSend[input.id]=input.value)
}

const register = async (e)=> {
    e.preventDefault()
    getInputValues()
    const validated = validateInputs()
    if(validated){
        try{
            console.log('Sending request:', objectToSend);
           await axios.post('/user',objectToSend)
           swal({
            title: 'Success!',
            text: "Register was successfull",
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          window.location.href = './login.html'
        }
        catch(error){
            console.error("Registration Error:", error); // Log the error to the console
            swal({
                title: 'Error!',
                text: `${error.response.data.error}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })

        }
    }

}

const button = document.getElementsByClassName('mb-12 w-80 h-10  mr-12 ml-12  px-20 py-2 mt-10 text-sm font-bold text-white bg-indigo-500 rounded-md hover:bg-opacity-90')[0]
button.addEventListener('click', (e) => register(e))